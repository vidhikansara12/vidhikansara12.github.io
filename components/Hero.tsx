"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "./TerminalCard";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-section">
      {/* Subtle warm gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-warm-100/40 via-background to-background" />

      <div className="relative mx-auto grid max-w-content items-center gap-16 px-6 md:grid-cols-[1fr_auto]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={reveal}
            className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent"
          >
            Software Engineer &middot; AI Systems
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mb-5 font-heading text-[3.25rem] font-bold leading-[1.08] text-foreground md:text-[3.5rem]"
          >
            Hey, I&apos;m Vidhi 👋🏻
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mb-5 text-xl leading-relaxed text-muted md:text-[1.35rem]"
          >
            I build AI products that hold up when real people actually use them.
          </motion.p>

          <motion.p
            variants={reveal}
            className="mb-10 max-w-[520px] text-base leading-[1.7] text-muted/80"
          >
            Most of my work lives at the intersection of LLM pipelines, full-stack
            engineering, and the question I keep coming back to:{" "}
            <em className="text-muted">how does it actually work? and how to make it more better</em>
          </motion.p>

          <motion.div variants={reveal} className="flex items-center gap-4">
            <a
              href="#projects"
              className="rounded-button bg-accent px-6 py-3 text-sm font-medium text-white shadow-md shadow-accent/20 transition-all duration-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              View my work
            </a>
            <a
              href="#"
              className="rounded-button px-6 py-3 text-sm font-medium text-muted transition-all duration-hover hover:text-foreground"
            >
              ↓ Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Terminal — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="hidden w-[360px] md:block"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
