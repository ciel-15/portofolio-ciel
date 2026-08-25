"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import SideNav from "@/components/SideNav";
import NameTag from "@/components/NameTag";
import Reveal from "@/components/Reveal";

const About = dynamic(() => import("@/components/Sections").then((m) => m.About));
const Journey = dynamic(() => import("@/components/Sections").then((m) => m.Journey));
const Experience = dynamic(() => import("@/components/Sections").then((m) => m.Experience));
const Hobbies = dynamic(() => import("@/components/Sections").then((m) => m.Hobbies));
const Projects = dynamic(() => import("@/components/Sections").then((m) => m.Projects));
const Contact = dynamic(() => import("@/components/Sections").then((m) => m.Contact));

const MARQUEE_WORDS = [
  "CREATIVE DEVELOPER",
  "UI / UX ENTHUSIAST",
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "NODE.JS",
  "FIGMA",
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <SideNav />

      <main className={loaded ? "" : "h-screen overflow-hidden"}>
        {/* ============ HOME / HERO ============ */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden grid-bg"
        >
          <div className="glow-orb w-[28rem] h-[28rem] bg-white/[0.07] -top-32 -right-32" />
          <div className="glow-orb w-96 h-96 bg-white/5 bottom-0 -left-24" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Left: intro text */}
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.5em] text-white/40 mb-5">
                  ⚡ Portfolio — 2026
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="neon-text neon-flicker">Norma</span>.
                  <br />
                  <span className="text-white/50">I build</span>{" "}
                  <span className="inline-block border-b-2 border-white neon-text">
                    digital
                  </span>{" "}
                  <br />
                  experiences.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md text-white/60 leading-relaxed">
                  Creative Developer talent for both PC and mobile platforms.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-full border border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 transition-all duration-300"
                  >
                    Lihat Karya
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white hover:neon-text transition-all duration-300"
                  >
                    Hubungi Saya →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: draggable name tag */}
            <Reveal delay={250}>
              <NameTag />
            </Reveal>
          </div>

          {/* scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
              Scroll
            </span>
            <span className="block w-px h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
          </div>
        </section>

        {/* ============ MARQUEE ============ */}
        <div className="relative border-y border-white/10 py-5 overflow-hidden bg-neutral-950">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
                {MARQUEE_WORDS.map((w, i) => (
                  <span
                    key={`${group}-${i}`}
                    className="flex items-center whitespace-nowrap font-mono text-sm sm:text-base uppercase tracking-[0.3em] text-white/40"
                  >
                    <span className="px-6">{w}</span>
                    <span className="neon-text">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ============ SECTIONS ============ */}
        <About />
        <Journey />
        <Experience />
        <Hobbies />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

