<template>
  <section id="experience" class="experience-section">
    <!-- Header -->
    <div class="section-header-row">
      <div class="section-header">
        <h2 class="section-title">WORK</h2>
        <h2 class="section-subtitle">EXPERIENCE</h2>
      </div>

      <NuxtLink v-if="isHome" to="/experience" class="header-arrow-link" title="View Full Work Experience">
        <IconArrowUpRight class="w-6 h-6" />
      </NuxtLink>
    </div>

    <div class="experience-list">
      <div 
        v-for="exp in experiences" 
        :key="exp.id" 
        class="portfolio-card exp-card"
      >
        <div class="exp-header">
          <div>
            <span class="company-badge font-mono">{{ exp.company }}</span>
            <h3 class="role-name">{{ exp.role }}</h3>
            <p class="location-text">
              <IconMapPin class="w-3.5 h-3.5 inline text-coffee" />
              <span>{{ exp.location }} &bull; {{ exp.type }}</span>
            </p>
          </div>
          <span class="period-badge font-mono">{{ exp.period }}</span>
        </div>

        <ul class="highlights-list">
          <li v-for="(highlight, idx) in exp.highlights" :key="idx">
            <span class="bullet-dot">&bull;</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>

        <div class="tech-row">
          <span class="tech-label font-mono">STACK:</span>
          <div class="tech-tags">
            <span v-for="tech in exp.technologies" :key="tech" class="tag-pill">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more mt-6">
      <NuxtLink to="/experience" class="view-more-btn font-mono">
        <span>View Full Work Experience</span>
        <IconArrowUpRight class="w-4 h-4" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconMapPin from '~/components/icons/IconMapPin.vue'
import IconArrowUpRight from '~/components/icons/IconArrowUpRight.vue'
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

.section-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.header-arrow-link {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border-dim);
  background: var(--bg-surface);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.header-arrow-link:hover {
  background: var(--coffee-dark);
  color: #ffffff;
  border-color: var(--coffee-dark);
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.exp-card {
  padding: 1.75rem;
}

.exp-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-dim);
}

.company-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--coffee-dark);
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  padding: 0.2rem 0.6rem;
  border-radius: 0.35rem;
  display: inline-block;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}

.role-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.location-text {
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
  white-space: nowrap;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.highlights-list li {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.bullet-dot {
  color: var(--coffee-roast);
  font-weight: bold;
}

.tech-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-dim);
}

.tech-label {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.tech-tags {
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

/* View More Button */
.section-view-more {
  display: flex;
  justify-content: flex-end;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  background: var(--bg-surface);
  border: 1px solid var(--border-dim);
  color: var(--text-main);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-more-btn:hover {
  background: var(--coffee-dark);
  color: #ffffff;
  border-color: var(--coffee-dark);
}

.mt-6 { margin-top: 1.5rem; }
</style>
