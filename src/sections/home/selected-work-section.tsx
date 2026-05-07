import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site-content";

export function SelectedWorkSection() {
  return (
    <section id="work" className="section-shell section-divider">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Selected projects across React Native, Chrome extension tooling, and Next.js product delivery."
            description="Each card highlights concrete frontend scope, proof links, and the flows that matter most in hiring conversations."
          />
        </Reveal>

        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard {...project} accent={index === 0 ? "blue" : "neutral"} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
