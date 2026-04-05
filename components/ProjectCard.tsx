"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TagPill } from "./TagPill";
import type { Project } from "@/data/projects";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-full flex-col rounded-card bg-card p-card-pad shadow-card transition-shadow duration-hover hover:shadow-card-hover"
    >
      <Link href={`/projects/${project.slug}/`} className="mb-3 block">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {project.title}
        </h3>
      </Link>

      <p className="mb-4 text-sm text-muted">{project.problemLine}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>

      <div className="mt-auto flex gap-3">
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-hover hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        )}
        {project.demoUrl && project.demoUrl !== "#" && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-hover hover:text-foreground"
            aria-label="Demo"
          >
            <ExternalLink size={18} />
          </a>
        )}
        <Link
          href={`/projects/${project.slug}/`}
          className="ml-auto text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );
}
