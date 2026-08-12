<template>
  <header class="header-container">
    <div class="header-inner portfolio-container">
      <!-- Left: Logo & Brand -->
      <NuxtLink to="/" class="brand-logo font-mono">
        <span class="logo-mark">HB</span>
        <span class="logo-name">{{ personalDetails.handle }}</span>
      </NuxtLink>

      <!-- Floating Pill Nav Bar -->
      <nav class="floating-nav-pill font-mono">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.id" 
          :to="item.href"
          :class="['nav-pill-item', { active: route.path === item.href }]"
        >
          <component :is="item.icon" class="w-4 h-4 nav-icon" />
          <span class="nav-label">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Right: Social Links (GitHub & LinkedIn) -->
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
import IconHome from '~/components/icons/IconHome.vue'
import IconFolder from '~/components/icons/IconFolder.vue'
import IconBriefcase from '~/components/icons/IconBriefcase.vue'
import IconWrench from '~/components/icons/IconWrench.vue'
import IconBookOpen from '~/components/icons/IconBookOpen.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import { personalDetails } from '~/data/portfolioData'

const route = useRoute()

const navItems = [
  { id: 'home', label: 'Home', href: '/', icon: IconHome },
  { id: 'projects', label: 'Projects', href: '/projects', icon: IconFolder },
  { id: 'experience', label: 'Work', href: '/experience', icon: IconBriefcase },
  { id: 'skills', label: 'Tech', href: '/skills', icon: IconWrench },
  { id: 'story', label: 'Story', href: '/story', icon: IconBookOpen }
]
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.25rem 0;
  background: rgba(244, 239, 230, 0.85);
  backdrop-filter: blur(12px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-main);
  font-weight: 800;
}

.logo-mark {
  width: 34px;
  height: 34px;
  border-radius: 0.5rem;
  background: var(--coffee-dark);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 900;
}

.logo-name {
  font-size: 0.95rem;
  color: var(--text-main);
  font-weight: 700;
}

/* Floating Nav Pill */
.floating-nav-pill {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--coffee-dark);
  padding: 0.35rem 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 25px rgba(44, 36, 32, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-pill-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.nav-pill-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-pill-item.active {
  background: var(--coffee-latte);
  color: var(--coffee-dark);
}

.header-socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 1px solid var(--border-dim);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-icon-btn:hover {
  border-color: var(--text-main);
  background: var(--text-main);
  color: #ffffff;
}

@media (max-width: 768px) {
  .nav-label {
    display: none;
  }
}

@media (max-width: 640px) {
  .header-container {
    padding: 0.75rem 0;
  }

  .logo-name {
    display: none;
  }

  .header-socials {
    display: none;
  }

  .header-inner {
    justify-content: space-between;
  }

  .floating-nav-pill {
    padding: 0.25rem 0.35rem;
    gap: 0.15rem;
  }

  .nav-pill-item {
    padding: 0.4rem 0.6rem;
  }
}
</style>
