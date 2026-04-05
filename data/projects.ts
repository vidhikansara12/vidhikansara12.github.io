export const projectSlugs = [
  "clauseiq",
  "driftwatch",
  "agentflow",
  "ai-accessibility-assistant",
  "humanis",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export interface Project {
  slug: ProjectSlug;
  title: string;
  problemLine: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  problem: string;
  whatIBuilt: string;
  designDecision: string;
  howItWorks: string[];
  futureDirections?: string;
  closing: string;
}

export const projects: Project[] = [
  {
    slug: "clauseiq",
    title: "ClauseIQ — AI Document Analyst 📄",
    problemLine: "Because nobody reads the contract until it's too late.",
    tags: ["RAG", "LangChain", "FAISS", "Claude API", "FastAPI", "React"],
    githubUrl: "#",
    demoUrl: "#",
    problem:
      "Around 80% of people sign contracts without reading them fully. Legal jargon is dense, time is short, and most people don't know what to look for. I wanted to fix that.",
    whatIBuilt:
      "ClauseIQ is a RAG-powered document analyst. You upload any PDF — a lease, a job offer, terms of service — and it chunks the document, embeds it into a FAISS vector store, and retrieves the most relevant passages to answer your questions in plain English.",
    designDecision:
      "What I care about most in this project isn't the retrieval — it's the evaluation. Every response gets scored with ROUGE and BERTScore so you can actually see where the model is confident and where it's guessing. That honesty layer is what makes it usable, not just impressive.",
    howItWorks: [
      "PDF ingestion → chunking → embeddings → FAISS index",
      "Claude API for answer generation with source citations",
      "ROUGE/BERTScore evaluation on every response",
      "FastAPI backend · React frontend · Docker",
    ],
    closing:
      "I built this because I wanted a project where the evaluation was as real as the feature itself — not an afterthought. Would love your feedback! 💬",
  },
  {
    slug: "driftwatch",
    title: "DriftWatch — ML Model Monitor 📊",
    problemLine: "ML models degrade silently. This one doesn't.",
    tags: [
      "MLOps",
      "Evidently AI",
      "Prometheus",
      "Grafana",
      "FastAPI",
      "Docker",
    ],
    githubUrl: "#",
    demoUrl: "#",
    problem:
      "Here's something nobody talks about enough: you can build a great model, ship it, and six months later it's quietly wrong about everything because the world changed and nobody noticed.",
    whatIBuilt:
      "DriftWatch is my attempt at fixing that. It takes any classification or regression model, monitors incoming data batches using Evidently AI's statistical tests, and visualises drift, performance degradation, and feature distribution shifts on a live Grafana dashboard.",
    designDecision:
      "The most interesting part was deciding which drift metrics to surface — KL divergence vs. Population Stability Index vs. Wasserstein distance. Each tells you something different and the wrong one gives you false alarms constantly. I wrote up my reasoning in the README.",
    howItWorks: [
      "FastAPI backend receives new data batches",
      "Evidently AI computes drift + performance metrics",
      "Prometheus scrapes metrics → Grafana dashboard",
      "Configurable alert thresholds → retraining flag",
      "Fully containerised with Docker Compose",
    ],
    closing:
      'This came directly out of my AIRS fellowship — I built the model there and kept thinking "but how would you know if this started failing?" DriftWatch is that answer. Would love your feedback! 💬',
  },
  {
    slug: "agentflow",
    title: "AgentFlow — AI Workflow Automation 🤖",
    problemLine: "An AI that handles your support queue while you sleep.",
    tags: ["LangGraph", "Claude API", "FastAPI", "PostgreSQL", "React"],
    githubUrl: "#",
    demoUrl: "#",
    problem:
      "I got curious about agentic AI after reading about forward-deployed engineering — the idea that the next wave of AI isn't chatbots, it's AI that actually does the work inside real business workflows.",
    whatIBuilt:
      "AgentFlow is my hands-on exploration of that. It's an agentic system built on LangGraph that handles a support ticket queue autonomously — classifies intent, pulls context via RAG, drafts a personalised reply, logs everything to PostgreSQL, and routes anything ambiguous to a human review queue.",
    designDecision:
      "What makes it interesting isn't the happy path — it's the failure modes. I spent most of the build time on the escalation logic and the evaluation harness that scores each draft for quality, safety, and tone before it goes anywhere near a customer.",
    howItWorks: [
      "LangGraph orchestrates the multi-step agent flow",
      "Claude API with tool calling for classification + drafting",
      "FAISS-backed RAG for knowledge base retrieval",
      "Human-in-the-loop queue for edge cases",
      "FastAPI backend · React dashboard · PostgreSQL logging",
    ],
    futureDirections:
      "Future: multi-agent handoff, domain fine-tuning, A/B testing response strategies.",
    closing: "Would love to collaborate on this! 💬",
  },
  {
    slug: "ai-accessibility-assistant",
    title: "AI Accessibility Assistant ♿",
    problemLine: "Dense text excludes millions. This fixes that.",
    tags: ["Gemini API", "FastAPI", "React", "WCAG 2.1", "ROUGE"],
    githubUrl: "#",
    demoUrl: "#",
    problem:
      "Around 1 in 5 people have some form of reading difficulty — dyslexia, cognitive load issues, low literacy, or just English as a third language. Most of the internet isn't built for them.",
    whatIBuilt:
      'I built this because the problem genuinely bothered me. The app takes dense text — a legal notice, a medical form, a government document — and uses the Gemini API to simplify it into plain language at an adjustable reading level. Add Web Speech API for audio output and it becomes accessible to people who struggle with reading entirely.',
    designDecision:
      'What I\'m proudest of is the evaluation layer. I used ROUGE scores to measure how much information is preserved during simplification — because making something "simpler" while losing the important parts isn\'t accessibility, it\'s just a different problem.',
    howItWorks: [
      "Gemini API for text simplification with adjustable reading level",
      "Web Speech API for audio output",
      "ROUGE evaluation on simplification quality",
      "WCAG 2.1 compliant UI throughout",
      "FastAPI backend · React frontend",
    ],
    closing: "If you work in accessibility or EdTech — let's talk! 💬",
  },
  {
    slug: "humanis",
    title: "Humanis — DevSecOps Pipeline 🔐",
    problemLine:
      "Security baked in from commit one — not bolted on at the end.",
    tags: [
      "GitHub Actions",
      "Docker",
      "Prometheus",
      "Gitleaks",
      "Bandit",
    ],
    githubUrl: "#",
    demoUrl: "#",
    problem:
      'I kept noticing the same thing in student codebases — API keys in plaintext, no dependency scanning, no SAST, deployments that were just "copy the file and hope." It bothered me enough to build the alternative.',
    whatIBuilt:
      "Humanis is a full DevSecOps CI/CD pipeline that bakes security into every stage — not as an audit at the end, but as a gate from the first commit. Secret scanning with Gitleaks catches credentials before they hit GitHub. Bandit runs static analysis on every push. Prometheus and Grafana give you real-time visibility into what's running.",
    designDecision:
      "The most interesting design decision was where to fail the build vs. warn — too strict and developers route around it, too lenient and it's security theatre. I wrote up that reasoning in the README.",
    howItWorks: [
      "GitHub Actions orchestrates the full pipeline",
      "Gitleaks + TruffleHog for secret scanning",
      "Bandit for Python SAST on every push",
      "Docker for containerised reproducible builds",
      "Prometheus + Grafana for pipeline observability",
    ],
    closing:
      "Built for a team project. Became my most referenced work in interviews — turns out security-aware engineers are rare at the new grad level. 💬",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return (projectSlugs as readonly string[]).includes(slug);
}
