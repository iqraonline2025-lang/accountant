'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  User,
  Building2,
  MessageSquare,
  MessageCircle, // WhatsApp Icon style
} from 'lucide-react';

const SERVICES = [
  'Self Assessment Tax Return',
  'Corporation Tax',
  'Bookkeeping',
  'Payroll',
  'VAT Returns',
  'New Business Setup',
  'Tax Planning',
  'Company Accounts',
  'Other',
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredContact: 'Phone',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Full name is required';
    if (!formData.phone.trim()) next.phone = 'Phone number is required';
    if (!formData.service) next.service = 'Please select a service';
    if (!formData.consent) next.consent = 'Please tick the consent box';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Kashif's Mobile Number in UK International Format (+44 7757 510944 -> 447757510944)
    const kashifWhatsAppNumber = '447757510944';

    // Format the WhatsApp Message cleanly with bold text
    const textMessage = `Hello Kashif, I have an enquiry from the ADAMSON website:

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone}
*Company:* ${formData.company || 'Not provided'}
*Service Needed:* ${formData.service}
*Preferred Contact:* ${formData.preferredContact}

*Message:* 
${formData.message || 'No additional details provided.'}`;

    // Encode URL text
    const encodedMessage = encodeURIComponent(textMessage);

    // Create WhatsApp Web/App redirect URL
    const whatsappUrl = `https://wa.me/${kashifWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-[#1A1D29] text-white py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      {/* Background Red Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DC2E3F] rounded-full mix-blend-screen filter blur-[160px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DC2E3F] mb-3">
            Instant Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Send Message via WhatsApp
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Fill in your details below to start a direct chat with Kashif Insari on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ══════════════════════════════════════
              LEFT — FORM CARD (Redirects to WhatsApp)
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-white text-[#1A1D29] rounded-2xl shadow-2xl shadow-black/50 p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full rounded-xl border bg-gray-50 pl-10 pr-4 py-3 text-sm text-[#1A1D29] outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] ${
                          errors.name ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07xxx xxxxxx"
                        className={`w-full rounded-xl border bg-gray-50 pl-10 pr-4 py-3 text-sm text-[#1A1D29] outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] ${
                          errors.phone ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Email Address <span className="text-gray-400 normal-case">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-3 text-sm text-[#1A1D29] outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Company <span className="text-gray-400 normal-case">(optional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your business name"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-3 text-sm text-[#1A1D29] outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366]"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] ${
                      errors.service ? 'border-red-400' : 'border-gray-200'
                    } ${!formData.service ? 'text-gray-400' : 'text-[#1A1D29]'}`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-[#1A1D29]">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Message / Question <span className="text-gray-400 normal-case">(optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe what you need help with..."
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-3 text-sm text-[#1A1D29] outline-none transition focus:ring-2 focus:ring-[#25D366]/40 focus:border-[#25D366] resize-none"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-[#25D366] rounded"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I agree to open WhatsApp and contact ADAMSON Accountants regarding my enquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-red-500">{errors.consent}</p>
                  )}
                </div>

                {/* WhatsApp Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Chat on WhatsApp Now
                </button>
              </form>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════
              RIGHT — CONTACT INFO SIDEBAR
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct WhatsApp Call Card */}
            <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 backdrop-blur-sm p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct WhatsApp Chat</h3>
                  <p className="text-xs text-gray-300">Fastest way to get a reply</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Clicking the button will instantly open a chat with <strong>Kashif Insari (MAAT)</strong> on WhatsApp.
              </p>
              <a
                href="https://wa.me/447757510944?text=Hello%20Kashif,%20I%20have%20an%20enquiry%20regarding%20your%20accounting%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] hover:bg-[#20bd5a] px-6 py-3 text-sm font-bold text-white transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Open WhatsApp Directly
              </a>
            </div>

            {/* General Info Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#DC2E3F]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#DC2E3F]">
                    Lead Practitioner
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Kashif Insari (MAAT)</h3>
                <p className="text-sm text-gray-400 mt-1">
                  ADAMSON Accountants & Tax Consultants
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Direct Info */}
              <div className="space-y-4">
                <a href="tel:01282611503" className="flex items-center gap-3 group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DC2E3F]/10 text-[#DC2E3F] group-hover:bg-[#DC2E3F] group-hover:text-white transition">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Office Landline
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#DC2E3F] transition">
                      01282 611503
                    </p>
                  </div>
                </a>

                <a href="tel:07757510944" className="flex items-center gap-3 group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DC2E3F]/10 text-[#DC2E3F] group-hover:bg-[#DC2E3F] group-hover:text-white transition">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Direct Mobile
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#DC2E3F] transition">
                      07757 510944
                    </p>
                  </div>
                </a>

                <a href="mailto:kashifinsari@gmail.com" className="flex items-center gap-3 group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DC2E3F]/10 text-[#DC2E3F] group-hover:bg-[#DC2E3F] group-hover:text-white transition">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Email Address
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#DC2E3F] transition break-all">
                      kashifinsari@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Office Address
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Pendle Enterprise Haven<br />
                      138 Every Street<br />
                      Nelson, BB9 7EX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Opening Hours
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Mon – Fri: 9:00 AM – 5:30 PM<br />
                      Sat: By Appointment<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: '100% Confidential' },
                { icon: Award, label: 'MAAT Qualified' },
                { icon: Clock, label: 'Fast Response' },
                { icon: Phone, label: 'Direct Advice' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-[#DC2E3F] shrink-0" />
                  <span className="text-xs font-medium text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}