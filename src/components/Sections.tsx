"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal, { SectionHeading } from "./Reveal";

const JOURNEY = [
  {
    year: "2015 — 2021",
    title: "SD Negeri 031 Tenggarong",
    desc: "started learning digital art and became interested in drawing and coloring",
  },
  {
    year: "2021 — 2024",
    title: "SMP Negeri 1 Tenggarong",
    desc: "I started to develop an interest in computers. The TIK subject sparked my interest and made me want to deepen my knowledge of them.",
  },
  {
    year: "2024 — Now",
    title: "SMK Negeri 1 Tenggarong",
    desc: "Majoring in Computer and Network Engineering. Deepening various networking skills.",
  },
  {
    year: "2027",
    title: "Telkom University",
    desc: "Coming Soon.",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    place: "Diskominfo Kukarkab",
    period: "June 2026 - November 2026",
    desc: "Building project reusable UI components and optimizing the performance of the company profile website.",
  },
  {
    role: "Participating in a Karate Competition",
    place: "East Kutai",
    period: "2022",
    desc: "Won third place at the festival",
  },
  {
    role: "Sports",
    place: "TK Al-Munawarah",
    period: "2014",
    desc: "Won first place in the speed competition",
  },
];

const HOBBIES = [
  { id: "gaming", icon: "🎮", label: "Gaming" },
  { id: "music", icon: "🎧", label: "Music" },
  { id: "design", icon: "✏️", label: "Design" },
  { id: "photography", icon: "📷", label: "Photography" },
] as const;

type HobbyId = (typeof HOBBIES)[number]["id"];

const GAMES = [
  {
    name: "Mobile Legends",
    img: "/ml.jpg",
    desc: "MOBA 5v5 favorit untuk main bareng teman. Main di lane mid dan jungle, gemar push rank sampai Mythic.",
  },
  {
    name: "Call of Duty Mobile",
    img: "/codm.jpeg",
    desc: "FPS mobile andalan. Paling suka mode multiplayer dan battle royale dengan loadout senjata custom.",
  },
  {
    name: "Ensemble Stars",
    img: "/enstar.jpg",
    desc: "Rhythm game sekaligus idol game dari Jepang. Koleksi kartu idola favorit dan rutin ikut event.",
  },
  {
    name: "Genshin Impact",
    img: "/gi.jpg",
    desc: "Open-world action RPG. Menjelajah Teyvat, menyelesaikan quest story, dan gacha karakter favorit.",
  },
];

const MUSIC = [
  {
    title: "Penyangkalan",
    genre: "Indonesian",
    url: "https://open.spotify.com/track/3GdN5n6p34yFMd12WKq8jL?si=vY46HL_VSyCJCfvLxdB_YQ&utm_source=copy-link",
  },
  {
    title: "Fatal Trouble",
    genre: "Korean",
    url: "https://open.spotify.com/track/6i1PYoUEMHqxAsAUKHkqpe?si=_DXrBChtTzq7XWlEONDpDg&utm_source=copy-link",
  },
  {
    title: "Castle of my heart",
    genre: "Japan",
    url: "https://open.spotify.com/track/0tbA5BGVuYyuACqf5T1vRY?si=1fWnFf-DRxWv13PCP8PeqQ&utm_source=copy-link",
  },
  {
    title: "Multo",
    genre: "Philippines",
    url: "https://open.spotify.com/track/4cBm8rv2B5BJWU2pDaHVbF?si=nS9ig522TCmVJOqrzsmrVg&utm_source=copy-link",
  },
  {
    title: "в её глазах",
    genre: "Russian",
    url: "https://open.spotify.com/track/5wo1RzyajH9dA4L7fagxHO?si=gvwIWQn-QfONs6-mlYB_vw&utm_source=copy-link",
  },
  {
    title: "Church",
    genre: "English",
    url: "https://open.spotify.com/track/7bbYT48HWWIbL3YKmtMNzn?si=jXiXdYJKS2mU0LRvWkTk2g&utm_source=copy-link",
  },
  {
    title: "Zaalima",
    genre: "Indian",
    url: "https://open.spotify.com/track/4MU4Kfkd9EnkArK2ocQyqK?si=kw3jg2riTXa6PAjfUGLh_w&utm_source=copy-link",
  },
  {
    title: "Fuera del planeta",
    genre: "Puerto Rico",
    url: "https://open.spotify.com/track/3IAmbUs1NB8XwfhNYUXuLA?si=ewkxFXXoSW-zSi0QSwFlxw&utm_source=copy-link",
  },
  {
    title: "Black hole",
    genre: "Indonesian Breakbeat",
    url: "https://open.spotify.com/track/4jd16uYGQPwPRPx9N5sxs0?si=Ko9XrwENT2SvnQwOlwz_7Q&utm_source=copy-link",
  },
];

const DESIGNS = [
  {
    title: "Module Cover",
    img: "/modulcover.png",
    desc: "Module cover design featuring a modern style and clean typography.",
  },
  {
    title: "Logo Commision",
    img: "/logojualan.png",
    desc: "Logo design for open commissions, featuring a simple and easily recognizable identity.",
  },
  {
    title: "Magic Chess: Go Go",
    img: "/mcgg.jpeg",
    desc: "An MCGG competition entry featuring an appealing color composition.",
  },
];

const PHOTOS = [
  {
    title: "Dinas Komunikasi dan Informatika",
    img: "/diskom.jpeg",
    desc: "The atmosphere at Diskom in the morning.",
  },
  {
    title: "Nighttime Atmosphere at Split Mountain",
    img: "/suasanamalam.jpeg",
    desc: "A clear night atmosphere with a touch of moonlight.",
  },
  {
    title: "Conditions in the Alley",
    img: "/gbf.jpeg",
    desc: "The clear sky that appears after the rain",
  },
  {
    title: "Main Road on the Outskirts of Town",
    img: "/jalangb.jpeg",
    desc: "Differences in sunlight at a particular location",
  },
];

const PROJECTS = [
  {
    title: "Modul Debian 13",
    tags: ["Linux", "Documentation"],
    desc: "A complete guide to installing and configuring Debian 13 — covering partitioning, network setup, and deploying basic services such as web servers and SSH.",
  },
  {
    title: "Modul Mikrotik",
    tags: ["Networking", "RouterOS"],
    desc: "A hands-on module for network administration using Mikrotik RouterOS: bandwidth management, firewall, VLAN, hotspot, and inter-network routing configuration.",
  },
  {
    title: "Modul Fiber Optic",
    tags: ["Networking", "FTTH"],
    desc: "A technical guide to fiber optic networks — covering splicing techniques, OTDR measurements, attenuation loss, and FTTH network design and installation.",
  },
  {
    title: "Web App Diskom",
    tags: ["Web App", "Full-stack"],
    desc: "A web application for the Department of Communication and Informatics that supports internal service digitalization: data management, information publishing, and a monitoring dashboard.",
  },
  {
    title: "Web Portfolio",
    tags: ["Next.js", "Tailwind"],
    desc: "A personal portfolio website with a neon-minimalist style, built with Next.js and Tailwind CSS — fully responsive with smooth animations and interactive elements.",
  },
  {
    title: "Coming Soon",
    tags: ["WIP"],
    desc: "The next project is currently in progress. Stay tuned for updates!",
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
                src="/sayajuga.jpeg"
                alt="Foto Norima"
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
            Hi! I&apos;m <span className="neon-text font-semibold">Eka Dwi Normawati</span>. A
            creative developer that&apos;s likes about design and tecnology.
            My specialty is developing designs or creating UI/UX interfaces.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            I believe a website is not just about information it is an experience. 
            That is why every project I create features detailed animations,
            micro-interactions, and top-notch performance.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["5+", "Project"],
              ["6+", "Months of Coding"],
              ["∞", "Thai Tea"],
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
  const [active, setActive] = useState<HobbyId | null>(null);
  const [activePhoto, setActivePhoto] = useState<(typeof PHOTOS)[number] | null>(null);

  useEffect(() => {
    if (!activePhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePhoto]);

  return (
    <section id="hobbies" className="relative py-24 sm:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <SectionHeading kicker="04 — Hobi" title="Hobbies" />
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
        {HOBBIES.map((h, i) => (
          <Reveal key={h.id} delay={i * 70}>
            <button
              type="button"
              onClick={() => setActive(active === h.id ? null : h.id)}
              aria-expanded={active === h.id}
              className={`w-full neon-border rounded-xl bg-neutral-950/70 p-6 sm:p-8 flex flex-col items-center gap-3 cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:-translate-y-1 transition-all duration-300 ${
                active === h.id ? "shadow-[0_0_35px_rgba(255,255,255,0.25)] -translate-y-1" : ""
              }`}
            >
              <span className={`text-3xl sm:text-4xl grayscale group-hover:grayscale-0 transition-all duration-300 ${active === h.id ? "" : "grayscale"}`}>
                {h.icon}
              </span>
              <span
                className={`text-sm uppercase tracking-[0.2em] transition-all ${
                  active === h.id ? "text-white neon-text" : "text-white/60"
                }`}
              >
                {h.label}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* ===== Detail panel ===== */}
      {active && (
        <div className="mt-10">
          {active === "gaming" && (
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
                🎮 The game I&apos;m playing — click for details
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {GAMES.map((g) => (
                  <article
                    key={g.name}
                    className="group neon-border rounded-2xl bg-neutral-950/70 overflow-hidden hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={g.img}
                        alt={g.name}
                        fill
                        sizes="(max-width: 768px) 90vw, 480px"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold group-hover:neon-text transition-all">{g.name}</h3>
                      <p className="mt-2 text-sm text-white/55 leading-relaxed">{g.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          )}

          {active === "music" && (
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
                🎧 Favorite playlists across various genres — click to open in Spotify
              </p>
              <div className="max-w-2xl divide-y divide-white/10 neon-border rounded-2xl bg-neutral-950/70 overflow-hidden">
                {MUSIC.map((m) => (
                  <a
                    key={m.url}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-widest rounded-full border border-white/20 px-2 py-1 text-center text-white/50">
                      {m.genre}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block truncate text-sm font-semibold group-hover:neon-text transition-all">
                        {m.title}
                      </span>
                    </span>
                    <span className="shrink-0 text-xs font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-all">
                      Spotify ↗
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          {active === "photography" && (
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
                📷 A shot I took
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {PHOTOS.map((p) => (
                  <figure
                    key={p.title}
                    onClick={() => setActivePhoto(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActivePhoto(p)}
                    className="group cursor-pointer neon-border rounded-2xl bg-neutral-950/70 overflow-hidden hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 480px"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <figcaption className="p-5">
                      <h3 className="text-base font-bold group-hover:neon-text transition-all">{p.title}</h3>
                      <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          )}

          {active === "design" && (
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
                ✏️ Design projects I have worked on
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DESIGNS.map((d) => (
                  <article
                    key={d.title}
                    className="group neon-border rounded-2xl bg-neutral-950/70 overflow-hidden hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={d.img}
                        alt={d.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 360px"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold group-hover:neon-text transition-all">{d.title}</h3>
                      <p className="mt-2 text-sm text-white/55 leading-relaxed">{d.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      )}

      {/* ===== Photo lightbox ===== */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10 cursor-pointer"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            aria-label="Tutup"
            className="absolute top-5 right-6 text-3xl text-white/60 hover:text-white neon-text transition-all cursor-pointer"
          >
            ✕
          </button>
          <figure
            className="max-w-5xl w-full max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.img}
              alt={activePhoto.title}
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 95vw, 1024px"
              className="object-contain max-h-[75vh] w-auto rounded-xl neon-border"
            />
            <figcaption className="text-center">
              <h3 className="text-xl font-bold neon-text">{activePhoto.title}</h3>
              <p className="mt-2 text-sm text-white/60 max-w-xl leading-relaxed">{activePhoto.desc}</p>
            </figcaption>
          </figure>
        </div>
      )}
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
            Have an idea for a project or collaboration,
            or just want to say hello? Send a message and let&apos;s create something together.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ["Email", "ciello036@gmail.com", "mailto:ciello036@gmail.com"],
              ["Instagram", "@noriimayoo", "https://instagram.com/noriimayoo"],
              ["GitHub", "github.com/ciel-15", "https://github.com/ciel-15/"],
            ].map(([k, v, href]) => (
              <div key={k} className="flex items-center gap-4">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
                  {k}
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
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
              placeholder="Name"
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
              placeholder="Message..."
              className="w-full resize-none rounded-lg bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] placeholder:text-white/30 transition-all"
            />
            <button
              type="submit"
              className="w-full rounded-lg border border-white/60 py-3 text-sm font-semibold uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-[0.98] transition-all duration-300"
            >
              {sent ? "Sent ✓" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
      <footer className="mt-24 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30 font-mono">
        <span>© 2026 Ciel — All rights reserved</span>
        <span>Designed by Ciel-15</span>
      </footer>
    </section>
  );
}


