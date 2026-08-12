export interface Project {
  id: string
  title: string
  year: string
  subtitle: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: string
  stats?: string
  useImage: boolean
  image?: string
  badgeText: string
}

export const projects: Project[] = [
  {
    id: "e-bulletin",
    title: "e-Bulletin Portal",
    year: "2026",
    subtitle: "Official Provincial Information Board",
    category: "Web Platform",
    description: "The official digital information board of the Province of Davao del Sur for public advisories, notices, procurement, and publications.",
    longDescription: "The e-Bulletin Portal is the official digital information board of the Province of Davao del Sur. Established to ensure efficient public information dissemination, this platform provides an interactive, accessible, and functional channel where provincial notices, advisories, procurement opportunities, and official publications are published for public view.",
    technologies: ["Laravel", "Vue 3", "Filament", "Inertia.js", "Blade", "MySQL", "Docker", "Linux", "Tailwind CSS", "JavaScript/TypeScript", "Bash"],
    liveUrl: "https://ebulletin.davaodelsur.gov.ph",
    featured: true,
    stats: "Official Provincial Government Information System",
    useImage: false,
    image: "/images/projects/e-bulletin.png",
    badgeText: "EB"
  },
  {
    id: "camote-utils",
    title: "Camote Utils",
    year: "2025",
    subtitle: "Open Source Utility Library",
    category: "Open Source / NPM",
    description: "A lightweight, high-performance TypeScript utility library for string manipulation, number formatting, and complex data structures.",
    longDescription: "Contributed utility functions to the open-source TypeScript library ecosystem. Author of objectToQueryString (converting nested objects & arrays into URL query strings with safety validation) and toHtmlEntities (encoding raw strings into safe HTML entities with custom character mapping).",
    technologies: ["TypeScript", "JavaScript", "Node.js", "HTML/CSS", "Git", "NPM"],
    githubUrl: "https://github.com/HairyBlue",
    featured: true,
    stats: "TS Utilities (objectToQueryString, toHtmlEntities)",
    useImage: false,
    image: "/images/projects/camote-utils.png",
    badgeText: "CU"
  },
  {
    id: "mobile-ar-anatomy",
    title: "Mobile AR In Human Anatomy",
    year: "2025",
    subtitle: "Thesis Project",
    category: "Augmented Reality / Mobile",
    description: "An adaptive augmented reality approach to human anatomy education using real-time body dimension mapping and virtual organ interaction.",
    longDescription: "Developed a groundbreaking mobile AR application designed to track human body movements and display real-time interactive 3D anatomical models for medical education. Integrated advanced body tracking algorithms with WebAssembly/Python and Unity scripts over WebSockets to ensure low-latency 3D rendering on mobile devices.",
    technologies: ["Python", "C#", "Unity", "Bash Script", "VENV", "TCP & WebSockets", "Git", "GitHub"],
    githubUrl: "https://github.com/HairyBlue",
    featured: true,
    stats: "Real-time Body Mapping & 3D Organ Interaction",
    useImage: false,
    image: "/images/projects/mobile-ar.png",
    badgeText: "AR"
  },
  {
    id: "activity-tracker",
    title: "Activity Tracker",
    year: "2024",
    subtitle: "Organization Analytics App",
    category: "Web Application",
    description: "Track club and organization event frequency with automated MySQL database backup cron jobs and Chart.js analytics.",
    longDescription: "Built an intuitive management dashboard for student clubs to record, categorize, and analyze organizational activities. Integrated automated daily MySQL dump backups via Linux cron tasks and customized interactive Chart.js graphs for visual data insights.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "Vue.js", "MySQL", "Tailwind CSS", "Bash", "Chart.js", "Git"],
    githubUrl: "https://github.com/HairyBlue",
    featured: true,
    stats: "Automated Cron Backups & Data Visualization",
    useImage: false,
    image: "/images/projects/activity-tracker.png",
    badgeText: "AT"
  }
]
