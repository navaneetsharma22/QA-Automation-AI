"use client";
import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/animations/reveal";

const THINKING_TABS = [
  {
    id: "read",
    label: "01. Read",
    color: "#7c3aed",
    heading: "AI Reads the Conversation",
    description: "Every word, tone, and implied commitment is parsed. The model identifies all parties, their roles, and the full context of the interaction.",
    tokens: ["Agent Jake", "Sarah M.", "Dubai flight", "non-refundable", "zero fees", "hotel", "24 hours", "cancellation", "rebooking"],
    highlights: [
      { text: "London to Dubai", color: "#7c3aed" },
      { text: "cancelled", color: "#94a3b8" },
      { text: "non-refundable ticket", color: "#06b6d4" },
    ],
  },
  {
    id: "understand",
    label: "02. Understand",
    color: "#06b6d4",
    heading: "AI Understands Context",
    description: "The AI maps conversation to domain knowledge — airline policies, fare rules, compensation standards — understanding what the agent was obligated to say versus what was said.",
    tokens: ["Fare Rules", "Compensation Policy", "Booking Class", "SOP Escalation", "Refund Policy", "Agent Authority"],
    highlights: [
      { text: "non-refundable ticket", color: "#06b6d4" },
      { text: "zero fees guaranteed", color: "#ef4444" },
    ],
  },
  {
    id: "detect",
    label: "03. Detect",
    color: "#ef4444",
    heading: "AI Detects Violations",
    description: "Specific statements are cross-referenced against policy. The AI identifies exactly where the agent deviated from what was factually and procedurally correct.",
    tokens: ["Misleading Promise", "Unauthorized Guarantee", "Policy Breach", "Escalation Gap", "Evidence Found"],
    highlights: [
      { text: "100% guaranteed — no fees", color: "#ef4444" },
      { text: "we'll reimburse your hotel", color: "#f97316" },
    ],
  },
  {
    id: "analyze",
    label: "04. Analyze",
    color: "#10b981",
    heading: "AI Calculates Risk",
    description: "Each finding is scored for severity and customer impact. The AI generates structured findings with evidence citations, ready for the QA report.",
    tokens: ["CRITICAL: 1", "HIGH: 1", "MEDIUM: 1", "Evidence Cited", "Score: 28/100", "Report Ready"],
    highlights: [
      { text: "QA Score: 28/100", color: "#ef4444" },
      { text: "3 findings", color: "#f59e0b" },
    ],
  },
];

const SAMPLE_LINES = [
  { role: "C", text: "My flight to Dubai was cancelled. I need to rebook urgently." },
  { role: "A", text: "I can rebook you on the next flight at absolutely no cost to you.", flag: true },
  { role: "C", text: "Are you sure? I booked a non-refundable ticket." },
  { role: "A", text: "100% guaranteed — no fees whatsoever. You're fully covered.", flag: true },
  { role: "C", text: "Will I get a refund for my hotel too?" },
  { role: "A", text: "Yes, we'll reimburse your hotel within 24 hours.", flag: true },
];

export default function AIThinking() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useReveal({ stagger: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % THINKING_TABS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const tab = THINKING_TABS[activeTab];

  return (
    <section
      ref={sectionRef}
      id="ai-thinking"
      className="section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)`,
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M12 6v6l4 2" />
              </svg>
              AI Intelligence Engine
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            Watch AI Think Through
            <br /><span className="gradient-text">Every Single Word</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Unlike keyword matching, our AI genuinely understands context, obligation,
            and risk — the same way a senior QA expert would.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {THINKING_TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "9px 18px", borderRadius: 10, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, transition: "all 0.3s ease",
                background: activeTab === i ? `${t.color}20` : "rgba(255,255,255,0.03)",
                color: activeTab === i ? t.color : "#475569",
                border: activeTab === i ? `1px solid ${t.color}40` : "1px solid rgba(255,255,255,0.06)",
                letterSpacing: "-0.01em",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main split panel */}
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start",
          }}
          className="thinking-grid"
        >
          {/* Left: Conversation with AI overlay */}
          <div style={{
            background: "rgba(10,10,20,0.7)", backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, overflow: "hidden",
          }}>
            <div style={{
              padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>Conversation Input</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%", background: tab.color,
                  boxShadow: `0 0 8px ${tab.color}`,
                  animation: "pulse-glow 1.5s ease-in-out infinite",
                }} />
                <span style={{ fontSize: 11, color: tab.color, fontWeight: 600, transition: "color 0.3s" }}>
                  {tab.label.split(". ")[1]}ing...
                </span>
              </div>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {SAMPLE_LINES.map((msg, i) => {
                const isAgent = msg.role === "A";
                const isHighlighted = msg.flag && (activeTab === 1 || activeTab === 2 || activeTab === 3);
                return (
                  <div key={i} style={{ display: "flex", gap: 8, flexDirection: isAgent ? "row-reverse" : "row" }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: isAgent ? `linear-gradient(135deg, ${tab.color}, #a78bfa)` : "linear-gradient(135deg, #334155, #475569)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: "white",
                      transition: "background 0.5s ease",
                    }}>{msg.role}</div>
                    <div style={{
                      maxWidth: "80%", padding: "8px 12px",
                      borderRadius: isAgent ? "12px 4px 12px 12px" : "4px 12px 12px 12px",
                      fontSize: 12.5, lineHeight: 1.5, transition: "all 0.4s ease",
                      color: isHighlighted ? "#fca5a5" : "#94a3b8",
                      background: isHighlighted ? "rgba(239,68,68,0.1)" : isAgent ? `${tab.color}12` : "rgba(255,255,255,0.04)",
                      border: isHighlighted ? "1px solid rgba(239,68,68,0.3)" : isAgent ? `1px solid ${tab.color}25` : "1px solid rgba(255,255,255,0.06)",
                      boxShadow: isHighlighted ? "0 0 16px rgba(239,68,68,0.12)" : "none",
                    }}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: AI Thinking Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Main thinking card */}
            <div style={{
              background: `${tab.color}08`,
              border: `1px solid ${tab.color}25`,
              borderRadius: 20, padding: 28,
              transition: "all 0.5s ease",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${tab.color}, transparent)`,
              }} />
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: `${tab.color}20`, border: `1px solid ${tab.color}35`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16, fontSize: 20,
              }}>
                {["🧠", "🔭", "🔍", "⚡"][activeTab]}
              </div>
              <h3 style={{
                fontSize: 20, fontWeight: 700, color: "#f1f5f9",
                letterSpacing: "-0.02em", marginBottom: 12, transition: "all 0.3s ease",
              }}>
                {tab.heading}
              </h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>
                {tab.description}
              </p>
            </div>

            {/* Token chips */}
            <div style={{
              background: "rgba(10,10,20,0.6)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: 20,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                AI Processing
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tab.tokens.map((token, i) => (
                  <span key={i} style={{
                    padding: "5px 12px", borderRadius: 100,
                    background: `${tab.color}15`, border: `1px solid ${tab.color}30`,
                    fontSize: 12, fontWeight: 600, color: tab.color,
                    animation: `fadeIn 0.3s ease ${i * 0.1}s both`,
                    transition: "all 0.3s ease",
                  }}>
                    {token}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div style={{
              background: "rgba(10,10,20,0.6)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: 16,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 2,
                    background: `linear-gradient(90deg, ${tab.color}, ${tab.color}80)`,
                    width: `${(activeTab + 1) * 25}%`,
                    transition: "width 0.6s ease",
                  }} />
                </div>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: tab.color, minWidth: 40 }}>
                {(activeTab + 1) * 25}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .thinking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
