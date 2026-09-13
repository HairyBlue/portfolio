# Featured Case Studies
**Broadsheet Section: `[ FEATURED CASE STUDIES ]`**  
*The Hairyblue Chronicle · Investigations, Systems Architecture & Production Deployments*  
*Author: Nicki Marty Pecision · Mindanao, Philippines*

---

## Overview

The **Featured Case Studies** section showcases flagship engineering initiatives spanning municipal public web infrastructure, open-source TypeScript primitives, spatial computing in augmented reality, and institutional analytics dashboards. Each project reflects disciplined architecture: solving real problems with resilient data flow, minimal overhead, and rigorous engineering practices.

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                           FEATURED CASE STUDIES INDEX                            │
├────┬─────────────────────────────┬────────┬──────────────────────────┬───────────┤
│ ID │ Project Title               │ Year   │ Category                 │ Badge     │
├────┼─────────────────────────────┼────────┼──────────────────────────┼───────────┤
│ 01 │ ACON — AGENT CONTROL PLANE      │ 2026   │ Developer Tooling          │ [AC]      │
│ 02 │ e-Bulletin Portal               │ 2026   │ Web Platform / GovTech   │ [EB]      │
│ 03 │ Camote Utils                    │ 2025   │ Open Source / NPM        │ [CU]      │
│ 04 │ Mobile AR In Human Anatomy      │ 2025   │ AR / Spatial Computing   │ [AR]      │
│ 05 │ Activity Tracker                │ 2024   │ Institutional Analytics  │ [AT]      │
└────┴─────────────────────────────────┴────────┴──────────────────────────┴───────────┘
```

---

## 1. ACON — AGENT CONTROL PLANE

> **"Autonomous Multi-Agent Systems & Developer Tooling"**  
> *Production-grade multi-agent control plane*

- **ID:** `acon`
- **Year:** 2026
- **Category:** Developer Tooling
- **Location:** Mindanao, Philippines
- **Production URL:** [https://github.com/HairyBlue/acon](https://github.com/HairyBlue/acon)
- **Badge:** `AC`
- **Status:** Live
- **Detailed Doc:** [`./acon.md`](./acon.md)

### Summary
Architected a production-grade multi-agent control plane that coordinates specialist AI subagents (Frontend, Backend, QA, Git Ops) under a strict zero-execution command bridge—optimized to run an entire autonomous development fleet on a single subscription.

### Engineering Breakdown
- **Challenge:**  
  Running multi-agent AI development fleets typically incurs massive costs due to redundant token usage, polling loops, and execution overlap. Furthermore, merge collisions and unstructured agent communications lead to inefficient and broken codebases. A single subscription constraint makes typical autonomous fleets unviable.
- **Approach:**  
  Architected a production-grade multi-agent control plane that coordinates specialist AI subagents under a strict zero-execution command bridge. Implemented The First Mate Protocol, Seam-Isolated Contracts, and Subscription-Optimized event wakeups.
- **Outcome:**  
  Delivered a system optimized to run an entire autonomous development fleet on a single subscription.

### Technology Stack
- **Core:** Multi-Agent Systems, Antigravity CLI, Gemini 3.8 Flash, TypeScript, Bash

---

## 2. e-Bulletin Portal

> **"Modernizing Provincial Governance"**  
> *Official Provincial Government Information System*

- **ID:** `e-bulletin`
- **Year:** 2026
- **Category:** Web Platform / GovTech
- **Location:** Province of Davao del Sur, Philippines
- **Production URL:** [https://ebulletin.davaodelsur.gov.ph](https://ebulletin.davaodelsur.gov.ph)
- **Badge:** `EB`
- **Status:** Live in Production
- **Detailed Doc:** [`./e-bulletin.md`](./e-bulletin.md)

### Summary
Digitized public advisories and procurement notices, establishing a transparent, high-performance information gateway for the Province of Davao del Sur.

### Engineering Breakdown
- **Challenge:**  
  The provincial government historically relied on fragmented communication channels, physical notice boards, and delayed manual workflows for public notices and procurement disclosures. This fragmentation hindered public transparency, slowed constituent access to emergency advisories, and produced administrative overhead.
- **Approach:**  
  Architected a unified, high-availability digital bulletin portal using **Laravel** and **Vue 3**. Integrated **Filament** for structured administrative publication workflows, **Inertia.js** for seamless SPA reactivity without client/server duplication, and optimized **MySQL** relational indexing for high read-traffic. Configured **Docker** containerized services with **Bash** automation scripts and automated deployment pipelines on a hardened **Linux** server environment.
- **Outcome:**  
  Delivered a centralized, high-availability government portal that standardized all public information dissemination across Davao del Sur. Significantly reduced publication turnaround from days to seconds while providing zero-downtime reliability for civic stakeholders.

### Technology Stack
- **Backend & Admin:** Laravel (PHP), Filament Admin, Inertia.js, Blade
- **Frontend & Styling:** Vue 3, TypeScript, Tailwind CSS
- **Database & Infrastructure:** MySQL, Docker, Linux (Ubuntu/Debian), Bash scripting

---

## 3. Camote Utils

> **"TypeScript Engineering Primitives"**  
> *Open-Source Lightweight Data Manipulation & Serialization Utilities*

- **ID:** `camote-utils`
- **Year:** 2025
- **Category:** Open Source / NPM
- **Repository:** [github.com/HairyBlue](https://github.com/HairyBlue)
- **Package Ecosystem:** NPM / Node.js
- **Badge:** `CU`
- **Key Primitives:** `objectToQueryString`, `toHtmlEntities`
- **Detailed Doc:** [`./camote-utils.md`](./camote-utils.md)

### Summary
Engineered high-performance utility functions for string manipulation and complex data serialization in the open-source TypeScript ecosystem.

### Engineering Breakdown
- **Challenge:**  
  Developers repeatedly re-implement string escaping and query-string serialization with inconsistent edge-case validation, resulting in subtle XSS risks, payload corruption, or bloated dependency trees for trivial tasks.
- **Approach:**  
  Authored strict, zero-dependency, type-safe utility functions with 100% static typing coverage in TypeScript. Designed optimized primitives such as:
  - `objectToQueryString`: Handles nested object flattening, URL encoding, array parameter serialization, and null/undefined pruning.
  - `toHtmlEntities`: High-throughput character sanitizer converting reserved HTML characters to entity equivalents to thwart injection vulnerabilities.
- **Outcome:**  
  Contributed robust, reusable primitives to a fast-growing open-source TypeScript repository, demonstrating strict adherence to zero-dependency principles and type safety.

### Technology Stack
- **Language & Runtime:** TypeScript, JavaScript, Node.js
- **Tooling & Distribution:** NPM, Git, GitHub Actions, Vitest

---

## 4. Mobile AR In Human Anatomy

> **"Spatial Computing for Education"**  
> *Real-Time Computer Vision & Interactive 3D Anatomical Projections*

- **ID:** `mobile-ar-anatomy`
- **Year:** 2025
- **Category:** Augmented Reality / Mobile / Spatial Computing
- **Repository:** [github.com/HairyBlue](https://github.com/HairyBlue)
- **Badge:** `AR`
- **Key Feature:** Real-Time Body Dimension Mapping & 3D Organ Interaction
- **Detailed Doc:** [`./mobile-ar-anatomy.md`](./mobile-ar-anatomy.md)

### Summary
Bridged the gap between physical and digital spaces by architecting an adaptive augmented reality engine for interactive anatomical studies.

### Engineering Breakdown
- **Challenge:**  
  Traditional anatomy education is bounded by static two-dimensional textbook diagrams that fail to convey spatial orientation, depth relationships, and scale within the human body. Commercial AR solutions are frequently tethered to proprietary hardware or suffer prohibitive latency on standard mobile devices.
- **Approach:**  
  Engineered a decoupled, low-latency augmented reality architecture:
  - Coupled a **Python**-based computer vision pipeline (utilizing body landmark detection and spatial normalization) with a **Unity 3D (C#)** rendering client.
  - Implemented high-frequency **TCP sockets / WebSockets** to stream coordinate transforms and joint positional matrices in real time with sub-frame lag.
  - Created interactive controls allowing medical students to peel back anatomical layers (muscular, skeletal, cardiovascular) projected directly onto user coordinates.
- **Outcome:**  
  Demonstrated real-time body dimension mapping and interactive virtual organ projection on mobile hardware, validating accessible spatial computing for education without specialized headsets.

### Technology Stack
- **Spatial & Vision Core:** Python, OpenCV, MediaPipe, VENV
- **Client & Rendering:** C#, Unity 3D Engine, Mobile AR
- **Networking & Automation:** TCP / WebSockets, Bash Scripting, Git, GitHub

---

## 5. Activity Tracker

> **"Institutional Analytics Dashboard"**  
> *Data Resilience Pipelines & Automated Participatory Metrics*

- **ID:** `activity-tracker`
- **Year:** 2024
- **Category:** Web Application / Institutional Analytics
- **Repository:** [github.com/HairyBlue](https://github.com/HairyBlue)
- **Badge:** `AT`
- **Key Feature:** Automated Linux Cron Backups & Interactive Chart.js Visualizations
- **Detailed Doc:** [`./activity-tracker.md`](./activity-tracker.md)

### Summary
Streamlined institutional reporting by building a centralized analytics dashboard with automated data resilience pipelines.

### Engineering Breakdown
- **Challenge:**  
  Campus organizations and administrative offices at Cor Jesu College managed student activity participation through disparate paper logs and unversioned spreadsheets. The lack of centralized reporting led to lost historical participation data, untracked extracurricular accreditations, and audit discrepancies.
- **Approach:**  
  Architected a full-stack **Vue.js** and **Node.js/Express** tracking ecosystem backed by **MySQL**:
  - Implemented dynamic data visualizations using **Chart.js** to provide real-time attendance density curves and participation metrics.
  - Designed automated database disaster-recovery pipelines using **Linux cron jobs** and shell scripts that dump, gzip, and store timestamped database snapshots.
  - Enforced structured role-based access controls for student officers and institutional faculty.
- **Outcome:**  
  Delivered a resilient, data-rich platform that digitized institutional activity tracking across the student body, eradicating manual log reconciliation and securing institutional records.

### Technology Stack
- **Frontend:** Vue.js, TypeScript, Tailwind CSS, Chart.js
- **Backend:** Node.js, Express.js, REST API Architecture
- **Database & DevOps:** MySQL, Linux Crontab, Bash, Git

---

*Compiled from `/app/data/projectsData.ts` and `/app/components/ProjectsSection.vue` for the Hairyblue Broadsheet Documentation System.*
