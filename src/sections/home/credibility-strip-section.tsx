import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { proofPoints } from "@/data/site-content";

export function CredibilityStripSection() {
  return (
    <section className="section-shell section-divider py-8 sm:py-10">
      <Container>
        <Reveal>
          <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[20px] border border-white/8 bg-black/15 px-4 py-4 text-sm leading-6 text-[var(--foreground-muted)]"
              >
                {point}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
