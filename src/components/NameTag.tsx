"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function NameTag() {
  const tagRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const state = useRef({
    x: 0,
    y: -300,
    vx: 0,
    vy: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    rot: 0,
    vr: 0,
  });

  useEffect(() => {
    const tag = tagRef.current;
    const container = containerRef.current;
    if (!tag || !container) return;
    const s = state.current;

    const rect = container.getBoundingClientRect();
    s.x = rect.width / 2;
    s.y = -150;

    let raf = 0;
    let running = true;

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(container);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    const tick = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const tw = tag.offsetWidth;
      const th = tag.offsetHeight;

      if (!s.dragging) {
        s.vy += 0.55;
        s.vx *= 0.995;
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vr;
        s.vr *= 0.95;

        if (s.y + th / 2 > ch) {
          s.y = ch - th / 2;
          s.vy *= -0.45;
          s.vx *= 0.85;
          s.vr = s.vx * 0.6;
          if (Math.abs(s.vy) < 1.2) s.vy = 0;
        }
        if (s.x - tw / 2 < 0) {
          s.x = tw / 2;
          s.vx *= -0.6;
        }
        if (s.x + tw / 2 > cw) {
          s.x = cw - tw / 2;
          s.vx *= -0.6;
        }
        if (s.y + th / 2 < 0 && s.vy < 0) {
          s.vy = Math.abs(s.vy) * 0.3;
        }
        s.rot *= 0.98;
      }

      tag.style.transform = `translate(${s.x - tw / 2}px, ${s.y - th / 2}px) rotate(${s.rot}deg)`;
      if (running) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const getPoint = (e: PointerEvent) => {
      const cr = container.getBoundingClientRect();
      return { x: e.clientX - cr.left, y: e.clientY - cr.top };
    };

    const onDown = (e: PointerEvent) => {
      const p = getPoint(e);
      const dx = p.x - s.x;
      const dy = p.y - s.y;
      if (
        Math.abs(dx) < tag.offsetWidth / 2 + 12 &&
        Math.abs(dy) < tag.offsetHeight / 2 + 12
      ) {
        e.preventDefault();
        s.dragging = true;
        s.lastX = p.x;
        s.lastY = p.y;
        s.vx = 0;
        s.vy = 0;
        s.rot = 0;
        tag.style.cursor = "grabbing";
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!s.dragging) return;
      const p = getPoint(e);
      s.vx = (p.x - s.lastX) * 0.9;
      s.vy = (p.y - s.lastY) * 0.9;
      s.vr = s.vx * 0.8;
      s.x += p.x - s.lastX;
      s.y += p.y - s.lastY;
      s.lastX = p.x;
      s.lastY = p.y;
    };
    const onUp = () => {
      s.dragging = false;
      if (tag) tag.style.cursor = "grab";
    };

    tag.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      tag.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[460px] md:h-full md:min-h-[520px] touch-none select-none overflow-hidden"
      aria-label="Name tag interaktif — geser untuk memainkan"
    >
      <div
        ref={tagRef}
        className="nametag-shadow absolute top-0 left-0 will-change-transform cursor-grab rounded-2xl bg-neutral-950 neon-border px-7 py-6 sm:px-10 sm:py-8"
        style={{ touchAction: "none" }}
      >
        <div className="flex items-center justify-between gap-8 mb-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
            Hello, I&apos;m
          </span>
          <span className="hole" />
        </div>
        {/* Foto */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-xl overflow-hidden neon-border">
          <Image
            src="/sayanih.jpeg"
            alt="Foto Saya"
            fill
            sizes="(max-width: 640px) 160px, 208px"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
            draggable={false}
          />
        </div>
        <h2 className="neon-text mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-none">
          Norma
        </h2>
        <p className="mt-2 font-mono text-xs sm:text-sm text-white/60 tracking-widest">
          CREATIVE DEVELOPER
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="w-8 h-px bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Drag me
          </span>
        </div>
      </div>
    </div>
  );
}
