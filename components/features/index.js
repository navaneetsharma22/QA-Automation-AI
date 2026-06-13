"use client";
import { useRef } from "react";
import { useReveal } from "@/animations/reveal";
import { FEATURES_DATA } from "@/data/features";

export default function Features() {
  const sectionRef = useReveal({ stagger: 110 });

  return (
    <section ref={sectionRef} id="features" className="section" style={{ position: "relative" }}>
      {/* Subtle bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(6,182,212,0.05) 0%, transparent 60%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Core Capabilities
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            Everything You Need for
            <br /><span className="gradient-text">Enterprise-Grade QA</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Six AI-powered capabilities working together to deliver complete, consistent,
            and audit-ready quality assurance at scale.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }} className="features-grid">
          {FEATURES_DATA.map((feature, i) => (
            <div
              key={feature.id}
              className={`reveal card-hover delay-${(i % 3) * 100 + 100}`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${feature.accent}08`;
                e.currentTarget.style.borderColor = `${feature.accent}30`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 60px ${feature.accent}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
                background: `linear-gradient(90deg, transparent, ${feature.accent}50, transparent)`,
              }} />

              {/* Corner glow */}
              <div style={{
                position: "absolute", top: -30, right: -30, width: 100, height: 100,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${feature.accent}12 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${feature.accent}15`,
                border: `1px solid ${feature.accent}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: feature.accent,
                marginBottom: 20,
              }}
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />

              {/* Tag */}
              <div style={{ marginBottom: 10 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: feature.accent,
                  background: `${feature.accent}15`,
                  padding: "3px 8px", borderRadius: 6,
                }}>
                  {feature.tag}
                </span>
              </div>

              <h3 style={{
                fontSize: 16, fontWeight: 700, color: "#f1f5f9",
                letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.3,
              }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
