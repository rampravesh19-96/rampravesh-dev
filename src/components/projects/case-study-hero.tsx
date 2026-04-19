"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { CaseStudyPageContent } from "@/data/project-case-studies";

type CaseStudyHeroProps = {
  project: CaseStudyPageContent;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden pt-[var(--space-hero-top)] pb-16 sm:pb-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-white"
            >
              <span>←</span>
              <span>Back to selected work</span>
            </Link>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {project.eyebrow}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--foreground-muted)]">
                {project.platformLabel}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-tight tracking-[-0.03em] text-white/92 sm:text-2xl">
              {project.heroSummary}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--foreground-muted)] sm:text-lg">
              {project.heroSupportingText}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={project.links.live.href} external>
                {project.links.live.label}
              </ButtonLink>
              <ButtonLink href={project.links.code.href} variant="secondary" external>
                {project.links.code.label}
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {project.summaryMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.8,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -left-8 top-12 size-36 rounded-full bg-accent/12 blur-3xl" />
            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-card)]">
              <div className="grid gap-4 rounded-[30px] border border-white/8 bg-black/20 p-4">
                <div className={project.visualMode === "web" ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
                  {project.mediaGallery.slice(0, 2).map((item, index) => (
                    <ProjectMediaFrame
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      label={item.label}
                      caption={item.caption}
                      compact={project.visualMode === "mobile"}
                      priority={index === 0}
                    />
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {project.mediaGallery.slice(2, 4).map((item) => (
                    <ProjectMediaFrame
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      label={item.label}
                      caption={item.caption}
                      compact
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
