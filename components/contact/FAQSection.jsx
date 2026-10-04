'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'Is the initial consultation really free?',
    answer:
      'Yes. We offer a free, no-obligation initial consultation by phone, WhatsApp, or in person at our Nelson office. We’ll listen to your situation, outline what you need, and explain fees clearly before you commit to anything.',
  },
  {
    question: 'How quickly will you respond to my enquiry?',
    answer:
      'We aim to reply within 24 business hours. If you have an urgent HMRC letter, penalty notice, or approaching deadline, message or call us and we will prioritise your case wherever possible.',
  },
  {
    question: 'Do I need to visit the office in Nelson?',
    answer:
      'Not necessarily. Many clients work with us fully remotely via WhatsApp, phone, and email. You’re always welcome to visit Pendle Enterprise Haven (138 Every Street, Nelson, BB9 7EX) by appointment if you prefer face-to-face.',
  },
  {
    question: 'What does MAAT mean?',
    answer:
      'MAAT means full Member of the Association of Accounting Technicians. It shows that Kashif Insari has met rigorous professional standards, holds a recognised accounting qualification, and follows ongoing ethical and technical requirements.',
  },
  {
    question: 'What services do you provide?',
    answer:
      'We help individuals and businesses with Self Assessment tax returns, Corporation Tax, bookkeeping, payroll, VAT returns, company accounts, new business setup, and practical tax planning. If you’re unsure what you need, just ask in your first message.',
  },
  {
    question: 'What documents will I need?',
    answer:
      'It depends on the service. For a typical Self Assessment we may need P60/P45, income records, bank statements, and expense receipts. For limited companies we’ll guide you on accounts, bank feeds, and HMRC notices. We’ll give you a simple checklist after our first chat.',
  },
  {
    question: 'Are my details confidential?',
    answer:
      'Yes. Your information is treated as strictly confidential and handled in line with professional standards and UK GDPR requirements. We only use your details to provide accounting and tax services you request.',
  },
  {
    question: 'Do you work with sole traders and limited companies?',
    answer:
      'Yes. We work with sole traders, limited companies, partnerships, landlords, and contractors across Nelson, Burnley, Colne, Pendle, and the wider Lancashire area — plus remote clients elsewhere in the UK.',
  },
  {
    question: 'How do your fees work?',
    answer:
      'We keep fees transparent. After understanding your needs in the free consultation, we’ll give you a clear fixed price or package where possible — so you know exactly what you’re paying before work begins. No hidden extras.',
  },
  {
    question: 'Can you help with HMRC letters or late filings?',
    answer:
      'Yes. If you’ve received an HMRC notice, penalty, or are behind on returns, contact us as soon as possible. We’ll review the letter, explain your options, and help you get back on track with the least stress possible.',
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? 'border-[#DC2E3F]/40 bg-white/[0.06]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-white leading-snug pr-2">
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? 'bg-[#DC2E3F] text-white' : 'bg-white/10 text-gray-300'
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 pt-0">
              <div className="h-px w-full bg-white/10 mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative bg-[#12141C] text-white py-20 lg:py-28 px-6 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025] pointer-events-none" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] bg-[#DC2E3F] rounded-full mix-blend-screen filter blur-[160px] opacity-[0.07] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#DC2E3F]/15 text-[#DC2E3F] mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#DC2E3F] mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Quick answers before you get in touch. Still unsure? Message Kashif directly.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 text-center"
        >
          <p className="text-sm sm:text-base font-semibold text-white mb-1">
            Didn’t find your answer?
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mb-5">
            Send a WhatsApp message and we’ll get back to you quickly.
          </p>
          <a
            href="https://wa.me/447757510944?text=Hello%20Kashif%2C%20I%20have%20a%20question%20about%20your%20accounting%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}