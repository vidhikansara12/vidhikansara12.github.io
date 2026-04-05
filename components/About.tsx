"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
          className="mb-10 font-heading text-3xl font-bold text-foreground"
        >
          About me 💁🏻‍♀️
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4 text-base leading-relaxed text-muted"
          >
            <motion.p variants={reveal}>Hello! Thanks for stopping by :))</motion.p>

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
              for the third time, or debugging at midnight because the bug got
              personal. ⭐
            </motion.p>

            <motion.p variants={reveal}>
              Currently looking for Software Engineer and AI Engineering roles. On
              F1 OPT, open to H1B sponsorship.
            </motion.p>

            <motion.blockquote
              variants={reveal}
              className="mt-6 border-l-2 border-accent pl-4 italic text-foreground"
            >
              &ldquo;Make it work, make it right, make it fast.&rdquo; — Kent Beck
              🌸
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
            <Image
              src="/vidhi.jpg"
              alt="Vidhi Kansara"
              width={240}
              height={240}
              className="rounded-card object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
