"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const rowOne = [
  "Vertex Group",
  "Northline Capital",
  "Summit Retail",
  "Aether Labs",
  "Cobalt Foods",
  "Horizon Medical",
  "Pinnacle Estates",
  "Blue Harbor Co",
];

const rowTwo = [
  "Atlas Logistics",
  "Ironwood Bank",
  "Nova Systems",
  "BrightPath Inc",
  "Silver Oak Law",
  "Evergreen Farms",
  "Quantum Media",
  "Redwood Studio",
];

function LogoCard({ name }) {
  return (
    <div className="group flex h-14 w-48 shrink-0 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-[#DC2E3F]/50 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(220,46,63,0.2)]">
      {/* Sleek Minimalist Logo Icon */}
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 transition-colors duration-300 group-hover:bg-[#DC2E3F]/20">
        <div className="flex items-center gap-[2px]">
          <span className="h-3 w-1 rounded-sm bg-[#6B7C96]" />
          <span className="h-4 w-1 rounded-sm bg-[#DC2E3F]" />
        </div>
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-white/50 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

function Row({ items, reverse = false, duration = 30, paused }) {
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-6"
        animate={paused ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={
          paused
            ? { duration: 0 }
            : { duration, ease: "linear", repeat: Infinity, repeatType: "loop" }
        }
      >
        {loopItems.map((name, index) => (
          <LogoCard key={`${name}-${index}`} name={name} />
        ))}
      </motion.div>
    </div>
  );
}

export default function LogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#12141F] py-12">
      {/* Top & Bottom Subtle Accent Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2E3F]/30 to-transparent" />

      {/* Dark Fade Gradients on Left and Right Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#12141F] via-[#12141F]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#12141F] via-[#12141F]/80 to-transparent" />

      {/* Heading */}
      <div className="mb-6 flex items-center justify-center gap-3 text-center">
        <span className="h-px w-8 bg-[#6B7C96]/30 sm:w-12" />
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B7C96]">
          Trusted By Industry Leaders
        </p>
        <span className="h-px w-8 bg-[#6B7C96]/30 sm:w-12" />
      </div>

      {/* Marquee Container */}
      <div
        className="space-y-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Row items={rowOne} reverse={false} duration={35} paused={paused} />
        <Row items={rowTwo} reverse={true} duration={40} paused={paused} />
      </div>
    </section>
  );
}