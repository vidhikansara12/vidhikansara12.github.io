import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  isProjectSlug,
  projectSlugs,
  type ProjectSlug,
} from "@/data/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams(): { slug: ProjectSlug }[] {
  return projectSlugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: PageProps) {
  if (!isProjectSlug(params.slug)) {
    notFound();
  }

  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return <article data-slug={project.slug} />;
}
