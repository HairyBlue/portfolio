<template>
  <section id="hero" class="hero-section">
    <!-- Hero Title -->
    <div class="hero-title-box">
      <h1 class="hero-main-text">SOFTWARE</h1>
      <h1 class="hero-outline-text">ENGINEER</h1>
    </div>

    <p class="hero-description">
      Building practical, high-performance web applications and digital experiences. Focused on continuous learning, problem solving, and writing clean, efficient code.
    </p>

    <!-- Stats Grid -->
    <div class="hero-stats-grid">
      <div class="stat-card">
        <span class="stat-number">+2</span>
        <span class="stat-label font-mono">YEARS OF EXPERIENCE</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">+4</span>
        <span class="stat-label font-mono">PROJECTS BUILT</span>
      </div>
      <div class="stat-card">
        <span class="stat-number">+10</span>
        <span class="stat-label font-mono">TECHNOLOGIES USED</span>
      </div>
    </div>

    <!-- Highlight Banners Grid -->
    <div class="hero-banners-grid">
      <!-- Dark Espresso Banner -> Links to Experience -->
      <a href="#experience" class="banner-card espresso-banner">
        <div class="banner-icon-box">
          <IconLayers class="w-6 h-6 text-white" />
        </div>
        <h3 class="banner-text text-white">WORK EXPERIENCE & FULL STACK DEVELOPMENT</h3>
        <div class="banner-arrow">
          <IconArrowUpRight class="w-5 h-5 text-white" />
        </div>
      </a>

      <!-- Warm Latte Banner -> Links to Projects -->
      <a href="#projects" class="banner-card latte-banner">
        <div class="banner-icon-box">
          <IconCode2 class="w-6 h-6 text-dark" />
        </div>
        <h3 class="banner-text text-dark">FEATURED PROJECTS & TECH STACK</h3>
        <div class="banner-arrow">
          <IconArrowUpRight class="w-5 h-5 text-dark" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconArrowUpRight from '~/components/icons/IconArrowUpRight.vue'
import IconLayers from '~/components/icons/IconLayers.vue'
import IconCode2 from '~/components/icons/IconCode2.vue'
</script>

<style scoped>
.hero-section {
  margin-bottom: 4rem;
  width: 100%;
}

.hero-title-box {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.hero-main-text {
  font-size: clamp(2.35rem, 8vw, 5.25rem);
  font-weight: 900;
  color: var(--text-main);
  letter-spacing: -0.04em;
  line-height: 0.95;
  text-transform: uppercase;
}

.hero-outline-text {
  font-size: clamp(2.35rem, 8vw, 5.25rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1.5px #8c7a6b;
  letter-spacing: -0.04em;
  line-height: 0.95;
  text-transform: uppercase;
}

.hero-description {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 680px;
  margin-bottom: 2.25rem;
}

/* Stats Grid */
.hero-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-dim);
}

@media (max-width: 640px) {
  .hero-stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .stat-number {
    font-size: clamp(1.6rem, 5vw, 2.5rem);
  }

  .stat-label {
    font-size: 0.625rem;
  }
}

.stat-card {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: clamp(2.25rem, 3.5vw, 3.25rem);
  font-weight: 900;
  font-family: var(--font-heading);
  color: var(--text-main);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.725rem;
  font-weight: 700;
  color: var(--text-dim);
  letter-spacing: 0.04em;
}

/* Banner Grid */
.hero-banners-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

@media (max-width: 640px) {
  .hero-banners-grid {
    grid-template-columns: 1fr;
  }
}

.banner-card {
  border-radius: 1.25rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  position: relative;
  transition: all 0.25s ease;
  text-decoration: none;
}

.espresso-banner {
  background: var(--coffee-dark);
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(44, 36, 32, 0.15);
}

.espresso-banner:hover {
  background: var(--coffee-roast);
}

.latte-banner {
  background: var(--coffee-latte);
  color: var(--coffee-dark);
  border: 1px solid var(--border-dim);
  box-shadow: 0 10px 25px rgba(44, 36, 32, 0.05);
}

.latte-banner:hover {
  background: var(--bg-surface-subtle);
}

.banner-icon-box {
  margin-bottom: 1.25rem;
}

.banner-text {
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  padding-right: 2rem;
}

.text-white {
  color: #ffffff !important;
}

.text-dark {
  color: var(--coffee-dark) !important;
}

.banner-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.latte-banner .banner-arrow {
  background: rgba(44, 36, 32, 0.1);
}
</style>
