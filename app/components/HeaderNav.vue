<template>
  <header class="header-container">
    <div class="header-inner portfolio-container">
      <!-- Left: Logo & Brand -->
      <NuxtLink to="/" class="brand-logo font-heading">
        <span class="logo-mark">HB</span>
        <span class="logo-name">{{ personalDetails.handle }}</span>
      </NuxtLink>

      <!-- Classic Flat Nav Bar -->
      <nav class="classic-nav font-mono">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.id" 
          :to="item.href"
          :class="['nav-item', { active: route.path === item.href }]"
        >
          <span class="nav-label">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Right: Social Links -->
      <div class="header-socials">
        <a 
          :href="personalDetails.socials.github" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon-btn" 
          title="GitHub Profile"
        >
          <IconGithub class="w-4 h-4" />
        </a>
        <a 
          :href="personalDetails.socials.linkedin" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-icon-btn" 
          title="LinkedIn Profile"
        >
          <IconLinkedin class="w-4 h-4" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import { personalDetails } from '~/data/portfolioData'

const route = useRoute()

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'experience', label: 'Work', href: '/experience' },
  { id: 'skills', label: 'Tech', href: '/skills' },
  { id: 'story', label: 'Story', href: '/story' }
]
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-page);
  border-bottom: 1px solid var(--border-dim);
  border-top: 1px solid var(--border-dim);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-main);
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 900;
}

.logo-name {
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-mono);
}

.classic-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
  position: relative;
}

.nav-item:hover {
  color: var(--text-main);
}

.nav-item.active {
  color: var(--accent-ink);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--accent-ink);
}

.header-socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-icon-btn {
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s ease;
}

.social-icon-btn:hover {
  color: var(--text-main);
}

@media (max-width: 768px) {
  .logo-name {
    display: none;
  }
  
  .classic-nav {
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .header-socials {
    display: none;
  }
  
  .nav-item {
    font-size: 0.7rem;
    letter-spacing: 0.05em;
  }
}
</style>
