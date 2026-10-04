"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // The expanded list of 14 services
  const allServices = [
    "Accountancy",
    "Bookkeeping",
    "Self Assessments",
    "Tax Returns",
    "Payroll",
    "Company Secretarials",
    "LLPs",
    "Partnerships",
    "Corporation Tax",
    "VAT Returns",
    "HMRC Reports",
    "Compliance",
    "Business Plans",
    "Charities Filings",
  ];

  // Track mouse for subtle 2D parallax on the left content
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[#0F121A] overflow-hidden flex items-center pt-20 pb-16">
      {/* 2D Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1D29_1px,transparent_1px),linear-gradient(to_bottom,#1A1D29_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      {/* Crimson Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-[#DC2E3F]/10 rounded-full filter blur-[150px] transform -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: 2D Kinetic Typography & Content */}
          <div 
            className="space-y-8 transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#DC2E3F] animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                Full-Spectrum Financial Infrastructure
              </span>
            </div>

            {/* Massive 2D Kinetic Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2E3F] to-[#6B7C96] animate-pulse">
                Compliance.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              We provide a complete architectural framework for your finances. From bespoke business plans and charity filings to robust LLP structures and zero-penalty payroll. Overseen directly by Kashif Insari (MAAT).
            </p>

            {/* 2D Staggered Contact Triggers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:07757510944"
                className="group relative px-6 py-4 rounded-xl bg-[#DC2E3F] text-white font-bold text-sm tracking-wide overflow-hidden shadow-lg shadow-[#DC2E3F]/20 flex items-center justify-center space-x-2 transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full" />
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">Direct: 07757 510944</span>
              </a>

              <a
                href="tel:01282611503"
                className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all hover:bg-slate-800 hover:border-slate-500 hover:shadow-xl"
              >
                <span>HQ: 01282 611503</span>
              </a>
            </div>

            <div className="text-xs text-slate-500 font-medium flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#6B7C96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX</span>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Isometric Service Matrix */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center perspective-[1200px]">
            {/* The Isometric Container */}
            <div 
              className="relative w-[300px] sm:w-[400px] h-[400px] transform-style-3d transition-transform duration-1000"
              style={{
                transform: "rotateX(60deg) rotateZ(-45deg)",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 absolute inset-0">
                {allServices.map((service, idx) => {
                  const isHovered = hoveredIndex === idx;
                  
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative cursor-pointer transition-all duration-500 ease-out"
                      style={{
                        // Creates a flowing 3D wave animation for each tile
                        animation: `float-isometric 4s ease-in-out infinite`,
                        animationDelay: `${idx * 0.15}s`,
                        // When hovered, the tile jumps up in 3D space (Z-axis translation)
                        transform: isHovered ? "translateZ(40px) scale(1.05)" : "translateZ(0px)",
                        zIndex: isHovered ? 50 : 1
                      }}
                    >
                      {/* The 3D Glass Tile */}
                      <div 
                        className={`w-full h-[80px] sm:h-[90px] rounded-xl flex items-center justify-center p-3 text-center border backdrop-blur-md shadow-2xl transition-colors duration-300 ${
                          isHovered 
                            ? "bg-[#DC2E3F]/90 border-[#DC2E3F]" 
                            : "bg-[#1A1D29]/80 border-slate-700/50 hover:bg-[#232736]"
                        }`}
                      >
                        <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${
                          isHovered ? "text-white" : "text-slate-300"
                        }`}>
                          {service}
                        </span>
                      </div>

                      {/* 3D Depth Shadow under the tile */}
                      <div 
                        className={`absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-black/40 blur-md transition-all duration-500 ${
                          isHovered ? "opacity-60 translate-x-2 translate-y-2" : "opacity-30"
                        }`}
                        style={{ transform: "translateZ(-20px)" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Global Inline Styles for the 3D Wave Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-isometric {
          0%, 100% { transform: translateZ(0px); }
          50% { transform: translateZ(15px); }
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .perspective-[1200px] {
          perspective: 1200px;
        }
      `}} />
    </section>
  );
}