"use client";
import { useReveal } from "@/animations/reveal";
import { COMPARISON_DATA } from "@/data/industries";

const STATS = [
  { val: "95%", label: "Less Time Spent on QA", icon: "⚡" },
  { val: "100%", label: "Conversation Coverage", icon: "🎯" },
  { val: "10x", label: "More Cost Efficient", icon: "💰" },
  { val: "98.4%", label: "Detection Accuracy", icon: "🎖️" },
];

export default function Comparison() {
  const sectionRef = useReveal({ stagger: 60 });

  return (
    <section ref={sectionRef} id="why-ai" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(6,182,212,0.05) 0%, transparent 65%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
              Why AI QA
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            Traditional QA Is Broken.
            <br /><span className="gradient-text">AI QA Changes Everything.</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Manual reviews cover 5–10% of conversations. AI covers 100% —
            with greater consistency, speed, and accuracy than any human team.
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48,
        }} id="stats-grid">
          {STATS.map(({ val, label, icon }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "24px 20px", textAlign: "center",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.07)";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{
                fontSize: 36, fontWeight: 900, letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", marginBottom: 6,
              }}>
                {val}
              </div>
              <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal" style={{
          background: "rgba(10,10,20,0.7)", backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden",
        }}>
          {/* Table header */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Capability
            </div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em",
              textTransform: "uppercase", textAlign: "center",
            }}>
              ❌ Manual QA
            </div>
            <div style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.06em",
              textTransform: "uppercase", textAlign: "center",
              background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              ✨ AI QA Intelligence
            </div>
          </div>

          {COMPARISON_DATA.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "14px 24px",
                borderBottom: i < COMPARISON_DATA.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)"; }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", display: "flex", alignItems: "center" }}>
                {row.feature}
              </div>
              <div style={{ fontSize: 13, color: "#475569", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {row.manual}
              </div>
              <div style={{
                fontSize: 13, fontWeight: 600, color: "#22d3ee",
                textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              }}>
                <span style={{ color: "#10b981", fontSize: 14 }}>✓</span> {row.ai}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
