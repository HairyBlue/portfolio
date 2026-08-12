<template>
  <section id="recommendation" class="testimonial-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">PEER</h2>
      <h2 class="section-subtitle">RECOMMENDATIONS</h2>
    </div>

    <div class="portfolio-card testimonial-card">
      <div class="card-quote-header">
        <IconQuote class="w-8 h-8 text-coffee" />
        <span class="verified-pill font-mono">
          <IconCheckCircle class="w-3.5 h-3.5" />
          <span>LinkedIn Recommendation</span>
        </span>
      </div>

      <blockquote class="testimonial-quote">
        {{ testimonials[0].quote }}
      </blockquote>

      <div class="author-row">
        <div>
          <h4 class="author-name">{{ testimonials[0].name }}</h4>
          <p class="author-title">{{ testimonials[0].title }}</p>
          <p class="relationship-tag font-mono">{{ testimonials[0].relationship }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconQuote from '~/components/icons/IconQuote.vue'
import IconCheckCircle from '~/components/icons/IconCheckCircle.vue'
import { testimonials } from '~/data/portfolioData'
</script>

<style scoped>
.testimonial-section {
  margin-bottom: 4rem;
}

.testimonial-card {
  padding: 2.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-dim);
}

.card-quote-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.text-coffee {
  color: var(--coffee-roast);
}

.verified-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--coffee-dark);
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  font-weight: 600;
}

.testimonial-quote {
  font-size: 1.05rem;
  color: var(--text-main);
  line-height: 1.75;
  margin-bottom: 2rem;
  white-space: pre-line;
  font-style: italic;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-dim);
}

.avatar-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--coffee-dark);
  color: #ffffff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.author-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-main);
}

.author-title {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.relationship-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 0.15rem;
}
</style>
