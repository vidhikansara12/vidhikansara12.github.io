"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
          className="mb-6 font-heading text-3xl font-bold text-foreground"
        >
          Let&apos;s talk 📬
        </motion.h2>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 text-base text-muted"
        >
          I respond to every message — worst case, 24 hours. Whether it&apos;s a
          role, a collaboration, or just a question about one of the projects —
          reach out! :))
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10 flex flex-col gap-4"
        >
          <motion.a
            variants={reveal}
            href="mailto:vidhi.kansara@outlook.com"
            className="flex items-center gap-3 text-base text-muted transition-colors duration-hover hover:text-foreground"
          >
            <Mail size={18} className="text-accent" />
            vidhi.kansara@outlook.com
          </motion.a>

          <motion.a
            variants={reveal}
            href="https://linkedin.com/in/vidhikansara12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base text-muted transition-colors duration-hover hover:text-foreground"
          >
            <Linkedin size={18} className="text-accent" />
            linkedin.com/in/vidhikansara12
          </motion.a>

          <motion.a
            variants={reveal}
            href="https://github.com/vidhikansara12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base text-muted transition-colors duration-hover hover:text-foreground"
          >
            <Github size={18} className="text-accent" />
            github.com/vidhikansara12
          </motion.a>
        </motion.div>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 font-mono text-xs text-muted"
        >
          Currently on F1 OPT · Open to H1B Sponsorship · Available immediately
        </motion.p>

        <motion.footer
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-border pt-6 text-center text-sm text-muted"
        >
          Vidhi Kansara · © 2026 · Built with Next.js
        </motion.footer>
      </div>
    </section>
  );
}
