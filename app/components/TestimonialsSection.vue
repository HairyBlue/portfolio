<template>
  <section id="recommendation" class="testimonial-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-heading">Letter to the Editor</h2>
    </div>
    <hr class="editorial-rule">

    <div class="oped-card">
      <span class="hanging-quote font-heading">&ldquo;</span>
      
      <blockquote class="oped-quote font-body">
        {{ testimonials[0].quote }}
      </blockquote>

      <div class="oped-author">
        <h4 class="author-name font-heading">{{ testimonials[0].name }}</h4>
        <p class="author-title font-mono dateline">{{ testimonials[0].title }} &bull; {{ testimonials[0].relationship }}</p>
        
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="verified-link font-mono dateline">
          Verified on LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/portfolioData'
</script>

<style scoped>
.testimonial-section {
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

.oped-card {
  position: relative;
  padding-left: 2.5rem;
  border-left: 4px solid var(--accent-ink);
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.hanging-quote {
  position: absolute;
  top: -2rem;
  left: -1rem;
  font-size: 6rem;
  color: var(--border-dim);
  line-height: 1;
  z-index: -1;
}

.oped-quote {
  font-size: 1.35rem;
  line-height: 1.6;
  color: var(--text-main);
  font-style: italic;
  white-space: pre-line;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.oped-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
}

.author-title {
  color: var(--text-muted);
}

.verified-link {
  margin-top: 0.5rem;
  color: var(--accent-ink);
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
}

.verified-link:hover {
  text-decoration: underline;
}
</style>
