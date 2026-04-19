import { ImageResponse } from "next/og";
import { siteProfile } from "@/data/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top left, rgba(125,211,252,0.22), transparent 28%), linear-gradient(180deg, #0a0d12 0%, #08090c 100%)",
          color: "#f5f7fa",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            color: "#7dd3fc",
            fontSize: 24,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              color: "#f5f7fa",
              letterSpacing: "0.18em",
              fontSize: 18,
            }}
          >
            RPS
          </div>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 0.95 }}>
            {siteProfile.name}
          </div>
          <div style={{ fontSize: 34, color: "rgba(245,247,250,0.9)" }}>
            Frontend-first engineer building polished, scalable product experiences across web and mobile.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#a7afbd",
            fontSize: 24,
          }}
        >
          <div>React.js</div>
          <div>•</div>
          <div>React Native</div>
          <div>•</div>
          <div>Next.js</div>
          <div>•</div>
          <div>TypeScript</div>
        </div>
      </div>
    ),
    size,
  );
}
