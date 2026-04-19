import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilityCards } from "@/data/site-content";

export function SkillsDepthSection() {
  return (
    <section className="section-shell section-divider">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technical Depth"
            title="Capabilities packaged as clear strengths instead of a crowded skill cloud."
            description="This structure keeps the homepage premium and readable while still signaling breadth across frontend systems."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilityCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                <p className="font-heading text-2xl tracking-[-0.04em] text-white">
                  {card.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)] sm:text-base">
                  {card.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--foreground-muted)]"
                    >
                      {item}
                    </span>
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
