import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import AIThinking from "@/components/ai-thinking";
import Features from "@/components/features";
import LiveDemo from "@/components/LiveDemo";
import Evidence from "@/components/evidence";
import ReportPreview from "@/components/report-preview";
import Comparison from "@/components/comparison";
import Industries from "@/components/industries";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* Divider */}
      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 3. AI Workflow — 7 Step Pipeline */}
      <Workflow />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 4. AI Thinking — Read / Understand / Detect / Analyze */}
      <AIThinking />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 5. Core Features */}
      <Features />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 6. Live Detection Demo */}
      <LiveDemo />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 7. Evidence Collection */}
      <Evidence />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 8. One-Page QA Report Preview */}
      <ReportPreview />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 9. Why AI QA — Comparison */}
      <Comparison />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 10. Industries */}
      <Industries />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 11. Testimonials */}
      <Testimonials />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 12. FAQ */}
      <FAQ />

      <div className="divider" style={{ margin: "0 24px" }} />

      {/* 13. CTA */}
      <CTA />

      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
