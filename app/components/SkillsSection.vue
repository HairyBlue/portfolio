<template>
  <section id="skills" class="skills-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-headline">THE TECHNICAL CLASSIFIEDS & INDEX</h2>
    </div>
    <hr class="editorial-rule-double">

    <!-- Home Page View (Featured Skills grouped by category) -->
    <div v-if="isHome" class="skills-classified-home editorial-columns">
      <div 
        v-for="cat in skillCategories" 
        :key="cat.category" 
        class="classified-group"
      >
        <h3 class="classified-cat-title font-headline">{{ cat.category }}</h3>
        <p class="classified-skills font-body">
          {{ cat.skills.filter(s => s.featured).map(s => s.name).join(', ') }}.
        </p>
      </div>
    </div>

    <!-- Dedicated Page View (All Skills grouped by category in multi-column layout) -->
    <div v-else class="skills-classified-full">
      <div 
        v-for="cat in skillCategories" 
        :key="cat.category" 
        class="classified-full-group"
      >
        <h3 class="classified-full-title font-heading">{{ cat.category }}</h3>
        <div class="classified-list editorial-columns font-body">
          <div v-for="skill in cat.skills" :key="skill.name" class="classified-item">
            {{ skill.name }}
          </div>
        </div>
        <hr class="editorial-rule-thin">
      </div>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/skills" class="view-more-link font-heading">
        View Full Technical Index &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { skillCategories } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})
</script>

<style scoped>
.skills-section {
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

/* Home Page View */
.skills-classified-home {
  margin-bottom: 2rem;
}

.classified-group {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-strong);
  padding: 1rem;
  background: var(--bg-surface);
}

.classified-cat-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  text-transform: uppercase;
  border-bottom: 2px solid var(--border-strong);
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
}

.classified-skills {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Dedicated Page View */
.skills-classified-full {
  display: flex;
  flex-direction: column;
}

.classified-full-group {
  margin-bottom: 2rem;
}

.classified-full-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.classified-list {
  column-count: 2;
  column-gap: 2rem;
}

@media (min-width: 768px) {
  .classified-list {
    column-count: 3;
  }
}

.classified-item {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  break-inside: avoid;
}

.editorial-rule-thin {
  border: none;
  border-top: 1px dashed var(--border-dim);
  margin-top: 2rem;
}

/* View More Button */
.section-view-more {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
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
