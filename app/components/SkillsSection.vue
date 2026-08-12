<template>
  <section id="skills" class="skills-section">
    <!-- Header Row -->
    <div class="section-header-row">
      <div class="section-header">
        <h2 class="section-title">{{ isHome ? 'TECH' : 'FULL' }}</h2>
        <h2 class="section-subtitle">STACK & TOOLS</h2>
      </div>

      <NuxtLink v-if="isHome" to="/skills" class="header-arrow-link" title="View Full Tech Stack">
        <IconArrowUpRight class="w-6 h-6" />
      </NuxtLink>
    </div>

    <!-- Home Page Grid View -->
    <div v-if="isHome" class="tools-grid">
      <div 
        v-for="skill in homePreviewSkills" 
        :key="skill.name" 
        class="portfolio-card tool-card"
      >
        <!-- Iconify Icon (if provided in data) -->
        <div v-if="skill.icon" class="tool-icon-box font-mono">
          <Icon :icon="skill.icon" class="w-6 h-6 tool-icon" />
        </div>

        <!-- Custom Image (if provided in data) -->
        <div v-else-if="skill.hasImage && skill.image" class="tool-icon-box img-box font-mono">
          <img :src="skill.image" :alt="skill.name" class="tool-img" />
        </div>

        <!-- Explicit Badge Text (if provided in data) -->
        <div v-else-if="skill.badgeText" class="tool-icon-box font-mono">
          {{ skill.badgeText }}
        </div>

        <!-- Else: Text only (no icon box) -->

        <div class="tool-info">
          <h3 class="tool-name">{{ skill.name }}</h3>
          <p class="tool-category font-mono">{{ skill.category }}</p>
        </div>
      </div>
    </div>

    <!-- Dedicated Page Grouped Categories View (4 Clean Groups) -->
    <div v-else class="grouped-skills-container">
      <div 
        v-for="cat in skillCategories" 
        :key="cat.category" 
        class="portfolio-card category-card"
      >
        <div class="category-card-header">
          <div>
            <h3 class="category-title">{{ cat.category }}</h3>
            <p class="category-count font-mono">{{ cat.skills.length }} Technologies & Tools</p>
          </div>
        </div>

        <div class="category-skills-grid">
          <div 
            v-for="skill in cat.skills" 
            :key="skill.name" 
            class="skill-item-pill"
          >
            <Icon v-if="skill.icon" :icon="skill.icon" class="w-4 h-4 skill-icon" />
            <span v-else class="skill-dot font-mono">&bull;</span>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more mt-6">
      <NuxtLink to="/skills" class="view-more-btn font-mono">
        <span>View Full Tech Stack</span>
        <IconArrowUpRight class="w-4 h-4" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import IconArrowUpRight from '~/components/icons/IconArrowUpRight.vue'
import { skillCategories } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})

// Preview skills for home page (filtered by featured flag in portfolioData)
const homePreviewSkills = computed(() => {
  const list: { name: string; category: string; icon?: string; hasImage?: boolean; image?: string; badgeText?: string }[] = []
  
  skillCategories.forEach(cat => {
    cat.skills.forEach(sk => {
      if (sk.featured) {
        list.push({ 
          name: sk.name, 
          category: cat.category,
          icon: sk.icon,
          hasImage: sk.hasImage,
          image: sk.image,
          badgeText: sk.badgeText
        })
      }
    })
  })
  return list
})
</script>

<style scoped>
.skills-section {
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

.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 640px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}

.tool-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
}

.tool-icon-box {
  width: 52px;
  height: 52px;
  border-radius: 0.85rem;
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--coffee-dark);
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.tool-icon {
  width: 28px;
  height: 28px;
}

.tool-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.15rem;
}

.tool-category {
  font-size: 0.8rem;
  color: var(--text-dim);
}

/* Grouped Skills View */
.grouped-skills-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-card {
  padding: 1.75rem;
}

.category-card-header {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-dim);
}

.category-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.15rem;
}

.category-count {
  font-size: 0.775rem;
  color: var(--text-dim);
}

.category-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
}

.skill-item-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.9rem;
  border-radius: 0.6rem;
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  color: var(--coffee-dark);
  font-size: 0.9rem;
  font-weight: 600;
}

.skill-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.skill-dot {
  color: var(--coffee-roast);
  font-weight: bold;
}

.skill-name {
  flex-grow: 1;
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
