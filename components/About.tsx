"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function About() {
  return (
    <section id="about" className="py-section">
      <div className="mx-auto max-w-content px-6">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 font-heading text-[2rem] font-bold text-foreground"
        >
          About me 💁🏻‍♀️
        </motion.h2>

        <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-5 text-[15px] leading-[1.75] text-muted"
          >
            <motion.p variants={reveal}>Hello :)</motion.p>

            <motion.p variants={reveal}>
              I studied Computer Science at Stevens Institute of Technology and
              interned at JPMorgan Chase before that — but honestly the work I care
              about most is the stuff I&apos;ve built on my own: RAG systems, ML
              monitoring tools, agentic workflows, and the frontends that make all
              of it usable by people who don&apos;t know what any of those words
              mean.
            </motion.p>

            <motion.p variants={reveal}>
              I think a lot about the gap between AI that impresses engineers and
              AI that actually helps someone get through their day. Most of what I
              build is trying to close that gap.
            </motion.p>

            <motion.p variants={reveal}>
              When I&apos;m not building, you&apos;ll find me attempting crochet
              (emphasis on <em>attempting</em>), watching the same Bollywood films
              for the third time and dancing on the hooksteps, or debugging at midnight because the bug got personal. ⭐
            </motion.p>

            <motion.p variants={reveal}>
              Currently looking for Software Engineer and AI Engineering roles.
            </motion.p>

            <motion.blockquote
              variants={reveal}
              className="mt-8 border-l-[3px] border-accent/30 pl-5 italic text-foreground/70"
            >
              &ldquo;Make it work, make it right, make it fast.&rdquo;
              <span className="mt-1 block text-[13px] not-italic text-muted">
                — Kent Beck 🌸
              </span>
            </motion.blockquote>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex-shrink-0"
          >
            <div className="overflow-hidden rounded-2xl shadow-glass">
              <Image
                src="/vidhi_duckcard_photo.jpg"
                alt="Vidhi Kansara"
                width={260}
                height={260}
                className="object-cover transition-transform duration-500 ease-premium hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
