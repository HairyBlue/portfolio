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
      "Develop a centralized system for official provincial announcements, notices, and public records.",
      "Design comprehensive Entity Relationship Diagrams (ERD) and intuitive UI mockups using Figma & Excalidraw.",
      "Collaborate with multi-disciplinary development teams to ensure high efficiency and delivery schedules.",
      "Implement Docker containerization and build CI/CD automation pipelines with GitHub Actions."
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
      "Enhanced and optimized existing web applications by resolving critical bugs and improving performance.",
      "Assisted in configuring and deploying CI/CD workflows using self-hosted runners on Gitea.",
      "Collaborated closely with QA testers and UI/UX designers to meet strict design and functional quality standards."
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
      "Maintained and expanded core multi-tier applications across backend APIs, frontend portals, and custom Chrome extensions.",
      "Designed and delivered user-focused features that significantly enhanced overall system usability and workflow speeds.",
      "Engineered high-throughput batch processing pipelines pulling large volumes of sports data from third-party APIs, performing data cleaning and normalization for cross-sports matching."
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
      "Developed and deployed a web application for tracking school event records and participation across student clubs and organizations.",
      "Maintained and enhanced institutional web applications throughout internship and post-graduation phases.",
      "Configured multi-app routing on single servers (Apache HTTP Server) for student Laravel and Node.js projects, fixing Livewire routing and static asset resolution."
    ],
    technologies: ["TypeScript", "JavaScript", "Node.js", "Vue.js", "MySQL", "Bash", "Apache HTTP Server", "Laravel", "PHP", "Git"]
  }
]
