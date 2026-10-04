'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  PhoneCall,
  MessageCircle,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Send,
    title: 'You Get in Touch',
    description:
      'Send a WhatsApp message, call, or request a visit. Tell us briefly what you need — tax return, bookkeeping, payroll, or advice.',
    time: 'Takes 1 minute',
  },
  {
    step: '02',
    icon: PhoneCall,
    title: 'We Respond Fast',
    description:
      'Kashif or the team replies within 24 business hours. Urgent HMRC matters are prioritised the same day where possible.',
    time: 'Within 24 hours',
  },
  {
    step: '03',
    icon: MessageCircle,
    title: 'Free Consultation',
    description:
      'A short no-obligation chat (phone, WhatsApp, or in-person in Nelson) to understand your situation and outline clear next steps.',
    time: '15–30 minutes',
  },
  {
    step: '04',
    icon: FileCheck2,
    title: 'You Get a Clear Plan',
    description:
      'Transparent fixed fees, document checklist, and a simple plan so your tax and accounts are handled properly — without stress.',
    time: 'Tailored to you',
  },
];

export default function WhatHappensNext() {
  return (
    <section className="relative bg-[#1A1D29] text-white py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Soft glow */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-[#DC2E3F] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DC2E3F] mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            What Happens Next
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From first message to a clear plan — straightforward, confidential, and built around your needs.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#DC2E3F]/40 to-transparent pointer-events-none" />

          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-[#DC2E3F]/40 hover:bg-white/[0.07]">
                  {/* Step number + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#DC2E3F]/80 tracking-wider">
                      {item.step}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DC2E3F]/15 text-[#DC2E3F] group-hover:bg-[#DC2E3F] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-300">
                    {item.time}
                  </div>
                </div>

                {/* Mobile / tablet arrow between cards */}
                {index < STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-[#DC2E3F]/50">
                    <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 lg:mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-[#DC2E3F]/10 via-white/[0.03] to-transparent px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm sm:text-base font-semibold text-white">
              No obligation. No pressure. Just clear advice.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Your first conversation with Kashif Insari (MAAT) is free and confidential.
            </p>
          </div>
          <a
            href="https://wa.me/447757510944?text=Hello%20Kashif%2C%20I%27d%20like%20to%20start%20with%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Start Free Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}