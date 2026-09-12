<template>
  <header class="masthead-container">
    <div class="masthead-inner portfolio-container">
      
      <!-- Top Section: Ears and Title -->
      <div class="masthead-top">
        <!-- Left Ear -->
        <div class="masthead-ear left-ear">
          <div class="ear-text">EST. 2026</div>
          <div class="ear-text">VOL. I · NO. 1</div>
        </div>

        <!-- Center Title -->
        <div class="masthead-center">
          <h1 class="masthead-title">The Hairyblue Chronicle</h1>
          <p class="masthead-motto">“Code is the language of freedom in the digital realm”</p>
        </div>

        <!-- Right Ear -->
        <div class="masthead-ear right-ear">
          <div class="ear-text">SPECIAL EDITION</div>
          <div class="ear-text">PRICE: 1 COFFEE</div>
        </div>
      </div>

      <!-- Dateline Bar -->
      <div class="masthead-dateline">
        MINDANAO, PHILIPPINES · SPECIAL DISPATCH · FREE CIRCULATION · GLOBAL EDITION
      </div>

      <!-- Index Nav -->
      <nav class="masthead-nav font-mono">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.id" 
          :to="item.href"
          :class="['nav-item', { active: route.path === item.href }]"
        >
          [ {{ item.label }} ]
        </NuxtLink>
        <a :href="personalDetails.socials.github" target="_blank" rel="noopener noreferrer" class="nav-item">
          [ TELEGRAPH / GITHUB ]
        </a>
        <a :href="personalDetails.socials.linkedin" target="_blank" rel="noopener noreferrer" class="nav-item">
          [ WIRE / LINKEDIN ]
        </a>
      </nav>

    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { personalDetails } from '~/data/portfolioData'

const route = useRoute()

const navItems = [
  { id: 'home', label: 'FRONT PAGE', href: '/' },
  { id: 'projects', label: 'FEATURED CASE STUDIES', href: '/projects' },
  { id: 'experience', label: 'CHRONICLE', href: '/experience' },
  { id: 'skills', label: 'CLASSIFIEDS', href: '/skills' },
  { id: 'story', label: 'ORIGIN STORY', href: '/story' }
]
</script>

<style scoped>
.masthead-container {
  width: 100%;
  background: var(--bg-page);
  padding: 1.5rem 0 1rem;
  z-index: 100;
}

.masthead-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.masthead-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.masthead-ear {
  border: 1px solid var(--border-strong);
  padding: 0.5rem;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  min-width: 120px;
}

.ear-text {
  line-height: 1.4;
  font-weight: 700;
}

.masthead-center {
  text-align: center;
  flex: 1;
  padding: 0 1rem;
}

.masthead-title {
  font-family: var(--font-masthead);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: normal;
  line-height: 1;
  margin-bottom: 0.25rem;
  color: var(--text-main);
}

.masthead-motto {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1rem;
  color: var(--text-muted);
}

.masthead-dateline {
  width: 100%;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-top: 3px double var(--border-strong);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.masthead-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px double var(--border-strong);
  width: 100%;
}

.nav-item {
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
}

.nav-item:hover, .nav-item.active {
  color: var(--accent-ink);
}

@media (max-width: 768px) {
  .masthead-ear {
    display: none;
  }
  .masthead-title {
    font-size: 3rem;
  }
}
</style>
