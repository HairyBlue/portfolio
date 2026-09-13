# Case Study: Activity Tracker
**Broadsheet Section: `[ FEATURED CASE STUDIES ]` · Institutional Analytics**  
*Title:* Institutional Analytics Dashboard  
*Domain:* Web Applications / Analytics / Data Resilience  
*Client / Context:* Cor Jesu College, Inc.  
*Author:* Nicki Marty Pecision ([@HairyBlue](https://github.com/HairyBlue))  

---

## Executive Summary
**Activity Tracker** is a full-stack institutional analytics dashboard engineered to digitize, record, and visualize student organization events, co-curricular participation, and accreditation milestones. Featuring an automated data resilience pipeline powered by Linux cron jobs, the platform solved critical data-loss vulnerabilities and modernized campus reporting.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ACTIVITY TRACKER ARCHITECTURE                        │
│                                                                             │
│   [ Student & Faculty Users ] ──> [ Vue.js Single Page Application ]        │
│                                              │                              │
│                                              ▼                              │
│                [ Interactive Visual Analytics (Chart.js) ]                  │
│                                              │                              │
│                                              ▼                              │
│                [ Node.js & Express RESTful API Services ]                   │
│                                              │                              │
│                                              ▼                              │
│                [ Relational Persistence Layer (MySQL) ]                     │
│                                              │                              │
│                                              ▼                              │
│     [ Automated Linux Crontab: Gzip Archival & Snapshot Replication ]       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## The Challenge
Prior to the implementation of the Activity Tracker:
1. **Manual Logging & Lost Records:** Student clubs and academic departments tracked attendance on physical clipboards or disparate Excel files, leading to frequent data corruption, misplaced sign-in sheets, and lost accreditation hours.
2. **Lack of Macro Visibility:** College deans and student affairs administrators had no centralized view into student engagement metrics or longitudinal participation trends across academic departments.
3. **Absence of Disaster Recovery:** Existing campus tools had no automated backup infrastructure, leaving data vulnerable to unexpected server failure or human error.

---

## The Engineering Solution

### 1. Unified Web Application (Vue.js + Node.js)
- Architected an intuitive client portal using **Vue.js** and **Tailwind CSS**, providing clean data-entry forms for student officers and responsive reporting dashboards for institutional faculty.
- Engineered a robust **Node.js/Express** backend with standardized RESTful API contracts, token-based authentication, and parameterized query validation to defend against injection attacks.

### 2. Real-Time Data Visualization with Chart.js
- Integrated dynamic Chart.js dashboards rendering real-time metrics:
  - Departmental engagement density curves.
  - Event attendance distributions by academic year.
  - Longitudinal participation reports for accreditation bodies.

### 3. Automated Data Resilience via Linux Cron
- Designed a zero-intervention backup engine directly on the host Linux OS:
  - Automated bash scripts running via **crontab** to generate nightly timestamped MySQL dumps (`mysqldump`).
  - Gzip compression applied to archives to conserve storage.
  - Retention rotation policy to purge snapshots older than 30 days while preserving weekly checkpoints.

---

## Key Achievements & Impact
- **Eradicated Manual Paper Logs:** Successfully digitized participation workflows across student organizations.
- **Guaranteed Data Durability:** Ensured zero data loss through automated snapshot replication and daily offsite-ready archival.
- **Streamlined Accreditation:** Provided faculty with immediate, auditable attendance records for student certification and accreditation reviews.

---

## Technical Specifications
- **Author:** Nicki Marty Pecision
- **Repository:** [https://github.com/HairyBlue](https://github.com/HairyBlue)
- **Technologies:** TypeScript, JavaScript, Node.js, Vue.js, MySQL, Tailwind CSS, Bash, Chart.js, Git
