"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Contact() {
  return (
    <section id="contact" className="py-section">
      <div className="mx-auto max-w-content px-6">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-6 font-heading text-[2rem] font-bold text-foreground"
        >
          Let&apos;s talk 📬
        </motion.h2>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 max-w-[480px] text-[15px] leading-[1.7] text-muted"
        >
          I respond to every message — worst case, 24 hours. Whether it&apos;s a
          role, a collaboration, or just a question about one of the projects —
          reach out! :))
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-12 flex flex-col gap-5"
        >
          <motion.a
            variants={reveal}
            href="mailto:vidhi.kansara@outlook.com"
            className="group flex items-center gap-4 text-[15px] text-muted transition-colors duration-hover hover:text-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft transition-colors duration-hover group-hover:bg-accent/10">
              <Mail size={18} className="text-accent" />
            </span>
            vidhi.kansara@outlook.com
          </motion.a>

          <motion.a
            variants={reveal}
            href="https://linkedin.com/in/vidhikansara12"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[15px] text-muted transition-colors duration-hover hover:text-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft transition-colors duration-hover group-hover:bg-accent/10">
              <Linkedin size={18} className="text-accent" />
            </span>
            linkedin.com/in/vidhikansara12
          </motion.a>

          <motion.a
            variants={reveal}
            href="https://github.com/vidhikansara12"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[15px] text-muted transition-colors duration-hover hover:text-foreground"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft transition-colors duration-hover group-hover:bg-accent/10">
              <Github size={18} className="text-accent" />
            </span>
            github.com/vidhikansara12
          </motion.a>
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 font-mono text-[11px] tracking-wide text-muted/60"
        >
          Currently on F1 OPT · Open to H1B Sponsorship · Available immediately
        </motion.p>

        <motion.footer
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-border/50 pt-8 text-center text-[13px] text-muted/60"
        >
          Vidhi Kansara · © 2026 · Built with Next.js
        </motion.footer>
      </div>
    </section>
  );
}
