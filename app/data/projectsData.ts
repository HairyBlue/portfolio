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
  challenge?: string
  architecture?: string
  solution?: string
  impact?: string
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
    badgeText: "AC",
    challenge: "Running multi-agent AI development fleets typically incurs massive costs due to redundant token usage, polling loops, and execution overlap. Furthermore, merge collisions and unstructured agent communications lead to inefficient and broken codebases. A single subscription constraint makes typical autonomous fleets unviable.",
    architecture: "Architected a production-grade multi-agent control plane that coordinates specialist AI subagents (Frontend, Backend, QA, Git Ops) under a strict zero-execution command bridge. Utilized multi-pane terminal multiplexing (herdr) with reactive event wakeups to eliminate polling token drain.",
    solution: "Implemented the First Mate Protocol, a zero-execution command bridge separating supervisory direction from specialist worker execution. Enforced seam-isolated contracts with zero merge collisions via rigid file boundary partitioning (SHIP vs SCOUT contracts).",
    impact: "Successfully enabled an entire autonomous development fleet to run efficiently on a single subscription by eliminating overlapping execution and polling loops."
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
    badgeText: "EB",
    challenge: "Historically, public information dissemination faced critical hurdles: physical and fragmented distribution across bulletin boards and social media, delayed access to critical procurement data, and manual paper archiving overhead for audit compliance.",
    architecture: "Developed an administrative back-office using Laravel and Filament with Role-Based Access Control (RBAC). Integrated a reactive frontend using Vue 3 and Inertia.js for SPA-like responsiveness. Used Docker for containerization and automated Bash deployment pipelines.",
    solution: "Designed optimized MySQL database schemas with targeted composite indexes on advisory categories and timestamps. Enforced mobile-first responsive design for low-bandwidth cellular networks. Encapsulated services in reproducible Docker containers.",
    impact: "Consolidated fragmented pipelines into a single canonical source of truth, reduced notice publication latency from days to seconds, and provided an immutable digital record of bidding documents."
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
    badgeText: "CU",
    challenge: "Modern web applications frequently require complex data transformations, like nested client queries and HTML sanitization. Teams often import massive utility libraries with transitive dependencies or write ad-hoc inline serialization that fails on edge cases.",
    architecture: "Authored strict, type-safe functional primitives under TypeScript's strictest compiler options (`strict: true`, `noImplicitAny`). Packaged with dual ESM and CommonJS exports for universal bundler compatibility.",
    solution: "Engineered `objectToQueryString` to recursively flatten nested objects and correctly serialize arrays. Developed `toHtmlEntities` to deterministically sanitize reserved HTML characters with benchmarked maximum throughput.",
    impact: "Delivered a lightweight, zero-dependency utility package that reduces bundle impact to mere bytes while guaranteeing type safety and edge-case handling."
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
    badgeText: "AR",
    challenge: "Medical students struggle to conceptualize 3D organ relationships from flat textbooks. High hardware costs for specialized AR headsets prevent widespread classroom adoption. A solution was needed using standard consumer hardware without proprietary tracking markers.",
    architecture: "Decoupled architecture: a Python-based spatial tracking engine running computer vision pipelines, communicating via a custom binary/JSON low-latency TCP/WebSocket protocol to a Unity 3D client rendering real-time mesh transforms.",
    solution: "Leveraged OpenCV and MediaPipe to map human landmarks at 30+ fps. Computed dynamic body proportions to anchor 3D coordinates. Engineered a Unity client that scales and projects interactive anatomical layers (muscular, vascular) onto the detected anchors.",
    impact: "Delivered accurate spatial tracking and high-fidelity educational AR without physical markers, making interactive spatial computing accessible on commodity devices."
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
    badgeText: "AT",
    challenge: "Institutional tracking relied on manual paper logs and Excel files, causing lost records and accreditation hours. Deans lacked macro visibility into participation trends, and there was zero disaster recovery, leaving data vulnerable.",
    architecture: "Full-stack architecture featuring a Vue.js client portal, a Node.js/Express RESTful backend, and a relational MySQL database. Backed by an automated Linux cron-driven data resilience and archival pipeline.",
    solution: "Designed clean data-entry forms and interactive Chart.js dashboards for real-time visualization. Defended API contracts with token authentication. Implemented bash scripts running via crontab for nightly gzip-compressed MySQL dumps with 30-day rotation policies.",
    impact: "Eradicated manual paper logs, guaranteed data durability with automated offsite-ready archival, and streamlined the accreditation review process by providing auditable attendance records."
  }
]
