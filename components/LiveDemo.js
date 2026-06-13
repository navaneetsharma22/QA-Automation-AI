"use client";
import { useState, useEffect, useRef } from "react";

const CONVERSATION = [
  { id: 1, role: "customer", name: "Sarah M.", time: "14:02", text: "Hi, my flight from London to Dubai was cancelled. I need to rebook urgently." },
  { id: 2, role: "agent", name: "Agent Jake", time: "14:03", text: "Hello Sarah! I'm so sorry about that. I can rebook you on the next flight at absolutely no cost to you." },
  { id: 3, role: "customer", name: "Sarah M.", time: "14:04", text: "Are you sure? I was told there might be a fare difference because I booked a non-refundable ticket." },
  { id: 4, role: "agent", name: "Agent Jake", time: "14:05", text: "100% guaranteed — no fees whatsoever. You're fully covered and I'll take care of everything right now." },
  { id: 5, role: "customer", name: "Sarah M.", time: "14:06", text: "Also, will I get a refund for my hotel booking since I'm arriving a day late now?" },
  { id: 6, role: "agent", name: "Agent Jake", time: "14:07", text: "Yes, we'll reimburse your hotel. Just send us the receipt and we'll process it within 24 hours." },
  { id: 7, role: "customer", name: "Sarah M.", time: "14:08", text: "That's wonderful! Thank you so much Jake, you've been extremely helpful." },
];

const ANALYSIS_STEPS = [
  { id: 1, phase: "Context Analysis", icon: "🧠", duration: 1200, color: "#8b5cf6", description: "Parsing conversation structure, identifying parties and intent..." },
  { id: 2, phase: "Issue Detection", icon: "🔍", duration: 1400, color: "#f59e0b", description: "Scanning for misleading statements and unverified guarantees..." },
  { id: 3, phase: "Compliance Check", icon: "📋", duration: 1200, color: "#06b6d4", description: "Verifying agent responses against policy framework..." },
  { id: 4, phase: "Evidence Collection", icon: "📎", duration: 1000, color: "#10b981", description: "Extracting supporting quotes and timestamps as evidence..." },
  { id: 5, phase: "Severity Scoring", icon: "⚡", duration: 800, color: "#ef4444", description: "Calculating risk level and business impact of each finding..." },
  { id: 6, phase: "Report Generation", icon: "📄", duration: 1000, color: "#a78bfa", description: "Compiling professional QA findings document..." },
];

const FINDINGS = [
  {
    id: "F-001",
    severity: "CRITICAL",
    type: "Misleading Guarantee",
    finding: "Agent guaranteed zero fees without verifying fare rules or booking class eligibility.",
    evidence: '"100% guaranteed — no fees whatsoever." — Agent Jake, 14:05',
    policy: "Policy 3.2.1: Fare difference applies on non-refundable tickets unless waived by supervisor.",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
  },
  {
    id: "F-002",
    severity: "HIGH",
    type: "Unauthorized Promise",
    finding: "Agent promised hotel reimbursement without authorization or checking eligibility criteria.",
    evidence: '"Yes, we\'ll reimburse your hotel." — Agent Jake, 14:07',
    policy: "Policy 5.1.4: Hotel compensation requires Supervisor approval and is limited to partner hotels.",
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
  },
  {
    id: "F-003",
    severity: "MEDIUM",
    type: "Escalation Gap",
    finding: "Complex multi-issue case was not escalated to supervisor despite 2+ policy exception requests.",
    evidence: "No escalation attempt identified in transcript (14:02–14:08)",
    policy: "SOP 2.4: Cases with compensation promises > $50 require immediate supervisor escalation.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
];

export default function LiveDemo() {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [highlightedMsgs, setHighlightedMsgs] = useState([]);
  const [showFindings, setShowFindings] = useState([]);
  const [qaScore, setQaScore] = useState(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const timeoutsRef = useRef([]);

  const clearAll = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const startDemo = () => {
    if (running) return;
    // Reset
    setRunning(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    setHighlightedMsgs([]);
    setShowFindings([]);
    setQaScore(null);
    setProgress(0);

    let elapsed = 0;
    let totalDuration = ANALYSIS_STEPS.reduce((a, s) => a + s.duration, 0);

    ANALYSIS_STEPS.forEach((step, i) => {
      // Start step
      const t1 = setTimeout(() => {
        setCurrentStep(i);
        // Highlight messages progressively
        if (i === 1) setHighlightedMsgs([2, 4]); // flag misleading msgs
        if (i === 2) setHighlightedMsgs([2, 4, 6]);
        if (i === 3) setHighlightedMsgs([2, 4, 6]);
      }, elapsed);
      timeoutsRef.current.push(t1);

      elapsed += step.duration;

      // Complete step
      const t2 = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, i]);
        setProgress(Math.round(((i + 1) / ANALYSIS_STEPS.length) * 100));

        // Reveal findings
        if (i === 3) setShowFindings([0]);
        if (i === 4) setShowFindings([0, 1]);
        if (i === 5) {
          setShowFindings([0, 1, 2]);
          setTimeout(() => {
            setQaScore(28);
            setRunning(false);
          }, 600);
        }
      }, elapsed);
      timeoutsRef.current.push(t2);
    });
  };

  const resetDemo = () => {
    clearAll();
    setRunning(false);
    setCurrentStep(-1);
    setCompletedSteps([]);
    setHighlightedMsgs([]);
    setShowFindings([]);
    setQaScore(null);
    setProgress(0);
  };

  useEffect(() => {
    return () => clearAll();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const severityColor = { CRITICAL: "#ef4444", HIGH: "#f97316", MEDIUM: "#f59e0b", LOW: "#10b981" };

  return (
    <section ref={sectionRef} id="demo" className="section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M5 3l14 9-14 9V3z" fill="#a78bfa" />
              </svg>
              Live AI Demo
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", marginBottom: 16, lineHeight: 1.1,
          }}>
            Watch AI Analyze a Real
            <br /><span className="gradient-text">Conversation in Real Time</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Press Play to see exactly how our AI processes a customer support conversation
            and generates a professional QA report.
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 24, alignItems: "start",
        }} id="demo-grid">

          {/* LEFT: Conversation Panel */}
          <div style={{
            background: "rgba(10,10,20,0.7)", backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20,
            overflow: "hidden",
          }}>
            {/* Panel header */}
            <div style={{
              padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "rgba(255,255,255,0.02)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
                </div>
                <span style={{ fontSize: 12, color: "#475569", fontWeight: 500, marginLeft: 4 }}>
                  london_dubai_12847.txt
                </span>
              </div>
              {running && (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div className="status-dot" />
                  <span style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>Scanning...</span>
                </div>
              )}
            </div>

            {/* Messages */}
            <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12, minHeight: 420 }}>
              {CONVERSATION.map((msg) => {
                const isFlagged = highlightedMsgs.includes(msg.id);
                const isAgent = msg.role === "agent";
                return (
                  <div key={msg.id} style={{
                    display: "flex", gap: 10,
                    flexDirection: isAgent ? "row-reverse" : "row",
                    transition: "all 0.4s ease",
                  }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                      background: isAgent
                        ? "linear-gradient(135deg, #7c3aed, #a78bfa)"
                        : "linear-gradient(135deg, #334155, #475569)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, color: "white",
                    }}>
                      {isAgent ? "A" : "S"}
                    </div>
                    <div style={{ maxWidth: "75%", position: "relative" }}>
                      <div style={{
                        fontSize: 10, color: "#475569", marginBottom: 4, fontWeight: 500,
                        textAlign: isAgent ? "right" : "left",
                      }}>
                        {msg.name} · {msg.time}
                      </div>
                      <div style={{
                        padding: "10px 14px",
                        borderRadius: isAgent ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
                        fontSize: 13,
                        lineHeight: 1.55,
                        color: isFlagged ? "#fca5a5" : "#cbd5e1",
                        background: isFlagged
                          ? "rgba(239,68,68,0.1)"
                          : isAgent
                            ? "rgba(124,58,237,0.12)"
                            : "rgba(255,255,255,0.04)",
                        border: isFlagged
                          ? "1px solid rgba(239,68,68,0.35)"
                          : isAgent
                            ? "1px solid rgba(124,58,237,0.2)"
                            : "1px solid rgba(255,255,255,0.06)",
                        transition: "all 0.5s ease",
                        boxShadow: isFlagged ? "0 0 20px rgba(239,68,68,0.15)" : "none",
                      }}>
                        {msg.text}
                        {isFlagged && (
                          <div style={{
                            marginTop: 6, paddingTop: 6, borderTop: "1px solid rgba(239,68,68,0.25)",
                            display: "flex", alignItems: "center", gap: 4,
                          }}>
                            <span style={{ fontSize: 9, fontWeight: 800, color: "#ef4444", letterSpacing: "0.06em" }}>
                              ⚠ FLAGGED BY AI
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div style={{ padding: "0 20px 20px" }}>
              <div style={{
                height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%", borderRadius: 2,
                  background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                  width: `${progress}%`,
                  transition: "width 0.6s ease",
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <span style={{ fontSize: 11, color: "#475569" }}>Analysis Progress</span>
                <span style={{ fontSize: 11, color: "#a78bfa", fontWeight: 600 }}>{progress}%</span>
              </div>
            </div>
          </div>

          {/* RIGHT: AI Analysis Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Play / Reset Buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={startDemo}
                disabled={running}
                style={{
                  flex: 1, padding: "14px 24px", borderRadius: 12, border: "none",
                  background: running
                    ? "rgba(124,58,237,0.2)"
                    : "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "white", fontSize: 14, fontWeight: 700, cursor: running ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: running ? "none" : "0 4px 20px rgba(124,58,237,0.4)",
                  transition: "all 0.3s ease",
                  letterSpacing: "-0.01em",
                }}
              >
                {running ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin-slow 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    AI Analyzing...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    {completedSteps.length > 0 ? "Run Again" : "Start AI Analysis"}
                  </>
                )}
              </button>
              {(completedSteps.length > 0 || running) && (
                <button
                  onClick={resetDemo}
                  style={{
                    padding: "14px 18px", borderRadius: 12,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8", fontSize: 13, fontWeight: 500, cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Reset
                </button>
              )}
            </div>

            {/* Analysis Steps */}
            <div style={{
              background: "rgba(10,10,20,0.7)", backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                Analysis Pipeline
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {ANALYSIS_STEPS.map((step, i) => {
                  const isActive = currentStep === i;
                  const isDone = completedSteps.includes(i);
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: 12, padding: "10px 12px",
                      borderRadius: 10, transition: "all 0.4s ease",
                      background: isActive
                        ? `${step.color}12`
                        : isDone
                          ? "rgba(16,185,129,0.06)"
                          : "rgba(255,255,255,0.02)",
                      border: isActive
                        ? `1px solid ${step.color}30`
                        : isDone
                          ? "1px solid rgba(16,185,129,0.15)"
                          : "1px solid rgba(255,255,255,0.04)",
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: isDone
                          ? "rgba(16,185,129,0.15)"
                          : isActive
                            ? `${step.color}20`
                            : "rgba(255,255,255,0.04)",
                        border: isDone
                          ? "1px solid rgba(16,185,129,0.3)"
                          : isActive
                            ? `1px solid ${step.color}40`
                            : "1px solid rgba(255,255,255,0.06)",
                        fontSize: isDone ? 14 : 13,
                        transition: "all 0.3s ease",
                      }}>
                        {isDone ? "✓" : isActive ? (
                          <div style={{
                            width: 8, height: 8, borderRadius: "50%",
                            background: step.color,
                            animation: "pulse-glow 1s ease-in-out infinite",
                          }} />
                        ) : <span style={{ fontSize: 12 }}>{step.icon}</span>}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: 12, fontWeight: 600,
                          color: isDone ? "#10b981" : isActive ? step.color : "#475569",
                          transition: "color 0.3s ease",
                        }}>
                          {step.phase}
                        </div>
                        {isActive && (
                          <div style={{
                            fontSize: 11, color: "#64748b", marginTop: 2, lineHeight: 1.4,
                            animation: "fadeIn 0.3s ease",
                          }}>
                            {step.description}
                          </div>
                        )}
                      </div>
                      {isDone && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QA Score */}
            {qaScore !== null && (
              <div style={{
                background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: 14, padding: 18,
                animation: "scaleIn 0.5s ease",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                      QA Score
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 36, fontWeight: 900, color: "#ef4444", letterSpacing: "-0.04em" }}>
                        {qaScore}
                      </span>
                      <span style={{ fontSize: 16, color: "#64748b" }}>/100</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#f87171", fontWeight: 500, marginTop: 2 }}>
                      Critical Issues Detected — Immediate Review Required
                    </div>
                  </div>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "conic-gradient(#ef4444 0%, #ef4444 28%, rgba(255,255,255,0.06) 28%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 24px rgba(239,68,68,0.3)",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(10,10,20,0.9)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: "#ef4444",
                    }}>
                      FAIL
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Findings */}
        {showFindings.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
                  AI Findings Report
                </h3>
                <p style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>
                  {showFindings.length} finding{showFindings.length !== 1 ? "s" : ""} detected — with evidence citations
                </p>
              </div>
              {qaScore !== null && (
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="badge badge-red">3 Findings</span>
                  <span className="badge badge-amber">1 Critical</span>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FINDINGS.slice(0, showFindings.length).map((f, i) => (
                <div
                  key={f.id}
                  style={{
                    background: f.bg,
                    border: `1px solid ${f.border}`,
                    borderRadius: 16, padding: 22,
                    animation: "fadeUp 0.5s ease",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                    background: f.color, borderRadius: "16px 0 0 16px",
                  }} />
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{
                          fontSize: 10, fontWeight: 800, color: f.color,
                          background: `${f.color}15`, border: `1px solid ${f.color}30`,
                          padding: "3px 8px", borderRadius: 6, letterSpacing: "0.06em",
                        }}>
                          {f.severity}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>{f.type}</span>
                        <span style={{ fontSize: 11, color: "#475569", fontFamily: "monospace" }}>{f.id}</span>
                      </div>
                      <p style={{ fontSize: 14, color: "#f1f5f9", lineHeight: 1.6, marginBottom: 12, fontWeight: 500 }}>
                        {f.finding}
                      </p>
                      <div style={{
                        background: "rgba(0,0,0,0.3)", borderRadius: 8,
                        padding: "10px 14px", marginBottom: 10,
                        borderLeft: `3px solid ${f.color}`,
                      }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                          Evidence
                        </div>
                        <div style={{ fontSize: 12, color: "#94a3b8", fontStyle: "italic", lineHeight: 1.5 }}>
                          "{f.evidence}"
                        </div>
                      </div>
                      <div style={{
                        background: "rgba(0,0,0,0.2)", borderRadius: 8, padding: "10px 14px",
                        borderLeft: "3px solid rgba(255,255,255,0.1)",
                      }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                          Policy Violated
                        </div>
                        <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
                          {f.policy}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          #demo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
