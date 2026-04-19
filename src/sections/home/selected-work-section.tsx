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
            title="Two flagship case studies showing frontend depth across web and mobile product work."
            description="Each project now carries stronger media framing, sharper ownership language, and a direct path from preview to deeper case study."
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
