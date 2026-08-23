"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "hobbies", label: "Hobbies" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop / tablet: fixed right side nav */}
      <nav
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5"
        aria-label="Navigasi section"
      >
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="group flex items-center gap-3 flex-row-reverse">
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? "w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.5)]"
                  : "w-2 h-2 bg-white/30 group-hover:bg-white/70 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              }`}
            />
            <span
              className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
                active === id
                  ? "neon-text opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2 group-hover:opacity-80 group-hover:translate-x-0 text-white"
              }`}
            >
              {label}
            </span>
          </a>
        ))}
        <div className="mt-2 w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </nav>

      {/* Mobile: bottom pill nav */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 neon-border rounded-full bg-black/80 backdrop-blur-md px-4 py-2 flex items-center gap-4"
        aria-label="Navigasi section"
      >
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-label={label} className="p-1">
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? "w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                  : "w-1.5 h-1.5 bg-white/35"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
