"use client";

import { useState } from "react";

export default function ServicesDeepDiveRunway() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedPillar, setExpandedPillar] = useState(0); // 0, 1, 2, 3
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const pillars = [
    {
      id: 0,
      title: "Statutory Accounts & Legal Frameworks",
      badge: "CORE COMPLIANCE",
      summary: "Annual statutory filings, partnership structures, and charity accounts submitted to Companies House & HMRC.",
      services: [
        {
          name: "Accountancy",
          tagline: "Annual statutory accounts, balance sheets & profit/loss statements.",
          deliverables: [
            "Year-end statutory accounts prepared under UK GAAP / FRS 102 / FRS 105",
            "CT600 Corporation Tax return computation & iXBRL tagging",
            "Trial balance reconciliation & balance sheet audit trail",
            "Direct partner sign-off by Kashif Insari (MAAT)"
          ],
          sla: "14-Day Completion Post Ledger Audit",
          filterCategory: ["ltd", "sole"]
        },
        {
          name: "LLPs",
          tagline: "Limited Liability Partnership accounts, member profit allocation & filings.",
          deliverables: [
            "LLP statutory accounts preparation for Companies House",
            "Member profit-sharing ratio allocation schedules",
            "Partnership Tax Return (SA800) computation",
            "Designated members' compliance oversight"
          ],
          sla: "Zero HMRC Delay Guarantee",
          filterCategory: ["ltd"]
        },
        {
          name: "Partnerships",
          tagline: "Unincorporated partnership accounts, SA800 tax returns & partner allocations.",
          deliverables: [
            "Partnership trading statements & joint profit allocation",
            "SA800 Partnership Tax Return submission to HMRC",
            "Individual partner share statements for SA100 alignment",
            "Capital account tracking & partner draw reconciliations"
          ],
          sla: "Fast-Track Submissions",
          filterCategory: ["sole"]
        },
        {
          name: "Charities Filings",
          tagline: "Charity Commission compliant accounts, SORP guidelines & Gift Aid filings.",
          deliverables: [
            "Charity Commission & OSCR compliant annual returns",
            "Trustee report structuring under Charities SORP (FRS 102)",
            "Independent examiner review & compliance declaration",
            "Gift Aid tax repayment claims processing"
          ],
          sla: "100% Charity Commission SLA",
          filterCategory: ["charity"]
        }
      ]
    },
    {
      id: 1,
      title: "Tax Strategy & HMRC Defense",
      badge: "ZERO PENALTY GUARANTEE",
      summary: "Proactive tax mitigation, MTD VAT returns, Self-Assessments, and HMRC inquiry defense.",
      services: [
        {
          name: "Corporation Tax",
          tagline: "CT600 calculation, capital allowance optimization & R&D relief review.",
          deliverables: [
            "Corporation tax computation & liability minimization",
            "Capital allowances calculation on plant, machinery & fixtures",
            "Loss relief carry-back and carry-forward structuring",
            "HMRC CT600 online filing & payment schedule advisory"
          ],
          sla: "9-Month Pre-Deadline Finalization",
          filterCategory: ["ltd"]
        },
        {
          name: "VAT Returns",
          tagline: "Making Tax Digital (MTD) compliant VAT filing & scheme optimization.",
          deliverables: [
            "Digital MTD VAT return submissions via certified software",
            "Flat Rate, Standard, or Cash Accounting Scheme evaluation",
            "Partial exemption & import/export VAT calculations",
            "HMRC VAT ledger audit & error correction adjustments"
          ],
          sla: "7-Day Pre-Deadline Submission",
          filterCategory: ["ltd", "sole"]
        },
        {
          name: "Self Assessments",
          tagline: "Individual tax returns for sole traders, directors, and high earners.",
          deliverables: [
            "SA100 personal tax return preparation & HMRC electronic filing",
            "Sole trader income/expenditure statement drafting",
            "Dividend & salary tax optimization for company directors",
            "Payment on Account calculations & reduction claims"
          ],
          sla: "Guaranteed Submission Before Jan 31",
          filterCategory: ["sole", "ltd"]
        },
        {
          name: "Tax Returns",
          tagline: "Comprehensive capital gains, CIS subcontractor claims & landlord tax returns.",
          deliverables: [
            "Capital Gains Tax (CGT) 60-day residential property filings",
            "CIS tax overpayment refund claims for construction trades",
            "Section 24 landlord property tax calculations",
            "Direct HMRC inquiry & compliance check defense"
          ],
          sla: "Rapid CIS Tax Refund Processing",
          filterCategory: ["sole", "ltd"]
        }
      ]
    },
    {
      id: 2,
      title: "Operations, Ledger & Payroll",
      badge: "REAL-TIME TELEMETRY",
      summary: "Cloud digital bookkeeping, RTI payroll processing, pensions, and CIS statements.",
      services: [
        {
          name: "Bookkeeping",
          tagline: "Making Tax Digital ledger management & bank reconciliation.",
          deliverables: [
            "Monthly or quarterly bank transaction categorization",
            "Purchase ledger & sales invoice audit tracking",
            "Receipt processing via digital cloud ledgers",
            "Real-time profit & loss statement insights"
          ],
          sla: "Real-Time Digital Ledgers",
          filterCategory: ["ltd", "sole"]
        },
        {
          name: "Payroll",
          tagline: "Full PAYE management, RTI submissions, pension auto-enrolment & payslips.",
          deliverables: [
            "Weekly or monthly PAYE, National Insurance & student loan calculations",
            "Real Time Information (RTI) Full Payment Submissions (FPS) to HMRC",
            "Digital itemized payslips delivered to workforce",
            "Workplace Pension auto-enrolment compliance & upload"
          ],
          sla: "Same-Day Pay Period Processing",
          filterCategory: ["ltd", "sole"]
        },
        {
          name: "HMRC Reports",
          tagline: "CIS monthly returns, P11D benefits in kind & statutory HMRC disclosures.",
          deliverables: [
            "Monthly Construction Industry Scheme (CIS) returns",
            "Subcontractor payment & deduction statements",
            "P11D & P11D(b) expenses and benefits-in-kind returns",
            "Employer Payment Summary (EPS) submissions"
          ],
          sla: "100% Timely Submissions",
          filterCategory: ["ltd", "sole"]
        }
      ]
    },
    {
      id: 3,
      title: "Corporate Governance & Growth",
      badge: "EXECUTIVE SUITE",
      summary: "Companies House statutory administration, structural compliance & investor business planning.",
      services: [
        {
          name: "Company Secretarials",
          tagline: "Companies House filings, share allotments & statutory registers.",
          deliverables: [
            "Annual Confirmation Statement (CS01) filing",
            "Maintenance of Persons with Significant Control (PSC) register",
            "Share transfers, new share issues & board resolution drafting",
            "Registered office service & official mail handling"
          ],
          sla: "Instant Companies House Sync",
          filterCategory: ["ltd"]
        },
        {
          name: "Compliance",
          tagline: "Anti-Money Laundering (AML) checks & statutory health checks.",
          deliverables: [
            "Comprehensive corporate compliance health check",
            "AML identity verification & risk assessment procedures",
            "Director responsibilities guidance under Companies Act 2006",
            "HMRC statutory register audit defense preparation"
          ],
          sla: "Full Regulatory Protection",
          filterCategory: ["ltd", "charity"]
        },
        {
          name: "Business Plans",
          tagline: "Financial modeling, cashflow forecasting & bank funding proposals.",
          deliverables: [
            "5-Year financial projections (P&L, Balance Sheet, Cashflow)",
            "Commercial loan & bank funding application packs",
            "Break-even analysis & working capital requirement forecasting",
            "Investor pitch deck financial backing documentation"
          ],
          sla: "Tailored Executive Formatting",
          filterCategory: ["ltd", "sole", "charity"]
        }
      ]
    }
  ];

  const filterLabels = [
    { key: "all", label: "All 14 Services" },
    { key: "ltd", label: "Limited Companies & LLPs" },
    { key: "sole", label: "Sole Traders & Partnerships" },
    { key: "charity", label: "Charities & Non-Profits" }
  ];

  return (
    <section className="py-24 bg-[#0F121A] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decor Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-ping" />
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              14 CORE PRACTICE DELIVERABLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Architectural <span className="text-[#DC2E3F]">Services Runway</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Inspect our exact deliverables across all 14 core accountancy disciplines. Select a pillar below to open the live deliverable drawer.
          </p>

          {/* Business Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterLabels.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setActiveFilter(f.key);
                  setActiveServiceIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeFilter === f.key
                    ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Runway Bands Container */}
        <div className="space-y-6">
          {pillars.map((pillar) => {
            // Filter services inside pillar based on activeFilter
            const filteredServices = pillar.services.filter((s) =>
              activeFilter === "all" ? true : s.filterCategory.includes(activeFilter)
            );

            if (filteredServices.length === 0) return null;

            const isExpanded = expandedPillar === pillar.id;
            const currentService = filteredServices[activeServiceIndex] || filteredServices[0];

            return (
              <div
                key={pillar.id}
                className={`bg-[#12141F] border rounded-2xl transition-all duration-300 overflow-hidden shadow-2xl ${
                  isExpanded ? "border-[#DC2E3F]/60 shadow-[#DC2E3F]/10" : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Band Header / Trigger Bar */}
                <div
                  onClick={() => {
                    setExpandedPillar(isExpanded ? null : pillar.id);
                    setActiveServiceIndex(0);
                  }}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#12141F] hover:bg-[#1A1D29]/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DC2E3F]/10 border border-[#DC2E3F]/30 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm font-black text-[#DC2E3F]">0{pillar.id + 1}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {pillar.badge}
                        </span>
                        <span className="text-xs text-slate-400">
                          ({filteredServices.length} {filteredServices.length === 1 ? "Service" : "Services"})
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 max-w-2xl">{pillar.summary}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0 self-end md:self-auto">
                    <span className="text-xs font-semibold text-slate-400">
                      {isExpanded ? "Collapse Pillar" : "Inspect Deliverables"}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-[#DC2E3F] text-white" : ""
                      }`}
                    >
                      ↓
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Content */}
                {isExpanded && (
                  <div className="border-t border-slate-800/80 bg-[#0F121A] p-6 md:p-8 animate-fadeIn">
                    
                    {/* Horizontal Service Selector Pills */}
                    <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
                      {filteredServices.map((srv, idx) => (
                        <button
                          key={srv.name}
                          onClick={() => setActiveServiceIndex(idx)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                            activeServiceIndex === idx
                              ? "bg-[#DC2E3F] text-white shadow-md shadow-[#DC2E3F]/20"
                              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                          }`}
                        >
                          <span>{srv.name}</span>
                          <span className="text-[10px] opacity-75">→</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Service Detail Deck */}
                    {currentService && (
                      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Left: Deliverables Checklist */}
                        <div className="lg:col-span-8 space-y-4">
                          <div>
                            <span className="text-xs font-bold text-[#DC2E3F] uppercase tracking-wider">
                              OFFICIAL HMRC & PRACTICE DELIVERABLES
                            </span>
                            <h4 className="text-2xl font-bold text-white mt-0.5">
                              {currentService.name}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1">
                              {currentService.tagline}
                            </p>
                          </div>

                          <div className="bg-[#12141F] border border-slate-800 rounded-xl p-5 space-y-3">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                              Standard Output Checklist:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {currentService.deliverables.map((item, dIdx) => (
                                <div key={dIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                                  <svg className="w-4 h-4 text-[#DC2E3F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Statutory SLA & Direct Telemetry Box */}
                        <div className="lg:col-span-4 bg-[#12141F] border border-slate-800 rounded-xl p-6 space-y-4">
                          <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                              Service Guarantee & SLA
                            </span>
                            <span className="text-sm font-black text-white block mt-0.5">
                              {currentService.sla}
                            </span>
                          </div>

                          <div className="border-t border-slate-800 pt-4 space-y-3">
                            <span className="text-xs text-slate-300 font-semibold block">
                              Discuss {currentService.name} direct with Lead Accountant Kashif Insari (MAAT):
                            </span>

                            <a
                              href="tel:07757510944"
                              className="w-full py-3 px-4 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold text-center block transition shadow-lg shadow-[#DC2E3F]/20"
                            >
                              Call Mobile: 07757 510944
                            </a>

                            <a
                              href="tel:01282611503"
                              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center block transition border border-slate-700"
                            >
                              Call Office: 01282 611503
                            </a>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}