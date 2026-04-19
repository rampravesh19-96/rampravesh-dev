"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  positioning: string;
  type: string;
  stack: readonly string[];
  preview: {
    src: string;
    alt: string;
    label: string;
  };
  links: {
    live: string;
    code: string;
    details: string;
  };
  accent?: "blue" | "neutral";
};

export function ProjectCard({
  title,
  positioning,
  type,
  stack,
  preview,
  links,
  accent = "blue",
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-card)] sm:p-6",
        accent === "blue" ? "bg-[#101621]" : "bg-[#121318]",
      )}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -right-20 top-8 size-44 rounded-full bg-accent/10 blur-3xl transition-transform duration-500 group-hover:scale-110" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              {type}
            </p>
            <Link href={links.details} className="block">
              <h3 className="mt-4 max-w-xl font-heading text-2xl leading-tight tracking-[-0.04em] text-white transition-colors group-hover:text-white/88">
                {title}
              </h3>
            </Link>
          </div>
          <span className="hidden rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-xs text-[var(--foreground-muted)] sm:inline-flex">
            Featured
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground-muted)]">
          {positioning}
        </p>

        <div className="mt-8 grid gap-4 rounded-[24px] border border-white/8 bg-black/20 p-3 sm:grid-cols-[1.08fr_0.92fr] sm:p-4">
          <ProjectMediaFrame
            src={preview.src}
            alt={preview.alt}
            label={preview.label}
            compact
            className={cn(
              "h-full min-h-52 rounded-[24px] border-white/8",
              accent === "blue"
                ? "bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.02))]"
                : "bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]",
            )}
          />

          <div className="flex flex-col justify-between rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">Stack Highlights</p>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                  {type}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--foreground-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                aria-label={`Open live preview for ${title}`}
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.09]"
              >
                Live Preview
              </Link>
              <Link
                aria-label={`Open source code for ${title}`}
                href={links.code}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground-muted)] transition-all hover:-translate-y-0.5 hover:text-white"
              >
                View Code
              </Link>
              <Link
                href={links.details}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground-muted)] transition-all hover:-translate-y-0.5 hover:text-white"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
