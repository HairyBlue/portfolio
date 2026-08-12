<template>
  <section id="education" class="education-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">ACADEMIC</h2>
      <h2 class="section-subtitle">EDUCATION</h2>
    </div>

    <div class="portfolio-card edu-card">
      <div class="edu-top">
        <div>
          <span class="edu-degree font-mono">{{ education.degree }}</span>
          <h3 class="edu-institution">{{ education.institution }}</h3>
          <p class="edu-location">
            <IconMapPin class="w-3.5 h-3.5 inline text-coffee" />
            <span>{{ education.location }}</span>
          </p>
        </div>
        <span class="period-badge font-mono">{{ education.period }}</span>
      </div>

      <div class="courses-wrapper">
        <span class="courses-label font-mono">KEY COURSEWORK:</span>
        <div class="course-tags">
          <span v-for="course in education.courses" :key="course" class="tag-pill">
            {{ course }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconMapPin from '~/components/icons/IconMapPin.vue'
import { education } from '~/data/portfolioData'
</script>

<style scoped>
.education-section {
  margin-bottom: 4rem;
}

.edu-card {
  padding: 1.75rem;
}

.edu-top {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-dim);
}

.edu-degree {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--coffee-dark);
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  padding: 0.2rem 0.6rem;
  border-radius: 0.35rem;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.edu-institution {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.edu-location {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.text-coffee {
  color: var(--coffee-roast);
}

.period-badge {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-main);
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
}

.courses-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.courses-label {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tag-pill {
  font-size: 0.75rem;
  padding: 0.2rem 0.55rem;
  border-radius: 0.3rem;
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  color: var(--text-muted);
}
</style>
