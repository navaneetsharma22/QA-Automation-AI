"use client";
import { useReveal } from "@/animations/reveal";

export default function CTA() {
  const sectionRef = useReveal({ stagger: 100 });

  return (
    <section ref={sectionRef} id="contact" className="section-sm" style={{ padding: "80px 0" }}>
      <div className="container-xl">
        <div
          style={{
            position: "relative", borderRadius: 28, overflow: "hidden",
            padding: "80px 64px",
          }}
        >
          {/* Gradient background */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.15) 50%, rgba(124,58,237,0.1) 100%)",
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 28, pointerEvents: "none",
          }} />

          {/* Decorative orbs */}
          <div style={{
            position: "absolute", top: -60, right: -60, width: 240, height: 240,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
            filter: "blur(40px)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: -40, width: 200, height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
            filter: "blur(40px)", pointerEvents: "none",
          }} />

          {/* Grid overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px", borderRadius: 28, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 80%)",
          }} />

          <div style={{ position: "relative", textAlign: "center" }}>
            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="badge badge-violet">
                <span className="status-dot" />
                Now Accepting Enterprise Clients
              </span>
            </div>

            <h2 className="reveal delay-100" style={{
              fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900,
              letterSpacing: "-0.04em", color: "#f8fafc", lineHeight: 1.05, marginBottom: 20,
            }}>
              Ready to Transform
              <br />Your Quality Assurance?
            </h2>

            <p className="reveal delay-200" style={{
              fontSize: 18, color: "#94a3b8", maxWidth: 520, margin: "0 auto 40px",
              lineHeight: 1.7,
            }}>
              Join 500+ enterprise QA teams who analyze conversations in seconds,
              not days. No manual work. No missed issues. No excuses.
            </p>

            <div className="reveal delay-300" style={{
              display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 40,
            }}>
              <a
                href="#"
                style={{
                  padding: "16px 36px", borderRadius: 12,
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "white", textDecoration: "none",
                  fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em",
                  boxShadow: "0 4px 24px rgba(124,58,237,0.5)",
                  transition: "all 0.3s ease", display: "inline-flex", alignItems: "center", gap: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(124,58,237,0.65)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.5)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3l14 9-14 9V3z" fill="white" />
                </svg>
                Request a Live Demo
              </a>
              <a
                href="#"
                style={{
                  padding: "16px 36px", borderRadius: 12,
                  background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)",
                  color: "#f8fafc", textDecoration: "none",
                  fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start Free Trial →
              </a>
            </div>

            {/* Trust line */}
            <div className="reveal delay-400" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap",
            }}>
              {[
                "✓ No credit card required",
                "✓ Setup in 5 minutes",
                "✓ SOC 2 Type II certified",
                "✓ Cancel anytime",
              ].map((item) => (
                <span key={item} style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
