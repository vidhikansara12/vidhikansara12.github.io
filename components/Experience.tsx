"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { TagPill } from "./TagPill";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="experience" className="py-section">
      <div className="mx-auto max-w-content px-6">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 font-heading text-3xl font-bold text-foreground"
        >
          Where I&apos;ve worked 💼
        </motion.h2>

        <div className="space-y-6">
          {experience.map((entry) => (
            <motion.div
              key={entry.id}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-card bg-card p-card-pad shadow-card"
            >
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {entry.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {entry.dateRange}
                </span>
              </div>

              <p className="mb-3 text-sm font-medium text-accent">{entry.role}</p>

              <div className="mb-4 space-y-3 text-sm leading-relaxed text-muted">
                {entry.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
