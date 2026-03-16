const PORTFOLIO = {
  meta: {
    name: "Vidhi Kansara",
    initials: "VK",
    title: "Software Engineer",
    tagline: "MS Computer Science · Stevens Institute of Technology",
    description:
      "I build intelligent systems — from LLM-powered tools and ML pipelines to production APIs and accessible mobile apps.",
    // availability: "Available for New Grad Roles — 2025",
    email: "vidhi.kansara@outlook.com",
    linkedin: "https://linkedin.com/in/vidhikansara12",
    github: "https://github.com/vidhikansara12",
    location: "Hoboken, NJ",
  },

  hero: {
    building: {
      label: "Currently Building",
      project: "AI Accessibility Assistant",
      note: "LLM-powered text simplification with WCAG 2.1 AA frontend",
    },
    interests: [
      "Accessible & inclusive technology",
      "ML systems that reach real users",
      "The intersection of language + interfaces",
      "Open-source tooling for under-resourced teams",
    ],
    coreStack: [
      "Python", "TypeScript", "React",
      "Node.js", "FastAPI", "AWS",
      "Docker", "PyTorch", "Spring Boot",
    ],
    statement:
      "I care about systems that reason well and interfaces that work for everyone — regardless of ability, language, or bandwidth.",
  },

  experience: [
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Developer Intern",
      team: "Asset & Wealth Management",
      location: "Mumbai, India",
      period: "Jun - Aug 2023",
      bullets: [
        "Built consumer-facing UI components in TypeScript/React from Figma specs, integrating live financial data APIs and mock pipelines to validate end-to-end rendering accuracy before production.",
        "Developed RESTful API integrations using Spring Boot connecting multiple backend services, reducing average page load latency by ~25% through caching and payload optimization.",
        "Implemented large-dataset rendering with frontend virtualization to maintain UI responsiveness under high financial data volume.",
        "Collaborated across Agile sprints with product managers and tech leads, contributing to consistent on-time feature delivery.",
      ],
      tags: ["Spring Boot", "TypeScript", "React", "REST APIs"],
    },
    {
      company: "Stevens Institute of Technology",
      role: "AI Research Fellow — AIRS",
      team: "MoCoRe Lab",
      location: "Hoboken, NJ",
      period: "Jun 2025 - Aug 2025",
      bullets: [
        "Engineered end-to-end ML experimentation pipelines in Python using PyTorch and XGBoost, iterating across feature engineering and hyperparameter tuning cycles to achieve R²=0.95.",
        "Compared XGBoost vs. neural baselines across 3 feature configurations — engineered lag features outperformed raw inputs by ~12% on held-out validation sets.",
        "Designed data preprocessing workflows on multi-format datasets, applying schema normalization and validation to reduce downstream model errors by ~30%.",
        "Communicated findings through structured documentation and a research poster, translating tradeoffs for both engineering and non-technical audiences.",
      ],
      tags: ["PyTorch", "XGBoost", "Python", "ML Research"],
    },
  ],

  projects: [
    {
      id: "01",
      name: "AI Accessibility Assistant",
      desc: "LLM-powered text simplification service — paste any dense document and get a plain-language summary with audio readout. Built with WCAG 2.1 AA compliance, an offline ROUGE evaluation harness, and structured JSON logging for production observability.",
      stack: ["FastAPI", "Gemini API", "React", "WCAG 2.1", "Web Speech API", "ROUGE Eval"],
      github: "https://github.com/vidhikansara12",
      badge: "New · 2025",
      featured: true,
    },
    {
      id: "02",
      name: "Humanis CI/CD Pipeline",
      desc: "Full DevSecOps pipeline with secret scanning (Gitleaks + TruffleHog), SAST via Bandit, Docker containerization, and a Prometheus + Grafana observability stack with custom Pushgateway metrics.",
      stack: ["GitHub Actions", "Docker", "Prometheus", "Grafana", "Gitleaks", "Bandit"],
      github: "https://github.com/vidhikansara12/humanis-devsecops",
    },
    {
      id: "03",
      name: "SmartCampus",
      desc: "Event-driven IoT + ML system on AWS. Ingests GPS and sensor telemetry via Lambda + SQS, runs anomaly detection on real-time streams, and surfaces results in a Flutter mobile app with sub-second response targets.",
      stack: ["Flutter", "AWS Lambda", "DynamoDB", "SQS", "IoT"],
      github: "https://github.com/vidhikansara12/quackathon_stevens_smartcampus",
    },
    {
      id: "04",
      name: "VitaVoice",
      desc: "Voice-first medical assistant with NLP intent classification, speech-to-text + TTS, Node.js microservices with retry logic, and a React Native mobile UI designed for users with varying speech clarity.",
      stack: ["React Native", "Node.js", "TensorFlow", "NLP", "AWS EC2"],
      github: "https://github.com/vidhikansara12/VitaVoice",
    },
    {
      id: "05",
      name: "Rakshika",
      desc: "Accessibility-first women's safety app — real-time geolocation, SOS emergency dispatch, and IoT device mesh for 50+ connected nodes. Built for Kavach'23 hackathon with fault-tolerant architecture.",
      stack: ["Flutter", "Django", "TensorFlow", "IoT", "AWS"],
      github: "https://github.com/vidhikansara12/Rakshika_WomenSafetyApp_Kavach23",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "SQL" },
        { name: "C++" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React" },
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "Spring Boot" },
        { name: "React Native" },
        { name: "Flutter" },
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "XGBoost" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "AWS Lambda" },
        { name: "AWS ECS" },
        { name: "DynamoDB" },
        { name: "S3 / EC2 / SQS" },
        { name: "Docker" },
        { name: "GitHub Actions" },
        { name: "GitLab CI" },
      ],
    },
    {
      category: "Observability & Security",
      items: [
        { name: "Prometheus" },
        { name: "Grafana" },
        { name: "Gitleaks" },
        { name: "TruffleHog" },
        { name: "Bandit (SAST)" },
      ],
    },
    {
      category: "ML & AI",
      items: [
        { name: "LLM / Gemini API" },
        { name: "Prompt Engineering" },
        { name: "NLP" },
        { name: "Feature Engineering" },
        { name: "Model Evaluation" },
        { name: "ROUGE / Metrics" },
      ],
    },
  ],

  education: [
    {
      degree: "MS in Computer Science",
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      year: "Dec 2025",
      gpa: "3.8",
      courses: ["Distributed Systems", "Deep Learning", "AI for SWE", "DevOps", "Data Mining"],
    },
    {
      degree: "B.Tech in Computer Engineering",
      school: "University of Mumbai",
      location: "Mumbai, India",
      year: "Jun 2024",
      honors: "Honors in Intelligent Computing",
      gpa: "3.9",
      courses: ["Algorithms", "HPC", "Database Systems", "Data Mining"],
    },
  ],

  about: [
    "I'm a <strong>December 2025 CS graduate from Stevens Institute of Technology</strong>, originally from Mumbai, India. My path spans ML research, production frontend engineering at JPMorgan, and building full-stack systems from IoT backends to voice-enabled mobile apps.",
    "I'm drawn to problems at the intersection of <strong>intelligent systems and real user impact</strong> — where a well-designed pipeline or a carefully evaluated model actually changes what someone can do.",
    "Outside of engineering: I care about <strong>accessible technology</strong> — software that works for people across ability, language, and bandwidth. That thread runs through VitaVoice, Rakshika, and my newest project.",
    "Currently seeking <strong>new grad Software Engineer roles</strong> — open to ML engineering, backend systems, and full-stack positions at companies building things that matter.",
  ],
};