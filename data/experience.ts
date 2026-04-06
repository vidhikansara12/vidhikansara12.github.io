export interface ExperienceEntry {
  id: string;
  company: string;
  dateRange: string;
  role: string;
  paragraphs: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "airs",
    company: "AIRS MoCoRe Lab, Stevens Institute",
    dateRange: "Jun 2025 – Aug 2025",
    role: "AI Research Fellow",
    paragraphs: [
      "Worked on EEG time-series data — the kind that's messy, multi-format, and fights you at every preprocessing step. Built the full ML pipeline from data cleaning to model evaluation, figured out that lag features mattered more than model choice, and ended up presenting the work at the Dean's Lecture Series.",
      "The thing that stuck with me from this: the data preparation step is usually harder than the modelling step, and nobody warns you about that.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "XGBoost",
      "scikit-learn",
      "Feature Engineering",
      "ML Pipelines",
    ],
  },
  {
    id: "stevens-sd",
    company: "Stevens Institute of Technology",
    dateRange: "Jan 2025 - Dec 2025",
    role: "Software Developer",
    paragraphs: [
      "Owned the backend, CI/CD pipeline, and parts of the React frontend for internal tools that students actually used every day. Small team, real users, no hand-holding. The kind of environment where you learn fast because things break and it's your problem.",
    ],
    tags: [
      "React",
      "Node.js",
      "REST APIs",
      "GitHub Actions",
      "PostgreSQL",
      "CI/CD",
    ],
  },
  {
    id: "jpm",
    company: "JPMorgan Chase & Co.",
    dateRange: "Jun 2023 - Aug 2023",
    role: "Software Developer Intern",
    paragraphs: [
      "Asset & Wealth Management division. Built UI components and API integrations on systems handling live financial data — the kind where 'it's a little slow' is someone's actual money on the line. Three months that permanently changed my bar for what production-ready means.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "REST APIs",
      "Agile",
      "Figma",
    ],
  },
];
