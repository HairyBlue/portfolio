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
    id: "acon",
    title: "ACON — AGENT CONTROL PLANE",
    year: "2026",
    subtitle: "Autonomous Multi-Agent Systems & Developer Tooling",
    category: "Developer Tooling",
    description: "Architected a production-grade multi-agent control plane that coordinates specialist AI subagents (Frontend, Backend, QA, Git Ops) under a strict zero-execution command bridge—optimized to run an entire autonomous development fleet on a single subscription.",
    longDescription: "Highlights:\n- The First Mate Protocol: Strict zero-execution command bridge separating supervisory direction from specialist worker execution.\n- Seam-Isolated Contracts: Zero merge collisions via rigid file boundary partitioning (SHIP vs SCOUT).\n- Subscription-Optimized: Multi-pane terminal multiplexing (herdr) with reactive event wakeups, eliminating polling token drain.",
    technologies: ["Multi-Agent Systems", "Antigravity CLI", "Gemini 3.8 Flash", "TypeScript", "Bash"],
    githubUrl: "https://github.com/HairyBlue/acon",
    liveUrl: "/story",
    featured: true,
    stats: "Subscription-Optimized Multi-Agent Control Plane",
    useImage: false,
    badgeText: "AC"
  },
  {
    id: "e-bulletin",
    title: "e-Bulletin Portal",
    year: "2026",
    subtitle: "Modernizing Provincial Governance",
    category: "Web Platform",
    description: "Digitized public advisories and procurement notices, establishing a transparent, high-performance information gateway for the Province of Davao del Sur.",
    longDescription: "Challenge: The provincial government relied on fragmented communication channels for public notices. Approach: Architected a unified digital bulletin using Laravel and Vue 3, integrating automated publishing pipelines. Outcome: Delivered a centralized, high-availability platform that standardized information dissemination across the province.",
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
    subtitle: "TypeScript Engineering Primitives",
    category: "Open Source / NPM",
    description: "Engineered high-performance utility functions for string manipulation and complex data serialization in the open-source ecosystem.",
    longDescription: "Challenge: Developers frequently re-implement string and object serialization with inconsistent safety validations. Approach: Authored strict, type-safe utility functions including `objectToQueryString` and `toHtmlEntities`. Outcome: Contributed robust, reusable primitives to a fast-growing open-source TypeScript library.",
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
    subtitle: "Spatial Computing for Education",
    category: "Augmented Reality / Mobile",
    description: "Bridged the gap between physical and digital spaces by architecting an adaptive augmented reality engine for interactive anatomical studies.",
    longDescription: "Challenge: Traditional anatomy education lacks interactive, spatial context. Approach: Engineered a low-latency AR engine coupling Python-based computer vision with Unity via WebSockets for real-time 3D rendering. Outcome: Successfully demonstrated real-time body dimension mapping and interactive virtual organ projection on mobile devices.",
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
    subtitle: "Institutional Analytics Dashboard",
    category: "Web Application",
    description: "Streamlined institutional reporting by building a centralized analytics dashboard with automated data resilience pipelines.",
    longDescription: "Challenge: Student organizations lacked a unified system to track and analyze event participation data securely. Approach: Built a full-stack Vue/Node.js application featuring interactive Chart.js visualization and automated MySQL backup strategies via Linux cron jobs. Outcome: Delivered a resilient, data-rich platform that digitized institutional activity tracking.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "Vue.js", "MySQL", "Tailwind CSS", "Bash", "Chart.js", "Git"],
    githubUrl: "https://github.com/HairyBlue",
    featured: true,
    stats: "Automated Cron Backups & Data Visualization",
    useImage: false,
    image: "/images/projects/activity-tracker.png",
    badgeText: "AT"
  }
]
