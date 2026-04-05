"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-section">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-warm-50/30 to-background" />

      <div className="relative mx-auto max-w-content px-6">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-3 font-heading text-[2rem] font-bold text-foreground"
        >
          What I&apos;ve built 🛠️
        </motion.h2>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-[14px] text-muted"
        >
          Each project has its own page with a real walkthrough — not just a
          screenshot and a GitHub link.
        </motion.p>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
