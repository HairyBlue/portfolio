<template>
  <section class="broadsheet-hero portfolio-container">
    <!-- Ticker / Banner Bar -->
    <div class="banner-bar font-mono">
      <span>★ HIGH-PERFORMANCE INFRASTRUCTURE</span>
      <span class="banner-star">★</span>
      <span>ZERO-DOWNTIME RELEASES</span>
      <span class="banner-star">★</span>
      <span>FULL-STACK CRAFT ★</span>
    </div>

    <!-- Massive Headline -->
    <h1 class="broadsheet-headline">ENGINEERING CLARITY FROM COMPLEXITY.</h1>

    <!-- Sub-deck -->
    <p class="broadsheet-subdeck">
      <em>Architecting robust digital infrastructure and practical software solutions for clients, enterprises, and independent ventures.</em>
    </p>

    <!-- Front-Page Call to Action -->
    <div class="hero-actions font-mono">
      <NuxtLink to="/projects" class="action-badge">[ READ CASE STUDIES ↓ ]</NuxtLink>
      <NuxtLink to="/story" class="action-badge">[ COMMISSION WORK / INQUIRE ]</NuxtLink>
    </div>

    <!-- Thick rule to separate from fold -->
    <hr class="editorial-rule-thick" />
  </section>
</template>

<style scoped>
.broadsheet-hero {
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}

.banner-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 1px solid var(--border-strong);
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.banner-star {
  color: var(--accent-ink);
}

.broadsheet-headline {
  font-family: var(--font-headline);
  font-size: clamp(2rem, 6vw, 4.2rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.broadsheet-subdeck {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.4;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.action-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border: 2px solid var(--border-strong);
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  background-color: var(--bg-page);
}

.action-badge:hover {
  background-color: var(--text-main);
  color: var(--bg-page);
}

.editorial-rule-thick {
  border: none;
  border-top: 4px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  height: 8px;
  margin: 0;
}
</style>
