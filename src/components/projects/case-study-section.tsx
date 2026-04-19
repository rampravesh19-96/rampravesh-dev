import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type CaseStudySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function CaseStudySection({
  id,
  eyebrow,
  title,
  description,
  children,
}: CaseStudySectionProps) {
  return (
    <section id={id} className="section-shell section-divider">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
