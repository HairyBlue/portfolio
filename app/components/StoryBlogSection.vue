<template>
  <section id="story" class="story-section">
    <!-- Header -->
    <div class="section-header-row">
      <div class="section-header">
        <h2 class="section-title">ORIGIN</h2>
        <h2 class="section-subtitle">STORY & THOUGHTS</h2>
      </div>

      <NuxtLink v-if="isHome" to="/story" class="header-arrow-link" title="Read Full Origin Story">
        <IconArrowUpRight class="w-6 h-6" />
      </NuxtLink>
    </div>

    <div class="portfolio-card story-card">
      <div class="story-top">
        <div>
          <span class="read-pill font-mono">{{ miniBlog.readTime }} &bull; {{ miniBlog.date }}</span>
          <h3 class="story-title">{{ miniBlog.title }}</h3>
          <p class="story-subtitle">{{ miniBlog.subtitle }}</p>
        </div>
        <NuxtLink to="/story" class="story-arrow-box" title="Read Full Story">
          <IconArrowUpRight class="w-5 h-5" />
        </NuxtLink>
      </div>

      <div class="story-content">
        <p v-for="(para, idx) in miniBlog.paragraphs" :key="idx" class="story-paragraph">
          {{ para }}
        </p>
      </div>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more mt-6">
      <NuxtLink to="/story" class="view-more-btn font-mono">
        <span>Read Full Origin Story</span>
        <IconArrowUpRight class="w-4 h-4" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconArrowUpRight from '~/components/icons/IconArrowUpRight.vue'
import { miniBlog } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})
</script>

<style scoped>
.story-section {
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

.story-card {
  padding: 2.25rem;
}

.story-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-dim);
}

.read-pill {
  font-size: 0.75rem;
  color: var(--coffee-dark);
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  padding: 0.2rem 0.6rem;
  border-radius: 0.35rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.story-title {
  font-size: 1.85rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.story-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  font-weight: 500;
}

.story-arrow-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.2s ease;
}

.story-arrow-box:hover {
  background: var(--coffee-dark);
  color: #ffffff;
  border-color: var(--coffee-dark);
}

.story-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.story-paragraph {
  font-size: 1.025rem;
  color: var(--text-muted);
  line-height: 1.75;
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
