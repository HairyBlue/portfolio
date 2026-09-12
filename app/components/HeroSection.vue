<template>
  <section id="hero" class="hero-section">
    <!-- Hero Title -->
    <div class="hero-title-box">
      <h1 class="hero-headline">Engineering Clarity from Complexity.</h1>
    </div>

    <!-- Stats / Metadata Bar -->
    <div class="hero-metadata font-mono dateline">
      <span>+2 Years Experience</span>
      <span class="separator">|</span>
      <span>+4 Projects Built</span>
      <span class="separator">|</span>
      <span>+10 Technologies Used</span>
    </div>

    <p class="hero-deck">
      Building practical, high-performance web applications and digital experiences. Focused on continuous learning, problem solving, and writing clean, efficient code.
    </p>

    <!-- CTAs -->
    <div class="hero-ctas">
      <NuxtLink to="/projects" class="btn-primary">
        Read the Case Studies
      </NuxtLink>
      <a :href="`mailto:${personalDetails.email}`" class="btn-secondary cta-commission">
        Commission Work
      </a>
    </div>

    <hr class="editorial-rule">
  </section>
</template>

<script setup lang="ts">
import { personalDetails } from '~/data/portfolioData'
</script>

<style scoped>
.hero-section {
  width: 100%;
  margin-bottom: 2rem;
}

.hero-title-box {
  margin-bottom: 1rem;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  color: var(--text-main);
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.hero-metadata {
  margin-bottom: 2rem;
  color: var(--text-dim);
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.separator {
  color: var(--border-dim);
}

.hero-deck {
  font-family: var(--font-body);
  font-size: clamp(1.15rem, 3vw, 1.35rem);
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 800px;
  margin-bottom: 2.5rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-commission {
  color: var(--accent-ink);
  border-color: var(--accent-ink);
}

.cta-commission:hover {
  background: var(--accent-ink);
  color: #fff;
  border-color: var(--accent-ink);
}
</style>
