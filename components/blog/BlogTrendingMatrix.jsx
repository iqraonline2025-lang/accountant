"use client";

import { useState } from "react";

export default function BlogTrendingMatrix() {
  const [activeCard, setActiveCard] = useState(null);

  const trendingStrategies = [
    {
      id: "salary-dividend",
      badge: "LIMITED COMPANY DIRECTORS",
      badgeColor: "bg-[#DC2E3F]/10 text-[#DC2E3F] border-[#DC2E3F]/20",
      title: "Optimal Director Salary vs. Dividend Mix for 2024/25",
      subtitle: "Tax-Free Allowance Strategy",
      readTime: "4 Min Read",
      trendScore: "98% RELEVANCE",
      description:
        "Extract profits with maximum tax efficiency by aligning your PAYE threshold with the £12,570 Personal Allowance and leveraging the £500 Dividend Allowance.",
      takeaways: [
        "Optimal £12,570 low salary preserves State Pension NI credits.",
        "Zero Employer / Employee National Insurance liability.",
        "Dividend tax rates at 8.75% basic rate vs higher income tax bands.",
        "CT600 Corporation Tax deduction optimization."
      ],
      primaryPhone: "07757510944",
      phoneLabel: "Call Kashif Insari Direct",
      gridSpan: "lg:col-span-7",
      glowColor: "from-[#DC2E3F]/20 to-transparent",
    },
    {
      id: "cis-rebates",
      badge: "CIS SUBCONTRACTORS",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      title: "Fast-Track CIS Tax Refund Claims for Trades",
      subtitle: "Overpaid Tax Recovery",
      readTime: "3 Min Read",
      trendScore: "95% RELEVANCE",
      description:
        "Subcontractors in construction often have 20% flat tax deducted at source. Learn how to reclaim overpaid tax and deduct allowable job expenses.",
      takeaways: [
        "Reclaim overpaid CIS tax deductions directly from HMRC.",
        "Deduct mileage, tools, workwear & equipment expenses.",
        "Average client refund window: 14-21 business days.",
        "Zero-penalty submission guarantee."
      ],
      primaryPhone: "07757510944",
      phoneLabel: "Direct Mobile Fast-Track",
      gridSpan: "lg:col-span-5",
      glowColor: "from-emerald-500/20 to-transparent",
    },
    {
      id: "section-24-landlords",
      badge: "PROPERTY LANDLORDS",
      badgeColor: "bg-[#6B7C96]/10 text-slate-300 border-[#6B7C96]/20",
      title: "Mitigating Section 24 Mortgage Interest Relief Limits",
      subtitle: "Property Tax Structuring",
      readTime: "5 Min Read",
      trendScore: "92% RELEVANCE",
      description:
        "Private landlords facing restricted mortgage interest tax relief can transition portfolio assets into Limited Company SPV frameworks.",
      takeaways: [
        "Compare private ownership vs SPV Limited Company structures.",
        "20% tax credit mechanism vs full mortgage interest expense.",
        "Capital Gains Tax (CGT) & Stamp Duty (SDLT) relief reviews.",
        "Family investment company share class structuring."
      ],
      primaryPhone: "01282611503",
      phoneLabel: "Call Pendle Haven Office",
      gridSpan: "lg:col-span-12",
      glowColor: "from-[#6B7C96]/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 bg-[#0F121A] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decor Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      {/* Radial Lighting Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6B7C96]/15 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-ping" />
              <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                3D STRATEGY MASONRY • TOP 3 TAX BLUEPRINTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              High-Impact <span className="text-[#DC2E3F]">Trending Strategies</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md">
            Tax law evolves constantly. Inspect these 3 priority strategies designed to protect cashflow for UK business owners, trades, and landlords.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {trendingStrategies.map((item) => {
            const isHovered = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`${item.gridSpan} group relative bg-[#12141F] border border-slate-800 hover:border-[#DC2E3F]/60 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isHovered ? "-translate-y-2 shadow-2xl shadow-[#DC2E3F]/10" : ""
                }`}
              >
                {/* Background Ambient Glow Shader */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${item.glowColor} rounded-full filter blur-[80px] pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-40"
                  }`}
                />

                <div>
                  {/* Card Header Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>

                    <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                      <span>{item.readTime}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-emerald-400 font-bold">{item.trendScore}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#DC2E3F] uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#DC2E3F] transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Takeaway Checklist */}
                  <div className="bg-[#0F121A] border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-8 space-y-2.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Strategic Deliverable Checklist:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.takeaways.map((bullet, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Lead Accountant Review by Kashif Insari (MAAT)</span>
                  </div>

                  <a
                    href={`tel:${item.primaryPhone}`}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#DC2E3F]/20 flex items-center justify-center space-x-2 shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{item.phoneLabel}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}