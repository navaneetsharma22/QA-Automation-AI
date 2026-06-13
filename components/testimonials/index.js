"use client";
import { useReveal } from "@/animations/reveal";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function Testimonials() {
  const sectionRef = useReveal({ stagger: 120 });

  return (
    <section ref={sectionRef} id="testimonials" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
              Trusted by Enterprise
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            What QA Leaders Say
            <br /><span className="gradient-text">After Deploying the Platform</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
          }}>
            Organizations across aviation, telecom, and financial services trust
            QA Intelligence to analyze millions of conversations.
          </p>
        </div>

        {/* Testimonials grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
        }} className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, i) => (
            <div
              key={t.name}
              className={`reveal card-hover delay-${i * 150}`}
              style={{
                background: "rgba(10,10,20,0.6)", backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "28px 24px",
                position: "relative", overflow: "hidden",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}30`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 24px 60px ${t.color}10`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: "absolute", top: 0, left: "15%", right: "15%", height: 1,
                background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)`,
              }} />

              {/* Quote icon */}
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${t.color}12`, border: `1px solid ${t.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, color: t.color,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" opacity="0.6" />
                </svg>
              </div>

              {/* Metric badge */}
              <div style={{ marginBottom: 16 }}>
                <span style={{
                  fontSize: 12, fontWeight: 700, color: t.color,
                  background: `${t.color}12`, border: `1px solid ${t.color}25`,
                  padding: "4px 10px", borderRadius: 100,
                }}>
                  {t.metric}
                </span>
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: 14, color: "#cbd5e1", lineHeight: 1.7,
                marginBottom: 24, fontStyle: "italic",
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 800, color: "white",
                  boxShadow: `0 4px 12px ${t.color}30`,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{t.role}</div>
                  <div style={{ fontSize: 12, color: t.color, fontWeight: 600 }}>{t.company}</div>
                </div>
                <div style={{
                  marginLeft: "auto",
                  padding: "4px 8px", borderRadius: 6,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                  fontSize: 10, color: "#475569",
                }}>
                  {t.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="reveal" style={{
          marginTop: 48, textAlign: "center",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap",
        }}>
          {[
            { val: "500+", label: "Enterprise clients" },
            { val: "12M+", label: "Conversations analyzed" },
            { val: "4.9/5", label: "Average satisfaction" },
            { val: "SOC 2", label: "Type II certified" },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#f8fafc", letterSpacing: "-0.03em" }}>{val}</div>
              <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
