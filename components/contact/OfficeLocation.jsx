'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Car,
  Accessibility,
  Clock,
  Building2,
  Train,
  ExternalLink,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function OfficeLocation() {
  // Google Maps directions link for the office
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Pendle+Enterprise+Haven,+138+Every+Street,+Nelson+BB9+7EX';

  // Embed map focused on the office (no API key needed for basic iframe embed)
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=Pendle+Enterprise+Haven,+138+Every+Street,+Nelson+BB9+7EX&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section className="relative bg-[#12141C] text-white py-20 lg:py-28 px-6 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025] pointer-events-none" />

      {/* Soft red glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#DC2E3F] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.08] pointer-events-none" />

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
            Local Office
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Visit Us in Nelson, Lancashire
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Based at Pendle Enterprise Haven. In-person meetings by appointment —
            or we can handle everything remotely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ══════════════════════════════════════
              LEFT — LOCATION DETAILS CARD
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Main address card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DC2E3F]/15 text-[#DC2E3F] shrink-0">
                  <Building2 className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                    Office Building
                  </p>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    Pendle Enterprise Haven
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    138 Every Street
                    <br />
                    Nelson, Lancashire
                    <br />
                    <span className="text-white font-semibold">BB9 7EX</span>
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* Info rows */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#DC2E3F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Free On-Site Parking</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Client parking available at Pendle Enterprise Haven
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Accessibility className="w-5 h-5 text-[#DC2E3F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Wheelchair Accessible</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Ground-floor access and accessible facilities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#DC2E3F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">By Appointment</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Mon–Fri 9:00–17:30 · Sat by arrangement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-[#DC2E3F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Easy to Reach</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Serving Nelson, Burnley, Colne, Pendle & wider Lancashire
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#DC2E3F] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#DC2E3F]/25 transition hover:bg-[#c02634] hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href="https://wa.me/447757510944?text=Hello%20Kashif%2C%20I%27d%20like%20to%20book%20an%20in-person%20appointment%20at%20your%20Nelson%20office."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Visit
                </a>
              </div>
            </div>

            {/* Quick contact strip under card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#DC2E3F]" />
                <span>Prefer a call instead?</span>
              </div>
              <a
                href="tel:01282611503"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2E3F] hover:underline"
              >
                <Phone className="w-4 h-4" />
                01282 611503
              </a>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════
              RIGHT — GOOGLE MAP EMBED
          ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative h-full min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              {/* Map iframe */}
              <iframe
                title="ADAMSON Accountants — Pendle Enterprise Haven, Nelson"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Top gradient overlay for polish */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#12141C]/50 to-transparent" />

              {/* Floating "Open in Maps" chip */}
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[#1A1D29]/95 backdrop-blur-md border border-white/10 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:bg-[#DC2E3F] hover:border-[#DC2E3F]"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Address pill top-left */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#1A1D29]/95 backdrop-blur-md border border-white/10 px-3.5 py-2 text-xs font-medium text-white shadow-lg max-w-[220px] sm:max-w-none">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DC2E3F] shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="truncate">138 Every Street, Nelson BB9 7EX</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Areas served strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
        >
          <p className="text-center text-xs sm:text-sm text-gray-400">
            <span className="font-semibold text-white">Areas we serve: </span>
            Nelson · Burnley · Colne · Brierfield · Barrowford · Pendle · Accrington ·
            across Lancashire · and remote clients UK-wide
          </p>
        </motion.div>
      </div>
    </section>
  );
}