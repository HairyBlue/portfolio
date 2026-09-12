<template>
  <section id="experience" class="experience-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-heading">Work Experience</h2>
    </div>
    <hr class="editorial-rule">

    <div class="experience-list">
      <article 
        v-for="exp in experiences" 
        :key="exp.id" 
        class="exp-entry"
      >
        <header class="exp-header">
          <div class="exp-meta dateline">
            <span>{{ exp.period }}</span>
            <span class="separator">|</span>
            <span>{{ exp.location }}</span>
            <span class="separator">|</span>
            <span>{{ exp.type }}</span>
          </div>
          <h3 class="company-name font-heading">{{ exp.company }}</h3>
          <p class="role-name font-body"><em>{{ exp.role }}</em></p>
        </header>

        <div class="exp-body font-body">
          <ul class="highlights-list">
            <li v-for="(highlight, idx) in exp.highlights" :key="idx">
              {{ highlight }}
            </li>
          </ul>
        </div>

        <div class="exp-tech">
          <em>{{ exp.technologies.join(', ') }}</em>
        </div>
        
        <hr class="editorial-rule-thin">
      </article>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/experience" class="view-more-link font-heading">
        View Complete Ledger &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})
</script>

<style scoped>
.experience-section {
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

.experience-list {
  display: flex;
  flex-direction: column;
}

.exp-entry {
  display: flex;
  flex-direction: column;
}

.exp-header {
  margin-bottom: 1rem;
}

.exp-meta {
  margin-bottom: 0.5rem;
  color: var(--text-dim);
}

.separator {
  margin: 0 0.5rem;
  color: var(--border-dim);
}

.company-name {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.role-name {
  font-size: 1.15rem;
  color: var(--text-muted);
}

.exp-body {
  margin-bottom: 1rem;
}

.highlights-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlights-list li {
  font-size: 1.05rem;
  color: var(--text-main);
  line-height: 1.6;
  position: relative;
  padding-left: 1.25rem;
}

.highlights-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--accent-ink);
}

.exp-tech {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.editorial-rule-thin {
  border: none;
  border-top: 1px solid var(--border-dim);
  margin: 2rem 0;
}

.section-view-more {
  display: flex;
  justify-content: flex-end;
}

.view-more-link {
  font-size: 1.25rem;
  color: var(--accent-ink);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s ease;
}

.view-more-link:hover {
  color: var(--text-main);
  text-decoration: underline;
}
</style>
