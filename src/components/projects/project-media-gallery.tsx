import type { CaseStudyPageContent } from "@/data/project-case-studies";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";
import { Reveal } from "@/components/ui/reveal";

type ProjectMediaGalleryProps = {
  project: CaseStudyPageContent;
};

export function ProjectMediaGallery({ project }: ProjectMediaGalleryProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {project.mediaGallery.map((item, index) => (
        <Reveal key={item.src} delay={index * 0.06}>
          <ProjectMediaFrame
            src={item.src}
            alt={item.alt}
            label={item.label}
            caption={item.caption}
            priority={index < 2}
          />
        </Reveal>
      ))}
    </div>
  );
}
