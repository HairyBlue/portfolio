export interface Experience {
  id: string
  role: string
  company: string
  location: string
  type: string
  period: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "opg-picto",
    role: "Information System Developer",
    company: "OPG-PICTO",
    location: "Provincial Government of Davao del Sur",
    type: "Onsite (Full-time)",
    period: "Feb 2026 – Present",
    highlights: [
      "Architected a centralized provincial communication platform from zero, streamlining public advisories for the Province of Davao del Sur.",
      "Engineered database architectures and conceptualized UI frameworks, significantly reducing development iteration cycles.",
      "Spearheaded containerization strategies and CI/CD pipelines, accelerating deployment timelines for cross-functional teams."
    ],
    technologies: ["Laravel", "PHP", "Filament", "Tailwind CSS", "JavaScript", "Bash", "MySQL", "Docker", "GitHub Actions"]
  },
  {
    id: "webugo",
    role: "Web Developer",
    company: "Webugo",
    location: "Bad Tölz, Germany",
    type: "Remote (Freelance / Contract)",
    period: "Jan 2026",
    highlights: [
      "Overhauled existing web applications by resolving critical bottlenecks and elevating overall system performance.",
      "Architected CI/CD workflows utilizing self-hosted Gitea runners, drastically reducing deployment friction.",
      "Delivered pixel-perfect feature implementations by bridging the gap between engineering, QA, and design teams."
    ],
    technologies: ["Nuxt", "Vue.js", "TypeScript", "JavaScript", "Node.js", "Git", "PostgreSQL", "Docker", "Bash", "Gitea"]
  },
  {
    id: "odds-pulse",
    role: "Full Stack Developer",
    company: "Odds Pulse",
    location: "Colorado, USA",
    type: "Remote (Freelance)",
    period: "Dec 2023 – Nov 2025",
    highlights: [
      "Spearheaded the maintenance and expansion of a complex ecosystem, spanning backend APIs, frontend portals, and specialized Chrome extensions.",
      "Delivered high-impact user features that dramatically accelerated workflow speeds and system usability.",
      "Architected robust, high-throughput ETL pipelines to ingest, normalize, and reconcile massive volumes of heterogeneous sports data."
    ],
    technologies: ["Vue.js", "TypeScript", "JavaScript", "Node.js", "Chrome Extension API", "Git", "REST APIs"]
  },
  {
    id: "ict-office",
    role: "Software Developer Intern",
    company: "ICT Office, Cor Jesu College",
    location: "Digos City, Mindanao",
    type: "Onsite Internship",
    period: "Jul 2024 – Aug 2024",
    highlights: [
      "Engineered a comprehensive event tracking ecosystem, digitizing student participation records across the institution.",
      "Maintained and modernized legacy institutional platforms, ensuring sustained operational stability post-deployment.",
      "Overhauled multi-app routing infrastructure on Apache HTTP Server, resolving critical Laravel Livewire and static asset resolution failures."
    ],
    technologies: ["TypeScript", "JavaScript", "Node.js", "Vue.js", "MySQL", "Bash", "Apache HTTP Server", "Laravel", "PHP", "Git"]
  }
]
