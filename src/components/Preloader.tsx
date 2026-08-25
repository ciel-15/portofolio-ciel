"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "Welcome",
  "ようこそ",
  "欢迎",
  "Bienvenue",
  "Willkommen",
  "환영합니다",
  "Добро пожаловать",
  "Benvenuto",
  "Bienvenido",
  "أهلا بك",
  "Selamat Datang",
];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [skipped] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("preloaded") === "1"
  );
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(skipped);

  const finish = () => {
    sessionStorage.setItem("preloaded", "1");
    onDone();
  };

  useEffect(() => {
    if (skipped) {
      const r = requestAnimationFrame(() => onDone());
      return () => cancelAnimationFrame(r);
    }
  }, [skipped, onDone]);

  useEffect(() => {
    if (skipped) return;
    if (index >= WORDS.length - 1) {
      const t0 = setTimeout(() => setExiting(true), 900);
      const t1 = setTimeout(finish, 1600);
      const t2 = setTimeout(() => setGone(true), 1700);
      return () => {
        clearTimeout(t0);
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 150);
    return () => clearTimeout(t);
  }, [index, skipped]);

  useEffect(() => {
    if (skipped) return;
    const id = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 6 + 3));
    }, 120);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] ${
        exiting ? "preloader-exit" : ""
      }`}
      aria-hidden={exiting}
    >
      <p className="relative text-xs tracking-[0.5em] uppercase text-white/40 mb-6">
        Loading Portfolio
      </p>
      <div className="relative h-24 sm:h-28 flex items-center justify-center px-6">
        <span
          key={index}
          className={`welcome-word neon-text whitespace-nowrap text-4xl sm:text-6xl font-bold tracking-tight ${
            index === WORDS.length - 1 ? "neon-flicker" : ""
          }`}
        >
          {WORDS[index]}
        </span>
      </div>
      <div className="relative mt-8 w-48 sm:w-64 h-px bg-white/15">
        <div
          className="progress-bar-fill h-full bg-white"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="relative mt-3 font-mono text-xs text-white/40">
        {Math.floor(Math.min(progress, 100))}%
      </p>
    </div>
  );
}
