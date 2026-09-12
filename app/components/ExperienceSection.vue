<template>
  <section id="experience" class="experience-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-headline">THE CAREER CHRONICLE & DISPATCH ARCHIVES</h2>
    </div>
    <hr class="editorial-rule-double">

    <div class="experience-list">
      <article 
        v-for="exp in experiences" 
        :key="exp.id" 
        class="exp-entry"
      >
        <div class="exp-left-col">
          <div class="exp-meta dateline">
            <span>{{ exp.period }}</span><br/>
            <span>{{ exp.location }}</span><br/>
            <span>{{ exp.type }}</span>
          </div>
          <h3 class="company-name font-headline">{{ exp.company }}</h3>
          <p class="role-name font-body"><em>{{ exp.role }}</em></p>
        </div>

        <div class="exp-right-col">
          <div class="exp-body font-body">
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in exp.highlights" :key="idx">
                {{ highlight }}
              </li>
            </ul>
          </div>
          <div class="exp-tech">
            <em>Filed under: {{ exp.technologies.join(', ') }}</em>
          </div>
        </div>
      </article>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/experience" class="view-more-link font-headline">
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

.editorial-rule-double {
  border: none;
  border-top: 3px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  height: 6px;
  margin: 1rem 0 2rem;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.exp-entry {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-dim);
}

@media (max-width: 768px) {
  .exp-entry {
    grid-template-columns: 1fr;
  }
  .exp-right-col {
    border-left: none !important;
    padding-left: 0 !important;
  }
}

.exp-left-col {
  padding-right: 1rem;
}

.exp-right-col {
  border-left: 1px solid var(--border-strong);
  padding-left: 1.5rem;
}

.exp-meta {
  margin-bottom: 1rem;
  color: var(--text-dim);
  line-height: 1.4;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.role-name {
  font-size: 1.15rem;
  color: var(--text-muted);
}

.exp-body {
  margin-bottom: 1.5rem;
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
}

.section-view-more {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.view-more-link {
  font-size: 1.25rem;
  color: var(--accent-ink);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s ease;
  text-transform: uppercase;
}

.view-more-link:hover {
  color: var(--text-main);
  text-decoration: underline;
}
</style>
