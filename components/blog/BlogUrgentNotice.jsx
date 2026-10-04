"use client";

import { useState } from "react";

export default function BlogUrgentNotice() {
  const [selectedNotice, setSelectedNotice] = useState("penalty");
  const [isScanning, setIsScanning] = useState(false);

  const noticeTypes = [
    {
      id: "penalty",
      badge: "CRITICAL RISK",
      badgeColor: "bg-[#DC2E3F] text-white",
      title: "HMRC Late Filing / Penalty Notice",
      subtitle: "Automatic £100+ Fine or Daily Interest",
      envelopeLabel: "FORM SA370 / LATE NOTICE",
      riskLevel: "HIGH URGENCY",
      deadlineSLA: "30-Day Appeals Window",
      actionSteps: [
        "Do NOT ignore the notice—HMRC adds £10/day penalties after 90 days.",
        "We audit whether you meet 'Reasonable Excuse' criteria for tribunal appeal.",
        "Instant electronic SA100 / CT600 submission to stop further accrual.",
        "Direct representation with HMRC debt management team by Kashif Insari (MAAT)."
      ],
      primaryPhone: "07757510944",
      phoneLabel: "Emergency Direct Line: 07757 510944"
    },
    {
      id: "compliance",
      badge: "COMPLIANCE CHECK",
      badgeColor: "bg-amber-500 text-black",
      title: "HMRC Tax Return Inquiry / Compliance Check",
      subtitle: "Formal Audit or Information Request",
      envelopeLabel: "FORM CC/FS1 / TAX INQUIRY",
      riskLevel: "MEDIUM-HIGH URGENCY",
      deadlineSLA: "30-Day Disclosure Window",
      actionSteps: [
        "Pause direct communication with HMRC until your accounts are audited.",
        "We compile full bank reconciliations, sales ledgers, and expense receipts.",
        "Formulate precise statutory responses under TMA 1970 Schedule 36.",
        "Inquiry defense coverage through Adamson Practice Representation."
      ],
      primaryPhone: "07757510944",
      phoneLabel: "Call Kashif Insari Direct: 07757 510944"
    },
    {
      id: "cis",
      badge: "TAX OVERPAYMENT",
      badgeColor: "bg-emerald-500 text-white",
      title: "CIS Subcontractor Tax Statement Query",
      subtitle: "20% Flat Rate Deduction Mismatch",
      envelopeLabel: "FORM CIS300 / REBATE CHECK",
      riskLevel: "ACTION RECOMMENDED",
      deadlineSLA: "Rapid Fast-Track Rebate",
      actionSteps: [
        "Cross-verify contractor CIS vouchers against monthly HMRC RTI logs.",
        "Calculate allowable job expenses (tools, mileage, workwear, equipment).",
        "Submit formal repayment offset claim to HMRC Central Processing.",
        "Average client refund window: 14 to 21 business days."
      ],
      primaryPhone: "07757510944",
      phoneLabel: "CIS Fast-Track Line: 07757 510944"
    },
    {
      id: "vat",
      badge: "MTD MISMATCH",
      badgeColor: "bg-[#6B7C96] text-white",
      title: "VAT Return / MTD Assessment Notice",
      subtitle: "Discrepancy in Digital Returns",
      envelopeLabel: "FORM VAT600 / MTD ALERT",
      riskLevel: "MODERATE URGENCY",
      deadlineSLA: "7-Day Re-Filing Buffer",
      actionSteps: [
        "Audit digital ledger bridging software for MTD transmission errors.",
        "Recalculate Flat Rate vs Standard accounting scheme balances.",
        "File voluntary disclosure error correction notice (VAT 652).",
        "Direct communication with HMRC VAT Inspection desk."
      ],
      primaryPhone: "01282611503",
      phoneLabel: "Pendle Office Line: 01282 611503"
    }
  ];

  const currentNotice = noticeTypes.find((n) => n.id === selectedNotice) || noticeTypes[0];

  const handleSelect = (id) => {
    setIsScanning(true);
    setSelectedNotice(id);
    setTimeout(() => {
      setIsScanning(false);
    }, 400);
  };

  return (
    <section className="py-24 bg-[#0F121A] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decor Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2E3F]/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6B7C96]/15 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2E3F] animate-ping" />
            <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
              HMRC LETTER TRIAGE SCANNER
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Received a Letter From <span className="text-[#DC2E3F]">HMRC</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Select the type of notice you received below. Our 3D Triage Scanner instantly uncollapses the statutory defense protocol.
          </p>
        </div>

        {/* 3D Triage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: Notice Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DC2E3F] mb-2 px-1">
              Select Received Notice Type:
            </div>

            {noticeTypes.map((item) => {
              const isSelected = selectedNotice === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#12141F] border-[#DC2E3F] shadow-xl shadow-[#DC2E3F]/10 translate-x-1"
                      : "bg-[#0F121A] border-slate-800 hover:border-slate-700 hover:bg-[#12141F]/60"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded font-mono ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.envelopeLabel}
                      </span>
                    </div>

                    <h4 className={`text-sm font-bold transition-colors ${
                      isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isSelected ? "bg-[#DC2E3F] text-white" : "bg-slate-800 text-slate-500"
                  }`}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Animated 3D HMRC Envelope Display (7 cols) */}
          <div className="lg:col-span-7 bg-[#12141F] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Top Red Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DC2E3F] via-[#6B7C96] to-[#DC2E3F]" />

            {/* Scanning Laser Beam Overlay */}
            {isScanning && (
              <div className="absolute inset-x-0 top-0 h-1 bg-[#DC2E3F] shadow-[0_0_15px_#DC2E3F] animate-[laser-scan_0.4s_ease-in-out_infinite]" />
            )}

            <div>
              {/* Envelope Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DC2E3F]/10 border border-[#DC2E3F]/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#DC2E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      TRIAGE DIAGNOSTIC OUTPUT
                    </div>
                    <div className="text-base font-black text-white font-mono">
                      {currentNotice.envelopeLabel}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#DC2E3F]/10 text-[#DC2E3F] border border-[#DC2E3F]/20 block mb-0.5">
                    {currentNotice.riskLevel}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    SLA: {currentNotice.deadlineSLA}
                  </span>
                </div>
              </div>

              {/* Notice Title */}
              <div className="py-6">
                <h3 className="text-2xl font-black text-white mb-2">
                  {currentNotice.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recommended practice action plan formulated by Senior Accountant <span className="text-white font-bold underline decoration-[#DC2E3F]">Kashif Insari (MAAT)</span> at Pendle Enterprise Haven.
                </p>
              </div>

              {/* Action Plan Checklist */}
              <div className="bg-[#0F121A] border border-slate-800 rounded-2xl p-5 mb-6 space-y-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  STATUTORY ACTION PROTOCOL:
                </div>
                <div className="space-y-2.5">
                  {currentNotice.actionSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <svg className="w-4 h-4 text-[#DC2E3F] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Telephone Override Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={`tel:${currentNotice.primaryPhone}`}
                className="w-full py-3.5 px-4 rounded-xl bg-[#DC2E3F] hover:bg-[#c22534] text-white text-xs font-black uppercase tracking-wider text-center block transition-all shadow-lg shadow-[#DC2E3F]/25 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{currentNotice.phoneLabel}</span>
              </a>

              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-1">
                <span>Pendle HQ: 01282 611503</span>
                <span>Pendle Enterprise Haven, BB9 7EX</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Laser Scanning Animation CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes laser-scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}} />
    </section>
  );
}