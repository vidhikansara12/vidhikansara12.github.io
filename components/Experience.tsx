"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { TagPill } from "./TagPill";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
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
          className="mb-12 font-heading text-[2rem] font-bold text-foreground"
        >
          Where I&apos;ve worked 💼
        </motion.h2>

        <div className="space-y-5">
          {experience.map((entry) => (
            <motion.div
              key={entry.id}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-card border border-border/60 bg-card p-card-pad shadow-card transition-all duration-hover hover:border-border hover:shadow-card-hover"
            >
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {entry.company}
                </h3>
                <span className="font-mono text-[11px] text-muted/70">
                  {entry.dateRange}
                </span>
              </div>

              <p className="mb-4 text-[13px] font-medium text-accent">
                {entry.role}
              </p>

              <div className="mb-5 space-y-3 text-[14px] leading-[1.7] text-muted">
                {entry.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
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
