export interface Skill {
  name: string
  featured: boolean
  icon?: string
  hasImage?: boolean
  image?: string
  badgeText?: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "TypeScript", featured: true, icon: "logos:typescript-icon", badgeText: "TS" },
      { name: "JavaScript", featured: true, icon: "logos:javascript", badgeText: "JS" },
      { name: "PHP", featured: false, icon: "logos:php", badgeText: "PHP" },
      { name: "Python", featured: false, icon: "logos:python", badgeText: "PY" },
      { name: "SQL", featured: false, icon: "logos:mysql-icon", badgeText: "SQL" },
      { name: "HTML5 / CSS3", featured: false, icon: "logos:html-5", badgeText: "HTML" },
      { name: "Bash", featured: false, icon: "logos:bash-icon", badgeText: "SH" }
    ]
  },
  {
    category: "Frontend & Interactive UI",
    skills: [
      { name: "Vue.js", featured: true, icon: "logos:vue", badgeText: "VUE" },
      { name: "Nuxt", featured: true, icon: "logos:nuxt-icon", badgeText: "NUXT" },
      { name: "React.js", featured: false, icon: "logos:react", badgeText: "REACT" },
      { name: "Tailwind CSS", featured: false, icon: "logos:tailwindcss-icon", badgeText: "CSS" },
      { name: "jQuery", featured: false, icon: "logos:jquery-icon", badgeText: "JQ" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Laravel", featured: true, icon: "logos:laravel", badgeText: "LAR" },
      { name: "Node.js", featured: true, icon: "logos:nodejs-icon", badgeText: "NODE" },
      { name: "Express.js", featured: false, icon: "logos:express", badgeText: "EXP" },
      { name: "Filament PHP", featured: false, icon: "logos:laravel", badgeText: "FIL" },
      { name: "REST APIs", featured: false, icon: "carbon:api", badgeText: "API" },
      { name: "MySQL", featured: true, icon: "logos:mysql-icon", badgeText: "SQL" },
      { name: "PostgreSQL", featured: false, icon: "logos:postgresql", badgeText: "PG" }
    ]
  },
  {
    category: "DevOps, Tooling & Infrastructure",
    skills: [
      { name: "Docker", featured: true, icon: "logos:docker-icon", badgeText: "DOC" },
      { name: "Git & GitHub Actions", featured: false, icon: "logos:git-icon", badgeText: "GIT" },
      { name: "Linux", featured: false, icon: "logos:linux-tux", badgeText: "LINUX" },
      { name: "Figma & Excalidraw", featured: false, icon: "logos:figma", badgeText: "FIG" },
      { name: "Gitea CI/CD", featured: false, icon: "logos:gitea", badgeText: "GITEA" }
    ]
  }
]
