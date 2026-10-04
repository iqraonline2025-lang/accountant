import AboutCTA from "@/components/about/AboutCTA";
import AboutGuarantees from "@/components/about/AboutGuarantees";
import AboutHero from "@/components/about/AboutHero";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutStory from "@/components/about/AboutStory";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Adamson Accountants & Tax Consultants",
  description:
    "Learn about Adamson Accountants, led by Kashif Insari (MAAT) at Pendle Enterprise Haven in Nelson. Trusted accountancy, tax returns, and payroll services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-white">
      <AboutHero />
      <AboutStory />
      <AboutLeadership />
      <AboutGuarantees />
      <AboutCTA />
      <Footer />
    </main>
  );
}