import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { CaseStudyPage } from "@/components/projects/case-study-page";
import {
  projectCaseStudies,
  projectCaseStudyList,
} from "@/data/project-case-studies";
import { siteProfile } from "@/data/site-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectCaseStudyList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCaseStudies[slug as keyof typeof projectCaseStudies];

  if (!project) {
    return {};
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
    alternates: {
      canonical: `${siteProfile.portfolio}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.meta.title,
      description: project.meta.description,
      url: `${siteProfile.portfolio}/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: `${siteProfile.portfolio}/projects/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${project.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.meta.title,
      description: project.meta.description,
      images: [`${siteProfile.portfolio}/projects/${project.slug}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectCaseStudies[slug as keyof typeof projectCaseStudies];

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <CaseStudyPage project={project} />
    </SiteShell>
  );
}
