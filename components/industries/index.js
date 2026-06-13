"use client";
import { useReveal } from "@/animations/reveal";
import { INDUSTRIES_DATA } from "@/data/industries";

export default function Industries() {
  const sectionRef = useReveal({ stagger: 80 });

  return (
    <section ref={sectionRef} id="industries" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 50% 40% at 10% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Industries
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            Built for Every Industry
            <br /><span className="gradient-text">That Relies on Quality Conversations</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            From airlines to fintech — any organization with customer-agent interactions
            can deploy QA Intelligence to eliminate manual review bottlenecks.
          </p>
        </div>

        {/* Industries Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }} className="industries-grid">
          {INDUSTRIES_DATA.map((industry, i) => (
            <div
              key={industry.name}
              className={`reveal card-hover delay-${(i % 4) * 100}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "22px 18px",
                position: "relative", overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.07)";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{industry.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 6, letterSpacing: "-0.01em" }}>
                {industry.name}
              </div>
              <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
                {industry.description}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="reveal" style={{ marginTop: 56, overflow: "hidden", position: "relative" }}>
          <div style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            marginBottom: 24,
          }} />
          <div style={{
            display: "flex", gap: 32, alignItems: "center",
            animation: "marquee 28s linear infinite",
            width: "max-content",
          }}>
            {[...INDUSTRIES_DATA, ...INDUSTRIES_DATA].map((ind, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
                padding: "8px 18px", borderRadius: 100,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{ fontSize: 16 }}>{ind.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#64748b", whiteSpace: "nowrap" }}>
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div style={{
            position: "absolute", top: 24, left: 0, width: 80, bottom: 0,
            background: "linear-gradient(90deg, #020205, transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: 24, right: 0, width: 80, bottom: 0,
            background: "linear-gradient(270deg, #020205, transparent)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .industries-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
