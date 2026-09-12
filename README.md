# hairyblue.pages.dev 📰☕

> Personal portfolio built with Nuxt 4 — a vintage editorial theme with a warm coffee-toned design system.

[![Live Site](https://img.shields.io/badge/Live%20Site-hairyblue.pages.dev-8B2615?style=flat-square)](https://hairyblue.pages.dev)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

---

## ✒️ About

This is the personal portfolio of **Nicki Marty Pecision** ([Hairyblue](https://github.com/HairyBlue)), a Software Engineer based in Mindanao, Philippines.

The site is crafted as a dual-purpose conversion funnel — structured to engage both prospective freelance clients and potential engineering employers:
- **Case Studies** — Real-world web applications and platforms detailed with challenges, solutions, and metrics.
- **Impact Stories** — Professional trajectory presented through measurable outcomes and organizational impact.
- **Curated Index** — A transparent breakdown of technical proficiencies, tooling, and domain knowledge.

---

## 🗞️ Theme & Design

The portfolio departs from conventional tech layouts, adopting a tactile **Vintage Editorial** aesthetic modeled after classic broadsheet newspapers and print typography.

### Design Principles & Highlights
- **Coffee Design System:** A warm, grounded palette anchored in espresso, roast, latte, and cream tones.
- **Serif-First Typography:** 
  - **Headlines:** *Playfair Display* for striking, high-contrast broadsheet headings.
  - **Body Text:** *Lora* for editorial readability and long-form cadence.
  - **Accents & Meta:** *JetBrains Mono* for timestamps, badges, and technical annotations.
- **Print, Not SaaS:** Deliberately avoids modern SaaS cliches — zero `border-radius` (sharp corners only), zero soft `box-shadows`, thick and thin editorial rules, drop caps, pull quotes, multi-column reading grids, and a masthead-style sidebar.
- **Color Palette Highlights:**
  - `var(--bg-page)` (`#F9F7F1`) — Aged newsprint background
  - `var(--bg-surface)` (`#F2EFE9`) — Paper block surface
  - `var(--text-main)` (`#1A1512`) — Rich ink-black typography
  - `var(--accent-ink)` (`#8B2615`) — Vintage brick-red for interactive accents and callouts

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com) (Nightly) with [Vue 3](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org)
- **Styling:** Vanilla CSS with custom properties (`app/assets/css/main.css`) — zero Tailwind CSS dependency
- **Static Generation:** Fully pre-rendered static site generation (SSG) with automatic link crawling
- **Deployment & Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) via Nitro's `cloudflare-pages` preset

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm (or pnpm / yarn)

### Development & Build Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── app.vue                 # Master layout shell & newspaper frame
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # Coffee Design System tokens & global typography
│   ├── components/             # Reusable section components & custom icons
│   │   ├── HeaderNav.vue       # Masthead navigation bar
│   │   ├── ProfileSidebar.vue  # Broadside biography sidebar
│   │   ├── HeroSection.vue     # Front-page editorial hero banner
│   │   ├── ProjectsSection.vue # Filterable case studies
│   │   ├── ExperienceSection.vue # Career timeline & impact stories
│   │   ├── SkillsSection.vue   # Categorized technical index
│   │   ├── icons/              # Custom SVG icon components
│   │   └── ...
│   ├── data/                   # Centralized, typed data modules
│   │   ├── personalData.ts     # Bio, contact, and social links
│   │   ├── projectsData.ts     # Project details, metrics, and tags
│   │   ├── experienceData.ts   # Work experience and impact highlights
│   │   └── skillsData.ts       # Categorized skills and proficiency ratings
│   └── pages/                  # File-based routing (5 pages)
│       ├── index.vue           # Comprehensive single-page editorial view
│       ├── projects.vue        # Dedicated projects showcase
│       ├── experience.vue      # Dedicated career timeline
│       ├── skills.vue          # Dedicated skills matrix
│       └── story.vue           # Journey and personal background
├── nuxt.config.ts              # Nuxt & Nitro build configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Deployment

Auto-deploys via Cloudflare Pages on push to `master`. All routes are pre-rendered into static assets at build time using Nitro's `cloudflare-pages` preset.

### Manual Deployment

```bash
# Generate static site
npm run generate

# Preview locally before deploying
npx wrangler pages dev dist/

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/
```

Live at: [hairyblue.pages.dev](https://hairyblue.pages.dev)

---

## 📄 License

© 2026 Nicki Marty Pecision. All rights reserved.
