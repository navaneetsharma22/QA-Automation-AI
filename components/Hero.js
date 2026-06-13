"use client";
import { useEffect, useRef } from "react";

const HERO_CONVERSATION = [
  { role: "customer", text: "I need to rebook my flight to Dubai. My original was cancelled." },
  { role: "agent", text: "No problem! I can rebook you on the next available flight at no extra cost." },
  { role: "customer", text: "Is there a fee for the change? I was told there might be one." },
  { role: "agent", text: "Absolutely zero fees. You're all covered, nothing to worry about." },
];

const ANALYSIS_ITEMS = [
  { type: "issue", label: "Misleading Statement", text: "Agent guaranteed 'zero fees' without verifying fare rules", severity: "HIGH" },
  { type: "evidence", label: "Evidence #1", text: "Policy: Fare difference applies on all rebookings after 24hrs", severity: "INFO" },
  { type: "violation", label: "Process Violation", text: "Failed to verify booking class & fare conditions before promising", severity: "CRITICAL" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="platform"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Mesh gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 70% at 10% 15%, rgba(124,58,237,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 85% 75%, rgba(6,182,212,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 60% 20%, rgba(124,58,237,0.08) 0%, transparent 60%),
            #020205
          `,
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animationDelay: "0s",
        }}
      />
      <div
        className="animate-float"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animationDelay: "3s",
        }}
      />

      <div className="container-xl" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span className="badge badge-violet">
                <span className="status-dot" />
                AI QA Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="reveal delay-100"
              style={{
                fontSize: "clamp(42px, 5vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                marginBottom: 24,
                color: "#f8fafc",
              }}
            >
              QA at the Speed{" "}
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 60%, #a78bfa 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-x 4s ease infinite",
                }}
              >
                of Intelligence
              </span>
            </h1>

            {/* Sub */}
            <p
              className="reveal delay-200"
              style={{
                fontSize: 18,
                color: "#94a3b8",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Upload customer-agent conversations and let AI detect misleading responses,
              identify process violations, collect evidence, and generate professional
              QA reports — in seconds.
            </p>

            {/* CTAs */}
            <div className="reveal delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#demo" className="btn-primary" style={{ fontSize: 15 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3l14 9-14 9V3z" fill="white" />
                </svg>
                Watch AI Analyze
              </a>
              <a href="#workflow" className="btn-secondary" style={{ fontSize: 15 }}>
                See How It Works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal delay-400" style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              {[
                { val: "98.4%", label: "Detection Accuracy" },
                { val: "< 30s", label: "Analysis Time" },
                { val: "500+", label: "Enterprise Clients" },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.03em" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "#64748b", letterSpacing: "0.02em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Preview Card */}
          <div className="reveal-right delay-200" style={{ position: "relative" }}>
            {/* Main card */}
            <div
              className="animate-float"
              style={{
                background: "rgba(10,10,20,0.8)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: 24,
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.15)",
                maxWidth: 480,
                animationDuration: "7s",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
                  <span style={{ marginLeft: 8, fontSize: 12, color: "#64748b", fontWeight: 500 }}>
                    conversation_12847.txt
                  </span>
                </div>
                <span className="badge badge-violet" style={{ fontSize: 10, padding: "3px 8px" }}>
                  AI Analyzing...
                </span>
              </div>

              {/* Conversation preview */}
              <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {HERO_CONVERSATION.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      flexDirection: msg.role === "agent" ? "row-reverse" : "row",
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: msg.role === "agent"
                          ? "linear-gradient(135deg, #7c3aed, #a78bfa)"
                          : "linear-gradient(135deg, #475569, #64748b)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {msg.role === "agent" ? "A" : "C"}
                    </div>
                    <div
                      style={{
                        background: msg.role === "agent"
                          ? "rgba(124,58,237,0.15)"
                          : "rgba(255,255,255,0.05)",
                        border: i === 1
                          ? "1px solid rgba(239,68,68,0.4)"
                          : msg.role === "agent"
                            ? "1px solid rgba(124,58,237,0.2)"
                            : "1px solid rgba(255,255,255,0.07)",
                        borderRadius: msg.role === "agent" ? "12px 4px 12px 12px" : "4px 12px 12px 12px",
                        padding: "8px 12px",
                        fontSize: 12,
                        color: i === 1 ? "#fca5a5" : "#cbd5e1",
                        lineHeight: 1.5,
                        maxWidth: "80%",
                        position: "relative",
                      }}
                    >
                      {msg.text}
                      {i === 1 && (
                        <div
                          style={{
                            position: "absolute",
                            top: -1,
                            right: -1,
                            background: "#ef4444",
                            borderRadius: "0 4px 0 6px",
                            padding: "2px 6px",
                            fontSize: 9,
                            fontWeight: 700,
                            color: "white",
                          }}
                        >
                          ⚠ FLAGGED
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Analysis results */}
              <div
                style={{
                  background: "rgba(2,2,5,0.6)",
                  borderRadius: 12,
                  padding: 14,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                  AI Findings
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {ANALYSIS_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        padding: "8px 10px",
                        borderRadius: 8,
                        background: item.type === "violation"
                          ? "rgba(239,68,68,0.08)"
                          : item.type === "issue"
                            ? "rgba(245,158,11,0.08)"
                            : "rgba(6,182,212,0.06)",
                        border: item.type === "violation"
                          ? "1px solid rgba(239,68,68,0.2)"
                          : item.type === "issue"
                            ? "1px solid rgba(245,158,11,0.2)"
                            : "1px solid rgba(6,182,212,0.15)",
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          marginTop: 5,
                          flexShrink: 0,
                          background: item.type === "violation" ? "#ef4444" : item.type === "issue" ? "#f59e0b" : "#06b6d4",
                        }}
                      />
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: item.type === "violation" ? "#f87171" : item.type === "issue" ? "#fbbf24" : "#22d3ee", marginBottom: 2 }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.4 }}>
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Score bar */}
              <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 12, color: "#64748b" }}>QA Score</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, marginLeft: 12 }}>
                  <div style={{ flex: 1, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
                    <div
                      style={{
                        width: "34%",
                        height: "100%",
                        borderRadius: 3,
                        background: "linear-gradient(90deg, #ef4444, #f97316)",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f97316" }}>34/100</span>
                </div>
              </div>
            </div>

            {/* Floating label cards */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: -30,
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: 12,
                padding: "10px 16px",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                animation: "float 5s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#34d399" }}>Evidence Collected</span>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: -20,
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 12,
                padding: "10px 16px",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                animation: "float 5s ease-in-out infinite",
                animationDelay: "2.5s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#a78bfa" }}>Report Generated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#475569",
          fontSize: 12,
          animation: "fadeIn 1s ease 1.5s both",
        }}
      >
        <span style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 11 }}>Scroll to explore</span>
        <div
          style={{
            width: 22,
            height: 36,
            border: "1.5px solid rgba(255,255,255,0.12)",
            borderRadius: 11,
            display: "flex",
            justifyContent: "center",
            padding: "6px 0",
          }}
        >
          <div
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "#a78bfa",
              animation: "scanning-line 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
