"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal, { SectionHeading } from "./Reveal";

const JOURNEY = [
  {
    year: "2013 — 2019",
    title: "SD Negeri 1 Ciel",
    desc: "Memulai perjalanan belajar. Mulai tertarik dengan komputer dan teknologi.",
  },
  {
    year: "2019 — 2022",
    title: "SMP Negeri 3 Ciel",
    desc: "Mulai belajar dasar pemrograman dan desain. Aktif di klub robotika sekolah.",
  },
  {
    year: "2022 — 2025",
    title: "SMA Negeri 5 Ciel",
    desc: "Jurusan IPA. Fokus mengasah skill web development, membuat project pertama.",
  },
  {
    year: "2025 — Sekarang",
    title: "Universitas Teknologi Ciel",
    desc: "S1 Informatika. Mendalami software engineering dan pengembangan web modern.",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    place: "PT Neon Digital",
    period: "2025",
    desc: "Membangun komponen UI reusable dan mengoptimalkan performa website company profile.",
  },
  {
    role: "Freelance Web Developer",
    place: "Self-employed",
    period: "2024 — Sekarang",
    desc: "Mengerjakan 10+ project landing page & portfolio untuk klien UMKM dan personal branding.",
  },
  {
    role: "Hackerathon Finalis",
    place: "Neon Hackfest 2024",
    period: "2024",
    desc: "Meraih juara 2 dengan aplikasi edukasi berbasis Next.js dan AI.",
  },
];

const HOBBIES = [
  { icon: "🎮", label: "Gaming" },
  { icon: "📷", label: "Fotografi" },
  { icon: "🎧", label: "Musik" },
  { icon: "📚", label: "Membaca" },
  { icon: "🏸", label: "Badminton" },
  { icon: "✏️", label: "Desain" },
];

const PROJECTS = [
  {
    title: "Neon Commerce",
    tags: ["Next.js", "Tailwind", "Stripe"],
    desc: "E-commerce modern dengan checkout real-time dan dashboard admin.",
  },
  {
    title: "Pulse Chat",
    tags: ["React", "Socket.io"],
    desc: "Aplikasi chat realtime dengan dark mode dan enkripsi end-to-end.",
  },
  {
    title: "Orbit Tasks",
    tags: ["TypeScript", "PWA"],
    desc: "Task manager PWA offline-first dengan drag-and-drop kanban board.",
  },
  {
    title: "Glow Blog",
    tags: ["Next.js", "MDX"],
    desc: "Blog developer dengan syntax highlighting, SEO, dan animasi halus.",
  },
  {
    title: "Echo Weather",
    tags: ["React", "API"],
    desc: "Cuaca interaktif dengan visual neon dan data open-meteo realtime.",
  },
  {
    title: "Void UI",
    tags: ["Library", "CSS"],
    desc: "Kumpulan komponen bertema monokrom-neon siap pakai untuk proyek apapun.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="glow-orb w-64 h-64 bg-white/5 -top-10 -left-20" />
      <SectionHeading kicker="01 — Tentang Saya" title="About" />
      <div className="mt-10 grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <Reveal delay={100}>
          <div className="neon-border rounded-2xl bg-neutral-950 p-4 aspect-square flex flex-col justify-between relative overflow-hidden">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/Ciel.jpg"
                alt="Foto Ciel"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>
            <span className="absolute bottom-6 left-6 neon-text text-xs font-mono uppercase tracking-[0.3em] bg-black/60 px-3 py-1 rounded-full">
              Ciel — Creative Developer
            </span>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-white/70 leading-relaxed">
            Halo! Saya <span className="neon-text font-semibold">Ciel</span>, seorang
            creative developer yang menyukai perpaduan antara desain dan teknologi.
            Spesialisasi saya adalah membangun pengalaman web yang interaktif,
            responsif, dan memorable.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Saya percaya website bukan hanya informasi — melainkan pengalaman. Karena
            itu setiap project saya dibuat dengan detail animasi, micro-interaction,
            dan performa terbaik.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["15+", "Project"],
              ["2+", "Tahun Ngoding"],
              ["∞", "Kopi ☕"],
            ].map(([num, label]) => (
              <div key={label} className="neon-border rounded-xl p-4 text-center bg-neutral-950/60">
                <p className="neon-text text-2xl font-bold">{num}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <SectionHeading kicker="02 — Jenjang Sekolah" title="Journey" />
      <div className="mt-12 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        {JOURNEY.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <div
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0
                  ? "md:pr-14 md:text-right"
                  : "md:ml-auto md:pl-14"
              }`}
            >
              <span
                className={`absolute top-1 left-4 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                } -translate-x-1/2 md:translate-x-0 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]`}
              />
              <div className="neon-border rounded-xl bg-neutral-950/70 backdrop-blur-sm p-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                <p className="font-mono text-xs tracking-[0.25em] text-white/40">
                  {item.year}
                </p>
                <h3 className="neon-text mt-2 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="glow-orb w-72 h-72 bg-white/5 top-20 right-0" />
      <SectionHeading kicker="03 — Pengalaman" title="Experience" />
      <div className="mt-12 space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.role} delay={i * 100}>
            <div className="group neon-border rounded-xl bg-neutral-950/70 p-6 sm:p-8 hover:bg-neutral-900/70 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold group-hover:neon-text transition-all">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs tracking-[0.25em] text-white/40">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-mono uppercase tracking-widest text-white/50">
                {exp.place}
              </p>
              <p className="mt-3 text-white/60 leading-relaxed">{exp.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <SectionHeading kicker="04 — Hobi" title="Hobbies" />
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
        {HOBBIES.map((h, i) => (
          <Reveal key={h.label} delay={i * 70}>
            <div className="group neon-border rounded-xl bg-neutral-950/70 p-6 sm:p-8 flex flex-col items-center gap-3 cursor-default hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl sm:text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {h.icon}
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60 group-hover:text-white group-hover:neon-text transition-all">
                {h.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="glow-orb w-72 h-72 bg-white/5 bottom-0 left-0" />
      <SectionHeading kicker="05 — Karya" title="Projects" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90}>
            <article className="group relative neon-border rounded-2xl bg-neutral-950/70 p-7 h-full flex flex-col overflow-hidden hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 transition-all duration-300">
              <span className="absolute top-5 right-6 font-mono text-xs text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold group-hover:neon-text transition-all">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70">
                View Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto pb-36 md:pb-32">
      <SectionHeading kicker="06 — Hubungi" title="Contact" />
      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <Reveal delay={100}>
          <p className="text-white/70 leading-relaxed">
            Punya ide project, kolaborasi, atau sekadar menyapa? Kirim pesan dan mari
            berkarya bersama.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ["Email", "Ciel@example.com"],
              ["Instagram", "@Ciel.dev"],
              ["GitHub", "github.com/Ciel"],
              ["LinkedIn", "linkedin.com/in/Ciel"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-4">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
                  {k}
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <a
                  href="#"
                  className="text-sm text-white/75 hover:neon-text transition-all"
                >
                  {v}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <form
            className="neon-border rounded-2xl bg-neutral-950/70 p-6 sm:p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
          >
            <input
              required
              type="text"
              placeholder="Nama"
              className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] placeholder:text-white/30 transition-all"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] placeholder:text-white/30 transition-all"
            />
            <textarea
              required
              rows={4}
              placeholder="Pesan..."
              className="w-full resize-none rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] placeholder:text-white/30 transition-all"
            />
            <button
              type="submit"
              className="w-full rounded-lg border border-white/60 py-3 text-sm font-semibold uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-[0.98] transition-all duration-300"
            >
              {sent ? "Terkirim ✓" : "Kirim Pesan"}
            </button>
          </form>
        </Reveal>
      </div>
      <footer className="mt-24 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30 font-mono">
        <span>© 2026 Ciel — All rights reserved</span>
        <span>Designed with ⚡ in black & white</span>
      </footer>
    </section>
  );
}

