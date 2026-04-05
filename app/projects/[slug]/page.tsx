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
    <main className="relative py-section">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-warm-100/30 via-background to-background" />

      <article className="relative mx-auto max-w-content px-6">
        {/* Back link */}
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-[13px] text-muted/70 transition-all duration-hover hover:gap-3 hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to all projects
        </Link>

        {/* Title + tags */}
        <h1 className="mb-5 font-heading text-[2.5rem] font-bold leading-[1.1] text-foreground">
          {project.title}
        </h1>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        {/* Problem */}
        <p className="mb-7 text-[15px] leading-[1.75] text-muted">
          {project.problem}
        </p>

        {/* What I built */}
        <p className="mb-7 text-[15px] leading-[1.75] text-muted">
          {project.whatIBuilt}
        </p>

        {/* Design decision */}
        <p className="mb-10 text-[15px] leading-[1.75] text-muted">
          {project.designDecision}
        </p>

        {/* How it works */}
        <h2 className="mb-5 font-heading text-xl font-semibold text-foreground">
          🛠 How it works
        </h2>
        <ul className="mb-10 space-y-3 pl-5">
          {project.howItWorks.map((item, i) => (
            <li
              key={i}
              className="list-disc text-[15px] leading-[1.75] text-muted marker:text-accent/40"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Future directions */}
        {project.futureDirections && (
          <p className="mb-10 text-[15px] leading-[1.75] text-muted">
            {project.futureDirections}
          </p>
        )}

        {/* Links */}
        <div className="mb-10 flex gap-3">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button bg-foreground px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-hover hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-button border border-border px-5 py-2.5 text-[13px] font-medium text-foreground transition-all duration-hover hover:-translate-y-0.5 hover:shadow-md"
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
        </div>

        {/* Closing */}
        <p className="text-[15px] leading-[1.75] text-muted">
          {project.closing}
        </p>
      </article>
    </main>
  );
}
