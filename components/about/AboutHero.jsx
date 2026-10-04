"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FACES = [
  {
    id: 0,
    tag: "PRINCIPAL PROFILE",
    title: "Kashif Insari (MAAT)",
    subtitle: "Member of Association of Accounting Technicians",
    badge: "MAAT Qualified",
    badgeColor: "bg-[#DC2E3F]/20 text-[#DC2E3F] border-[#DC2E3F]/30",
    description:
      "Direct chartered oversight on every client account. Kashif personally ensures 100% tax accuracy, max deduction optimization, and zero HMRC late penalties.",
    stat: "100%",
    statLabel: "Personal Oversight",
    icon: (
      <svg className="w-8 h-8 text-[#DC2E3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 1,
    tag: "PRACTICE LOCATION",
    title: "Pendle Enterprise Haven",
    subtitle: "138 Every Street, Nelson, Lancashire, BB9 7EX",
    badge: "Nelson HQ",
    badgeColor: "bg-[#6B7C96]/20 text-[#6B7C96] border-[#6B7C96]/30",
    description:
      "Modern accounting hub strategically stationed in Nelson, serving Lancashire local businesses, sole traders, and UK-wide corporate accounts.",
    stat: "BB9 7EX",
    statLabel: "Nelson Coordinates",
    icon: (
      <svg className="w-8 h-8 text-[#6B7C96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: "CLIENT GUARANTEE",
    title: "Zero HMRC Late Fees",
    subtitle: "Full Financial Accuracy Liability",
    badge: "100% Shielded",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description:
      "We take full responsibility for on-time filings. With our automated audit checks and MAAT verification, you never pay a single HMRC penalty.",
    stat: "£0 Fines",
    statLabel: "HMRC Penalty Record",
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: "DIRECT TELEMETRY",
    title: "Instant Partner Lines",
    subtitle: "Mob: 07757 510944 • Tel: 01282 611503",
    badge: "Direct Contact",
    badgeColor: "bg-white/20 text-white border-white/30",
    description:
      "No automated call queues or junior rep delay. Reach Kashif Insari directly via mobile, landline, or email for immediate advisory feedback.",
    stat: "< 24h",
    statLabel: "Guaranteed Turnaround",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function AboutHero() {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto rotate the 3D Prism every 3.8 seconds
  useEffect(() => {
    if (!isAutoRotating) return;
    const timer = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % FACES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isAutoRotating]);

  return (
    <section className="relative min-h-[95vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0F121A] text-white overflow-hidden flex items-center justify-center">
      {/* Ambient Moving Glows */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.25, 0.12],
          x: [-30, 30, -30],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#DC2E3F]/20 via-[#1A1D29] to-[#6B7C96]/20 rounded-full blur-[180px] pointer-events-none"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-mono text-[#6B7C96] mb-10"
        >
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2E3F]" />
            Home
          </Link>
          <span>/</span>
          <span className="text-white font-semibold">About Our Practice</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A1D29] border border-white/10 shadow-2xl backdrop-blur-md"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2E3F] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DC2E3F]" />
              </span>
              <span className="text-xs font-mono font-bold text-[#DC2E3F] tracking-widest uppercase">
                MAAT Certified Leadership • Nelson, BB9 7EX
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Precision Accounting. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#DC2E3F]">
                  Accelerated Growth.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#6B7C96]">
                Adamson Accountants & Tax Consultants
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Operating from <strong className="text-white">Pendle Enterprise Haven in Nelson</strong>, practice principal <strong className="text-white">Kashif Insari (MAAT)</strong> provides hands-on chartered management across self assessments, corporate tax returns, bookkeeping, and payroll delivering 100% HMRC safety with zero late fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="tel:07757510944"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#DC2E3F] hover:bg-[#c22533] text-white font-bold text-sm shadow-xl shadow-[#DC2E3F]/30 hover:shadow-2xl hover:shadow-[#DC2E3F]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Mob: 07757 510944</span>
              </a>

              <a
                href="tel:01282611503"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[#6B7C96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Tel: 01282 611503</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#6B7C96] font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>MAAT Qualified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DC2E3F]" />
                <span>HMRC Registered Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Pendle Enterprise Haven</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D ROTATING PRECISION STAGE */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md perspective-[1200px] min-h-[380px] flex items-center justify-center">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#1A1D29]/90 border border-white/15 text-[11px] font-mono text-white shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-ping" />
                MAAT Certified
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#1A1D29]/90 border border-white/15 text-[11px] font-mono text-emerald-400 shadow-2xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Zero HMRC Fines
              </motion.div>

              {/* 3D CUBE CONTAINER */}
              <motion.div
                animate={{
                  rotateY: -90 * currentFace,
                }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-[320px] rounded-3xl"
              >
                {/* FACE 0: Front */}
                <div
                  style={{
                    transform: "rotateY(0deg) translateZ(160px)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-3xl bg-[#1A1D29] border border-[#DC2E3F]/40 p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#DC2E3F] bg-[#DC2E3F]/10 border border-[#DC2E3F]/20 px-2.5 py-1 rounded-md">
                      {FACES[0].tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5">{FACES[0].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{FACES[0].title}</h3>
                    <p className="text-xs text-[#6B7C96] font-mono mb-3">{FACES[0].subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{FACES[0].description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-white block">{FACES[0].stat}</span>
                      <span className="text-[10px] text-[#6B7C96] font-mono uppercase">{FACES[0].statLabel}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#DC2E3F]/20 text-[#DC2E3F]">
                      {FACES[0].badge}
                    </span>
                  </div>
                </div>

                {/* FACE 1: Right */}
                <div
                  style={{
                    transform: "rotateY(90deg) translateZ(160px)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-3xl bg-[#1A1D29] border border-[#6B7C96]/40 p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#6B7C96] bg-[#6B7C96]/10 border border-[#6B7C96]/20 px-2.5 py-1 rounded-md">
                      {FACES[1].tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5">{FACES[1].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{FACES[1].title}</h3>
                    <p className="text-xs text-[#6B7C96] font-mono mb-3">{FACES[1].subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{FACES[1].description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-white block">{FACES[1].stat}</span>
                      <span className="text-[10px] text-[#6B7C96] font-mono uppercase">{FACES[1].statLabel}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#6B7C96]/20 text-[#6B7C96]">
                      {FACES[1].badge}
                    </span>
                  </div>
                </div>

                {/* FACE 2: Back */}
                <div
                  style={{
                    transform: "rotateY(180deg) translateZ(160px)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-3xl bg-[#1A1D29] border border-emerald-500/40 p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                      {FACES[2].tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5">{FACES[2].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{FACES[2].title}</h3>
                    <p className="text-xs text-[#6B7C96] font-mono mb-3">{FACES[2].subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{FACES[2].description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-white block">{FACES[2].stat}</span>
                      <span className="text-[10px] text-[#6B7C96] font-mono uppercase">{FACES[2].statLabel}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400">
                      {FACES[2].badge}
                    </span>
                  </div>
                </div>

                {/* FACE 3: Left */}
                <div
                  style={{
                    transform: "rotateY(-90deg) translateZ(160px)",
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-3xl bg-[#1A1D29] border border-white/40 p-7 shadow-2xl flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-md">
                      {FACES[3].tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5">{FACES[3].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{FACES[3].title}</h3>
                    <p className="text-xs text-[#6B7C96] font-mono mb-3">{FACES[3].subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{FACES[3].description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black text-white block">{FACES[3].stat}</span>
                      <span className="text-[10px] text-[#6B7C96] font-mono uppercase">{FACES[3].statLabel}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/20 text-white">
                      {FACES[3].badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-2 mt-8">
              {FACES.map((face, index) => (
                <button
                  key={face.id}
                  onClick={() => {
                    setIsAutoRotating(false);
                    setCurrentFace(index);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    currentFace === index
                      ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30"
                      : "bg-[#1A1D29] text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  0{index + 1}
                </button>
              ))}
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className="ml-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                {isAutoRotating ? "Pause 3D" : "Auto 3D"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}