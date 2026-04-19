import Link from "next/link";
import type { CaseStudyPageContent } from "@/data/project-case-studies";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { ProjectMediaGallery } from "@/components/projects/project-media-gallery";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type CaseStudyPageProps = {
  project: CaseStudyPageContent;
};

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <>
      <CaseStudyHero project={project} />

      <CaseStudySection
        eyebrow="Overview"
        title="A premium frontend case study built to show product depth and implementation quality."
        description="The emphasis is on how the interface is structured, how the flows connect, and what the frontend decisions communicate about product readiness."
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[var(--shadow-soft)]">
              <div className="space-y-5 text-base leading-8 text-[var(--foreground-muted)] sm:text-lg">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Project Snapshot
              </p>
              <div className="mt-6 space-y-5">
                <DetailRow label="Role" value={project.roleLabel} />
                <DetailRow label="Format" value={project.platformLabel} />
                <DetailRow label="Primary focus" value={project.type} />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--foreground-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Project Media"
        title="Real media slots wired into the case study for visual depth and easy future asset replacement."
        description="Each image is served from the public directory so stronger screenshots or recordings can be swapped in later without touching the layout system."
      >
        <ProjectMediaGallery project={project} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="What I Built"
        title="Structured product surfaces designed to feel cohesive, not assembled screen by screen."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {project.whatIBuilt.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="font-heading text-2xl tracking-[-0.04em] text-white">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow={project.flowSectionTitle}
        title={project.flowSectionTitle}
        description={project.flowSectionDescription}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {project.journeyHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.08),rgba(255,255,255,0.02))] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Highlight {index + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Technical Highlights"
        title={project.technicalSectionTitle}
        description="A recruiter or hiring manager should be able to see the engineering depth quickly without reading a wall of text."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {project.technicalHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[var(--shadow-soft)]">
                <p className="font-heading text-xl tracking-[-0.03em] text-white">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Frontend Decisions"
        title={project.decisionsSectionTitle}
        description="These decisions show the product and architectural thinking behind the implementation."
      >
        <div className="grid gap-4">
          {project.architectureDecisions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.28fr_0.72fr]">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Decision {index + 1}
                  </p>
                  <div className="hidden h-px flex-1 bg-white/8 lg:block" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Why It Matters"
        title="Why this case study is worth attention in a hiring context."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {project.whyItMatters.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Value {index + 1}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {item}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseStudySection>

      <section className="section-shell section-divider">
        <Container>
          <Reveal>
            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.03))] p-8 shadow-[var(--shadow-card)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    Links
                  </p>
                  <h2 className="mt-4 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                    Review the live build, inspect the codebase, or move directly into contact and resume download.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href={project.links.live.href} external>
                    {project.links.live.label}
                  </ButtonLink>
                  <ButtonLink href={project.links.code.href} variant="secondary" external>
                    {project.links.code.label}
                  </ButtonLink>
                  <ButtonLink href="/Ram_Pravesh_Frontend.pdf" variant="secondary">
                    Download Resume
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-[var(--foreground-muted)]">
                <Link href="/#work" className="transition-colors hover:text-white">
                  Back to Work
                </Link>
                <Link href="/#contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
                <Link href="/Ram_Pravesh_Frontend.pdf" className="transition-colors hover:text-white">
                  Resume PDF
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {label}
      </p>
      <p className="mt-2 text-sm text-white">{value}</p>
    </div>
  );
}
