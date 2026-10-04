"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showName, setShowName] = useState(false);

  // Your exact company name
  const companyName = "Adamson Accountants & Tax Consultants";

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";

    let current = 0;

    const interval = setInterval(() => {
      const remaining = 100 - current;
      const step = Math.max(0.8, remaining * 0.05);
      current = Math.min(100, current + step);
      setProgress(Math.floor(current));

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "auto";
          }, 800);
        }, 300);
      }
    }, 35);

    const nameTimer = setTimeout(() => setShowName(true), 400);

    return () => {
      clearInterval(interval);
      clearTimeout(nameTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#1A1D29" }}
          initial={{ opacity: 1 }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  scale: 1.05,
                  filter: "blur(12px)",
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                }
              : { opacity: 1, scale: 1, filter: "blur(0px)" }
          }
        >
          {/* Glowing ambient background lights */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#6B7C96]/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#DC2E3F]/20 blur-[100px]" />

          {/* Floating background dots */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
                style={{
                  left: `${5 + i * 6.5}%`,
                  top: `${15 + (i % 6) * 13}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.1, 0.6, 0.1],
                }}
                transition={{
                  duration: 2.5 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>

          {/* MAIN LOGO + CHEETAH CONTAINER */}
          <div className="relative z-10 mb-8 flex flex-col items-center">
            
            {/* LEAPING CHEETAH OVER LOGO BARS */}
            <motion.div
              className="absolute -top-12 pointer-events-none z-20 w-28 h-16 sm:w-32 sm:h-20 drop-shadow-[0_0_12px_rgba(220,46,63,0.8)]"
              initial={{
                x: -160,
                y: 35,
                rotate: -20,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                x: [-160, -80, 0, 80, 160],
                y: [35, -15, -60, -10, 35],
                rotate: [-20, -10, 0, 12, 25],
                opacity: [0, 1, 1, 1, 0],
                scale: [0.7, 0.95, 1.1, 0.95, 0.7],
              }}
              transition={{
                duration: 1.6,
                ease: [0.25, 1, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1.2,
                delay: 0.3,
              }}
            >
              {/* Sleek Cheetah Silhouette SVG */}
              <svg
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#DC2E3F]"
              >
                {/* Motion Speed Lines Trail */}
                <path
                  d="M5 30 Q 30 25, 50 32"
                  stroke="#6B7C96"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M15 38 Q 35 32, 55 40"
                  stroke="#DC2E3F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Leaping Cheetah Body Path */}
                <path
                  d="M105 18 C 95 12, 85 15, 75 22 C 68 20, 50 18, 38 26 C 30 24, 20 28, 12 36 C 8 40, 4 48, 2 52 C 5 50, 10 44, 15 42 C 22 40, 32 32, 42 30 C 52 28, 65 26, 74 28 C 82 25, 92 20, 102 22 C 108 23, 114 20, 118 16 C 114 15, 108 17, 105 18 Z"
                  fill="url(#cheetahGradient)"
                />
                {/* Front Stretched Legs */}
                <path
                  d="M85 24 L102 12 C105 10, 109 11, 108 14 L94 28 Z"
                  fill="#DC2E3F"
                />
                <path
                  d="M78 26 L96 18 C98 16, 102 17, 101 20 L87 31 Z"
                  fill="#B02030"
                />
                {/* Back Stretched Legs */}
                <path
                  d="M32 29 L14 44 C12 46, 8 45, 10 42 L26 28 Z"
                  fill="#DC2E3F"
                />
                <path
                  d="M40 28 L22 48 C20 50, 16 49, 18 46 L34 27 Z"
                  fill="#9B1B28"
                />
                {/* Long Curved Tail */}
                <path
                  d="M14 36 C 6 32, 2 22, 6 12 C 8 8, 12 6, 10 4 C 8 2, 4 6, 2 10 C -3 20, 2 32, 10 38 Z"
                  fill="#DC2E3F"
                />

                <defs>
                  <linearGradient
                    id="cheetahGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#6B7C96" />
                    <stop offset="60%" stopColor="#DC2E3F" />
                    <stop offset="100%" stopColor="#FFAA00" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* 3 LOGO BARS */}
            <div className="relative z-10 flex items-end gap-3.5">
              {/* Bar 1: Dark Navy */}
              <motion.div
                className="w-5 rounded-md sm:w-6 shadow-lg"
                style={{ backgroundColor: "#0F111A" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 48, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              />
              {/* Bar 2: Slate Blue */}
              <motion.div
                className="w-5 rounded-md sm:w-6 shadow-lg"
                style={{ backgroundColor: "#6B7C96" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 68, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              />
              {/* Bar 3: Crimson Red */}
              <motion.div
                className="w-5 rounded-md sm:w-6 shadow-lg"
                style={{ backgroundColor: "#DC2E3F" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 88, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              />
            </div>
          </div>

          {/* COMPANY NAME TYPEWRITER */}
          <div className="relative z-10 mb-10 min-h-[32px] px-4 text-center">
            {showName && <Typewriter text={companyName} />}
          </div>

          {/* PROGRESS BAR & COUNTER */}
          <div className="relative z-10 w-[240px] sm:w-[320px]">
            <div className="mb-2.5 flex items-center justify-between text-xs font-mono tracking-widest text-slate-300">
              <span>INITIALIZING</span>
              <span className="text-[#DC2E3F] font-bold">{progress}%</span>
            </div>

            <div className="h-[4px] w-full overflow-hidden rounded-full bg-white/10 p-[1px]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #6B7C96 0%, #DC2E3F 100%)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Typewriter({ text }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 45);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      <span className="text-base font-bold tracking-[0.15em] text-white sm:text-xl">
        {shown}
      </span>
      <motion.span
        className="inline-block h-5 w-[2px] bg-[#DC2E3F]"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </div>
  );
}