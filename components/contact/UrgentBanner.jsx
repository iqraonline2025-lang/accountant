'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function UrgentBanner() {
  return (
    <section className="relative bg-[#1A1D29] text-white py-16 px-6 overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#DC2E3F]/20 via-[#DC2E3F]/10 to-transparent pointer-events-none" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#DC2E3F]/40 bg-gradient-to-r from-[#DC2E3F]/20 via-white/[0.04] to-white/[0.02] p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Alert */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DC2E3F] text-white shadow-sm">
                <AlertTriangle className="w-3.5 h-3.5" />
                Priority Tax Assistance
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Received an Urgent HMRC Letter or Late Tax Penalty?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Don&apos;t panic. If you are facing an approaching tax deadline, penalty warning, or an investigation notice from HMRC, speak directly with <strong>Kashif Insari (MAAT)</strong> for immediate priority support.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-400 pt-2">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldAlert className="w-4 h-4 text-[#DC2E3F]" />
                  Direct HMRC Communication
                </span>
                <span>•</span>
                <span>Fast Penalty Appeals</span>
                <span>•</span>
                <span>100% Confidential</span>
              </div>
            </div>

            {/* Right Column: Emergency CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Emergency Call */}
              <a
                href="tel:07757510944"
                className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2E3F] text-white font-bold rounded-full shadow-lg shadow-[#DC2E3F]/30 hover:bg-[#b92534] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <Phone className="w-5 h-5" />
                Priority Call: 07757 510944
              </a>

              {/* Priority WhatsApp */}
              <a
                href="https://wa.me/447757510944?text=URGENT%20TAX%20HELP:%20I%20have%20received%20an%20HMRC%20notice/penalty."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-lg shadow-[#25D366]/20 hover:bg-[#20bd5a] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Urgent WhatsApp Chat
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}