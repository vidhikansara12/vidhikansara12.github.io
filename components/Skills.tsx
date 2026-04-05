"use client";

import { motion } from "framer-motion";
import { TagPill } from "./TagPill";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const skillCategories = [
  {
    title: "AI & LLM Engineering",
    description:
      "RAG pipelines, LLM evaluation, prompt engineering, agentic workflows — the stuff that makes AI actually useful after the demo",
    tags: [
      "Python", "LangChain", "FastAPI", "FAISS", "Claude API", "Gemini API",
      "PyTorch", "XGBoost", "Evidently AI", "LangGraph",
    ],
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Production APIs, component-based UIs, database design — built things real users touched daily",
    tags: [
      "React", "TypeScript", "Node.js", "Spring Boot", "REST APIs",
      "PostgreSQL", "DynamoDB", "Next.js",
    ],
  },
  {
    title: "Infrastructure & MLOps",
    description:
      "CI/CD pipelines, containerisation, model monitoring — the stuff that keeps AI reliable after you ship it",
    tags: [
      "Docker", "GitHub Actions", "AWS Lambda", "Prometheus", "Grafana",
      "Gitleaks", "Bandit", "Terraform (learning)",
    ],
  },
  {
    title: "Research & Evaluation",
    description:
      "ML experimentation, feature engineering, statistical validation — on real biosignal data, not just Kaggle datasets",
    tags: [
      "Feature Engineering", "Cross-validation", "Model Benchmarking",
      "scikit-learn", "ROUGE", "BERTScore",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-section">
      <div className="mx-auto max-w-content px-6">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 font-heading text-[2rem] font-bold text-foreground"
        >
          What I work with ⚙️
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-card border border-border/60 bg-card p-card-pad shadow-card transition-all duration-hover hover:border-border hover:shadow-card-hover"
            >
              <h3 className="mb-1.5 font-heading text-[15px] font-semibold text-foreground">
                {cat.title}
              </h3>
              <p className="mb-5 text-[13px] leading-relaxed text-muted">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
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
