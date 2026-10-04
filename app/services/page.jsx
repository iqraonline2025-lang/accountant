import ServicesHero from "@/components/services/ServicesHero";
import ServicesDeepDiveRunway from "@/components/services/ServicesDeepDiveRunway";
import ServicesComplianceRadar from "@/components/services/ServicesComplianceRadar";
import Footer from "@/components/Footer";
import ServicesEstimator from "@/components/services/ServicesEstimator";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services | Adamson Accountants & Tax Consultants",
  description:
    "Explore our 14 core accountancy services: Accountancy, Bookkeeping, Self Assessments, Tax Returns, Payroll, Company Secretarials, LLPs, Partnerships, Corporation Tax, VAT, HMRC Reports, Compliance, Business Plans, and Charities Filings.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-white overflow-hidden">
      <ServicesHero />
      <ServicesDeepDiveRunway />
      <ServicesComplianceRadar />
      <ServicesEstimator />
      <ServicesCTA />
      {/* Ready for the final CTA block */}
      <Footer />
    </main>
  );
}