import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceSnapshot } from "@/data/site-content";

export function ExperienceSnapshotSection() {
  return (
    <section id="experience" className="section-shell section-divider">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience Snapshot"
            title="Experience shaped around frontend ownership, product flows, and production-minded delivery."
            description="A concise recruiter scan of the environments where web, mobile, reusable UI systems, and conversion-critical flows have mattered most."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {experienceSnapshot.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-xl tracking-[-0.03em] text-white">
                      {item.company}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-accent">
                      {item.period}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {item.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className="border-l border-white/10 pl-4 text-sm leading-7 text-[var(--foreground-muted)]"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
