"use client";
import { useReveal } from "@/animations/reveal";

const REPORT = {
  id: "QA-2024-12847",
  date: "June 13, 2026",
  caseType: "Flight Rebooking & Compensation",
  agent: "Jake Morrison",
  agentId: "AGT-4421",
  duration: "6 minutes 18 seconds",
  channel: "Live Chat",
  client: "Sarah M.",
  score: 28,
  grade: "FAIL",
  findings: [
    { id: "F-001", severity: "CRITICAL", type: "Misleading Guarantee", color: "#ef4444" },
    { id: "F-002", severity: "HIGH", type: "Unauthorized Promise", color: "#f97316" },
    { id: "F-003", severity: "MEDIUM", type: "Escalation Failure", color: "#f59e0b" },
  ],
  recommendations: [
    "Immediate coaching session required on fare rule verification before promising waivers.",
    "Complete Compensation Authorization module (mandatory) before handling future claims.",
    "Review escalation SOP — agent must escalate dual-exception cases to supervisor.",
  ],
};

export default function ReportPreview() {
  const sectionRef = useReveal({ stagger: 80 });
  const scoreAngle = (REPORT.score / 100) * 251;

  return (
    <section ref={sectionRef} id="report" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(167,139,250,0.06) 0%, transparent 65%)",
      }} />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="badge badge-violet">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
              </svg>
              QA Report
            </span>
          </div>
          <h2 className="reveal delay-100" style={{
            fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#f8fafc", lineHeight: 1.1, marginBottom: 16,
          }}>
            One Professional Report.
            <br /><span className="gradient-text">Every Finding Documented.</span>
          </h2>
          <p className="reveal delay-200" style={{
            fontSize: 17, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            A clean, structured QA report that management, compliance teams, and
            regulators can trust — generated automatically in under 30 seconds.
          </p>
        </div>

        {/* Report Document */}
        <div className="reveal" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            background: "rgba(10,10,20,0.85)", backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.1)",
          }}>
            {/* Report header bar */}
            <div style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "24px 32px",
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#f8fafc", letterSpacing: "-0.02em" }}>QA Intelligence Report</div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>AI-Generated Quality Assurance Finding</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", fontFamily: "monospace" }}>{REPORT.id}</div>
                <div style={{ fontSize: 11, color: "#475569" }}>{REPORT.date}</div>
              </div>
            </div>

            <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Case metadata */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
              }} className="report-meta">
                {[
                  { label: "Agent", value: REPORT.agent, sub: REPORT.agentId },
                  { label: "Channel", value: REPORT.channel, sub: REPORT.duration },
                  { label: "Case Type", value: REPORT.caseType, sub: `Customer: ${REPORT.client}` },
                ].map(({ label, value, sub }) => (
                  <div key={label} style={{
                    padding: "14px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#475569", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>{value}</div>
                    <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{sub}</div>
                  </div>
                ))}
              </div>

              {/* Score + findings summary */}
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 20, alignItems: "center" }} className="score-row">
                {/* Score gauge */}
                <div style={{ textAlign: "center" }}>
                  <svg width="140" height="90" viewBox="0 0 140 90" style={{ overflow: "visible" }}>
                    {/* Background arc */}
                    <path d="M 15 80 A 55 55 0 0 1 125 80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" strokeLinecap="round" />
                    {/* Score arc */}
                    <path d="M 15 80 A 55 55 0 0 1 125 80" fill="none" stroke="url(#scoreGrad)" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray={`${scoreAngle} 251`} />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <text x="70" y="68" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif">{REPORT.score}</text>
                    <text x="70" y="82" textAnchor="middle" fill="#475569" fontSize="10" fontFamily="Inter, sans-serif">/100</text>
                  </svg>
                  <div style={{
                    display: "inline-block", padding: "4px 14px", borderRadius: 100,
                    background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)",
                    fontSize: 11, fontWeight: 800, color: "#ef4444", letterSpacing: "0.08em",
                  }}>
                    {REPORT.grade}
                  </div>
                </div>

                {/* Findings list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 4 }}>
                    Findings ({REPORT.findings.length})
                  </div>
                  {REPORT.findings.map((f) => (
                    <div key={f.id} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 14px", borderRadius: 10,
                      background: `${f.color}08`, border: `1px solid ${f.color}20`,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: f.color, flexShrink: 0 }} />
                      <span style={{
                        fontSize: 10, fontWeight: 800, color: f.color,
                        background: `${f.color}15`, padding: "2px 6px", borderRadius: 5,
                        letterSpacing: "0.05em", flexShrink: 0,
                      }}>
                        {f.severity}
                      </span>
                      <span style={{ fontSize: 12, color: "#94a3b8" }}>{f.type}</span>
                      <span style={{ fontSize: 11, color: "#475569", fontFamily: "monospace", marginLeft: "auto" }}>{f.id}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div style={{
                padding: "20px 22px", borderRadius: 14,
                background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.15)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  AI Recommendations
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {REPORT.recommendations.map((rec, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                        background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, fontWeight: 700, color: "#a78bfa",
                      }}>
                        {i + 1}
                      </div>
                      <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.55, margin: 0 }}>{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer row */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", flexWrap: "wrap", gap: 12,
              }}>
                <span style={{ fontSize: 11, color: "#475569" }}>Generated by QA Intelligence AI Engine · {REPORT.date}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{
                    padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94a3b8", cursor: "pointer",
                  }}>
                    Export PDF
                  </button>
                  <button style={{
                    padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                    background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)",
                    color: "#a78bfa", cursor: "pointer",
                  }}>
                    Share Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .report-meta { grid-template-columns: 1fr !important; }
          .score-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
