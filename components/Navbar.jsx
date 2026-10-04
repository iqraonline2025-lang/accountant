"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#DC2E3F]/20 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-[#DC2E3F]"
                      : scrolled
                      ? "text-[#1A1D29] hover:text-[#DC2E3F]"
                      : "text-white hover:text-[#DC2E3F]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#DC2E3F] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#DC2E3F] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#DC2E3F]/30 transition-all duration-300 hover:scale-105 hover:bg-[#c02634]"
            >
              Free Consultation
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`relative z-[1001] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full transition-colors lg:hidden ${
                scrolled || mobileOpen ? "bg-[#1A1D29]/5" : "bg-white/10"
              }`}
            >
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 7, backgroundColor: "#DC2E3F" }
                    : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1D29" : "#ffffff" }
                }
                className="block h-[2px] w-5 rounded-full"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0, width: 0 }
                    : { opacity: 1, width: 20, backgroundColor: scrolled ? "#1A1D29" : "#ffffff" }
                }
                className="block h-[2px] w-5 rounded-full"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -7, backgroundColor: "#DC2E3F" }
                    : { rotate: 0, y: 0, backgroundColor: scrolled ? "#1A1D29" : "#ffffff" }
                }
                className="block h-[2px] w-5 rounded-full"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex flex-col bg-[#1A1D29] lg:hidden"
          >
            <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#DC2E3F]/20 blur-[80px]" />
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <nav className="flex flex-1 flex-col justify-center gap-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * index + 0.1 }}>
                      <Link href={link.href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-4 rounded-xl px-4 py-4 text-3xl font-semibold transition-colors ${isActive ? "text-[#DC2E3F]" : "text-white hover:text-[#DC2E3F]"}`}>
                        <span className="text-sm font-mono text-[#6B7C96]">0{index + 1}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}