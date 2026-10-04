"use client";

import { useState } from "react";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "directors", label: "Ltd Directors" },
    { id: "cis", label: "CIS Subcontractors" },
    { id: "mtd", label: "MTD & VAT" },
    { id: "sole", label: "Sole Traders" },
  ];

  const articles = [
    {
      id: 1,
      category: "mtd",
      categoryBadge: "MAKING TAX DIGITAL",
      title: "Making Tax Digital (MTD) for Income Tax: Lancashire Deadline Roadmap",
      readTime: "4 Min Read",
      date: "Oct 2024",
      excerpt:
        "Making Tax Digital is expanding to sole traders and landlords. Learn how digital cloud ledgers protect you from automated HMRC late submission penalties.",
      takeaways: [
        "Quarterly digital updates replace annual self-assessment panic.",
        "Mandatory compatible cloud software for income over £50k.",
        "End of Period Statement (EOPS) preparation rules.",
        "Zero-penalty software transition setup by Adamson Accountants."
      ],
      phone: "07757510944",
      accentColor: "border-[#DC2E3F]"
    },
    {
      id: 2,
      category: "cis",
      categoryBadge: "CONSTRUCTION INDUSTRY",
      title: "CIS Subcontractor Tax Refunds: Claiming Overpaid 20% Tax Deductions",
      readTime: "3 Min Read",
      date: "Oct 2024",
      excerpt:
        "Subcontractors deducted at 20% flat rate often overpay HMRC. Discover allowable job expenses and fast-track rebate procedures.",
      takeaways: [
        "Claim mileage, tools, protective workwear & site travel costs.",
        "Direct HMRC payment offset against personal tax liabilities.",
        "Average client refund window: 14 to 21 business days.",
        "100% verified submission by Kashif Insari (MAAT)."
      ],
      phone: "07757510944",
      accentColor: "border-emerald-500"
    },
    {
      id: 3,
      category: "directors",
      categoryBadge: "COMPANY COMPLIANCE",
      title: "Confirmation Statements & PSC Registers: Avoid Companies House Strike-Off",
      readTime: "5 Min Read",
      date: "Sep 2024",
      excerpt:
        "Failure to file your CS01 Confirmation Statement on time can lead to director prosecution and company dissolution. Here is your compliance checklist.",
      takeaways: [
        "Persons with Significant Control (PSC) verification audit.",
        "Registered office and share capital record updates.",
        "Instant electronic filing to Companies House portal.",
        "Automatic annual secretarial deadline protection."
      ],
      phone: "01282611503",
      accentColor: "border-[#6B7C96]"
    },
    {
      id: 4,
      category: "sole",
      categoryBadge: "SELF-ASSESSMENT",
      title: "HMRC Late Penalty Defense: Appealing & Preventing £100 Automatic Fines",
      readTime: "4 Min Read",
      date: "Sep 2024",
      excerpt:
        "Missed the Jan 31 Self-Assessment deadline? Learn what constitutes a reasonable excuse and how we appeal automatic HMRC daily fines.",
      takeaways: [
        "Reasonable excuse criteria accepted by HMRC tax tribunals.",
        "Daily £10 penalties and interest mitigation strategies.",
        "Fast-track SA100 return preparation & submission.",
        "Direct telephone representation with HMRC inspectors."
      ],
      phone: "07757510944",
      accentColor: "border-[#DC2E3F]"
    },
    {
      id: 5,
      category: "mtd",
      categoryBadge: "VAT STRATEGY",
      title: "VAT Flat Rate Scheme vs. Standard Scheme: Which Saves More Money?",
      readTime: "5 Min Read",
      date: "Aug 2024",
      excerpt:
        "Choosing the wrong VAT scheme can cost small businesses thousands. Compare Flat Rate, Cash Accounting, and Standard schemes.",
      takeaways: [
        "Flat Rate percentage calculations per industry sector.",
        "Limited Cost Trader 16.5% trap and how to avoid it.",
        "Cash Accounting scheme cashflow benefits for unpaid invoices.",
        "Quarterly MTD digital submission compliance."
      ],
      phone: "01282611503",
      accentColor: "border-[#6B7C96]"
    },
    {
      id: 6,
      category: "directors",
      categoryBadge: "PROPERTY TAX",
      title: "60-Day CGT Reporting Rule on UK Residential Property Disposals",
      readTime: "4 Min Read",
      date: "Aug 2024",
      excerpt:
        "Selling a buy-to-let or second property? HMRC requires Capital Gains Tax (CGT) returns and payments within 60 days of completion.",
      takeaways: [
        "60-day strict reporting window to prevent interest penalties.",
        "Private Residence Relief (PRR) & letting relief calculations.",
        "Capital losses offset against gains to minimize CGT bill.",
        "Direct calculation by Lead Accountant Kashif Insari (MAAT)."
      ],
      phone: "07757510944",
      accentColor: "border-emerald-500"
    }
  ];

  // Filtering Logic
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === "all" || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#12141F] text-white relative overflow-hidden border-t border-slate-800">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              INTERACTIVE KNOWLEDGE ENGINE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The Practice <span className="text-[#DC2E3F]">Insight Ledger</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Hover over any guide to stretch its analysis and inspect key practice deliverables.
          </p>
        </div>

        {/* Filter & Search Control Desk */}
        <div className="mb-12 bg-[#0F121A] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/20 scale-105"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search tax guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#DC2E3F] transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-500 absolute left-3.5 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* STRETCH-GRID ARTICLES CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredArticles.map((art) => {
            const isHovered = hoveredId === art.id;

            return (
              <div
                key={art.id}
                onMouseEnter={() => setHoveredId(art.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group bg-[#0F121A] border rounded-3xl p-6 shadow-2xl transition-all duration-500 ease-out cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? `border-[#DC2E3F] shadow-2xl shadow-[#DC2E3F]/15 -translate-y-2 scale-[1.03] z-20`
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Accent Header Glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 ${
                    isHovered ? "bg-[#DC2E3F]" : "bg-slate-800"
                  }`}
                />

                <div>
                  {/* Card Meta Header */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 text-[#DC2E3F] border border-slate-800">
                      {art.categoryBadge}
                    </span>
                    <div className="text-[11px] font-mono text-slate-500">
                      {art.readTime}
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DC2E3F] transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>

                  {/* SMOOTH STRETCH ACCORDION DRAWER (UNCOLLAPSES ON HOVER) */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isHovered ? "max-h-80 opacity-100 mb-6 pt-3 border-t border-slate-800" : "max-h-0 opacity-0 mb-0"
                    }`}
                  >
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Practice Takeaways:
                    </div>
                    <div className="space-y-2">
                      {art.takeaways.map((bullet, tIdx) => (
                        <div key={tIdx} className="flex items-start space-x-2 text-[11px] text-slate-200">
                          <span className="text-[#DC2E3F] font-bold">✓</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">
                    By Kashif Insari (MAAT)
                  </span>

                  <a
                    href={`tel:${art.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                      isHovered
                        ? "bg-[#DC2E3F] text-white shadow-md shadow-[#DC2E3F]/20"
                        : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                    }`}
                  >
                    <span>Discuss</span>
                    <span>→</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* No Results Fallback */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 bg-[#0F121A] border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-400 text-sm">
              No tax guides found matching your search. Speak directly with Lead Accountant Kashif Insari (MAAT) on <a href="tel:07757510944" className="text-[#DC2E3F] font-bold underline">07757 510944</a>.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}