# hairyblue.pages.dev 📰☕

> Personal portfolio built with Nuxt 4 — styled as an authentic early 20th-century broadsheet newspaper front page.

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

## 🗞️ Theme & Design: Authentic Broadsheet Newspaper

The portfolio departs from conventional tech layouts, adopting an authentic **Broadsheet Newspaper** aesthetic modeled after early 20th-century front pages and classic print journalism.

### 🏛️ Inspiration
Rooted in classic broadsheet journalism, the design draws visual inspiration from early 20th-century newspaper front pages (such as the historic 1918 *New York Times* Armistice and front-page layouts) alongside vintage broadsheet poster art. It celebrates the tactile gravity, structured density, and mechanical craftsmanship of letterpress and ink printing — purposefully rejecting generic modern SaaS cards, rounded pills, and synthetic gradients.

### 📰 The Masthead
At the top of the broadsheet sits ***The Hairyblue Chronicle***:
- **Corner Ears:** Traditional newspaper ear boxes flanking the title banner — featuring `EST. 2026` on the left and `SPECIAL EDITION · PRICE: 1 COFFEE` on the right.
- **Publication Dateline Strip:** Official publication strip displaying edition numbering, date, distribution region, and weather/edition dispatches.
- **Editorial Motto:** Anchored beneath the masthead banner: *"Code is the language of freedom in the digital realm"*.

### 🔤 Typography Stack
A bespoke historical font hierarchy balancing gothic calligraphy, woodblock display headlines, and high-legibility editorial serifs:
- **Masthead:** `UnifrakturMaguntia` — Authentic Gothic / Blackletter calligraphy embodying the historic newspaper banner.
- **Headlines & Decks:** `Oswald` / `Bebas Neue` — Ultra-condensed woodblock all-caps display delivering immediate gravitas for lead stories, sub-headlines, and column decks.
- **Body Articles:** `Newsreader` / `Lora` — Period-accurate editorial serifs engineered for long-form readability, natural justification, and multi-column cadence.
- **Captions & Metas:** `JetBrains Mono` — Tracked-out monospaced type for official datelines, weather tickers, article metadata, code snippets, and technical badges.

### 🎨 Color Palette & Texture
Crafted with CSS custom properties to replicate the visual warmth of aged newsprint, dark printing inks, and letterpress accents:
- **Aged Newsprint Parchment (`#F9F7F1` / `--bg-page`):** Soft, unbleached broadsheet paper ground that reduces eye strain.
- **Paper Surface Tones (`#F2EFE9` / `--bg-surface`, `#E8E4DB` / `--bg-surface-subtle`):** Layered newsprint tones for boxed notices, classified blocks, and inset columns.
- **Deep Printing Ink (`#1A1512` / `--text-main`, `--border-strong`):** High-density letterpress black for crisp headlines, body copy, and heavy rules.
- **Faded Ink (`#5C4D43` / `--text-muted`):** Weathered tone for secondary sub-heads, deck leads, and editorial descriptions.
- **Vintage Brick-Red Accent (`#8B2615` / `--accent-ink`):** Period rubrication accent for priority alerts, lead drop caps, telegram stamps, and interactive callouts.
- **Column Rules (`#D6CEC3` / `--border-dim`):** Subtle vertical and horizontal dividing rules reminiscent of mechanical printing plate separators.

### ✒️ Print Craft Elements
- **Double-Rule Borders:** Authentic parallel thick-and-thin printer's rules framing the masthead, major section divisions, and featured dispatches.
- **Halftone Photo & Cutline Caption:** Front-page author portrait rendered with a vintage newspaper halftone/greyscale screen and a formal cutline caption (`Fig. 1: Editor & Lead Architect`), revealing full-color tones on hover.
- **Dense Column Grids:** Multi-column broadsheet reading layouts featuring vertical dividing borders, drop caps, and authentic editorial flow.
- **Classifieds Index:** Technical skills, domain competencies, and toolchains categorized as traditional classified listings and market notices.
- **Boxed Telegram CTA Notices:** High-priority conversion sections and contact invitations styled as urgent telegraphic dispatches with boxed frames.
- **Zero Modern SaaS Clichés:** Strict elimination of rounded pill buttons (`border-radius: 0`), soft modern drop-shadows, and neon glows in favor of tactile ink-on-paper authority.

### 🌿 Design Branch Reference
This repository maintains two distinct design explorations:
- **`theme/authentic-broadsheet`** *(Active Branch)* — Authentic early 20th-century broadsheet newspaper aesthetic featuring gothic blackletter masthead, woodblock display headlines, halftone portrait engraving, and dense print grids.
- **`redesign/vintage-editorial`** — Modern warm-coffee editorial theme featuring refined editorial serifs, contemporary whitespace, and warm cafe tones.

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

The portfolio is hosted on [Cloudflare Pages](https://pages.cloudflare.com). All routes are fully pre-rendered as static assets at build time using Nitro's `cloudflare-pages` preset.

### 🌐 Automatic Deployment (Git Integration)

Continuous deployment triggers automatically on push to `master`. Cloudflare Pages runs `npm run generate` and serves the pre-rendered broadsheet.

### 📦 Manual Deployment (Wrangler CLI)

You can build and deploy directly to Cloudflare Pages via the [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):

```bash
# Build / generate static assets
npm run generate

# (Optional) Preview locally before deploying
npx wrangler pages dev dist/

# Deploy directly to Cloudflare Pages
npx wrangler pages deploy dist/ --project-name=<name>
```

> **Note:** Under the `cloudflare-pages` preset configured in `nuxt.config.ts`, Nitro outputs static assets directly to `dist/` (standard Nitro setups default to `.output/public`). Pass `dist/` to Wrangler and replace `<name>` with your Cloudflare Pages project name (e.g. `hairyblue`).

Live deployment: [hairyblue.pages.dev](https://hairyblue.pages.dev)

---

## 📄 License

© 2026 Nicki Marty Pecision. All rights reserved.
