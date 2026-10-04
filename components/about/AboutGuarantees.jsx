'use me'
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutGuarantees() {
  // Track flip states for the 4 cards
  const [flippedCards, setFlippedCards] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const [activeTab, setActiveTab] = useState("all");

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const flipAllBack = () => {
    setFlippedCards({ 0: true, 1: true, 2: true, 3: true });
  };

  const resetAllFront = () => {
    setFlippedCards({ 0: false, 1: false, 2: false, 3: false });
  };

  const guarantees = [
    {
      id: 0,
      badge: "100% TAX SECURITY",
      title: "Zero HMRC Penalty Guarantee",
      subtitle: "HMRC Filing Protection Protocol",
      statValue: "0",
      statLabel: "Late Penalties Incurred Across 1,200+ Accounts",
      teaser:
        "If we ever miss an agreed HMRC statutory deadline, we pay 100% of the late fee plus a £100 account credit.",
      icon: (
        <svg
          className="w-8 h-8 text-[#DC2E3F]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      backContent: {
        headline: "Penalty Protection Covenant",
        bullets: [
          "Automated MTD & CIS real-time deadline monitoring telemetry.",
          "Strict 14-day pre-deadline buffer zone for client approval.",
          "Full financial indemnity: We pay 100% of any HMRC penalty caused by our operational delay.",
        ],
        slaBadge: "100% Deadline SLA",
        primaryActionText: "Direct Call Senior Lead",
        primaryPhone: "07757 510944",
      },
    },
    {
      id: 1,
      badge: "NO HIDDEN BILLS",
      title: "Fixed-Fee Transparency",
      subtitle: "Transparent Pricing Covenant",
      statValue: "£0",
      statLabel: "Unexpected Hourly Extras Ever Charged",
      teaser:
        "Every fee is agreed in writing beforehand. Zero hidden clock charges, zero extra phone call fees.",
      icon: (
        <svg
          className="w-8 h-8 text-[#6B7C96]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      backContent: {
        headline: "Transparent Billing Policy",
        bullets: [
          "Itemized fixed monthly retaining fee tailored to your business tier.",
          "Unlimited ad-hoc telephone & email support included in standard accountancy plans.",
          "12-Month Price Guarantee: Locked rates with no surprise mid-year cost adjustments.",
        ],
        slaBadge: "100% Price Lock Guarantee",
        primaryActionText: "Call Office Landline",
        primaryPhone: "01282 611503",
      },
    },
    {
      id: 2,
      badge: "MAAT QUALIFIED LEAD",
      title: "Direct Partner Access",
      subtitle: "Chartered Leadership SLA",
      statValue: "1:1",
      statLabel: "Direct Access to Kashif Insari (MAAT)",
      teaser:
        "No junior call center handoffs. You communicate directly with our Qualified Lead Accountant.",
      icon: (
        <svg
          className="w-8 h-8 text-[#DC2E3F]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      backContent: {
        headline: "Expert Oversight Guarantee",
        bullets: [
          "Direct mobile line provided straight to Senior Accountant Kashif Insari (MAAT).",
          "Dedicated quarterly financial strategic review for limited company directors.",
          "Instant decision-making without corporate bureaucracy or junior delays.",
        ],
        slaBadge: "Direct Lead Direct Access",
        primaryActionText: "Call Kashif Insari Direct",
        primaryPhone: "07757 510944",
      },
    },
    {
      id: 3,
      badge: "24-HOUR RESPONSE",
      title: "Rapid Telemetry Turnaround",
      subtitle: "Urgent Query SLA Protocol",
      statValue: "< 24h",
      statLabel: "Guaranteed Turnaround for Urgent Inquiries",
      teaser:
        "Tax demands, urgent payroll updates, or HMRC notices answered within 1 business day.",
      icon: (
        <svg
          className="w-8 h-8 text-[#6B7C96]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      backContent: {
        headline: "Rapid Response Guarantee",
        bullets: [
          "Priority fast-track processing for urgent HMRC statutory notices & audit alerts.",
          "Same-day emergency response for payroll calculations & urgent VAT filings.",
          "Direct phone escalation protocol for active business emergencies.",
        ],
        slaBadge: "24-Hour Max SLA",
        primaryActionText: "Call Pendle Haven Office",
        primaryPhone: "01282 611503",
      },
    },
  ];

  return (
    <section className="relative py-24 bg-[#0F121A] text-white overflow-hidden border-t border-slate-800/80">
      {/* Background Decor Grid */}
      <div className="absolute inset-0 bg-[linear-[#1A1D29]_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Subtle Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6B7C96]/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              THE ADAMSON COMMITMENT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            4 Ironclad <span className="text-[#DC2E3F]">Guarantees</span> That
            Protect Your Business
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Accountancy isn't just about calculating figures—it's about shifting risk away from your enterprise. Flip each card below to inspect our enforceable SLAs.
          </p>

          {/* Master Flip Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={flipAllBack}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide border border-slate-700 transition-all duration-200 flex items-center space-x-2 hover:border-[#DC2E3F]/50"
            >
              <svg
                className="w-4 h-4 text-[#DC2E3F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Flip All to Back (Details)</span>
            </button>

            <button
              onClick={resetAllFront}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide border border-slate-700 transition-all duration-200 flex items-center space-x-2 hover:border-slate-500"
            >
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
              <span>Reset All (Overview)</span>
            </button>
          </div>
        </div>

        {/* 4 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {guarantees.map((g) => {
            const isFlipped = flippedCards[g.id];

            return (
              <div
                key={g.id}
                className="h-[430px] w-full cursor-pointer group rounded-2xl perspective-1000"
                onClick={() => toggleFlip(g.id)}
              >
                {/* Outer Card Container with 3D Transform */}
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* FRONT FACE */}
                  <div
                    className="absolute inset-0 w-full h-full bg-[#12141F] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-xl hover:border-[#DC2E3F]/50 transition-colors duration-300"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div>
                      {/* Top Badge & Flip Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#DC2E3F]/10 text-[#DC2E3F] border border-[#DC2E3F]/20">
                          {g.badge}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-[#DC2E3F]/20 transition-all">
                          <svg
                            className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 inline-block p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                        {g.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DC2E3F] transition-colors">
                        {g.title}
                      </h3>

                      {/* Teaser Paragraph */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-6">
                        {g.teaser}
                      </p>
                    </div>

                    {/* Stat Highlight & Prompt */}
                    <div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-4">
                        <div className="text-2xl font-black text-white tracking-tight">
                          {g.statValue}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          {g.statLabel}
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 text-center font-medium flex items-center justify-center space-x-1 group-hover:text-slate-200">
                        <span>Click to Flip Details</span>
                        <span className="text-[#DC2E3F]">→</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div
                    className="absolute inset-0 w-full h-full bg-[#1A1D29] border border-[#DC2E3F]/40 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-2xl rotate-y-180"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {g.backContent.slaBadge}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(g.id);
                          }}
                          className="text-xs text-slate-400 hover:text-white underline"
                        >
                          Flip Back
                        </button>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-3 border-b border-slate-800 pb-2">
                        {g.backContent.headline}
                      </h4>

                      {/* Bullet points */}
                      <ul className="space-y-2.5 mb-4">
                        {g.backContent.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-xs text-slate-200"
                          >
                            <svg
                              className="w-4 h-4 text-[#DC2E3F] shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Back Footer Actions */}
                    <div className="pt-2 border-t border-slate-800">
                      <div className="text-[11px] text-slate-400 mb-2">
                        Direct Enforcement Line:
                      </div>
                      <a
                        href={`tel:${g.backContent.primaryPhone.replace(/\s+/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-3 rounded-lg bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold text-center block transition-all shadow-md shadow-[#DC2E3F]/20"
                      >
                        {g.backContent.primaryActionText} (
                        {g.backContent.primaryPhone})
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Assurance Shield Banner */}
        <div className="mt-16 bg-[#12141F] border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#DC2E3F]/10 border border-[#DC2E3F]/30 flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-[#DC2E3F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Need Custom Retainer SLAs for Your Business?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Book a consultation with Kashif Insari (MAAT) at Pendle Enterprise Haven to establish custom service level agreements for your enterprise.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full md:w-auto text-center px-6 py-3 rounded-xl bg-white text-[#1A1D29] hover:bg-slate-200 text-xs font-black tracking-wide uppercase transition-all shadow-lg"
            >
              Book SLA Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}