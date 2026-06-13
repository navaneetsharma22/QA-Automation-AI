"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled
          ? "rgba(2,2,5,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="container-xl">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
              }}
            >
              QA<span style={{ color: "#a78bfa" }}>Intelligence</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 6 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 14px",
                  borderRadius: 8,
                  transition: "all 0.2s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f8fafc";
                  e.target.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#94a3b8";
                  e.target.style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
            <a
              href="#demo"
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: 8,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#f8fafc"; }}
              onMouseLeave={(e) => { e.target.style.color = "#94a3b8"; }}
            >
              Sign In
            </a>
            <a
              href="#contact"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "white",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                padding: "9px 20px",
                borderRadius: 9,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(124,58,237,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.3)";
              }}
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#f8fafc",
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              marginTop: 12,
              padding: 16,
              borderRadius: 12,
              background: "rgba(10,10,20,0.98)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "10px 14px",
                  borderRadius: 8,
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" }} />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "white",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                padding: "12px 20px",
                borderRadius: 9,
                textAlign: "center",
              }}
            >
              Get Started Free
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
