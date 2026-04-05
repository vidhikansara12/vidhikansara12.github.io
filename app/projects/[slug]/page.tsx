import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

import {
  getProjectBySlug,
  isProjectSlug,
  projectSlugs,
  type ProjectSlug,
} from "@/data/projects";
import { TagPill } from "@/components/TagPill";

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

  return (
    <main className="py-section">
      <article className="mx-auto max-w-content px-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-hover hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        {/* Title + tags */}
        <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">
          {project.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        {/* Problem */}
        <p className="mb-6 text-base leading-relaxed text-muted">
          {project.problem}
        </p>

        {/* What I built */}
        <p className="mb-6 text-base leading-relaxed text-muted">
          {project.whatIBuilt}
        </p>

        {/* Design decision */}
        <p className="mb-8 text-base leading-relaxed text-muted">
          {project.designDecision}
        </p>

        {/* How it works */}
        <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
          🛠 How it works
        </h2>
        <ul className="mb-8 space-y-2 pl-5">
          {project.howItWorks.map((item, i) => (
            <li
              key={i}
              className="list-disc text-base leading-relaxed text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Future directions */}
        {project.futureDirections && (
          <p className="mb-8 text-base leading-relaxed text-muted">
            {project.futureDirections}
          </p>
        )}

        {/* Links */}
        <div className="mb-8 flex gap-4">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button bg-foreground px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>

        {/* Closing */}
        <p className="text-base leading-relaxed text-muted">
          {project.closing}
        </p>
      </article>
    </main>
  );
}
