"use client";

const FOOTER_LINKS = {
  Product: ["Features", "How It Works", "Live Demo", "QA Reports", "Integrations", "Pricing"],
  Platform: ["AI Engine", "Evidence Collection", "Severity Scoring", "Compliance Check", "API Access", "Security"],
  Industries: ["Airlines", "Telecom", "Banking", "Insurance", "BPO", "SaaS"],
  Company: ["About", "Blog", "Careers", "Partners", "Privacy Policy", "Terms of Service"],
};

const SOCIALS = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(2,2,5,0.98)",
    }}>
      <div className="container-xl">
        {/* Main footer grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)",
          gap: 48, padding: "64px 0 48px",
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", color: "#f8fafc" }}>
                QA<span style={{ color: "#a78bfa" }}>Intelligence</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, marginBottom: 24, maxWidth: 260 }}>
              The AI QA platform that transforms customer support conversations into
              professional quality assurance reports — automatically.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#475569", textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.15)";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
                    e.currentTarget.style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#475569";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: 12, fontWeight: 700, color: "#f8fafc",
                letterSpacing: "0.07em", textTransform: "uppercase",
                marginBottom: 18,
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14, color: "#475569", textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => { e.target.style.color = "#94a3b8"; }}
                      onMouseLeave={(e) => { e.target.style.color = "#475569"; }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "24px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ fontSize: 13, color: "#334155" }}>
            © 2026 QA Intelligence. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {["Privacy", "Terms", "Cookies", "Status"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: 13, color: "#334155", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { e.target.style.color = "#64748b"; }}
                onMouseLeave={(e) => { e.target.style.color = "#334155"; }}
              >
                {item}
              </a>
            ))}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "4px 10px", borderRadius: 100,
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#10b981" }}>All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
