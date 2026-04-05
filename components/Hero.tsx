"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "./TerminalCard";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="py-section">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={reveal}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Software Engineer &middot; AI Systems
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mb-4 font-heading text-5xl font-bold text-foreground"
          >
            Hey, I&apos;m Vidhi 👋🏻
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mb-4 text-xl text-muted"
          >
            I build AI products that hold up when real people actually use them.
          </motion.p>

          <motion.p
            variants={reveal}
            className="mb-8 text-base text-muted"
          >
            Most of my work lives at the intersection of LLM pipelines, full-stack
            engineering, and the question I keep coming back to:{" "}
            <em>does this actually work outside the demo?</em>
          </motion.p>

          <motion.div variants={reveal} className="flex gap-4">
            <a
              href="#projects"
              className="rounded-button bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              View my work
            </a>
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              ↓ Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          className="hidden w-[340px] md:block"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
