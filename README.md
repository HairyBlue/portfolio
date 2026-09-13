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
- **Featured Case Studies** — Real-world web applications and platforms detailed with challenges, architectures, solutions, and impacts.
- **The Editorial Chronicles** — Professional trajectory presented through measurable outcomes, organizational impact, and personal narratives.
- **Curated Index** — A transparent breakdown of technical proficiencies, tooling, and domain knowledge.

---

## 🗞️ Theme & Design: Authentic Broadsheet Newspaper

The portfolio departs from conventional tech layouts, adopting an authentic **Broadsheet Newspaper** aesthetic modeled after early 20th-century front pages and classic print journalism.

### 🏛️ Inspiration
Rooted in classic broadsheet journalism, the design draws visual inspiration from early 20th-century newspaper front pages. It celebrates the tactile gravity, structured density, and mechanical craftsmanship of letterpress and ink printing — purposefully rejecting generic modern SaaS cards, rounded pills, and synthetic gradients.

### 📰 The Masthead
At the top of the broadsheet sits ***The Hairyblue Chronicle***:
- **Corner Ears:** Traditional newspaper ear boxes flanking the title banner.
- **Publication Dateline Strip:** Official publication strip displaying edition numbering, date, distribution region, and weather/edition dispatches.
- **Editorial Motto:** *"Code is the language of freedom in the digital realm"*.

### 🔤 Typography Stack
- **Masthead:** `UnifrakturMaguntia` — Authentic Gothic / Blackletter calligraphy embodying the historic newspaper banner.
- **Headlines & Decks:** `Oswald` / `Bebas Neue` — Ultra-condensed woodblock all-caps display delivering immediate gravitas.
- **Body Articles:** `Newsreader` / `Lora` — Period-accurate editorial serifs engineered for long-form readability.
- **Captions & Metas:** `JetBrains Mono` — Tracked-out monospaced type for official datelines, weather tickers, and technical badges.

### ✒️ Print Craft Elements
- **Zero Tailwind Dependency:** Strictly Vanilla CSS with custom properties replicating aged newsprint, printing inks, and letterpress accents.
- **Halftone Photo & Cutline Caption:** Front-page author portrait rendered with a vintage newspaper halftone/greyscale screen.
- **Boxed Telegraph CTA Notices:** High-priority conversion sections and contact invitations styled as urgent telegraphic dispatches with boxed frames.

---

## 🏆 Featured Case Studies Suite

The portfolio highlights 5 core featured case studies, headlined by our flagship AI orchestration project:

1. **ACON — Agent Control Plane** ([github.com/HairyBlue/acon](https://github.com/HairyBlue/acon))
2. **e-Bulletin Portal**
3. **Camote Utils**
4. **Mobile AR in Human Anatomy**
5. **Activity Tracker**

These case studies feature interactive broadsheet deep-dive accordions (`[ READ FULL CASE STUDY ↓ ]`) that detail the Challenge, Architecture, Solution, and Impact in a dense, period-accurate format.

---

## 📖 The Editorial Chronicles & Dual-Story Reader (`/story`)

The `/story` route houses a dual-dispatch broadsheet reader that elegantly presents personal narratives and technical milestones.

### Dual-Dispatch Broadsheet Reader:
- **Dispatch I: From Ledgers to Pipelines** — The Origin Chronicle.
- **Dispatch II: Late to the Wave, But I Built My Own Boat** — The Lead Editorial Dispatch, covering single-subscription AI orchestration, the `herdr` multiplexer, and the ACON architecture.

### Key Engineering Features:
- **`StoryReader.vue`:** A tabbed reader component engineered to eliminate endless vertical scrolling and maintain tight editorial layouts.
- **Visual Newspaper Figure Cutlines:** Authentic halftone cutlines documenting technical setups, such as **Fig. 2** (`herdr` multiplexer on Gemini 3.8 Flash) and **Fig. 3** (ACON lifecycle flowchart).

---

## 📚 Broadsheet Documentation Archive (`docs/`)

The repository features a newly organized documentation library formatted as print archives:

- `docs/origin-story/` (`story1.md`, `story2.md`)
- `docs/featured-case-studies/` (`acon.md`, `e-bulletin.md`, `camote-utils.md`, etc.)
- `docs/chronicle/` (`chronicle.md`)
- `docs/classifieds/` (`classifieds.md`)
- `docs/README.md` (Master index)

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com) (Nightly) with [Vue 3](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org)
- **Styling:** Vanilla CSS with custom properties (`app/assets/css/main.css`) — strictly zero Tailwind.
- **Static Generation:** Fully pre-rendered static site generation (SSG) with automatic link crawling.
- **Deployment & Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) via Nitro's `cloudflare-pages` preset.

---

## 📁 Project Architecture Directory Tree

```text
portfolio/
├── app/
│   ├── app.vue                 # Master layout shell & newspaper frame
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # Vanilla CSS tokens & global typography (Zero Tailwind)
│   ├── components/             # Reusable section components
│   │   ├── StoryReader.vue     # Tabbed dual-dispatch broadsheet reader
│   │   ├── icons/              # Custom SVG icon components
│   │   └── ...
│   ├── data/                   # Centralized, typed data modules
│   │   ├── projectsData.ts     # Project details, metrics, and case studies
│   │   ├── storyData.ts        # Editorial chronicles and narrative dispatches
│   │   └── ...
│   └── pages/                  # File-based routing (5 pages)
│       └── ...
├── docs/                       # Broadsheet Documentation Archive
│   ├── origin-story/
│   │   ├── story1.md
│   │   └── story2.md
│   ├── featured-case-studies/
│   │   ├── acon.md
│   │   ├── e-bulletin.md
│   │   └── camote-utils.md
│   ├── chronicle/
│   │   └── chronicle.md
│   ├── classifieds/
│   │   └── classifieds.md
│   └── README.md               # Master index
├── public/
│   └── images/
│       ├── herdr-setup.png     # Fig. 2 cutline asset
│       └── acon-architecture.png # Fig. 3 cutline asset
├── nuxt.config.ts              # Nuxt & Nitro build configuration
└── package.json                # Project dependencies and scripts
```

---

## 🚀 Deployment & Tooling Workflow

The portfolio is hosted on [Cloudflare Pages](https://pages.cloudflare.com). All routes are fully pre-rendered as static assets at build time using Nitro's `cloudflare-pages` preset.

### 🌐 Automatic Deployment (Git Integration)

Continuous deployment triggers automatically on push to `master`. Cloudflare Pages runs `npm run generate` and serves the pre-rendered broadsheet.

### 📦 Manual Deployment (Wrangler CLI)

You can build and deploy directly to Cloudflare Pages via the [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) using your `CLOUDFLARE_API_TOKEN`:

```bash
# Build / generate static assets
npm run generate

# Deploy directly to Cloudflare Pages
npx wrangler pages deploy dist/ --project-name=hairyblue
```

> **Note:** Under the `cloudflare-pages` preset configured in `nuxt.config.ts`, Nitro outputs static assets directly to `dist/` (standard Nitro setups default to `.output/public`). Pass `dist/` to Wrangler.

Live deployment: [hairyblue.pages.dev](https://hairyblue.pages.dev)

---

## 📄 License

© 2026 Nicki Marty Pecision. All rights reserved.
