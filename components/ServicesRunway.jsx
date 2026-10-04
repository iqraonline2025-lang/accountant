"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Accountancy",
    desc: "Comprehensive financial reporting, statutory accounts preparation, and proactive business advisory to give you complete clarity over your financial health.",
    tags: ["Statutory Accounts", "Year-End Reporting", "Management Accounts", "Business Advisory"],
    accent: "#DC2E3F", // Crimson Red
    type: "report",
  },
  {
    num: "02",
    title: "Book Keeping",
    desc: "Accurate day-to-day transaction recording, bank reconciliations, and digital MTD-compliant cloud accounting so your ledgers are always up to date.",
    tags: ["MTD Compliant", "Bank Reconciliation", "VAT Returns", "Cloud Software"],
    accent: "#6B7C96", // Slate Blue
    type: "ledger",
  },
  {
    num: "03",
    title: "Self Assessments",
    desc: "Stress-free personal tax returns for sole traders, partners, and company directors to ensure maximum tax efficiency and zero HMRC penalties.",
    tags: ["Sole Traders", "Directors Tax", "HMRC Filing", "Tax Allowances"],
    accent: "#1A1D29", // Navy
    type: "chart",
  },
  {
    num: "04",
    title: "Tax Returns",
    desc: "Expert Corporation Tax calculations, CT600 preparation, and strategic tax planning designed to minimize your corporate tax liability legally.",
    tags: ["Corporation Tax", "CT600 Filings", "Tax Relief", "HMRC Compliance"],
    accent: "#DC2E3F",
    type: "bars",
  },
  {
    num: "05",
    title: "Payroll",
    desc: "Full-service PAYE management, digital payslips, workplace pension auto-enrolment admin, and CIS returns processed accurately on time, every time.",
    tags: ["PAYE Management", "Digital Payslips", "Pensions Admin", "CIS Returns"],
    accent: "#6B7C96",
    type: "wave",
  },
  {
    num: "06",
    title: "Company Secretarials",
    desc: "Complete Companies House compliance, annual confirmation statements, new company formations, and statutory register maintenance.",
    tags: ["Confirmation Statements", "Company Formation", "Companies House", "Statutory Records"],
    accent: "#1A1D29",
    type: "shield",
  },
];

// Interactive Animated Visuals for each service
function VisualGraphic({ type, accent }) {
  if (type === "bars") {
    return (
      <div className="flex items-end justify-center gap-2 h-28 w-full">
        {[40, 65, 30, 85, 50, 95].map((h, i) => (
          <motion.div
            key={i}
            className="w-3 sm:w-4 rounded-t-md"
            style={{ backgroundColor: i % 2 === 0 ? accent : "#6B7C96" }}
            initial={{ height: "0%" }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  if (type === "ledger") {
    return (
      <div className="flex flex-col gap-2.5 w-full max-w-[220px] mx-auto">
        {[100, 75, 90, 60].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              className="h-2 rounded-full"
              style={{
                width: `${w}%`,
                backgroundColor: i === 0 ? accent : "#1A1D29",
                opacity: 0.2 + i * 0.25,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            />
            <span className="h-2 w-2 rounded-full bg-[#DC2E3F]" />
          </div>
        ))}
      </div>
    );
  }

  if (type === "shield") {
    return (
      <div className="relative flex items-center justify-center h-28 w-full">
        <motion.div
          className="absolute h-20 w-20 rounded-full border-2 border-dashed border-[#6B7C96]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="h-12 w-12 rounded-xl bg-[#1A1D29] flex items-center justify-center text-white text-lg font-bold shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          ✓
        </motion.div>
      </div>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 160 80" className="h-24 w-full" fill="none">
        <motion.path
          d="M10 60 C 40 50, 70 65, 100 30 S 130 35, 150 15"
          stroke={accent}
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="150"
          cy="15"
          r="4"
          fill={accent}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        />
      </svg>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 h-28 w-full">
      <motion.div
        className="h-16 w-16 rounded-2xl border-2 border-[#1A1D29]/20 bg-white/50 backdrop-blur flex items-center justify-center font-extrabold text-[#1A1D29]"
        whileInView={{ rotate: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        TAX
      </motion.div>
      <div className="flex flex-col gap-1.5">
        <div className="h-2 w-16 bg-[#DC2E3F] rounded-full" />
        <div className="h-2 w-12 bg-[#6B7C96] rounded-full" />
        <div className="h-2 w-20 bg-[#1A1D29] rounded-full" />
      </div>
    </div>
  );
}

export default function ServicesRunway() {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-32">
      {/* Background ambient texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-[#6B7C96]/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#DC2E3F]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#6B7C96]"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-[#1A1D29] sm:text-5xl md:text-6xl"
          >
            Financial services engineered for{" "}
            <span className="text-[#DC2E3F]">precision & compliance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base leading-relaxed text-[#5c677a] sm:text-lg"
          >
            We deliver six tailored accounting and tax solutions to keep your business fully compliant, tax-efficient, and focused on growth.
          </motion.p>
        </div>

        {/* SERVICES RUNWAY */}
        <div className="space-y-6">
          {services.map((item, index) => {
            const isHovered = activeHover === index;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
                className={`relative group overflow-hidden rounded-3xl border transition-all duration-500 p-8 sm:p-10 ${
                  isHovered
                    ? "border-[#DC2E3F]/40 bg-white shadow-xl shadow-[#1A1D29]/5"
                    : "border-slate-200/80 bg-white/70 backdrop-blur-sm"
                }`}
              >
                {/* Accent side glow line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? item.accent : "transparent",
                  }}
                />

                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                  {/* Left Column: Number & Content */}
                  <div className={`md:col-span-8 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xl font-mono font-bold text-[#DC2E3F]">
                        {item.num}
                      </span>
                      <span className="h-px w-8 bg-slate-300" />
                      <span className="text-xs uppercase tracking-widest text-[#6B7C96] font-semibold">
                        Core Service
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1A1D29] sm:text-3xl transition-colors group-hover:text-[#DC2E3F]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#5c677a] sm:text-base max-w-2xl">
                      {item.desc}
                    </p>

                    {/* Tag Chips */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-medium text-[#1A1D29] transition-colors group-hover:bg-slate-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Graphic */}
                  <div className={`md:col-span-4 ${isEven ? "md:order-2" : "md:order-1"} flex justify-center`}>
                    <div className="w-full max-w-[200px] rounded-2xl bg-slate-50/80 p-4 border border-slate-100 group-hover:bg-white group-hover:shadow-inner transition-all">
                      <VisualGraphic type={item.type} accent={item.accent} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA — LINK TO ALL SERVICES PAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#1A1D29] p-8 text-white sm:flex-row sm:p-10 shadow-2xl"
        >
          <div>
            <h4 className="text-xl font-bold sm:text-2xl">
              Need detailed pricing or a custom service package?
            </h4>
            <p className="mt-1 text-sm text-[#6B7C96]">
              Explore full service details and pricing structures on our dedicated services page.
            </p>
          </div>

          <Link
            href="/services"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-[#DC2E3F] px-8 py-4 font-semibold text-white shadow-lg shadow-[#DC2E3F]/30 transition-all hover:scale-105 hover:bg-[#b82231]"
          >
            <span>View All Services</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}