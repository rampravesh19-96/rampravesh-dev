"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projectCaseStudies } from "@/data/project-case-studies";
import { heroContent } from "@/data/site-content";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ecommerce = projectCaseStudies["smart-ecommerce-platform"];
  const service = projectCaseStudies["smart-service-booking-app"];

  return (
    <section className="overflow-hidden pt-[var(--space-hero-top)] pb-20 sm:pb-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl xl:text-7xl">
              {heroContent.name}
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-tight tracking-[-0.03em] text-white/92 sm:text-3xl">
              {heroContent.role}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--foreground-muted)] sm:text-lg">
              {heroContent.supportingText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroContent.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-[var(--foreground-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
                {heroContent.secondaryCta.label}
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 size-28 rounded-full bg-accent/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-card)]">
              <div className="grid gap-4 rounded-[30px] border border-white/8 bg-black/20 p-4">
                <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                  <ProjectMediaFrame
                    src={ecommerce.homepagePreview.src}
                    alt={ecommerce.homepagePreview.alt}
                    label="Web Surface"
                    caption="Commerce storefront plus admin dashboard depth."
                    priority
                  />

                  <div className="grid gap-4">
                    <ProjectMediaFrame
                      src={service.homepagePreview.src}
                      alt={service.homepagePreview.alt}
                      label="Mobile Flow"
                      caption="Mobile discovery, booking progression, and account continuity."
                      compact
                      priority
                    />

                    {heroContent.statCards.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
