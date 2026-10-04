import BlogHero from "@/components/blog/BlogHero";
import BlogTrendingMatrix from "@/components/blog/BlogTrendingMatrix";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogUrgentNotice from "@/components/blog/BlogUrgentNotice";
import Footer from "@/components/Footer";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Tax Insights & HMRC News | Adamson Accountants",
  description:
    "Latest UK tax strategies, HMRC updates, CIS refund guidance, and Making Tax Digital (MTD) news from Lead Accountant Kashif Insari (MAAT) at Pendle Enterprise Haven.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-white overflow-hidden">
      {/* Section 1: Live HMRC Intelligence Stage & 3D Flipping Ledger */}
      <BlogHero />

      {/* Section 2: 3D Trending Strategy Masonry */}
      <BlogTrendingMatrix />

      {/* Section 3: Interactive Expanding Stretch Grid */}
      <BlogGrid />

      {/* Section 4: HMRC Letter Triage Scanner */}
      <BlogUrgentNotice />

      <BlogCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}