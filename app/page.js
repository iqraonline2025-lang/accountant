import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import StatsCards from "@/components/StatsCards";
import AboutBento from "@/components/AboutBento";
import ServicesRunway from "@/components/ServicesRunway";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSpotlight from "@/components/TestimonialsSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-white">
      <Hero />
      <LogoMarquee />
      <StatsCards />
      <AboutBento />
      <ServicesRunway />
      <WhyChooseUs />
      <TestimonialsSpotlight />
      <Footer />
    </main>
  );
}