import "./globals.css";

export const metadata = {
  title: "QA Intelligence | AI-Powered Quality Assurance Platform",
  description:
    "Transform customer support conversations into actionable QA reports with AI. Detect misleading responses, identify process violations, and generate professional findings instantly.",
  keywords:
    "AI QA automation, quality assurance, customer support analysis, conversation intelligence, QA reporting",
  openGraph: {
    title: "QA Intelligence | AI-Powered Quality Assurance Platform",
    description:
      "Upload conversations. Watch AI analyze, detect issues, collect evidence, and generate professional QA reports instantly.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
