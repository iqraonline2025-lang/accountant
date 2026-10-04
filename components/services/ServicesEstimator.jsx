"use client";

import { useState } from "react";

export default function ServicesEstimator() {
  // State
  const [selectedEntity, setSelectedEntity] = useState("ltd"); // 'ltd', 'sole', 'cis', 'llp'
  const [turnover, setTurnover] = useState(150000); // £0 to £1,000,000+
  const [selectedServices, setSelectedServices] = useState([
    "Accountancy",
    "Bookkeeping",
    "Corporation Tax",
    "VAT Returns",
    "Payroll",
  ]);

  const entityTypes = [
    { id: "ltd", label: "Limited Company", icon: "🏢", recommendedScore: 85 },
    { id: "sole", label: "Sole Trader", icon: "🧑‍💼", recommendedScore: 70 },
    { id: "cis", label: "CIS Subcontractor", icon: "🔨", recommendedScore: 75 },
    { id: "llp", label: "LLP / Partnership", icon: "🤝", recommendedScore: 80 },
  ];

  const all14Services = [
    { id: "Accountancy", label: "Accountancy", category: "Core" },
    { id: "Bookkeeping", label: "Bookkeeping", category: "Core" },
    { id: "Self Assessments", label: "Self Assessments", category: "Tax" },
    { id: "Tax Returns", label: "Tax Returns", category: "Tax" },
    { id: "Payroll", label: "Payroll", category: "Ops" },
    { id: "Company Secretarials", label: "Company Secretarials", category: "Gov" },
    { id: "LLPs", label: "LLP Filings", category: "Core" },
    { id: "Partnerships", label: "Partnerships", category: "Core" },
    { id: "Corporation Tax", label: "Corporation Tax", category: "Tax" },
    { id: "VAT Returns", label: "VAT Returns", category: "Tax" },
    { id: "HMRC Reports", label: "HMRC Reports", category: "Ops" },
    { id: "Compliance", label: "AML & Health Check", category: "Gov" },
    { id: "Business Plans", label: "Business Plans", category: "Gov" },
    { id: "Charities Filings", label: "Charity SORP", category: "Core" },
  ];

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  // Calculate dynamic compliance defense score (0 - 100%)
  const rawScore = Math.min(100, Math.round((selectedServices.length / 14) * 120));
  const complianceScore = Math.max(25, rawScore);

  // Radial SVG calculation
  const circleRadius = 54;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (complianceScore / 100) * circumference;

  return (
    <section className="relative py-24 bg-[#12141F] text-white overflow-hidden border-t border-slate-800">
      {/* Background Kinetic Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#6B7C96]/15 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              INTERACTIVE SCOPE ENGINE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Build Your <span className="text-[#DC2E3F]">Service Architecture</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Configure your exact business setup below. Watch your HMRC Compliance Coverage score calculate in real-time.
          </p>
        </div>

        {/* Main 2-Column Configurator Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* STEP 1: Entity Selector */}
            <div className="bg-[#0F121A] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <label className="text-xs font-bold uppercase tracking-wider text-[#DC2E3F] block mb-3">
                01. Select Business Entity Structure
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {entityTypes.map((entity) => {
                  const isSelected = selectedEntity === entity.id;
                  return (
                    <button
                      key={entity.id}
                      onClick={() => setSelectedEntity(entity.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#DC2E3F] border-[#DC2E3F] text-white shadow-lg shadow-[#DC2E3F]/30 -translate-y-1"
                          : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-2xl mb-2">{entity.icon}</span>
                      <span className="text-xs font-bold leading-tight">{entity.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Annual Turnover Slider */}
            <div className="bg-[#0F121A] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-[#DC2E3F]">
                  02. Estimated Annual Turnover
                </label>
                <span className="text-lg font-black text-white font-mono bg-black/50 px-3 py-1 rounded-lg border border-slate-800">
                  £{turnover >= 1000000 ? "1,000,000+" : turnover.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#DC2E3F]"
              />

              <div className="flex justify-between text-[10px] text-slate-400 font-mono font-bold">
                <span>£10,000</span>
                <span>£250,000 (VAT Threshold £90k)</span>
                <span>£1,000,000+</span>
              </div>
            </div>

            {/* STEP 3: 14 Service Module Toggles */}
            <div className="bg-[#0F121A] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <label className="text-xs font-bold uppercase tracking-wider text-[#DC2E3F]">
                  03. Toggle Required Services ({selectedServices.length}/14 Selected)
                </label>
                <button
                  onClick={() =>
                    setSelectedServices(
                      selectedServices.length === 14
                        ? ["Accountancy", "Bookkeeping", "Corporation Tax"]
                        : all14Services.map((s) => s.id)
                    )
                  }
                  className="text-[11px] font-semibold text-slate-400 hover:text-white underline"
                >
                  {selectedServices.length === 14 ? "Reset Default" : "Select All 14"}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {all14Services.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-3 rounded-xl text-left border text-xs font-bold transition-all duration-200 flex items-center justify-between ${
                        isChecked
                          ? "bg-slate-800 border-[#DC2E3F] text-white shadow-md shadow-[#DC2E3F]/10 scale-[1.02]"
                          : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span className="truncate pr-1">{service.label}</span>
                      <span
                        className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] shrink-0 ${
                          isChecked ? "bg-[#DC2E3F] text-white" : "bg-slate-800 border border-slate-700"
                        }`}
                      >
                        {isChecked ? "✓" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT: Live Blueprint & Coverage Gauge (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-[#0F121A] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC2E3F] via-[#6B7C96] to-[#DC2E3F]" />

            <div className="text-center mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                LIVE TELEMETRY OUTPUT
              </span>
              <h3 className="text-xl font-black text-white">
                HMRC Compliance Coverage
              </h3>
            </div>

            {/* Radial Meter Visual */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#1A1D29"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Animated Progress Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={circleRadius}
                  stroke="#DC2E3F"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              {/* Radial Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white tracking-tight">
                  {complianceScore}%
                </span>
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">
                  {complianceScore > 80 ? "Shield Active" : "Partial Coverage"}
                </span>
              </div>
            </div>

            {/* Selected Scope Summary */}
            <div className="bg-[#12141F] border border-slate-800 rounded-xl p-4 mb-6 space-y-2">
              <div className="flex justify-between text-xs border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Entity:</span>
                <span className="font-bold text-white uppercase">
                  {entityTypes.find((e) => e.id === selectedEntity)?.label}
                </span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Active Services:</span>
                <span className="font-bold text-[#DC2E3F]">
                  {selectedServices.length} of 14 Modules
                </span>
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-slate-400">HMRC Late Penalty Indemnity:</span>
                <span className="font-bold text-emerald-400">100% Guaranteed</span>
              </div>
            </div>

            {/* Direct Phone Dispatch Call To Action */}
            <div className="space-y-3">
              <a
                href="tel:07757510944"
                className="w-full py-3.5 px-4 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-black uppercase tracking-wider text-center block transition-all shadow-lg shadow-[#DC2E3F]/25 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Discuss Scope: 07757 510944</span>
              </a>

              <a
                href="tel:01282611503"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-center block transition border border-slate-700"
              >
                Pendle Haven Office: 01282 611503
              </a>

              <p className="text-[10px] text-slate-500 text-center">
                Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}