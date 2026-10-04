"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DIFFERENTIATORS = [
  {
    id: "shield",
    number: "01",
    title: "Zero Penalty Shield",
    subtitle: "100% HMRC Accuracy & Liability Coverage",
    badge: "100% Guaranteed",
    stat: "£0 Paid",
    statLabel: "In HMRC Late Fees By Clients",
    color: "#DC2E3F",
    description:
      "We take full financial liability for your tax submissions. Our multi-stage automated audit algorithms verify every transaction before chartered sign-off, ensuring zero HMRC fines or late filing penalties.",
    visualType: "shield",
  },
  {
    id: "cloud",
    number: "02",
    title: "Real-Time Cloud Ledger",
    subtitle: "Instant Sync across Xero, Sage & QuickBooks",
    badge: "Live Telemetry",
    stat: "24/7 Access",
    statLabel: "Real-time Financial Position",
    color: "#6B7C96",
    description:
      "Never wait for year-end to know your profitability. Get continuous real-time cloud data pipelines that give you clear visibility into revenue, tax liabilities, and live cashflow reserves anytime.",
    visualType: "cloud",
  },
  {
    id: "partner",
    number: "03",
    title: "Dedicated Senior Partner",
    subtitle: "Direct Line to Chartered Tax Specialists",
    badge: "No Call Centers",
    stat: "1-on-1",
    statLabel: "Direct Dedicated Expert",
    color: "#DC2E3F",
    description:
      "No support ticketing queues or rotating junior clerks. You work directly with a senior chartered accountant who understands your industry, growth strategy, and corporate history inside out.",
    visualType: "partner",
  },
  {
    id: "sla",
    number: "04",
    title: "24-Hour SLA Guarantee",
    subtitle: "Rapid Turnaround for Urgent Enquiries",
    badge: "Rapid Response",
    stat: "< 2 Hours",
    statLabel: "Average Query Resolution",
    color: "#6B7C96",
    description:
      "Urgent payroll questions or tax decisions shouldn’t stall your business. We commit to responding to all client communications within 24 hours — with urgent issues handled in under 2 hours.",
    visualType: "sla",
  },
  {
    id: "tax",
    number: "05",
    title: "Proactive Tax Shielding",
    subtitle: "Maximized R&D Credits & Capital Allowances",
    badge: "Engineered Relief",
    stat: "32% Saved",
    statLabel: "Avg Annual Corporate Tax Reduction",
    color: "#DC2E3F",
    description:
      "We don't just file your tax returns; we actively restructure them. From advanced R&D tax credit claims to optimal director dividend planning, we legally minimize your tax burden year-round.",
    visualType: "tax",
  },
  {
    id: "pricing",
    number: "06",
    title: "Flat Predictable Fee",
    subtitle: "Fixed Retainer with Zero Surprise Surcharges",
    badge: "Transparent",
    stat: "$0 Hidden",
    statLabel: "Surprise Invoice Guarantees",
    color: "#6B7C96",
    description:
      "Say goodbye to hourly billable surprises. Enjoy transparent, customizable monthly plans tailored to your scope of operations, so you can budget with total confidence.",
    visualType: "pricing",
  },
];

const COMPARISON_ITEMS = [
  {
    feature: "HMRC Penalty Liability",
    traditional: "Passed onto client",
    adamson: "100% Guaranteed & Covered by Adamson",
  },
  {
    feature: "Financial Data Updates",
    traditional: "Once a year (Lagging data)",
    adamson: "Real-Time Cloud Feeds (24/7 Access)",
  },
  {
    feature: "Account Manager",
    traditional: "Random junior reps & call centers",
    adamson: "Dedicated Senior Chartered Accountant",
  },
  {
    feature: "Response Speed",
    traditional: "3 to 7 business days",
    adamson: "Guaranteed under 24 hours (< 2h avg)",
  },
  {
    feature: "Tax Strategy",
    traditional: "Reactive year-end filing only",
    adamson: "Proactive R&D & dividend planning",
  },
  {
    feature: "Fee Structure",
    traditional: "Unpredictable hourly billing",
    adamson: "Fixed monthly fee with zero hidden costs",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState("engine"); // 'engine' | 'comparison'

  const current = DIFFERENTIATORS[activeTab];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0F121A] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#DC2E3F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#6B7C96]/10 rounded-full blur-[140px] pointer-events-none" />

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D29] border border-white/10 text-xs font-semibold text-[#DC2E3F] uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
            The Adamson Precision Standard
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Why Modern Businesses Switch To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#DC2E3F]">
              Adamson
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#6B7C96]"
          >
            Explore our engineered differentiators or compare us directly against traditional accounting firms.
          </motion.p>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#1A1D29] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setViewMode("engine")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                viewMode === "engine"
                  ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Interactive Control Center
            </button>
            <button
              onClick={() => setViewMode("comparison")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                viewMode === "comparison"
                  ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Traditional vs Adamson Comparison
            </button>
          </div>
        </div>

        {/* MODE 1: INTERACTIVE CONTROL CENTER */}
        {viewMode === "engine" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Selector Hub (6 Pillars) */}
            <div className="lg:col-span-5 space-y-3">
              {DIFFERENTIATORS.map((diff, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={diff.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                      isActive
                        ? "bg-[#1A1D29] border-[#DC2E3F] shadow-xl shadow-[#DC2E3F]/10"
                        : "bg-[#1A1D29]/40 border-white/5 hover:border-white/20 hover:bg-[#1A1D29]/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePillarBar"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2E3F]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-4 pl-1">
                      <span
                        className={`font-mono text-sm font-bold ${
                          isActive ? "text-[#DC2E3F]" : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        {diff.number}
                      </span>
                      <div>
                        <h3
                          className={`text-base font-bold transition-colors ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {diff.title}
                        </h3>
                        <p className="text-xs text-[#6B7C96] truncate max-w-[220px] sm:max-w-xs">
                          {diff.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isActive
                            ? "bg-[#DC2E3F]/20 text-[#DC2E3F] border-[#DC2E3F]/30"
                            : "bg-white/5 text-slate-400 border-white/10"
                        }`}
                      >
                        {diff.badge}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isActive ? "text-[#DC2E3F] translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Visual Telemetry Stage */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex-1 rounded-3xl bg-[#1A1D29] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6B7C96] via-[#DC2E3F] to-[#6B7C96]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col h-full justify-between gap-6"
                  >
                    {/* Visual Telemetry Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-[#DC2E3F] tracking-widest uppercase bg-[#DC2E3F]/10 border border-[#DC2E3F]/20 px-3 py-1 rounded-md">
                          TELEMETRY MODULE {current.number}
                        </span>
                        <span className="text-xs text-[#6B7C96] font-mono flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          System Active
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {current.description}
                      </p>
                    </div>

                    {/* Interactive Graphic Simulation Box */}
                    <div className="my-4 p-6 rounded-2xl bg-[#0F121A] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center min-h-[190px]">
                      {/* 1. Shield Graphic */}
                      {current.visualType === "shield" && (
                        <div className="w-full text-center space-y-3">
                          <div className="inline-flex p-4 rounded-2xl bg-[#DC2E3F]/10 border border-[#DC2E3F]/30 text-[#DC2E3F] mb-1">
                            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                              HMRC Compliance: 100% Passed
                            </span>
                            <span className="text-xs font-mono text-[#DC2E3F] bg-[#DC2E3F]/10 px-3 py-1 rounded-full border border-[#DC2E3F]/20">
                              Penalty Risk: 0.00%
                            </span>
                          </div>
                        </div>
                      )}

                      {/* 2. Cloud Sync Graphic */}
                      {current.visualType === "cloud" && (
                        <div className="w-full space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-2">
                            <span>Cloud Ecosystem Sync</span>
                            <span className="text-emerald-400">Connected (Xero / Sage / QB)</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-slate-300">
                              <span>Live Bank Reconciliation</span>
                              <span className="text-slate-400">100% Synced</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                              <div className="bg-gradient-to-r from-[#6B7C96] to-[#DC2E3F] h-full w-[100%]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Dedicated Partner Graphic */}
                      {current.visualType === "partner" && (
                        <div className="w-full flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#DC2E3F] to-[#6B7C96] p-0.5">
                              <div className="w-full h-full rounded-full bg-[#1A1D29] flex items-center justify-center font-bold text-white text-sm">
                                AA
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white">Senior Chartered Partner</h4>
                              <p className="text-xs text-[#6B7C96]">Direct WhatsApp & Mobile Line</p>
                            </div>
                          </div>
                          <span className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Direct Line Available
                          </span>
                        </div>
                      )}

                      {/* 4. SLA Timer Graphic */}
                      {current.visualType === "sla" && (
                        <div className="w-full text-center space-y-2">
                          <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DC2E3F]">
                            1h 42m Avg SLA
                          </span>
                          <p className="text-xs text-slate-400">
                            Maximum Response Window Guaranteed: <span className="text-white font-semibold">24 Hours</span>
                          </p>
                          <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mt-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            Fast Priority Queue Active
                          </div>
                        </div>
                      )}

                      {/* 5. Tax Savings Graphic */}
                      {current.visualType === "tax" && (
                        <div className="w-full space-y-3">
                          <div className="flex justify-between items-center text-xs text-slate-300">
                            <span>Engineered Tax Relief Strategy</span>
                            <span className="text-[#DC2E3F] font-bold">+32% Average Savings</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                            <div className="p-2 rounded bg-white/5 border border-white/10">
                              <span className="block text-slate-400">R&D Tax</span>
                              <span className="text-white font-bold">Claimed</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/10">
                              <span className="block text-slate-400">Capital Allow</span>
                              <span className="text-white font-bold">Maximized</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/10">
                              <span className="block text-slate-400">Dividends</span>
                              <span className="text-white font-bold">Optimized</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 6. Pricing Graphic */}
                      {current.visualType === "pricing" && (
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <span className="text-xs text-slate-400 font-mono block">Monthly Fixed Retainer</span>
                            <span className="text-2xl font-black text-white">$0 Hidden Surprises</span>
                          </div>
                          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-slate-200">
                            Custom Agreement
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Footer Stat Block */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black text-white block">
                          {current.stat}
                        </span>
                        <span className="text-xs text-[#6B7C96] font-mono uppercase tracking-wider">
                          {current.statLabel}
                        </span>
                      </div>
                      <button className="flex items-center gap-2 text-xs font-semibold text-white hover:text-[#DC2E3F] transition-colors">
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: TRADITIONAL VS ADAMSON COMPARISON MATRIX */}
        {viewMode === "comparison" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#1A1D29] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0F121A]/80 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <th className="py-5 px-6 text-slate-400">Operational Capability</th>
                    <th className="py-5 px-6 text-slate-400">Traditional Accounting Firm</th>
                    <th className="py-5 px-6 text-[#DC2E3F] bg-[#DC2E3F]/10">
                      Adamson Precision Engine
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {COMPARISON_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6B7C96]" />
                        {item.feature}
                      </td>
                      <td className="py-4 px-6 text-slate-400">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium text-white bg-[#DC2E3F]/5">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-emerald-300">{item.adamson}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}