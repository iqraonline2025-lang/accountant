"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const bgBars = [
  { h: 78, c: "navy" },
  { h: 92, c: "slate" },
  { h: 64, c: "red" },
  { h: 100, c: "navy" },
  { h: 70, c: "slate" },
  { h: 88, c: "red" },
  { h: 60, c: "navy" },
  { h: 96, c: "slate" },
  { h: 74, c: "navy" },
  { h: 100, c: "slate" },
  { h: 58, c: "red" },
  { h: 86, c: "navy" },
  { h: 72, c: "slate" },
  { h: 94, c: "navy" },
  { h: 66, c: "red" },
  { h: 90, c: "slate" },
  { h: 80, c: "navy" },
  { h: 98, c: "slate" },
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getBarColor = (c) => {
    if (c === "red") return "bg-[#DC2E3F]/55";
    if (c === "slate") return "bg-[#6B7C96]/45";
    return "bg-[#2F3548]/65";
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#10131C]">
      {/* Soft ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#6B7C96]/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#DC2E3F]/12 blur-[140px]" />
      </div>

      {/* FULL HERO BARS — strip by strip downward */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-stretch justify-center gap-2 px-3 sm:gap-3 sm:px-6 md:gap-4">
        {isMounted &&
          bgBars.map((bar, i) => (
            <motion.div
              key={i}
              className={`relative w-5 overflow-hidden rounded-b-2xl sm:w-8 md:w-10 ${getBarColor(
                bar.c
              )}`}
              initial={{ height: "0%", y: "-8%", opacity: 0 }}
              animate={{
                height: [
                  `${bar.h * 0.72}%`,
                  `${bar.h}%`,
                  `${bar.h * 0.8}%`,
                  `${bar.h * 0.95}%`,
                  `${bar.h * 0.72}%`,
                ],
                y: 0,
                opacity: [0.5, 0.85, 0.65, 0.8, 0.5],
              }}
              transition={{
                height: {
                  duration: 3.6 + (i % 4) * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9 + i * 0.08,
                },
                y: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.07,
                },
                opacity: {
                  duration: 3.6 + (i % 4) * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9 + i * 0.08,
                },
              }}
              style={{
                alignSelf: "flex-start",
                transformOrigin: "top",
                boxShadow:
                  bar.c === "red"
                    ? "0 10px 34px rgba(220,46,63,0.18)"
                    : bar.c === "slate"
                    ? "0 10px 28px rgba(107,124,150,0.14)"
                    : "0 10px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* top edge shine */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent" />
              {/* bottom fade so bars melt into scene */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#10131C]/80 to-transparent" />
            </motion.div>
          ))}
      </div>

      {/* readability overlay */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(16,19,28,0.2)_0%,rgba(16,19,28,0.72)_72%,rgba(16,19,28,0.92)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 pt-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9AA8BD]"
        >
          Adamson Accountants & Tax Consultants
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Precision Accounting.
          <span className="mt-2 block text-[#DC2E3F]">Accelerated Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Fast, accurate, and strategic financial solutions designed to help your
          business scale with clarity and confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.35 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-[#DC2E3F] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(220,46,63,0.35)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#c72636]"
          >
            Free Consultation
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#6B7C96]/60 hover:bg-[#6B7C96]/15"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.5 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Happy Clients", value: "2,000+" },
            { label: "Accuracy Rate", value: "99.8%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-md"
            >
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9AA8BD]">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B9BB3]">
          Scroll
        </span>
        <motion.div
          className="h-10 w-[2px] rounded-full bg-gradient-to-b from-[#DC2E3F] to-transparent"
          animate={{ opacity: [0.35, 1, 0.35], scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}