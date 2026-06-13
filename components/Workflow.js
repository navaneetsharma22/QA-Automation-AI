"use client";
import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Upload Conversation",
    description: "Drop any customer-agent transcript — chat logs, email threads, or call transcripts in any format.",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "AI Reads Context",
    description: "Large language model parses conversation flow, understands intent, products, policies, and agent obligations.",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Detects Issues",
    description: "AI flags misleading responses, incorrect information, broken promises, and policy contradictions.",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
  },
  {
    number: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Verifies Compliance",
    description: "Checks each interaction against your defined QA rubric, escalation protocols, and service standards.",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
  },
  {
    number: "05",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Collects Evidence",
    description: "Pulls exact quotes, timestamps, and context from the conversation as documented, irrefutable proof.",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.25)",
  },
  {
    number: "06",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Calculates Severity",
    description: "Each finding is scored — Critical, High, Medium, or Low — based on risk, customer impact, and compliance.",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.25)",
  },
  {
    number: "07",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Generates QA Report",
    description: "Produces a professional one-page QA report with all findings, evidence citations, and actionable recommendations.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
  },
];

export default function Workflow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".wf-step").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 140);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="workflow" className="section">
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              How It Works
            </span>
          </div>
          <h2
            className="reveal delay-100"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Seven Steps from Conversation
            <br />
            <span className="gradient-text">to Actionable Intelligence</span>
          </h2>
          <p
            className="reveal delay-200"
            style={{ fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}
          >
            Our AI pipeline processes every conversation through a structured analysis
            framework, ensuring nothing is missed.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            position: "relative",
          }}
          className="workflow-grid"
        >
          {/* Connector line (desktop only) */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: "5%",
              right: "5%",
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.2), rgba(6,182,212,0.2), rgba(124,58,237,0.2), transparent)",
              pointerEvents: "none",
            }}
            className="connector-line"
          />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="wf-step card-hover"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 22px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                  opacity: 0.7,
                }}
              />

              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: step.glow,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              {/* Icon + number */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${step.accent}20`,
                    border: `1px solid ${step.accent}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: `${step.accent}50`,
                    letterSpacing: "0.05em",
                    fontFeatureSettings: '"tnum"',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: 10,
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65 }}>
                {step.description}
              </p>

              {/* Arrow for non-last items */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -1,
                    right: -1,
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: `${step.accent}50`,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#demo" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="white" />
            </svg>
            See It In Action
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .connector-line { display: none !important; }
          .workflow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
