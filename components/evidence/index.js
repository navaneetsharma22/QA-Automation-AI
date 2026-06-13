"use client";
import { useState } from "react";
import { useReveal } from "@/animations/reveal";

const EVIDENCE_ITEMS = [
  {
    id: "E-001",
    category: "Misleading Guarantee",
    severity: "CRITICAL",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    quote: "100% guaranteed — no fees whatsoever. You're fully covered and I'll take care of everything right now.",
    speaker: "Agent Jake",
    timestamp: "14:05:22",
    context: "Said in response to customer asking about fare difference on non-refundable ticket.",
    policy: "Policy 3.2.1 — Fare difference applies on non-refundable class bookings. Waiver requires Supervisor authorization.",
    impact: "Customer may arrive expecting no charge. Financial liability: Est. $240 fare difference.",
  },
  {
    id: "E-002",
    category: "Unauthorized Promise",
    severity: "HIGH",
    color: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    quote: "Yes, we'll reimburse your hotel. Just send us the receipt and we'll process it within 24 hours.",
    speaker: "Agent Jake",
    timestamp: "14:07:44",
    context: "Customer asked about hotel refund due to delayed arrival from flight cancellation.",
    policy: "Policy 5.1.4 — Hotel reimbursement limited to partner hotels only. Requires Supervisor approval. 24hr processing is not guaranteed.",
    impact: "Unauthorized financial commitment. Customer expectation vs policy gap creates complaint risk.",
  },
  {
    id: "E-003",
    category: "Escalation Failure",
    severity: "MEDIUM",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    quote: "[No escalation attempt identified in 6-minute conversation spanning 2 compensation requests]",
    speaker: "System Observation",
    timestamp: "14:02 – 14:08",
    context: "Case involved non-refundable ticket rebooking AND hotel compensation — both requiring supervisor sign-off.",
    policy: "SOP 2.4 — Any case with compensation promises exceeding $50 must be escalated immediately. Dual-exception cases are mandatory escalation.",
    impact: "Agent operated outside authority bounds. Unvetted commitments create billing and legal exposure.",
  },
];

export default function Evidence() {
  const [activeEvidence, setActiveEvidence] = useState(0);
  const sectionRef = useReveal({ stagger: 100 });

  const active = EVIDENCE_ITEMS[activeEvidence];

  return (
    <section ref={sectionRef} id="evidence" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(16,185,129,0.05) 0%, transparent 60%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-green">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Evidence Collection
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            Every Finding Backed by
            <br /><span className="gradient-text">Irrefutable Evidence</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            No more "he said / she said." The AI extracts exact quotes, timestamps,
            and policy references — turning findings into airtight QA cases.
          </p>
        </div>

        {/* Evidence Selector + Detail */}
        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "320px 1fr", gap: 20, alignItems: "start",
        }} id="evidence-grid">
          {/* Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {EVIDENCE_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveEvidence(i)}
                style={{
                  padding: "18px 20px", borderRadius: 14, border: "none", cursor: "pointer",
                  textAlign: "left", transition: "all 0.3s ease",
                  background: activeEvidence === i ? item.bg : "rgba(255,255,255,0.02)",
                  borderWidth: 1, borderStyle: "solid",
                  borderColor: activeEvidence === i ? item.border : "rgba(255,255,255,0.07)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.06em",
                    color: item.color,
                    background: `${item.color}15`, border: `1px solid ${item.color}30`,
                    padding: "2px 7px", borderRadius: 5,
                  }}>
                    {item.severity}
                  </span>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "monospace" }}>{item.id}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: activeEvidence === i ? "#f1f5f9" : "#64748b" }}>
                  {item.category}
                </div>
              </button>
            ))}

            {/* Stats box */}
            <div style={{
              marginTop: 8, padding: "18px 20px", borderRadius: 14,
              background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)",
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
                Evidence Summary
              </div>
              {[
                { label: "Quotes Extracted", val: "3" },
                { label: "Policy References", val: "3" },
                { label: "Time Span Covered", val: "6 min" },
              ].map(({ label, val }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Detail Card */}
          <div style={{
            background: active.bg,
            border: `1px solid ${active.border}`,
            borderRadius: 20, overflow: "hidden",
            transition: "all 0.4s ease",
          }}>
            {/* Card header */}
            <div style={{
              padding: "20px 24px", borderBottom: `1px solid ${active.border}`,
              background: `${active.color}06`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.06em",
                  color: active.color, background: `${active.color}15`,
                  border: `1px solid ${active.color}30`, padding: "3px 8px", borderRadius: 6,
                }}>
                  {active.severity}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{active.category}</span>
              </div>
              <span style={{ fontSize: 12, color: "#475569", fontFamily: "monospace" }}>{active.id}</span>
            </div>

            <div style={{ padding: "24px" }}>
              {/* Quote */}
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: "#64748b",
                  letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                  Verbatim Evidence
                </div>
                <blockquote style={{
                  background: "rgba(0,0,0,0.3)", borderLeft: `4px solid ${active.color}`,
                  padding: "14px 18px", borderRadius: "0 10px 10px 0",
                  fontSize: 14, color: "#e2e8f0", fontStyle: "italic", lineHeight: 1.6, margin: 0,
                }}>
                  "{active.quote}"
                </blockquote>
                <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
                  <span style={{ fontSize: 11, color: "#64748b" }}>
                    👤 <strong style={{ color: "#94a3b8" }}>{active.speaker}</strong>
                  </span>
                  <span style={{ fontSize: 11, color: "#64748b" }}>
                    🕐 <strong style={{ color: "#94a3b8" }}>{active.timestamp}</strong>
                  </span>
                </div>
              </div>

              {/* Context */}
              <div style={{ marginBottom: 16, padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                  Context
                </div>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{active.context}</p>
              </div>

              {/* Policy violated */}
              <div style={{ marginBottom: 16, padding: "14px 16px", borderRadius: 10, background: `${active.color}08`, border: `1px solid ${active.color}20` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: active.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                  Policy Violated
                </div>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{active.policy}</p>
              </div>

              {/* Impact */}
              <div style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
                  Business Impact
                </div>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{active.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          #evidence-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
