"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogCTA() {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2500);
  };

  return (
    <section className="relative py-24 bg-[#1A1D29] text-white overflow-hidden border-t border-slate-800">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#6B7C96]/15 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12141F_1px,transparent_1px),linear-gradient(to_bottom,#12141F_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

      {/* Copy Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#DC2E3F] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 animate-bounce">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>Copied {copiedText} to clipboard!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="bg-[#12141F] border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Accent Glow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC2E3F] via-[#6B7C96] to-[#DC2E3F]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Practice Information */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                  DIRECT ADVISORY HOTLINE • PENDLE HAVEN HQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Need Tactical Tax Advice For Your <span className="text-[#DC2E3F]">Specific Situation</span>?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Tax guides provide the blueprint, but exact execution requires direct chartered oversight. Speak directly with Lead Accountant <span className="text-white font-bold underline decoration-[#DC2E3F]">Kashif Insari (MAAT)</span> today.
              </p>

              {/* Practice Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0F121A] border border-slate-800/80 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#DC2E3F]/10 border border-[#DC2E3F]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#DC2E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Verified Practice Location
                  </div>
                  <div className="text-sm font-bold text-white">
                    Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>✓ Free On-Site Client Parking</span>
                    <span>✓ Mon–Fri 09:00 - 17:00</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                  🛡️ Zero HMRC Penalty Guarantee
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                  ⚡ 24-Hour Urgent Query SLA
                </span>
              </div>

            </div>

            {/* Right Column: Direct Call Terminal */}
            <div className="lg:col-span-5 bg-[#0F121A] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
              
              <div className="text-center border-b border-slate-800 pb-4">
                <span className="text-[10px] font-bold text-[#DC2E3F] uppercase tracking-widest block mb-1">
                  IMMEDIATE TELEPHONE ROUTING
                </span>
                <h3 className="text-lg font-black text-white">
                  Speak With Kashif Insari (MAAT)
                </h3>
              </div>

              {/* Direct Mobile Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#DC2E3F] uppercase tracking-wider">
                    Direct Mobile Line
                  </div>
                  <div className="text-xl font-black text-white mt-0.5 font-mono">
                    07757 510944
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Urgent tax queries & direct advisory
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => copyToClipboard("07757510944", "Mobile Number")}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                    title="Copy Mobile"
                  >
                    Copy
                  </button>
                  <a
                    href="tel:07757510944"
                    className="px-4 py-2.5 rounded-lg bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold transition shadow-md shadow-[#DC2E3F]/20"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Office Landline Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-[#6B7C96] uppercase tracking-wider">
                    Pendle Haven HQ Office
                  </div>
                  <div className="text-xl font-black text-white mt-0.5 font-mono">
                    01282 611503
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Appointments & general reception
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => copyToClipboard("01282611503", "Landline Number")}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                    title="Copy Landline"
                  >
                    Copy
                  </button>
                  <a
                    href="tel:01282611503"
                    className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition border border-slate-700"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Consultation Booking Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#1A1D29] hover:bg-slate-200 text-xs font-black uppercase tracking-wider text-center block transition shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Book Formal In-Person Review</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}