<template>
  <section id="story" class="story-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-heading">{{ isHome ? 'Origin' : 'Story & Thoughts' }}</h2>
    </div>
    <hr class="editorial-rule">

    <article class="feature-article">
      <header class="article-header">
        <h3 class="article-title font-heading">{{ miniBlog.title }}</h3>
        <p class="article-deck font-body"><em>{{ miniBlog.subtitle }}</em></p>
        <div class="article-meta dateline">
          <span>{{ miniBlog.date }}</span>
          <span class="separator">|</span>
          <span>{{ miniBlog.readTime }} read</span>
        </div>
      </header>

      <div class="article-body">
        <!-- First paragraph with drop cap -->
        <p v-if="miniBlog.paragraphs.length > 0" class="drop-cap font-body">
          {{ miniBlog.paragraphs[0] }}
        </p>

        <!-- Pull quote between p1 and p2 if there are multiple paragraphs -->
        <blockquote v-if="miniBlog.paragraphs.length > 1" class="pull-quote font-heading">
          "Engineering is not just about writing code; it's about clarity, precision, and building things that last."
        </blockquote>

        <!-- Remaining paragraphs in multi-column layout -->
        <div v-if="miniBlog.paragraphs.length > 1" class="editorial-columns font-body">
          <p v-for="(para, idx) in miniBlog.paragraphs.slice(1)" :key="idx" class="article-paragraph">
            {{ para }}
          </p>
        </div>
      </div>
    </article>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/story" class="view-more-link font-heading">
        Read Full Feature &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
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

.section-header {
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text-main);
  text-transform: none;
  letter-spacing: normal;
}

.feature-article {
  padding-bottom: 2rem;
}

.article-header {
  margin-bottom: 2rem;
}

.article-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.article-deck {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.article-meta {
  color: var(--text-dim);
  border-top: 1px solid var(--border-dim);
  border-bottom: 1px solid var(--border-dim);
  padding: 0.5rem 0;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
}

.separator {
  color: var(--border-dim);
}

.article-body p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.drop-cap {
  margin-bottom: 2rem;
}

/* Re-declaring utility classes here in case main.css is not fully sufficient for scoping */
.pull-quote {
  font-size: 1.75rem;
  line-height: 1.4;
  margin: 2.5rem 0;
  padding-left: 1.5rem;
  border-left: 4px solid var(--accent-ink);
  color: var(--text-main);
  font-style: italic;
  max-width: 90%;
}

.article-paragraph {
  margin-bottom: 1.5rem;
  break-inside: avoid;
}

.section-view-more {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  border-top: 1px dashed var(--border-dim);
  padding-top: 1rem;
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
