"use client";

export function SectionTitle({ badge, badgeType = "violet", title, subtitle, align = "center", className = "" }) {
  return (
    <div
      className={className}
      style={{
        textAlign: align,
        marginBottom: 64,
        ...(align === "center" ? {} : {}),
      }}
    >
      {badge && (
        <div className="reveal" style={{ marginBottom: 16 }}>
          <span className={`badge badge-${badgeType}`}>{badge}</span>
        </div>
      )}
      <h2
        className="reveal delay-100"
        style={{
          fontSize: "clamp(28px, 4vw, 50px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#f8fafc",
          lineHeight: 1.1,
          marginBottom: subtitle ? 16 : 0,
          maxWidth: align === "center" ? 680 : "100%",
          margin: align === "center" ? "0 auto" : "0",
          marginBottom: subtitle ? 16 : 0,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className="reveal delay-200"
          style={{
            fontSize: 17,
            color: "#64748b",
            maxWidth: align === "center" ? 560 : 680,
            margin: align === "center" ? "16px auto 0" : "16px 0 0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
