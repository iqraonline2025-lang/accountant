import Navbar from '@/components/Navbar';
import ContactHero from '@/components/contact/hero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import OfficeLocation from '@/components/contact/OfficeLocation';
import WhatHappensNext from '@/components/contact/WhatHappensNext';
import FAQSection from '@/components/contact/FAQSection';
import UrgentBanner from '@/components/contact/UrgentBanner';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | ADAMSON Accountants & Tax Consultants Nelson',
  description:
    'Get in touch with Kashif Insari (MAAT) at ADAMSON Accountants in Nelson, Lancashire. Call 01282 611503 or WhatsApp 07757 510944 for free consultation.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section with 3D Canvas */}
      <ContactHero />

      {/* 3. Direct WhatsApp Contact Form + Info Sidebar */}
      <ContactFormSection />

      {/* 4. Pendle Enterprise Haven Office Location & Interactive Map */}
      <OfficeLocation />

      {/* 5. What Happens Next (4-Step Timeline) */}
      <WhatHappensNext />

      {/* 6. FAQ Accordion (Handling common objections) */}
      <FAQSection />

      {/* 7. Emergency HMRC Assistance Banner */}
      <UrgentBanner />

      {/* 8. Full Site Footer */}
      <Footer />
    </main>
  );
}