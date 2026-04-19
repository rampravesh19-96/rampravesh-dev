import { ImageResponse } from "next/og";
import { projectCaseStudies } from "@/data/project-case-studies";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProjectOgProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectOpenGraphImage({ params }: ProjectOgProps) {
  const { slug } = await params;
  const project = projectCaseStudies[slug as keyof typeof projectCaseStudies];

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
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "10px 18px",
            background: "rgba(255,255,255,0.04)",
            color: "#7dd3fc",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {project?.eyebrow ?? "Case Study"}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 0.95 }}>
            {project?.title ?? "Project Case Study"}
          </div>
          <div style={{ fontSize: 32, color: "rgba(245,247,250,0.88)" }}>
            {project?.heroSummary ?? "Premium frontend case study."}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {(project?.stack ?? []).slice(0, 4).map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                padding: "10px 16px",
                color: "#a7afbd",
                fontSize: 22,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
