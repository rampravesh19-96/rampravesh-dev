import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutContent } from "@/data/site-content";

export function AboutWorkingStyleSection() {
  return (
    <section id="about" className="section-shell section-divider">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Working Style" title={aboutContent.title} />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[var(--shadow-soft)]">
              <p className="text-lg leading-8 text-[var(--foreground-muted)]">
                {aboutContent.body}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/8 bg-black/20 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Usability
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    Clear hierarchy, thoughtful product flows, and interface decisions that remove friction before it shows up in the user journey.
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-black/20 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Scalable Systems
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    Reusable structure, durable patterns, and implementation discipline that keep a growing frontend codebase reliable.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
