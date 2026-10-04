"use client";

import { useEffect, useState } from "react";

export default function ServicesComplianceRadar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Radar Data Points
  const deadlines = [
    { id: 1, label: "Jan 31: Self-Assessment", angle: 45, radius: 100, color: "#DC2E3F" },
    { id: 2, label: "Apr 05: Tax Year End", angle: 135, radius: 60, color: "#6B7C96" },
    { id: 3, label: "Day 19: CIS Monthly", angle: 225, radius: 80, color: "#10B981" },
    { id: 4, label: "9 Mo: Corp Tax (CT600)", angle: 315, radius: 40, color: "#F59E0B" },
  ];

  const telemetryFeed = [
    { time: "LIVE", action: "MTD VAT Portal Sync", status: "ACTIVE", color: "text-emerald-400" },
    { time: "SYS", action: "Penalty Indemnity SLA", status: "SECURE", color: "text-[#DC2E3F]" },
    { time: "AUTO", action: "CIS Subcontractor Rebates", status: "PROCESSING", color: "text-blue-400" },
    { time: "LIVE", action: "Companies House Uplink", status: "VERIFIED", color: "text-emerald-400" },
    { time: "SYS", action: "Payroll RTI Gateway", status: "ENCRYPTED", color: "text-slate-300" },
  ];

  return (
    <section className="relative py-24 bg-[#0F121A] text-white overflow-hidden border-t border-slate-800">
      {/* Dynamic Background Noise & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,46,63,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 shadow-xl mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
              <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                HMRC Statutory Radar • Live Tracking
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Pre-Emptive <span className="text-[#DC2E3F]">Deadline Defense</span> Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
              We don't wait for HMRC letters. Our systems track your statutory deadlines in real-time, backed by our 100% Zero-Penalty Financial Indemnity Guarantee.
            </p>
          </div>

          <div className="flex flex-col items-end shrink-0 space-y-2">
            <a href="tel:07757510944" className="group flex items-center space-x-3 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#DC2E3F] transition-all">
              <div className="w-8 h-8 rounded-full bg-[#DC2E3F]/20 flex items-center justify-center text-[#DC2E3F] group-hover:bg-[#DC2E3F] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase text-slate-400">Emergency Override</div>
                <div className="text-sm font-black text-white">07757 510944</div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: 3D Holographic Radar */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] flex items-center justify-center perspective-[1000px]">
            
            {/* 3D Tilted Radar Stage */}
            <div 
              className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full border border-slate-700 shadow-[0_0_50px_rgba(220,46,63,0.1)] transform-style-3d"
              style={{ transform: "rotateX(60deg) rotateZ(0deg)" }}
            >
              {/* Concentric Rings */}
              <div className="absolute inset-0 m-[10%] rounded-full border border-slate-600/50" />
              <div className="absolute inset-0 m-[25%] rounded-full border border-slate-600/50" />
              <div className="absolute inset-0 m-[40%] rounded-full border border-[#DC2E3F]/30" />
              
              {/* Crosshairs */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-700/50 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-slate-700/50 -translate-x-1/2" />

              {/* The Spinning Radar Sweep Arm */}
              {isMounted && (
                <div 
                  className="absolute inset-0 rounded-full origin-center animate-[radar-spin_4s_linear_infinite]"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 70%, rgba(220,46,63,0.5) 99%, rgba(220,46,63,0.9) 100%)"
                  }}
                />
              )}

              {/* Central Core Pulse */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#DC2E3F] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#DC2E3F] animate-pulse" />

              {/* Plotted Deadline Nodes (Counter-rotated to stand upright) */}
              {deadlines.map((node) => (
                <div
                  key={node.id}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full transform-style-3d"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-${node.radius}%)`,
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full relative"
                    style={{ backgroundColor: node.color, boxShadow: `0 0 10px ${node.color}` }}
                  >
                    {/* The popup text standing straight up in 3D space */}
                    <div 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap"
                      style={{ transform: "rotateX(-60deg)" }} // Counter-tilt the text
                    >
                      <div className="px-2 py-1 rounded bg-black/80 border border-slate-700 text-[9px] sm:text-[10px] font-bold tracking-wider backdrop-blur-sm" style={{ color: node.color }}>
                        {node.label}
                      </div>
                      {/* Stem line connecting text to dot */}
                      <div className="w-[1px] h-3 bg-slate-500 mx-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Glowing Base Platform */}
            <div className="absolute bottom-0 w-full h-[100px] bg-[radial-gradient(ellipse_at_center,rgba(220,46,63,0.15)_0%,transparent_60%)] -translate-y-10 rounded-[100%] pointer-events-none" />
          </div>


          {/* RIGHT: Live Telemetry Feed (Vertical Marquee) */}
          <div className="lg:col-span-5 h-[400px] relative rounded-2xl bg-[#12141F] border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-800 bg-[#0F121A] flex justify-between items-center z-10 relative shadow-md">
              <div className="text-xs font-bold text-slate-300 tracking-wider">SYSTEM LOGS</div>
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2E3F]" />
              </div>
            </div>

            {/* Scrolling Feed Container */}
            <div className="flex-1 relative overflow-hidden">
              {/* Fade masks for top and bottom */}
              <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[#12141F] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#12141F] to-transparent z-10 pointer-events-none" />

              {/* The Animated List */}
              <div className="absolute w-full animate-[scroll-vertical_10s_linear_infinite] hover:[animation-play-state:paused] flex flex-col pt-12 pb-12">
                {[...telemetryFeed, ...telemetryFeed, ...telemetryFeed].map((item, idx) => (
                  <div key={idx} className="px-6 py-4 border-b border-slate-800/50 flex items-center justify-between hover:bg-slate-800/30 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded bg-black/40">
                        {item.time}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {item.action}
                      </span>
                    </div>
                    <span className={`text-[10px] sm:text-xs font-black tracking-widest ${item.color}`}>
                      [{item.status}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer Action */}
            <div className="p-4 border-t border-slate-800 bg-[#0F121A] z-10 relative">
              <a href="tel:01282611503" className="w-full block text-center py-2.5 rounded-lg border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
                Access HQ Dispatch: 01282 611503
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Global Inline Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); } /* Translates exactly 1 block of the duplicated feed */
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .perspective-[1000px] {
          perspective: 1000px;
        }
      `}} />
    </section>
  );
}