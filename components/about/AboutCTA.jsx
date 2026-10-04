"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutCTA() {
  const [activeTab, setActiveTab] = useState("phone"); // 'phone' | 'visit'
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2500);
  };

  return (
    <section className="relative py-24 bg-[#1A1D29] text-white overflow-hidden border-t border-slate-800">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#6B7C96]/15 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12141F_1px,transparent_1px),linear-gradient(to_bottom,#12141F_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Banner Container */}
        <div className="bg-[#12141F] border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Accent Glow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC2E3F] via-[#6B7C96] to-[#DC2E3F]" />

          {/* Toast Notification for Copying */}
          {copiedText && (
            <div className="fixed bottom-8 right-8 z-50 bg-[#DC2E3F] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 animate-bounce">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied {copiedText} to clipboard!</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                  Pendle Enterprise HQ • Direct Line Access
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Work Direct with <span className="text-[#DC2E3F]">Kashif Insari (MAAT)</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Take full control of your accounting, payroll, and HMRC tax obligations with zero middleman friction. Call us directly or visit our office at Pendle Enterprise Haven.
              </p>

              {/* Verified HQ Badge Box */}
              <div className="p-4 rounded-2xl bg-[#0F121A] border border-slate-800 flex items-start space-x-4">
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
                  <div className="text-sm font-semibold text-white">
                    Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Free Client Parking On-Site • Wheelchair Accessible • Mon–Fri 09:00 - 17:00
                  </div>
                </div>
              </div>

              {/* Direct Call Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:07757510944"
                  className="px-6 py-3.5 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#DC2E3F]/25 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Direct: 07757 510944</span>
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 flex items-center space-x-2"
                >
                  <span>Book Free Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive HQ Dispatch Terminal */}
            <div className="lg:col-span-6 bg-[#0F121A] border border-slate-800 rounded-2xl p-6 shadow-inner">
              {/* Terminal Navigation Switcher */}
              <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800 mb-6">
                <button
                  onClick={() => setActiveTab("phone")}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "phone"
                      ? "bg-[#DC2E3F] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Direct Telephone Lines
                </button>
                <button
                  onClick={() => setActiveTab("visit")}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "visit"
                      ? "bg-[#DC2E3F] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  In-Person HQ Visit
                </button>
              </div>

              {/* TAB 1: DIRECT TELEPHONE */}
              {activeTab === "phone" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#DC2E3F] uppercase tracking-wider">
                        Direct Mobile (Kashif Insari)
                      </div>
                      <div className="text-lg font-black text-white mt-0.5">07757 510944</div>
                      <div className="text-[11px] text-slate-400">Urgent tax notices & direct lead accountancy</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard("07757510944", "Mobile Number")}
                        className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                        title="Copy Mobile Number"
                      >
                        Copy
                      </button>
                      <a
                        href="tel:07757510944"
                        className="px-3.5 py-2.5 rounded-lg bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-bold transition"
                      >
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#6B7C96] uppercase tracking-wider">
                        Office Landline (Pendle Haven HQ)
                      </div>
                      <div className="text-lg font-black text-white mt-0.5">01282 611503</div>
                      <div className="text-[11px] text-slate-400">Appointments & reception desk</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard("01282611503", "Landline Number")}
                        className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                        title="Copy Landline Number"
                      >
                        Copy
                      </button>
                      <a
                        href="tel:01282611503"
                        className="px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
                      >
                        Call
                      </a>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-400">
                      Standard Operating Hours: Monday – Friday, 9:00 AM – 5:00 PM
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: IN-PERSON VISIT */}
              {activeTab === "visit" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-bold text-white mb-2 flex items-center justify-between">
                      <span>HQ Address</span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            "Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX",
                            "Full HQ Address"
                          )
                        }
                        className="text-[10px] text-[#DC2E3F] hover:underline"
                      >
                        Copy Full Address
                      </button>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-mono bg-black/40 p-3 rounded-lg border border-slate-800/80">
                      Adamson Accountants & Tax Consultants
                      <br />
                      Pendle Enterprise Haven
                      <br />
                      138 Every Street
                      <br />
                      Nelson, Lancashire, BB9 7EX
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Parking</span>
                      <span className="text-white font-semibold">Free On-Site Visitor Parking</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Consultation</span>
                      <span className="text-white font-semibold">By Appointment or Direct Call</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Pendle+Enterprise+Haven+138+Every+Street+Nelson+BB9+7EX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold text-center block transition border border-slate-700"
                  >
                    Open Directions in Google Maps →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}