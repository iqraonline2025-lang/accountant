"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const CREDENTIAL_TABS = [
  {
    id: "maat",
    label: "MAAT Qualification",
    title: "Member of Association of Accounting Technicians",
    badge: "MAAT Certified",
    badgeColor: "text-[#DC2E3F] bg-[#DC2E3F]/10 border-[#DC2E3F]/20",
    description:
      "As a full MAAT member, Kashif Insari operates under strict professional ethics and chartered technical standards. Every year-end account, tax submission, and VAT calculation undergoes rigorous multi-point verification.",
    metrics: [
      { value: "100%", label: "Chartered Accuracy" },
      { value: "MAAT", label: "Full Professional Member" },
    ],
  },
  {
    id: "hmrc",
    label: "HMRC Registered Agent",
    title: "Official Tax Representation Authority",
    badge: "HMRC Authorized",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description:
      "Formally authorized by HMRC to represent individuals and corporate entities directly. We deal with tax inquiries, CIS clearance, PAYE, and VAT audits on your behalf so you never have to navigate tax authorities alone.",
    metrics: [
      { value: "Official", label: "HMRC Agent Code" },
      { value: "0 Penalty", label: "Client Record" },
    ],
  },
  {
    id: "guarantee",
    label: "Practice Guarantees",
    title: "100% Tax Accuracy & On-Time Filings",
    badge: "Full Liability Coverage",
    badgeColor: "text-[#6B7C96] bg-[#6B7C96]/10 border-[#6B7C96]/20",
    description:
      "We take full responsibility for filing deadlines. With our pre-filing audit algorithms and direct MAAT oversight, your returns are always submitted on time with zero HMRC late penalty risk.",
    metrics: [
      { value: "£0 Late Fees", label: "Guaranteed" },
      { value: "< 24h", label: "Query Response SLA" },
    ],
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Direct Partner Access",
    subtitle: "No Call Centers or Junior Clerks",
    description:
      "You speak directly with Kashif Insari (MAAT). Say goodbye to rotating junior reps and support ticketing queues — get personal, senior-level advice every time you call.",
    icon: (
      <svg className="w-6 h-6 text-[#DC2E3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proactive Tax Shielding",
    subtitle: "Year-Round Optimization",
    description:
      "We don’t just record past transactions; we actively restructure them. From legitimate dividend structuring to maximum capital allowances, we legally minimize your tax burden ahead of time.",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plain-English Transparency",
    subtitle: "Zero Jargon & Fixed Fees",
    description:
      "We translate complex HMRC regulations into simple, actionable steps. Enjoy transparent, fixed monthly fee retainers with zero unexpected billing surprises.",
    icon: (
      <svg className="w-6 h-6 text-[#6B7C96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function AboutLeadership() {
  const [activeTab, setActiveTab] = useState("maat");

  // 3D Card Hover Tilt Mechanics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const activeCred = CREDENTIAL_TABS.find((t) => t.id === activeTab);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#1A1D29] text-white overflow-hidden">
      {/* Dynamic Ambient Background Orbs */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-[#DC2E3F]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#6B7C96]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121A] border border-white/10 text-xs font-semibold text-[#DC2E3F] uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
            Leadership & MAAT Qualification
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Personal Accounting Oversight from a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#DC2E3F]">
              Qualified MAAT Principal.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#6B7C96]"
          >
            Meet the practice lead who oversees your tax returns, financial statements, and business growth.
          </motion.p>
        </div>

        {/* MAIN STAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* =========================================================
             LEFT COLUMN: 3D INTERACTIVE PRINCIPAL PROFILE STAGE
             ========================================================= */}
          <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full rounded-3xl bg-[#0F121A] border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Glowing Background Ambient Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#DC2E3F]/20 via-transparent to-[#6B7C96]/20 rounded-[32px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Glowing Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A1D29] via-[#DC2E3F] to-[#6B7C96]" />

              <div className="relative z-10 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      Live Advisory Line Open
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#DC2E3F] bg-[#DC2E3F]/10 border border-[#DC2E3F]/20 px-2.5 py-1 rounded-full uppercase">
                    MAAT Certified
                  </span>
                </div>

                {/* Profile Avatar Block */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#DC2E3F] to-[#6B7C96] p-0.5 shadow-xl shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-[#1A1D29] flex items-center justify-center font-black text-white text-xl">
                      KI
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Kashif Insari <span className="text-[#DC2E3F] text-sm font-mono">(MAAT)</span>
                    </h3>
                    <p className="text-xs text-[#6B7C96] font-mono">
                      Lead Accountant & Practice Principal
                    </p>
                  </div>
                </div>

                {/* HQ Location Badge */}
                <div className="p-3.5 rounded-xl bg-[#1A1D29] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-[#6B7C96] uppercase tracking-wider block">
                    Practice Base
                  </span>
                  <p className="text-xs font-bold text-white">
                    Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX
                  </p>
                </div>

                {/* ONE-TAP PHONE DIALS (NO EMAIL) */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-mono text-[#6B7C96] uppercase tracking-widest block">
                    Direct One-Tap Phone Lines
                  </span>

                  {/* Direct Mobile */}
                  <a
                    href="tel:07757510944"
                    className="w-full p-3.5 rounded-xl bg-[#DC2E3F] hover:bg-[#c22533] text-white flex items-center justify-between transition-all duration-300 shadow-lg shadow-[#DC2E3F]/25 hover:shadow-xl hover:shadow-[#DC2E3F]/40 group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] text-white/80 font-mono uppercase">Direct Mobile</span>
                        <span className="text-sm font-bold font-mono">07757 510944</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-black/20 text-white">Call Now</span>
                  </a>

                  {/* Office Landline */}
                  <a
                    href="tel:01282611503"
                    className="w-full p-3.5 rounded-xl bg-[#1A1D29] hover:bg-white/10 border border-white/10 text-white flex items-center justify-between transition-all duration-300 group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#6B7C96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] text-[#6B7C96] font-mono uppercase">Office Telephone</span>
                        <span className="text-sm font-bold font-mono text-white group-hover/btn:text-[#DC2E3F] transition-colors">
                          01282 611503
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-slate-300">Call Tel</span>
                  </a>
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#6B7C96]">
                <span className="font-mono">MAAT Registration Active</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  HMRC Verified
                </span>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
             RIGHT COLUMN: 3 CORE OPERATING PRINCIPLES & CREDENTIAL TABS
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* 3 Core Operating Principles Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#DC2E3F] mb-2">
                Our Core Operating Pillars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PRINCIPLES.map((item, idx) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-[#0F121A] border border-white/10 hover:border-[#DC2E3F]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-lg"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2E3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                          {item.icon}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#DC2E3F]">
                          {item.number}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="block text-[10px] font-mono text-[#6B7C96] mb-3 uppercase">
                        {item.subtitle}
                      </span>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Credential Inspector Tabs */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F121A] border border-white/10 space-y-6 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                  Inspect Accreditation Profile
                </span>

                {/* Tab Controls */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#1A1D29] border border-white/5">
                  {CREDENTIAL_TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#DC2E3F] text-white shadow-md shadow-[#DC2E3F]/30"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Tab Content Stage */}
              <AnimatePresence mode="wait">
                {activeCred && (
                  <motion.div
                    key={activeCred.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white">{activeCred.title}</h4>
                      <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${activeCred.badgeColor}`}>
                        {activeCred.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeCred.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {activeCred.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-[#1A1D29] border border-white/5">
                          <span className="text-xl font-black text-white block">{m.value}</span>
                          <span className="text-[10px] font-mono text-[#6B7C96] uppercase">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}