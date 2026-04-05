"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TagPill } from "./TagPill";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="group flex h-full flex-col rounded-card border border-border/60 bg-card p-card-pad shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-border hover:shadow-card-hover"
    >
      <Link href={`/projects/${project.slug}/`} className="mb-2 block">
        <h3 className="font-heading text-base font-semibold text-foreground transition-colors duration-hover group-hover:text-accent">
          {project.title}
        </h3>
      </Link>

      <p className="mb-5 text-[14px] leading-relaxed text-muted">
        {project.problemLine}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 pt-2">
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/60 transition-colors duration-hover hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        )}
        {project.demoUrl && project.demoUrl !== "#" && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/60 transition-colors duration-hover hover:text-foreground"
            aria-label="Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
        <Link
          href={`/projects/${project.slug}/`}
          className="ml-auto flex items-center gap-1 text-[13px] font-medium text-accent transition-all duration-hover hover:gap-2"
        >
          Read more
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
