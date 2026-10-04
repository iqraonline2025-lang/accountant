"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTORS = [
  { id: "all", label: "All Sectors" },
  { id: "tech", label: "Tech & SaaS" },
  { id: "real-estate", label: "Real Estate" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "healthcare", label: "Healthcare" },
];

const REVIEWS = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    role: "CEO & Founder",
    company: "Apex Cloud Solutions",
    gender: "male",
    sector: "tech",
    sectorLabel: "Tech & SaaS",
    avatar: "MV",
    rating: 5,
    impactStat: "£84,000",
    impactLabel: "R&D Tax Cash Reclaimed",
    quote:
      "Adamson overhauled our SaaS financial structure completely. Their proactive R&D tax credit guidance unlocked £84k in cash back we had no idea we were eligible for within just 90 days.",
    audioDuration: "12s read",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    role: "Managing Director",
    company: "Luxe Property Developments",
    gender: "female",
    sector: "real-estate",
    sectorLabel: "Real Estate",
    avatar: "ER",
    rating: 5,
    impactStat: "100%",
    impactLabel: "On-Time VAT Submissions",
    quote:
      "Managing complex construction capital allowances used to give us constant headaches. The team at Adamson automated our CIS returns and cut our tax advisory costs significantly.",
    audioDuration: "14s read",
  },
  {
    id: "rev-3",
    author: "David Chen",
    role: "Head of Operations",
    company: "Veloce Retail Ltd",
    gender: "male",
    sector: "ecommerce",
    sectorLabel: "E-Commerce",
    avatar: "DC",
    rating: 5,
    impactStat: "3x Faster",
    impactLabel: "Month-End Close Speed",
    quote:
      "With multi-currency shopify integration, our accounts update in real-time. We went from waiting 3 weeks for month-end reports to getting live profit dashboards every single morning.",
    audioDuration: "15s read",
  },
  {
    id: "rev-4",
    author: "Dr. Sarah Jenkins",
    role: "Practice Principal",
    company: "Harley Health Group",
    gender: "female",
    sector: "healthcare",
    sectorLabel: "Healthcare",
    avatar: "SJ",
    rating: 5,
    impactStat: "£32,000",
    impactLabel: "Annual Overhead Saved",
    quote:
      "Their direct WhatsApp line to a dedicated chartered accountant is game-changing. Any payroll or associate doctor query is answered in under an hour with absolute clarity.",
    audioDuration: "11s read",
  },
];

const CASE_STUDIES = [
  {
    id: "cs-1",
    title: "Unlocking Cross-Border Growth for SaaS Scale-Up",
    client: "Apex Cloud Solutions",
    sector: "tech",
    sectorLabel: "Tech & SaaS",
    metric: "£84,000",
    metricLabel: "R&D Relief Tax Credit Secured",
    duration: "3 Months",
    challenge:
      "Complex multi-jurisdiction intellectual property licensing and unclaimed software developer R&D expenses.",
    solution:
      "Restructured IP tax holding model and conducted full retrospective software engineering audit to claim eligible R&D tax relief.",
  },
  {
    id: "cs-2",
    title: "Optimizing Capital Allowances on £12M Commercial Build",
    client: "Luxe Property Developments",
    sector: "real-estate",
    sectorLabel: "Real Estate",
    metric: "£145,000",
    metricLabel: "Capital Allowance Savings",
    duration: "6 Months",
    challenge:
      "Significant tax leakage due to unclassified plant & machinery assets in commercial property acquisition.",
    solution:
      "Deployed specialist property tax surveyors to perform itemized asset breakdown and file embedded capital allowance claims.",
  },
  {
    id: "cs-3",
    title: "Automating Multi-Currency VAT & Inventory Accounting",
    client: "Veloce Retail Ltd",
    sector: "ecommerce",
    sectorLabel: "E-Commerce",
    metric: "0 Penalties",
    metricLabel: "EU & UK One Stop Shop (OSS) VAT",
    duration: "2 Months",
    challenge:
      "Fragmented sales data across Amazon EU, Shopify, and local fulfillment hubs causing tax filing delays.",
    solution:
      "Integrated automated cloud telemetry bridges connecting Shopify directly to Xero with automated OSS VAT calculations.",
  },
];

export default function TestimonialsSpotlight() {
  const [activeTab, setActiveTab] = useState("reviews");
  const [activeSector, setActiveSector] = useState("all");
  const [playingAudioId, setPlayingAudioId] = useState(null);

  // Stop speech synthesis if user switches tabs or unmounts component
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeTab]);

  const filteredReviews = REVIEWS.filter(
    (rev) => activeSector === "all" || rev.sector === activeSector
  );

  const filteredCaseStudies = CASE_STUDIES.filter(
    (cs) => activeSector === "all" || cs.sector === activeSector
  );

  // DYNAMIC GENDER-MATCHED VOICE TEXT-TO-SPEECH
  const handleAudioPlayback = (rev) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (playingAudioId === rev.id) {
      window.speechSynthesis.cancel();
      setPlayingAudioId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(rev.quote);
    utterance.rate = 0.92;

    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      if (rev.gender === "female") {
        // Find browser voice explicitly named female or common female voice identifiers
        const femaleVoice = voices.find(
          (v) =>
            v.lang.includes("en") &&
            (v.name.toLowerCase().includes("female") ||
              v.name.toLowerCase().includes("samantha") ||
              v.name.toLowerCase().includes("victoria") ||
              v.name.toLowerCase().includes("karen") ||
              v.name.toLowerCase().includes("zira") ||
              v.name.toLowerCase().includes("fiona") ||
              v.name.toLowerCase().includes("hazel") ||
              v.name.toLowerCase().includes("google uk english female"))
        ) || voices.find((v) => v.lang.includes("en"));

        if (femaleVoice) {
          utterance.voice = femaleVoice;
          // Slightly higher pitch modulation for female speech clarity
          utterance.pitch = 1.15;
        }
      } else {
        // Find male voice
        const maleVoice = voices.find(
          (v) =>
            v.lang.includes("en") &&
            (v.name.toLowerCase().includes("male") ||
              v.name.toLowerCase().includes("alex") ||
              v.name.toLowerCase().includes("daniel") ||
              v.name.toLowerCase().includes("david") ||
              v.name.toLowerCase().includes("george") ||
              v.name.toLowerCase().includes("google uk english male"))
        ) || voices.find((v) => v.lang.includes("en"));

        if (maleVoice) {
          utterance.voice = maleVoice;
          utterance.pitch = 0.95;
        }
      }
    }

    utterance.onend = () => {
      setPlayingAudioId(null);
    };

    utterance.onerror = () => {
      setPlayingAudioId(null);
    };

    setPlayingAudioId(rev.id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#1A1D29] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#DC2E3F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6B7C96]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay */}
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121A] border border-white/10 text-xs font-semibold text-[#DC2E3F] uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
            Verified Client Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Real Businesses.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#DC2E3F]">
              Measurable Financial Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#6B7C96]"
          >
            Explore verified founder testimonials and documented case studies across industry sectors.
          </motion.p>
        </div>

        {/* TRUST AUTHORITY BADGES BAR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 p-4 rounded-2xl bg-[#0F121A]/80 border border-white/10 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 p-2 justify-center border-r border-white/5 last:border-0">
            <div className="text-[#DC2E3F] font-black text-xl">4.9/5</div>
            <div className="text-left">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <div className="text-[10px] text-[#6B7C96] font-mono uppercase">Trustpilot Rated</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 justify-center border-r border-white/5 last:border-0">
            <div className="text-white font-black text-xl">5.0 ★</div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-200">Google Reviews</div>
              <div className="text-[10px] text-[#6B7C96] font-mono uppercase">150+ Verified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 justify-center border-r border-white/5 last:border-0">
            <div className="p-1.5 rounded bg-white/5 text-[#DC2E3F]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">ICAEW Chartered</div>
              <div className="text-[10px] text-[#6B7C96] font-mono uppercase">Certified Firm</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 justify-center">
            <div className="p-1.5 rounded bg-white/5 text-[#6B7C96]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">HMRC Registered</div>
              <div className="text-[10px] text-[#6B7C96] font-mono uppercase">Official Agent</div>
            </div>
          </div>
        </motion.div>

        {/* CONTROLS BAR: Mode Toggle & Sector Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Main Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F121A] border border-white/10">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "reviews"
                  ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Client Reviews ({REVIEWS.length})
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "case-studies"
                  ? "bg-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Case Studies ({CASE_STUDIES.length})
            </button>
          </div>

          {/* Sector Filters */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {SECTORS.map((sec) => {
              const isActive = activeSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSector(sec.id);
                    if (typeof window !== "undefined" && "speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                    }
                    setPlayingAudioId(null);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white border-[#DC2E3F]"
                      : "bg-[#0F121A]/60 text-[#6B7C96] border-white/5 hover:text-white hover:border-white/20"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT GRID */}
        <AnimatePresence mode="wait">
          {activeTab === "reviews" ? (
            /* =========================================================
               VIEW 1: CLIENT REVIEWS GRID
               ========================================================= */
            <motion.div
              key="reviews-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredReviews.map((rev) => {
                const isAudioPlaying = playingAudioId === rev.id;

                return (
                  <motion.div
                    key={rev.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 sm:p-8 rounded-3xl bg-[#0F121A] border border-white/10 hover:border-[#DC2E3F]/40 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-xl"
                  >
                    {/* Top Accent Glow */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2E3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Header: Author Info & Rating */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#DC2E3F] to-[#6B7C96] p-0.5 shadow-md">
                            <div className="w-full h-full rounded-[14px] bg-[#1A1D29] flex items-center justify-center font-bold text-white text-xs">
                              {rev.avatar}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white leading-tight">
                              {rev.author}
                            </h3>
                            <p className="text-xs text-[#6B7C96]">
                              {rev.role} • <span className="text-slate-300">{rev.company}</span>
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex text-amber-400 text-xs mb-1">★★★★★</div>
                          <span className="text-[10px] font-mono text-[#DC2E3F] bg-[#DC2E3F]/10 border border-[#DC2E3F]/20 px-2 py-0.5 rounded-full">
                            {rev.sectorLabel}
                          </span>
                        </div>
                      </div>

                      {/* Impact Highlight Pill */}
                      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-lg font-black text-white">{rev.impactStat}</span>
                        <span className="text-xs text-[#6B7C96] font-mono">{rev.impactLabel}</span>
                      </div>

                      {/* Quote */}
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 italic">
                        "{rev.quote}"
                      </p>
                    </div>

                    {/* Speech Player Footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <button
                        onClick={() => handleAudioPlayback(rev)}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors group/btn"
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                            isAudioPlaying ? "bg-[#DC2E3F] text-white" : "bg-white/10 group-hover/btn:bg-[#DC2E3F] text-white"
                          }`}
                        >
                          {isAudioPlaying ? (
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <rect x="6" y="4" width="4" height="16" />
                              <rect x="14" y="4" width="4" height="16" />
                            </svg>
                          ) : (
                            <svg className="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </div>
                        <span>{isAudioPlaying ? "Pause Voice Preview" : "Listen to Review"}</span>
                        <span className="text-[10px] font-mono text-slate-500">({rev.audioDuration})</span>
                      </button>

                      {/* Sound Wave Animation */}
                      <div className="flex items-center gap-1 h-4">
                        {[40, 70, 30, 90, 50, 80, 40].map((h, i) => (
                          <span
                            key={i}
                            className={`w-0.5 rounded-full transition-all duration-300 ${
                              isAudioPlaying ? "bg-[#DC2E3F] animate-pulse" : "bg-white/20"
                            }`}
                            style={{
                              height: isAudioPlaying ? `${h}%` : "30%",
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* =========================================================
               VIEW 2: CASE STUDIES GRID
               ========================================================= */
            <motion.div
              key="case-studies-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {filteredCaseStudies.map((cs) => (
                <motion.div
                  key={cs.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 rounded-3xl bg-[#0F121A] border border-white/10 hover:border-[#DC2E3F]/40 transition-all duration-300 overflow-hidden shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left Details */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono text-[#DC2E3F] bg-[#DC2E3F]/10 border border-[#DC2E3F]/20 px-3 py-1 rounded-md">
                          {cs.sectorLabel}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Client: <strong className="text-white">{cs.client}</strong>
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          Timeframe: {cs.duration}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {cs.title}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="font-bold text-slate-400 block mb-1">Challenge:</span>
                          <p className="text-slate-300 leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="font-bold text-emerald-400 block mb-1">Adamson Solution:</span>
                          <p className="text-slate-300 leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Stat Highlight */}
                    <div className="lg:col-span-4 p-6 rounded-2xl bg-[#1A1D29] border border-white/10 text-center lg:text-right flex flex-col justify-center items-center lg:items-end">
                      <span className="text-xs text-[#6B7C96] font-mono uppercase tracking-wider block mb-1">
                        Quantified Result
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#DC2E3F] block mb-1">
                        {cs.metric}
                      </span>
                      <span className="text-xs font-medium text-slate-300 block mb-4">
                        {cs.metricLabel}
                      </span>
                      <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#DC2E3F] hover:text-white transition-colors">
                        Read Full Audit Case
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}