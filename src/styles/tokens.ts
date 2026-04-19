export const themeTokens = {
  colors: {
    background: "#08090c",
    elevated: "#10131a",
    panel: "#121620",
    soft: "#171c26",
    foreground: "#f5f7fa",
    muted: "#a7afbd",
    accent: "#7dd3fc",
  },
  radius: {
    sm: "14px",
    md: "20px",
    lg: "28px",
    xl: "36px",
  },
  shadows: {
    soft: "0 20px 60px rgba(0, 0, 0, 0.28)",
    card: "0 24px 80px rgba(0, 0, 0, 0.34)",
  },
  spacing: {
    section: "clamp(5rem, 9vw, 8rem)",
    heroTop: "clamp(8rem, 12vw, 11rem)",
  },
} as const;
