'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo'; // Make sure you have your Logo component here
import { MapPin, Phone, Smartphone, Mail, Award, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12141C] text-white border-t border-white/10 pt-16 pb-8 px-6 relative overflow-hidden">
      
      {/* Top Section: Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* Col 1: Brand & Credentials */}
        <div className="lg:col-span-4 space-y-5">
          <div className="mb-2">
            <Logo />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Professional accounting, tax strategy, and business consulting in Nelson, Lancashire. Dedicated to saving you money and handling compliance effortlessly.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
            <Award className="w-4 h-4 text-[#DC2E3F]" />
            Practitioner: Kashif Insari (MAAT)
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#DC2E3F]">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white hover:translate-x-1 inline-block transition-all">Services</Link></li>
            <li><Link href="/blog" className="hover:text-white hover:translate-x-1 inline-block transition-all">Tax Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Services Offered */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#DC2E3F]">
            Key Services
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>Self Assessment Tax Returns</li>
            <li>Corporation Tax & Accounts</li>
            <li>Bookkeeping & Payroll</li>
            <li>VAT Returns & HMRC Advice</li>
            <li>New Business Startups</li>
          </ul>
        </div>

        {/* Col 4: Direct Contact Info */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#DC2E3F]">
            Nelson Office
          </h4>
          <div className="space-y-3 text-sm text-gray-400">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#DC2E3F] shrink-0 mt-0.5" />
              <span>Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX</span>
            </div>
            
            {/* Office Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="tel:01282611503" className="hover:text-[#DC2E3F] transition-colors">
                01282 611503
              </a>
            </div>
            
            {/* Mobile Phone */}
            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="tel:07757510944" className="hover:text-[#DC2E3F] transition-colors">
                07757 510944
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400 shrink-0" />
              <a href="mailto:kashifinsari@gmail.com" className="hover:text-[#DC2E3F] transition-colors break-all">
                kashifinsari@gmail.com
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Section: Copyright, Legal Links & Back to Top */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-500">
        
        {/* Copyright */}
        <p className="text-center lg:text-left">
          © {new Date().getFullYear()} ADAMSON Accountants & Tax Consultants. All rights reserved.
        </p>
        
        {/* Legal Links (Now properly linked to the new pages) */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-medium">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="hidden sm:inline text-white/10">|</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Business</Link>
          <span className="hidden sm:inline text-white/10">|</span>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Back to top</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#DC2E3F] transition-colors">
            <ArrowUp className="w-3 h-3" />
          </span>
        </button>

      </div>
    </footer>
  );
}