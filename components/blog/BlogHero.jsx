"use client";

import { useState } from "react";

export default function BlogHero() {
  const [isPaused, setIsPaused] = useState(false);

  const tickerItems = [
    "● HMRC LIVE: 2024/25 Self-Assessment Window Open",
    "● MTD ALERT: Income Tax Digital Mandate Guidance Updated",
    "● CIS TAX REBATES: Fast-Track Claims Active for Lancashire Subcontractors",
    "● CORP TAX: 19% to 25% Marginal Relief Breakdown Available",
    "● PENDLE ENTERPRISE HQ: Direct Consultations Open with Kashif Insari (MAAT)",
  ];

  // Dummy pages content for the turning book
  const bookPages = [
    {
      chapter: "SECTION 01",
      title: "Corporation Tax & CT600",
      content: "Capital Allowances, AIA 100% First-Year Write-offs, Loss Relief & Marginal Rate Calculations.",
      tag: "HMRC APPROVED",
    },
    {
      chapter: "SECTION 02",
      title: "Making Tax Digital (MTD)",
      chapterNum: "02",
      content: "Digital Ledger Bridge, Real-time VAT Filing, Quarterly Submissions & Cloud Sync.",
      tag: "MTD COMPLIANT",
    },
    {
      chapter: "SECTION 03",
      title: "CIS & Subcontractor Claims",
      content: "20% Flat Rate Tax Deduction Overpayments, Monthly CIS Returns & Rapid HMRC Rebates.",
      tag: "FAST REBATE",
    },
    {
      chapter: "SECTION 04",
      title: "Self-Assessment & Director Pay",
      content: "Salary vs Dividend Tax Optimization, Payment on Account Reduction & Jan 31 Filing.",
      tag: "TAX OPTIMIZED",
    },
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#0F121A] text-white pt-20 pb-20 overflow-hidden flex flex-col justify-center border-b border-slate-800">
      
      {/* ========================================================================= */}
      {/* GIANT 3D FLIPPING LEDGER BOOK BACKGROUND ENGINE                            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 opacity-30 md:opacity-40">
        
        {/* Perspective Stage */}
        <div className="relative w-[340px] sm:w-[550px] md:w-[700px] h-[320px] sm:h-[420px] perspective-[1400px]">
          
          {/* Main Book 3D Container (Angled towards viewer) */}
          <div 
            className="w-full h-full relative transform-style-3d transition-transform duration-700"
            style={{
              transform: "rotateX(25deg) rotateY(-18deg) rotateZ(2deg)",
            }}
          >
            {/* Book Spine Shadow / Glowing Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[90%] bg-[#DC2E3F] blur-2xl opacity-60 z-10" />

            {/* LEFT FIXED COVER / PAGE BED */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-[#12141F] border-2 border-slate-700/80 rounded-l-2xl p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:100%_1.5rem] opacity-30" />
              <div className="relative z-10 space-y-3">
                <div className="text-[10px] font-mono font-bold text-[#DC2E3F] uppercase tracking-widest border-b border-slate-800 pb-2">
                  ADAMSON STATUTORY TAX LEDGER
                </div>
                <div className="text-xs font-black text-white uppercase tracking-wider">
                  PENDLE ENTERPRISE HAVEN HQ
                </div>
                <div className="space-y-1 text-[9px] font-mono text-slate-400">
                  <p>► Lead Accountant: Kashif Insari (MAAT)</p>
                  <p>► Direct Line: 07757 510944</p>
                  <p>► Landline: 01282 611503</p>
                  <p>► Location: Nelson, BB9 7EX</p>
                </div>
              </div>
              <div className="relative z-10 text-[9px] font-mono text-emerald-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                <span>● ZERO HMRC LATE PENALTIES</span>
                <span>VOL. 2024/25</span>
              </div>
            </div>

            {/* RIGHT FIXED COVER / UNDERLYING BED */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0F121A] border-2 border-slate-800 rounded-r-2xl p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:100%_1.5rem] opacity-20" />
              <div className="relative z-10 space-y-3 text-right">
                <div className="text-[10px] font-mono font-bold text-[#6B7C96] uppercase tracking-widest border-b border-slate-800 pb-2">
                  REGISTERED PRACTICE
                </div>
                <div className="text-xs font-black text-slate-300">
                  COMPLIANCE & AUDIT ARCHITECTURE
                </div>
                <p className="text-[9px] font-mono text-slate-500">
                  Full iXBRL Corporation Tax tagging, MTD Cloud Ledgers, Self-Assessment submissions & CIS Contractor Rebates.
                </p>
              </div>
              <div className="relative z-10 text-[9px] font-mono text-slate-500 text-right border-t border-slate-800 pt-2">
                PAGE END // ADAMSON ACCOUNTANTS
              </div>
            </div>

            {/* CONTINUOUSLY TURNING 3D PAGES */}
            {bookPages.map((page, idx) => (
              <div
                key={idx}
                className="absolute right-0 top-0 w-1/2 h-full origin-left transform-style-3d animate-[page-flip_12s_cubic-bezier(0.645,0.045,0.355,1)_infinite]"
                style={{
                  animationDelay: `${idx * 3}s`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {/* FRONT FACE OF TURNING PAGE */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[#12141F] border-2 border-[#DC2E3F]/40 rounded-r-2xl p-6 flex flex-col justify-between shadow-2xl backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:100%_1.5rem] opacity-30" />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[9px] font-mono font-bold text-[#DC2E3F] uppercase">
                        {page.chapter}
                      </span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-[#DC2E3F]/20 text-[#DC2E3F] border border-[#DC2E3F]/30">
                        {page.tag}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white">{page.title}</h4>
                    <p className="text-[10px] text-slate-300 leading-relaxed font-mono">
                      {page.content}
                    </p>
                  </div>

                  <div className="relative z-10 text-[8px] font-mono text-slate-500 flex justify-between border-t border-slate-800 pt-2">
                    <span>ADAMSON TAX ARCHIVE</span>
                    <span>TURNING...</span>
                  </div>
                </div>

                {/* BACK FACE OF TURNING PAGE */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[#1A1D29] border-2 border-[#6B7C96]/40 rounded-l-2xl p-6 flex flex-col justify-between shadow-2xl backface-hidden"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#12141F_1px,transparent_1px)] bg-[size:100%_1.5rem] opacity-30" />
                  <div className="relative z-10 space-y-3 text-right">
                    <div className="text-[9px] font-mono font-bold text-[#6B7C96] uppercase border-b border-slate-800 pb-2">
                      VERIFIED DIRECTORY
                    </div>
                    <div className="text-xs font-bold text-white">
                      EXPERT TAX ADVICE
                    </div>
                    <p className="text-[9px] text-slate-300 font-mono">
                      Over 1,200 accounts managed without statutory HMRC penalties.
                    </p>
                  </div>

                  <div className="relative z-10 text-[8px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                    SECTION VERIFIED BY KASHIF INSARI (MAAT)
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Red Ambient Background Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#DC2E3F]/10 rounded-full filter blur-[170px] pointer-events-none" />

      {/* TOP KINETIC MARQUEE TICKER */}
      <div className="absolute top-0 inset-x-0 bg-[#12141F]/90 backdrop-blur-md border-b border-slate-800 py-2.5 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono font-bold tracking-wider text-slate-300 mx-6 flex items-center space-x-2"
            >
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FOREGROUND HERO CONTENT OVERLAY (ATMOSPHERIC & CONTRASTED)                */}
      {/* ========================================================================= */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-8"
      >
        
        {/* Live Status Pill */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2E3F] animate-ping" />
          <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
            UK TAX INTELLIGENCE & HMRC KNOWLEDGE LEDGER
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white mb-6">
          Tactical Tax Insights & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2E3F] via-slate-100 to-[#6B7C96]">
            Pre-Emptive HMRC Defense.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Actionable UK tax strategies, MTD digital mandates, and CIS recovery blueprints—authored directly by Senior Practice Principal{" "}
          <span className="text-white font-bold underline decoration-[#DC2E3F] decoration-2">
            Kashif Insari (MAAT)
          </span>{" "}
          at Pendle Enterprise Haven.
        </p>

        {/* Featured Insight Glass Banner */}
        <div className="bg-[#12141F]/90 border border-slate-700 hover:border-[#DC2E3F] rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto transition-all duration-300 text-left mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-[#DC2E3F] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
            THIS MONTH'S LEAD STRATEGY
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs">
                <span className="font-bold text-[#DC2E3F] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#DC2E3F]/10 border border-[#DC2E3F]/20">
                  TAX PLANNING 2024/25
                </span>
                <span className="text-slate-400 font-mono">5 Min Read</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#DC2E3F] transition-colors">
                5 Capital Allowances UK Directors Overlook Before Year-End
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Leverage Full Expensing, 100% First-Year AIA, and electric vehicle write-offs to cut Corporation Tax legally.
              </p>
            </div>

            <div className="shrink-0 flex items-center">
              <a
                href="tel:07757510944"
                className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#DC2E3F]/25 flex items-center justify-center space-x-2"
              >
                <span>Discuss With Kashif</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Access Phone Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:07757510944"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition border border-slate-700 flex items-center space-x-2 shadow-xl"
          >
            <svg className="w-4 h-4 text-[#DC2E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Direct Mobile: 07757 510944</span>
          </a>

          <a
            href="tel:01282611503"
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold transition border border-slate-700 flex items-center space-x-2 shadow-xl"
          >
            <span>Pendle HQ Office: 01282 611503</span>
          </a>
        </div>

        <div className="mt-4 text-xs text-slate-500 font-medium">
          Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX
        </div>

      </div>

      {/* Keyframe Styles for 3D Page Turn Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes page-flip {
          0% {
            transform: rotateY(0deg);
            z-index: 10;
          }
          25% {
            transform: rotateY(-180deg);
            z-index: 10;
          }
          25.01%, 100% {
            transform: rotateY(-180deg);
            z-index: 1;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </section>
  );
}     