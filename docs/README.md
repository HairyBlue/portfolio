# The Hairyblue Broadsheet Documentation System
**Central Documentation Hub · Portfolio Knowledge Base**  
*The Hairyblue Chronicle · Mindanao, Philippines*

---

## Overview

Welcome to the central documentation archive for the **Hairyblue Portfolio**. Designed around the classic newspaper broadsheet metaphor (*The Hairyblue Chronicle*), this repository captures the technical work, professional trajectory, core capabilities, and personal origin of **Nicki Marty Pecision** ([@HairyBlue](https://github.com/HairyBlue)).

This directory preserves Markdown editions of the four primary broadsheet sections featured in the web application:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          THE FOUR PRIMARY BROADSHEET SECTIONS                          │
├──────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│ Section Name             │ Dedicated Directory         │ Corresponding Web Route       │
├──────────────────────────┼─────────────────────────────┼───────────────────────────────┤
│ FEATURED CASE STUDIES    │ docs/featured-case-studies/ │ /projects                     │
│ CHRONICLE                │ docs/chronicle/             │ /experience                   │
│ CLASSIFIEDS              │ docs/classifieds/           │ /skills                       │
│ ORIGIN STORY             │ docs/origin-story/          │ /story                        │
└──────────────────────────┴─────────────────────────────┴───────────────────────────────┘
```

---

## Broadsheet Directory Structure

```
docs/
├── README.md                                 # Master documentation index (this file)
│
├── origin-story/                             # [ ORIGIN STORY ]
│   ├── README.md                             # Editorial overview & dispatches guide
│   ├── story1.md                             # Dispatch I: From Ledgers to Pipelines
│   └── story2.md                             # Dispatch II: Late to the Wave, But I Built My Own Boat
│
├── featured-case-studies/                    # [ FEATURED CASE STUDIES ]
│   ├── README.md                             # Case studies index & summary
│   ├── case-studies.md                       # Complete consolidated case studies
│   ├── e-bulletin.md                         # Deep dive: e-Bulletin Portal (GovTech)
│   ├── camote-utils.md                       # Deep dive: Camote Utils (Open Source TS)
│   ├── mobile-ar-anatomy.md                  # Deep dive: Mobile AR in Human Anatomy (Spatial)
│   └── activity-tracker.md                   # Deep dive: Activity Tracker (Institutional Analytics)
│
├── chronicle/                                # [ CHRONICLE ]
│   ├── README.md                             # Career overview & credentials summary
│   └── chronicle.md                          # Full career timeline, roles, and achievements
│
└── classifieds/                              # [ CLASSIFIEDS ]
    ├── README.md                             # Skills taxonomy overview
    └── classifieds.md                        # Exhaustive directory of skills, tools, and paradigms
```

---

## Section Summaries & Quick Navigation

### 1. [Featured Case Studies](./featured-case-studies/README.md)
*Broadsheet Section: `[ FEATURED CASE STUDIES ]` · Application Route: `/projects`*

Flagship production software systems built across municipal governance, open-source primitives, spatial computing, and institutional reporting:
- **[`e-bulletin.md`](./featured-case-studies/e-bulletin.md):** Official provincial information gateway for the Province of Davao del Sur ([ebulletin.davaodelsur.gov.ph](https://ebulletin.davaodelsur.gov.ph)).
- **[`camote-utils.md`](./featured-case-studies/camote-utils.md):** Zero-dependency TypeScript primitives for URL query serialization and HTML sanitization.
- **[`mobile-ar-anatomy.md`](./featured-case-studies/mobile-ar-anatomy.md):** Real-time computer vision body tracking (Python) coupled to Unity 3D via high-frequency sockets.
- **[`activity-tracker.md`](./featured-case-studies/activity-tracker.md):** Institutional student engagement tracker with automated Linux crontab database resilience pipelines.
- **[`case-studies.md`](./featured-case-studies/case-studies.md):** Complete consolidated broadsheet edition.

---

### 2. [The Career Chronicle](./chronicle/README.md)
*Broadsheet Section: `[ CHRONICLE ]` · Application Route: `/experience`*

Comprehensive professional ledger detailing employment history, responsibilities, impact, and formal credentials:
- **[`chronicle.md`](./chronicle.md):**
  - **OPG-PICTO (Davao del Sur):** Information System Developer (Feb 2026 – Present)
  - **Webugo (Germany):** Web Developer (Jan 2026)
  - **Odds Pulse (USA):** Full Stack Developer (Dec 2023 – Nov 2025)
  - **Cor Jesu College ICT Office:** Software Developer Intern (Jul 2024 – Aug 2024)
  - **Academic Background:** BS in Computer Science, Cor Jesu College, Inc. (2021 – 2025)
  - **Manager Endorsement:** Recommendation by Jeremy N. (Odds Pulse)

---

### 3. [Technical Classifieds & Skill Index](./classifieds/README.md)
*Broadsheet Section: `[ CLASSIFIEDS ]` · Application Route: `/skills`*

Exhaustive technical taxonomy of languages, frameworks, storage engines, and DevOps tooling:
- **[`classifieds.md`](./classifieds.md):**
  - **Languages:** TypeScript, JavaScript, PHP, Python, SQL, HTML5/CSS3, Bash
  - **Frontend:** Vue 3, Nuxt, React.js, Tailwind CSS, jQuery
  - **Backend & DB:** Laravel 11, Node.js, Express, Filament PHP, REST APIs, MySQL, PostgreSQL
  - **DevOps:** Docker, Linux, Git/GitHub Actions, Gitea CI/CD, Apache HTTP Server
  - **Disciplines:** Vertical Slice Architecture, Agentic Orchestration (ACON), ETL data pipelines, Anti-Overengineering (Ponytail)

---

### 4. [Origin Story & Editorial Dispatches](./origin-story/README.md)
*Broadsheet Section: `[ ORIGIN STORY ]` · Application Route: `/story`*

Personal essays and retrospective chronicles on software craft, resilience, and agentic workflows:
- **[`story1.md`](./origin-story/story1.md):** *Dispatch I: From Ledgers to Pipelines* — The 2021 pivot from Management Accounting to Software Architecture.
- **[`story2.md`](./origin-story/story2.md):** *Dispatch II: Late to the Wave, But I Built My Own Boat* — The story of navigating financial constraints, supporting family, terminal multiplexing with `herdr`, and building the open-source **ACON** agent control plane.

---

## Application Architecture Reference

For technical details on how the Nuxt 4 broadsheet application renders these sections:
- **Framework:** Nuxt 4 (nightly) with Vue 3 and TypeScript
- **Design System:** Coffee Design System using Vanilla CSS variables in `app/assets/css/main.css` (Strictly zero-Tailwind in the frontend UI)
- **Data Layer:** Vertical slice data modules in `app/data/` (`portfolioData.ts`)
- **Hosting Target:** Cloudflare Pages with Nitro preset `cloudflare-pages`
