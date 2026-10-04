"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    value: "2,500+",
    label: "Happy Clients",
    sub: "Businesses served worldwide",
    tone: "navy",
  },
  {
    value: "15+",
    label: "Years Experience",
    sub: "Proven financial expertise",
    tone: "slate",
  },
  {
    value: "$200M+",
    label: "Tax Saved",
    sub: "Optimized for our clients",
    tone: "red",
  },
  {
    value: "99.8%",
    label: "Accuracy Rate",
    sub: "Precision you can trust",
    tone: "metal",
  },
];

const avatarColors = ["#1A1D29", "#6B7C96", "#DC2E3F", "#3A4158"];

const fan = [
  { x: "-42%", y: 28, rot: -16, scale: 0.92, z: 10 },
  { x: "-14%", y: 8, rot: -7, scale: 0.98, z: 20 },
  { x: "14%", y: 8, rot: 7, scale: 0.98, z: 20 },
  { x: "42%", y: 28, rot: 16, scale: 0.92, z: 10 },
];

function toneClasses(tone) {
  switch (tone) {
    case "red":
      return {
        bg: "from-[#DC2E3F] via-[#b82231] to-[#7f1520]",
        glow: "shadow-[0_25px_60px_rgba(220,46,63,0.35)]",
      };
    case "slate":
      return {
        bg: "from-[#8FA0B8] via-[#6B7C96] to-[#4e5d73]",
        glow: "shadow-[0_25px_60px_rgba(107,124,150,0.30)]",
      };
    case "metal":
      return {
        bg: "from-[#d7dbe3] via-[#9aa6b8] to-[#5c677a]",
        glow: "shadow-[0_25px_60px_rgba(0,0,0,0.18)]",
      };
    default:
      return {
        bg: "from-[#2a3144] via-[#1A1D29] to-[#0d1018]",
        glow: "shadow-[0_25px_60px_rgba(26,29,41,0.35)]",
      };
  }
}

function MiniBars() {
  return (
    <div className="flex items-end gap-[3px]">
      <span className="h-2.5 w-1 rounded-sm bg-white/70" />
      <span className="h-3.5 w-1 rounded-sm bg-white/85" />
      <span className="h-4.5 w-1 rounded-sm bg-[#DC2E3F]" />
    </div>
  );
}

export default function StatsCards() {
  return (
    <section className="relative overflow-hidden bg-[#F2F4F8] py-24 sm:py-28">
      
      {/* 1. CONTINUOUSLY MOVING GRID PATTERN */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute -inset-[100%] h-[300%] w-[300%]"
          style={{
            backgroundImage: `radial-gradient(#1A1D29 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
          animate={{
            x: [0, 32, 0],
            y: [0, 32, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* 2. DYNAMIC VIBRANT COLOR GLOW SWEEPS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glowing Red Energy Orb */}
        <motion.div
          className="absolute -right-10 top-1/4 h-[380px] w-[380px] rounded-full bg-[#DC2E3F]/25 blur-[90px]"
          animate={{
            x: [0, -120, 40, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glowing Slate Blue Energy Orb */}
        <motion.div
          className="absolute -left-10 bottom-10 h-[420px] w-[420px] rounded-full bg-[#6B7C96]/30 blur-[100px]"
          animate={{
            x: [0, 140, -50, 0],
            y: [0, -90, 40, 0],
            scale: [0.9, 1.25, 1, 0.9],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 3. FLOATING GEOMETRIC DECORATIONS (Drifting behind cards) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Floating Ring 1 */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full border-2 border-[#DC2E3F]/25"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Ring 2 */}
        <motion.div
          className="absolute right-[12%] bottom-[25%] h-36 w-36 rounded-full border-[3px] border-[#6B7C96]/20"
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.85, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Drifting 3-Bar Brand Marks */}
        <motion.div
          className="absolute left-[8%] bottom-[15%] flex items-end gap-1 opacity-25"
          animate={{
            y: [0, -35, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="h-8 w-2.5 rounded-sm bg-[#1A1D29]" />
          <span className="h-12 w-2.5 rounded-sm bg-[#6B7C96]" />
          <span className="h-16 w-2.5 rounded-sm bg-[#DC2E3F]" />
        </motion.div>

        <motion.div
          className="absolute right-[8%] top-[15%] flex items-end gap-1 opacity-25"
          animate={{
            y: [0, 35, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="h-14 w-2.5 rounded-sm bg-[#DC2E3F]" />
          <span className="h-10 w-2.5 rounded-sm bg-[#6B7C96]" />
          <span className="h-6 w-2.5 rounded-sm bg-[#1A1D29]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#6B7C96]"
          >
            Our Impact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-extrabold tracking-tight text-[#1A1D29] sm:text-5xl md:text-6xl"
          >
            Results that <span className="text-[#DC2E3F]">speak.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5c677a] sm:text-lg"
          >
            Real numbers from real client partnerships — built on precision,
            speed, and long-term financial clarity.
          </motion.p>
        </div>

        {/* Fanned cards */}
        <div className="relative mx-auto flex h-[340px] w-full max-w-5xl items-center justify-center sm:h-[380px]">
          {stats.map((stat, i) => {
            const t = toneClasses(stat.tone);
            const f = fan[i];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 90, rotate: f.rot * 1.8, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  y: f.y,
                  rotate: f.rot,
                  scale: f.scale,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: f.y - 18,
                  scale: 1.04,
                  rotate: 0,
                  zIndex: 50,
                  transition: { duration: 0.25 },
                }}
                className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 sm:w-[230px] md:w-[245px]"
                style={{ x: f.x, zIndex: f.z }}
              >
                <div
                  className={`relative h-[270px] overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br p-5 text-white sm:h-[290px] ${t.bg} ${t.glow}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.05)_35%,transparent_55%)]" />
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Impact
                    </div>
                    <MiniBars />
                  </div>

                  <div className="relative z-10 mt-14">
                    <div className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-white/95">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-xs text-white/70">{stat.sub}</div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between border-t border-white/15 pt-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                      Adamson
                    </span>
                    <span className="text-[10px] text-white/50">Since 2009</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-5 sm:mt-8 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatarColors.map((c, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-[#4e5d73]">
              Trusted by 2,000+ businesses
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-[#1A1D29] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#DC2E3F]"
          >
            Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}