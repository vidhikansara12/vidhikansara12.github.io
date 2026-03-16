/**
 * VIDHI KANSARA — PORTFOLIO CONTENT
 * Written with portfolio content writing principles:
 * — Specificity over vagueness: name the companies, the numbers, the outcomes
 * — Confident positioning: JPMorgan + Research + AWS = top-10% new grad, own it
 * — Problem → Build → Result structure on every project
 * — About section: narrative arc, not a list of adjectives
 */

const PORTFOLIO = {

  /* ── META ─────────────────────────────────────────── */
  meta: {
    name:       "Vidhi Kansara",
    initials:   "VK",
    firstName:  "Vidhi",
    lastName:   "Kansara",
    title:      "Software Engineer",
    tagline:    "MS Computer Science · Stevens Institute of Technology · Dec 2025",
    // Written to be specific and confident — not "passionate developer"
    description:
      "I build intelligent systems that ship — from LLM pipelines and ML research to production APIs that handled live financial data at <strong>JPMorgan Chase</strong>. I move across the full stack and care deeply about software that works for everyone.",
    // availability: "Available for New Grad Roles · 2026",
    email:      "vidhi.kansara@outlook.com",
    linkedin:   "https://linkedin.com/in/vidhikansara12",
    github:     "https://github.com/vidhikansara12",
    location:   "Hoboken, NJ · Open to relocation",
  },

  /* ── HERO PANELS ──────────────────────────────────── */
  hero: {
    building: {
      name: "AI Accessibility Assistant",
      note: "LLM text simplification · WCAG 2.1 AA · offline ROUGE evaluation",
    },
    coreStack: [
      "Python", "TypeScript", "React", "FastAPI",
      "PyTorch", "AWS", "Node.js", "Docker",
    ],
    interests: [
      "Accessible & inclusive technology",
      "ML systems that reach real users",
      "Language models and interface design",
      "Open-source tooling for under-resourced teams",
    ],
    // Philosophy should be specific and memorable, not generic
    philosophy:
      "To work as a Software Engineer applying my knowledge in the field of testing, designing, and maintenance to cater to the specific needs of the people.  ",
  },

  /* ── EXPERIENCE ───────────────────────────────────── */
  experience: [
    {
      company:  "JPMorgan Chase & Co.",
      icon:     "🏦",
      role:     "Software Developer Intern",
      team:     "Asset & Wealth Management",
      location: "Mumbai, India",
      period:   "Jun 2-23 - Aug 2023",
      // Bullets: strong action verb · what you did · measurable outcome
      bullets: [
        "Built consumer-facing UI components in TypeScript/React from Figma specs, integrating live financial data APIs — validated end-to-end rendering accuracy before production deployment.",
        "Developed RESTful API integrations using Spring Boot connecting multiple backend services, reducing average page load latency by ~25% through caching and payload optimisation.",
        "Implemented large-dataset frontend virtualisation to maintain UI responsiveness under high financial data volumes, eliminating scroll jank on portfolio-view tables.",
        "Collaborated across Agile sprints with product managers and tech leads — contributed to consistent on-time feature delivery across 8-week internship cycle.",
      ],
      tags: ["TypeScript", "React", "Spring Boot", "REST APIs", "Agile"],
    },
    {
      company:  "Stevens Institute of Technology",
      icon:     "🔬",
      role:     "AI Research Fellow — AIRS",
      team:     "MoCoRe Lab",
      location: "Hoboken, NJ",
      period:   "Jun 2025 - Aug 2025",
      bullets: [
        "Engineered end-to-end ML experimentation pipelines in Python using PyTorch and XGBoost, iterating across feature engineering and hyperparameter tuning cycles to achieve <strong>R²=0.95</strong>.",
        "Benchmarked XGBoost vs. neural baselines across 3 feature configurations — engineered lag features outperformed raw inputs by <strong>~12%</strong> on held-out validation sets.",
        "Designed data preprocessing workflows on multi-format datasets: schema normalisation and validation reduced downstream model errors by <strong>~30%</strong>.",
        "Translated findings into a research poster and structured documentation, communicating model tradeoffs to both engineering and non-technical audiences.",
      ],
      tags: ["PyTorch", "XGBoost", "Python", "Feature Engineering", "ML Research"],
    },
  ],

  /* ── PROJECTS ─────────────────────────────────────── */
  // Ordered newest → oldest. Equal visual weight.
  // Each desc follows: problem → what you built → key technical decision/result
  projects: [
    {
      num:   "01",
      year:  "2025",
      name:  "AI Accessibility Assistant",
      desc:  "Dense text excludes millions of users with cognitive or low-literacy barriers. Built an LLM-powered simplification service (FastAPI + Gemini API) with a WCAG 2.1 AA-compliant React frontend, audio readout via the Web Speech API, and an offline ROUGE evaluation harness that validates simplification quality before shipping.",
      stack: ["FastAPI", "Gemini API", "React", "WCAG 2.1", "Web Speech API", "ROUGE"],
      github: "https://github.com/vidhikansara12",
      live:   null,
    },
    {
      num:   "02",
      year:  "2025",
      name:  "Humanis CI/CD Pipeline",
      desc:  "Most student projects ship with secrets in plaintext and zero vulnerability scanning. Built a full DevSecOps pipeline with dual secret scanning (Gitleaks + TruffleHog), SAST via Bandit, Docker containerisation, and a Prometheus + Grafana observability stack with custom Pushgateway metrics — an automated security gate on every merge.",
      stack: ["GitHub Actions", "Docker", "Prometheus", "Grafana", "Gitleaks", "Bandit"],
      github: "https://github.com/vidhikansara12/humanis-devsecops",
      live:   null,
    },
    {
      num:   "03",
      year:  "2025",
      name:  "SmartCampus",
      desc:  "Campus resource visibility is reactive — no existing system processed sensor data in real time. Built an event-driven IoT + ML system on AWS: GPS and sensor telemetry flows through Lambda + SQS into DynamoDB, anomaly detection runs on live streams, and results surface in a Flutter mobile app targeting sub-second response times.",
      stack: ["Flutter", "AWS Lambda", "DynamoDB", "SQS", "IoT", "Python"],
      github: "https://github.com/vidhikansara12/quackathon_stevens_smartcampus",
      live:   null,
    },
    {
      num:   "04",
      year:  "2024",
      name:  "VitaVoice",
      desc:  "Medical jargon is a barrier to patient comprehension, especially for users with speech or reading difficulties. Built a voice-first medical assistant with NLP intent classification, speech-to-text + TTS, and a Node.js microservice layer with retry logic — the React Native UI is explicitly designed for users with varying speech clarity.",
      stack: ["React Native", "Node.js", "TensorFlow", "NLP", "AWS EC2", "TTS"],
      github: "https://github.com/vidhikansara12/VitaVoice",
      live:   null,
    },
    {
      num:   "05",
      year:  "2023",
      name:  "Rakshika — Women's Safety App",
      desc:  "Existing safety apps fail in low-connectivity scenarios and don't scale to IoT hardware. Built for Kavach'23 hackathon: real-time geolocation + SOS emergency dispatch, an IoT device mesh supporting 50+ connected nodes, and a TensorFlow-backed threat detection layer — designed fault-tolerant so it works when the network doesn't.",
      stack: ["Flutter", "Django", "TensorFlow", "IoT Mesh", "AWS", "Geolocation"],
      github: "https://github.com/vidhikansara12/Rakshika_WomenSafetyApp_Kavach23",
      live:   null,
    },
  ],

  /* ── ROADMAP (Suggested Next Projects) ───────────── */
  // Chosen to extend existing strengths and fill visible gaps:
  // — RAG: natural next step from AI Accessibility work
  // — Eval CLI: directly extends research + ROUGE work, buildable open-source presence
  // — Component library: fills the "no npm/open-source" gap, shows depth on WCAG
  // — Experiment tracker: bridges ML research and product engineering
  // — Real-time collab: demonstrates distributed systems knowledge visibly
  roadmap: [
    {
      name: "RAG Knowledge Base API",
      why:  "Natural extension of AI Accessibility — document ingestion, FAISS embeddings, LLM-powered Q&A with citation. FastAPI + LangChain.",
    },
    {
      name: "LLM Evaluation CLI",
      why:  "Open-source CLI (publishable to PyPI) for ROUGE/BERTScore/custom metrics. Extends your research evaluation work into a reusable tool with GitHub stars potential.",
    },
    {
      name: "Accessible React Component Library",
      why:  "npm-published React library built WCAG 2.1 AA from scratch with Storybook docs. Shows depth on the accessibility thread running through your whole portfolio.",
    },
    {
      name: "ML Experiment Dashboard",
      why:  "FastAPI + React UI on top of your XGBoost/PyTorch research — track runs, compare metrics, visualise feature importance. Bridges ML and product engineering.",
    },
    {
      name: "Real-Time Collaborative Editor",
      why:  "WebSockets + Redis pub/sub + React. Demonstrates distributed systems and real-time architecture knowledge in a visible, demo-able way.",
    },
  ],

  /* ── SKILLS ───────────────────────────────────────── */
  // Intro written to be opinionated, not generic
  skillsIntro: [
    "<strong>Five years of building across the stack</strong> has made me opinionated about tooling. I reach for Python when I need ML pipelines that iterate fast, TypeScript when I need a frontend that can be maintained by someone else, and FastAPI when I need an API that's documented by default.",
    "I'm <strong>AWS Certified at the Foundational level</strong> and actively deepening my cloud architecture knowledge. I believe the best engineers aren't attached to their tools — they're attached to outcomes.",
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++", "Dart"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "FastAPI", "Node.js", "Spring Boot", "React Native", "Flutter", "PyTorch", "TensorFlow", "XGBoost", "LangChain"],
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS Lambda", "AWS ECS", "DynamoDB", "S3 · EC2 · SQS", "Docker", "GitHub Actions", "GitLab CI", "Terraform (learning)"],
    },
    {
      category: "Observability & Security",
      items: ["Prometheus", "Grafana", "Gitleaks", "TruffleHog", "Bandit (SAST)", "Pushgateway"],
    },
    {
      category: "ML & AI",
      items: ["LLM Integration", "Gemini API", "Prompt Engineering", "NLP", "Feature Engineering", "Model Evaluation", "ROUGE / BERTScore", "RAG Pipelines"],
    },
  ],

  /* ── CERTIFICATIONS ───────────────────────────────── */
  certifications: [
    {
      icon:        "☁️",
      name:        "AWS Certified Cloud Practitioner",
      issuer:      "Amazon Web Services",
      level:       "Foundational · Verified",
      year:        "2024",
      credentialId: "", // Add your Credly credential ID here
      verifyUrl:   "",  // Add verify URL here — looks far more credible
    },
  ],

  /* ── ABOUT ────────────────────────────────────────── */
  // Written as a story arc: origin → JPMorgan → research → values → seeking
  // Specific, confident, zero filler phrases like "passionate" or "driven"
  about: [
    "I grew up in Mumbai and studied Computer Engineering at the University of Mumbai, graduating with a <strong>3.9 GPA and Honors in Intelligent Computing</strong>. Engineering, for me, was never just about code — it was about what the code unlocks for people who need it.",
    "In summer 2023, I joined <strong>JPMorgan Chase's Asset & Wealth Management division</strong> as a Software Developer Intern. Working at that scale — where frontend components touch live financial data and a slow page load has real consequences — taught me what precision actually means in software. I left with a much more rigorous sense of what production-readiness looks like.",
    "I moved to Hoboken, NJ for my <strong>MS in Computer Science at Stevens Institute of Technology</strong> (graduating December 2025, 3.8 GPA). In my second year, I was selected as an <strong>AI Research Fellow at the AIRS MoCoRe Lab</strong>, where I built ML experimentation pipelines reaching R²=0.95 and learned to communicate model tradeoffs to non-technical stakeholders — a skill most engineers underestimate.",
    "The thread connecting everything I build — VitaVoice, the AI Accessibility Assistant, Rakshika — is a belief that <strong>good software should work for everyone</strong>, not just the default user. I'm now seeking new grad Software Engineer roles where I can bring that same intentionality to production systems at scale.",
  ],

  /* ── EDUCATION ─────────────────────────────────────── */
  education: [
    {
      degree:  "MS in Computer Science",
      school:  "Stevens Institute of Technology",
      location:"Hoboken, NJ",
      year:    "Dec 2025",
      gpa:     "3.8",
      honors:  null,
      courses: [ "Deep Learning", "AI for SWE", "DevOps", "Data Mining"],
    },
    {
      degree:  "B.Tech in Computer Engineering",
      school:  "University of Mumbai",
      location:"Mumbai, India",
      year:    "Jun 2024",
      gpa:     "3.9",
      honors:  "Honors in Intelligent Computing",
      courses: ["Algorithms", "HPC", "Database Systems", "Data Mining"],
    },
  ],

  /* ── ABOUT STATS ───────────────────────────────────── */
  stats: [
    { n: "2",   label: "Internships" },
    { n: "5",   label: "Projects Shipped" },
    { n: "3.9", label: "Undergrad GPA" },
    { n: "1",   label: "AWS Cert" },
  ],

  /* ── CONTACT ───────────────────────────────────────── */
  contact: {
    // Headline: confident CTA, not passive "let's chat"
    headline: "Let's build something <em>real.</em>",
    // Subtext: direct pitch with credentials, not humility
    copy: "I'm actively looking for full-time new grad roles in software engineering, ML engineering, and backend systems",
  },

};
