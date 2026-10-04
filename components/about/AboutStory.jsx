"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const MILESTONES = [
  {
    id: 0,
    year: "FOUNDATION",
    step: "01",
    title: "The Foundation",
    location: "Nelson, Lancashire",
    badge: "Local Roots",
    badgeColor: "text-[#DC2E3F] bg-[#DC2E3F]/10 border-[#DC2E3F]/20",
    iconColor: "#DC2E3F",
    description:
      "Adamson Accountants & Tax Consultants was established in Nelson with a bold mission: replace slow, impersonal corporate accounting firms with direct MAAT-qualified guidance, transparent fixed pricing, and zero hidden fees.",
    stat: "Est. in Nelson",
    statLabel: "Lancashire, BB9 7EX",
    quote:
      "We started with one simple belief: every business owner deserves direct access to their accountant, not a call center.",
    quoteAuthor: "Kashif Insari (MAAT), Practice Principal",
  },
  {
    id: 1,
    year: "CREDENTIALS",
    step: "02",
    title: "MAAT Certification & HMRC Registration",
    location: "Pendle Enterprise Haven",
    badge: "100% Tax Accuracy",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    iconColor: "#34D399",
    description:
      "Formal MAAT (Member of Association of Accounting Technicians) qualification achieved and official HMRC Agent Registration completed. This unlocked full authority to file corporate accounts, self assessments, VAT returns, and payroll directly with HMRC on behalf of clients.",
    stat: "MAAT",
    statLabel: "Credentialed & HMRC Registered",
    quote:
      "The MAAT qualification isn't just a certificate on the wall. It means every number we file carries a legal guarantee of accuracy.",
    quoteAuthor: "Kashif Insari (MAAT), Practice Principal",
  },
  {
    id: 2,
    year: "DIGITAL",
    step: "03",
    title: "Cloud Telemetry & Digital Transformation",
    location: "UK-Wide Remote Access",
    badge: "24/7 Live Ledger",
    badgeColor: "text-[#6B7C96] bg-[#6B7C96]/10 border-[#6B7C96]/20",
    iconColor: "#6B7C96",
    description:
      "The practice adopted real-time cloud accounting ecosystems, connecting every client directly to Xero, QuickBooks, and Sage. Instead of waiting months for year-end reports, clients now see live cashflow dashboards every morning.",
    stat: "Live Sync",
    statLabel: "Xero, QuickBooks & Sage",
    quote:
      "Traditional firms deliver data once a year. We deliver it every single morning. That changes everything.",
    quoteAuthor: "Kashif Insari (MAAT), Practice Principal",
  },
  {
    id: 3,
    year: "EXPANSION",
    step: "04",
    title: "Regional Leadership & Growth",
    location: "Pendle Enterprise Haven, Nelson",
    badge: "Regional Leadership",
    badgeColor: "text-white bg-white/10 border-white/20",
    iconColor: "#FFFFFF",
    description:
      "From a small Nelson office to serving hundreds of businesses across Lancashire and the UK. At Pendle Enterprise Haven, 138 Every Street, Adamson now supports sole traders, startups, and corporate clients with six integrated service lines.",
    stat: "2,500+",
    statLabel: "Clients Served & Growing",
    quote:
      "We haven't changed who we are. We just have more people trusting us with their money. And that's the greatest responsibility.",
    quoteAuthor: "Kashif Insari (MAAT), Practice Principal",
  },
];

export default function AboutStory() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const active = MILESTONES[activeMilestone];

  // Track scroll progress for the animated vertical timeline line
  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0F121A] text-white overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#DC2E3F]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6B7C96]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D29] border border-white/10 text-xs font-semibold text-[#DC2E3F] uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
            Our Origin & Values
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Built in Nelson.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#DC2E3F]">
              Driven by Personal Accountability.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#6B7C96]"
          >
            Explore how Adamson grew from a vision of honest accounting into Lancashire&apos;s most trusted MAAT-qualified practice.
          </motion.p>
        </div>

        {/* =========================================================
           INTERACTIVE TIMELINE STAGE
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Vertical Timeline with Scroll-Driven Progress Line */}
          <div className="lg:col-span-5 relative">
            {/* Animated Vertical Progress Line */}
            <div className="absolute left-[22px] top-4 bottom-4 w-[3px] bg-white/10 rounded-full hidden lg:block">
              <motion.div
                className="w-full rounded-full bg-gradient-to-b from-[#DC2E3F] via-[#6B7C96] to-[#DC2E3F]"
                style={{
                  height: `${scrollProgress * 100}%`,
                  transformOrigin: "top",
                }}
              />
            </div>

            <div className="space-y-4">
              {MILESTONES.map((milestone, index) => {
                const isActive = activeMilestone === index;

                return (
                  <motion.button
                    key={milestone.id}
                    onClick={() => setActiveMilestone(index)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-[#1A1D29] border-[#DC2E3F] shadow-xl shadow-[#DC2E3F]/10"
                        : "bg-[#1A1D29]/30 border-white/5 hover:border-white/20 hover:bg-[#1A1D29]/60"
                    }`}
                  >
                    {/* Timeline Node Dot */}
                    <div className="relative z-10 shrink-0">
                      {/* Outer Glow Ring (Active Only) */}
                      {isActive && (
                        <motion.span
                          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-[#DC2E3F]/40"
                        />
                      )}

                      {/* Node Circle */}
                      <div
                        className={`relative w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all ${
                          isActive
                            ? "bg-[#DC2E3F] border-[#DC2E3F] shadow-lg shadow-[#DC2E3F]/40"
                            : "bg-[#1A1D29] border-white/20"
                        }`}
                      >
                        {/* Inner Icon */}
                        <span
                          className={`text-xs font-black ${
                            isActive ? "text-white" : "text-slate-400"
                          }`}
                        >
                          {milestone.step}
                        </span>

                        {/* Active Dot Overlay */}
                        {isActive && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1A1D29]" />
                        )}
                      </div>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                            isActive ? "text-[#DC2E3F]" : "text-slate-500"
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span
                          className={`text-[10px] font-mono ${
                            isActive ? "text-emerald-400" : "text-slate-600"
                          }`}
                        >
                          {milestone.location}
                        </span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold leading-tight ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {milestone.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded border ${milestone.badgeColor}`}
                          >
                            {milestone.badge}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Dynamic Story Stage with 3D Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 25, rotateX: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, rotateX: -8, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative rounded-3xl bg-[#1A1D29] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden"
              >
                {/* Glowing Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A1D29] via-[#DC2E3F] to-[#6B7C96]" />

                {/* Ambient Corner Glow */}
                <div
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                  style={{ backgroundColor: `${active.iconColor}22` }}
                />

                {/* Milestone Step Number Watermark */}
                <span className="absolute top-4 right-6 text-[80px] sm:text-[110px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {active.step}
                </span>

                <div className="relative z-10 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg border bg-[#DC2E3F]/10 text-[#DC2E3F] border-[#DC2E3F]/20">
                      STEP {active.step}
                    </span>
                    <span className="text-xs font-mono text-[#6B7C96] bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                      {active.location}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-3 py-1 rounded-lg border ${active.badgeColor}`}
                    >
                      {active.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {active.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {active.description}
                  </p>

                  {/* Stat Highlight Block */}
                  <motion.div
                    key={`stat-${active.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 rounded-2xl bg-[#0F121A] border border-white/10 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${active.iconColor}15`, border: `1px solid ${active.iconColor}30` }}>
                      <span className="text-xl font-black" style={{ color: active.iconColor }}>
                        {active.stat.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-white block leading-tight">
                        {active.stat}
                      </span>
                      <span className="text-[10px] font-mono text-[#6B7C96] uppercase tracking-wider">
                        {active.statLabel}
                      </span>
                    </div>
                  </motion.div>

                  {/* Quote Block */}
                  <motion.blockquote
                    key={`quote-${active.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5"
                  >
                    {/* Quote Mark */}
                    <span
                      className="absolute -top-3 left-4 text-4xl font-black leading-none select-none"
                      style={{ color: `${active.iconColor}40` }}
                    >
                      &ldquo;
                    </span>

                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pt-2">
                      {active.quote}
                    </p>

                    <footer className="mt-3 flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: active.iconColor }}
                      />
                      <span className="text-[11px] font-mono text-[#6B7C96]">
                        {active.quoteAuthor}
                      </span>
                    </footer>
                  </motion.blockquote>

                  {/* Progress Indicator Dots */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {MILESTONES.map((m, i) => (
                        <span
                          key={m.id}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeMilestone
                              ? "w-8 bg-[#DC2E3F]"
                              : i < activeMilestone
                              ? "w-3 bg-[#6B7C96]/50"
                              : "w-3 bg-white/10"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono text-[#6B7C96]">
                      {activeMilestone + 1} / {MILESTONES.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() =>
                  setActiveMilestone((prev) =>
                    prev === 0 ? MILESTONES.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-xl bg-[#1A1D29] border border-white/10 hover:border-[#DC2E3F]/50 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() =>
                  setActiveMilestone((prev) =>
                    prev === MILESTONES.length - 1 ? 0 : prev + 1
                  )
                }
                className="px-6 h-10 rounded-xl bg-[#DC2E3F] hover:bg-[#c22533] text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#DC2E3F]/25"
              >
                <span>Next Milestone</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() =>
                  setActiveMilestone((prev) =>
                    prev === MILESTONES.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-xl bg-[#1A1D29] border border-white/10 hover:border-[#6B7C96]/50 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}