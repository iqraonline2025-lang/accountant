"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useMouseGlow(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, [ref, x, y]);

  return { springX, springY };
}

function GlowCard({ children, className = "" }) {
  const ref = useRef(null);
  const { springX, springY } = useMouseGlow(ref);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {/* mouse flashlight */}
      <motion.div
        className="pointer-events-none absolute h-44 w-44 rounded-full bg-[#DC2E3F]/20 blur-3xl"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          opacity: hovered ? 1 : 0,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 220 90" className="h-24 w-full" fill="none">
      <motion.path
        d="M8 70 C 40 66, 55 40, 80 42 S 120 70, 145 38 S 185 18, 212 22"
        stroke="url(#growthStroke)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.circle
        cx="212"
        cy="22"
        r="5"
        fill="#DC2E3F"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, type: "spring" }}
      />
      <defs>
        <linearGradient id="growthStroke" x1="0" y1="0" x2="220" y2="0">
          <stop stopColor="#6B7C96" />
          <stop offset="1" stopColor="#DC2E3F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SpinBadge() {
  return (
    <div className="relative mx-auto h-36 w-36">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <defs>
            <path
              id="circlePath"
              d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            />
          </defs>
          <text className="fill-white text-[9px] font-semibold uppercase tracking-[0.22em]">
            <textPath href="#circlePath" startOffset="0%">
              Adamson Excellence • Est. 2009 • Precision • Trust •
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="absolute inset-0 m-auto flex h-16 w-16 items-end justify-center gap-1 rounded-2xl bg-white/10 p-3 backdrop-blur">
        <span className="h-5 w-2 rounded-sm bg-[#1A1D29]" />
        <span className="h-7 w-2 rounded-sm bg-[#6B7C96]" />
        <span className="h-9 w-2 rounded-sm bg-[#DC2E3F]" />
      </div>
    </div>
  );
}

export default function AboutBento() {
  const words =
    "We turn complex numbers into clear decisions, confident growth, and lasting financial power.".split(
      " "
    );

  return (
    <section className="relative overflow-hidden bg-[#0F121A] py-24 text-white sm:py-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-[#6B7C96]/20 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-[#DC2E3F]/16 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* top label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#9AA8BD]"
        >
          About Adamson
        </motion.p>

        {/* scroll-reveal style headline */}
        <h2 className="mx-auto mb-14 max-w-5xl text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0.15, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`mr-3 inline-block ${
                ["clear", "growth,", "power."].includes(word)
                  ? "text-[#DC2E3F]"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          {/* Card 1 — Mission (large) */}
          <GlowCard className="min-h-[280px] bg-gradient-to-br from-[#1A1D29] via-[#171b27] to-[#10131C] p-7 md:col-span-3 md:row-span-2 md:min-h-[420px] md:p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9AA8BD]">
                  Our Mission
                </div>
                <h3 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                  We don’t just count numbers.
                  <span className="mt-2 block text-[#DC2E3F]">
                    We make them count.
                  </span>
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  Adamson Accountants & Tax Consultants blends precision
                  accounting with strategic advisory — so every decision moves
                  your business forward with confidence.
                </p>
              </div>

              <div className="mt-8">
                <motion.div
                  className="h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#DC2E3F] via-[#6B7C96] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Strategy • Clarity • Trust
                  </span>
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-white transition hover:text-[#DC2E3F]"
                  >
                    Discover our story →
                  </Link>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Card 2 — Growth */}
          <GlowCard className="min-h-[200px] bg-white p-6 text-[#1A1D29] md:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6B7C96]">
                Growth Engine
              </p>
              <span className="rounded-full bg-[#DC2E3F]/10 px-3 py-1 text-xs font-semibold text-[#DC2E3F]">
                +45% avg
              </span>
            </div>
            <h4 className="text-xl font-bold">Revenue trajectory, amplified</h4>
            <p className="mt-2 text-sm text-[#5c677a]">
              Tax strategy and advisory designed to unlock measurable upside.
            </p>
            <div className="mt-4">
              <GrowthChart />
            </div>
          </GlowCard>

          {/* Card 3 — Compliance */}
          <GlowCard className="min-h-[200px] bg-gradient-to-br from-[#6B7C96] to-[#4E5D73] p-6 md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
              Ironclad Compliance
            </p>
            <h4 className="mt-3 text-xl font-bold text-white">
              Protected. Precise. Audit-ready.
            </h4>

            <div className="mt-6 flex items-end gap-2">
              <motion.span
                className="h-10 w-3 rounded-md bg-[#1A1D29]/70"
                animate={{ scaleY: [0.85, 1.1, 0.85] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <motion.span
                className="h-14 w-3 rounded-md bg-white/80"
                animate={{ scaleY: [1, 0.9, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.span
                className="h-20 w-3 rounded-md bg-[#DC2E3F]"
                animate={{ scaleY: [0.95, 1.15, 0.95] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
              />
              <div className="ml-3 text-sm text-white/80">
                Live compliance
                <br />
                heartbeat
              </div>
            </div>
          </GlowCard>

          {/* Card 4 — Heritage spinner */}
          <GlowCard className="min-h-[200px] bg-gradient-to-br from-[#DC2E3F] to-[#9b1b28] p-6 md:col-span-1">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Heritage
            </p>
            <div className="mt-2">
              <SpinBadge />
            </div>
          </GlowCard>
        </div>

        {/* bottom pillars */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              title: "Tax Optimization",
              desc: "Legal strategies that protect profit and reduce leakage.",
            },
            {
              title: "Proactive Advisory",
              desc: "Forward guidance, not just year-end cleanup.",
            },
            {
              title: "Bulletproof Filing",
              desc: "Clean books, sharp accuracy, zero stress.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#DC2E3F]/15 text-sm font-bold text-[#DC2E3F]">
                ✓
              </div>
              <h5 className="font-semibold text-white">{item.title}</h5>
              <p className="mt-1 text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}