<template>
  <section id="education" class="education-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-heading">Academic Education</h2>
    </div>
    <hr class="editorial-rule">

    <article class="edu-entry">
      <header class="edu-header">
        <div class="edu-meta dateline">
          <span>{{ education.period }}</span>
          <span class="separator">|</span>
          <span>{{ education.location }}</span>
        </div>
        <h3 class="edu-institution font-heading">{{ education.institution }}</h3>
        <p class="edu-degree font-body">{{ education.degree }}</p>
      </header>

      <div class="courses-wrapper font-body">
        <span class="font-mono dateline">KEY COURSEWORK:</span><br/>
        <p class="courses-list">{{ education.courses.join(', ') }}</p>
      </div>
      
      <hr class="editorial-rule-thin">
    </article>
  </section>
</template>

<script setup lang="ts">
import { education } from '~/data/portfolioData'
</script>

<style scoped>
.education-section {
  margin-bottom: 4rem;
}

.section-header {
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-main);
  text-transform: none;
  letter-spacing: normal;
}

.edu-entry {
  display: flex;
  flex-direction: column;
}

.edu-header {
  margin-bottom: 1.5rem;
}

.edu-meta {
  color: var(--text-dim);
  margin-bottom: 0.5rem;
}

.separator {
  margin: 0 0.5rem;
  color: var(--border-dim);
}

.edu-institution {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.edu-degree {
  font-size: 1.15rem;
  color: var(--text-main);
}

.courses-wrapper {
  margin-bottom: 1rem;
}

.courses-list {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.editorial-rule-thin {
  border: none;
  border-top: 1px solid var(--border-dim);
  margin: 2rem 0;
}
</style>
