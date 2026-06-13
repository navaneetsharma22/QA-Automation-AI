"use client";
import { useState } from "react";
import { useReveal } from "@/animations/reveal";
import { FAQ_DATA } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useReveal({ stagger: 80 });

  return (
    <section ref={sectionRef} id="faq" className="section" style={{ position: "relative" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="faq-grid">
          {/* Left: Title */}
          <div style={{ position: "sticky", top: 120 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span className="badge badge-cyan">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                FAQ
              </span>
            </div>
            <h2 className="reveal delay-100" style={{
              fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800,
              letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
            }}>
              Common Questions
              <br /><span className="gradient-text">Answered</span>
            </h2>
            <p className="reveal delay-200" style={{
              fontSize: 15, color: "#64748b", lineHeight: 1.7, marginBottom: 32,
            }}>
              Everything you need to know about the platform, implementation, and capabilities.
            </p>
            <div className="reveal delay-300">
              <a href="#contact" className="btn-primary" style={{ fontSize: 14 }}>
                Talk to Sales
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="reveal delay-100" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    background: isOpen ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.02)",
                    border: isOpen ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14, overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    style={{
                      width: "100%", padding: "18px 22px",
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                      textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontSize: 14.5, fontWeight: 600,
                      color: isOpen ? "#f1f5f9" : "#94a3b8",
                      transition: "color 0.2s ease", lineHeight: 1.4,
                    }}>
                      {item.q}
                    </span>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: isOpen ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.05)",
                      border: isOpen ? "1px solid rgba(124,58,237,0.3)" : "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#a78bfa" : "#475569"} strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: "0 22px 20px",
                      animation: "fadeIn 0.3s ease",
                    }}>
                      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 16 }} />
                      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75, margin: 0 }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
