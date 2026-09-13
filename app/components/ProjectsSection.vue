<template>
  <section id="projects" class="projects-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title font-headline">{{ isHome ? 'FEATURED INVESTIGATIONS & CASE STUDIES' : 'ALL INVESTIGATIONS' }}</h2>
    </div>
    <hr class="editorial-rule-double">

    <!-- Vertical Projects List -->
    <div class="projects-list">
      <article 
        v-for="project in displayedProjects" 
        :key="project.id"
        class="project-article"
        :class="{ 'is-expanded': isExpanded(project.id) }"
      >
        <div class="project-summary" @click="toggleProject(project.id)">
          <h3 class="project-title font-headline">{{ project.title }}</h3>
          
          <p class="project-snippet font-body">
            {{ project.description }}
          </p>
          
          <div class="project-tech mb-4">
            <em>Filed under: {{ project.technologies.join(', ') }}.</em>
          </div>

          <button class="toggle-btn font-mono" aria-label="Toggle full case study">
            {{ isExpanded(project.id) ? '[ COLLAPSE DISPATCH ↑ ]' : '[ READ FULL CASE STUDY ↓ ]' }}
          </button>
        </div>

        <!-- Expanded Drawer -->
        <div v-if="isExpanded(project.id)" class="project-drawer">
          <hr class="editorial-rule-thin">
          
          <div class="drawer-content">
            <h4 class="font-heading section-label">The Engineering Challenge</h4>
            <p class="font-body mb-4">{{ project.challenge || project.description }}</p>

            <h4 class="font-heading section-label">System Architecture & Stack Decisions</h4>
            <p class="font-body mb-4">{{ project.architecture }}</p>

            <h4 class="font-heading section-label">Core Solutions & Key Highlights</h4>
            <p class="font-body mb-4">{{ project.solution || project.longDescription }}</p>

            <h4 class="font-heading section-label">Impact & Measurable Metrics</h4>
            <p class="font-body mb-4">{{ project.impact }}</p>

            
            <div class="drawer-actions mt-4">
              <a 
                v-if="project.liveUrl" 
                :href="project.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-primary"
              >
                Visit Live Portal
              </a>
              <a 
                v-if="project.githubUrl" 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-secondary"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/projects" class="view-more-link font-heading">
        Read All Case Studies &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})

const expandedProjects = ref<Record<string, boolean>>({})

const toggleProject = (id: string) => {
  expandedProjects.value[id] = !expandedProjects.value[id]
}

const isExpanded = (id: string) => !!expandedProjects.value[id]

const displayedProjects = computed(() => {
  if (props.isHome) {
    return projects.filter(p => p.featured)
  }
  return projects
})
</script>

<style scoped>
.projects-section {
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-article {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-dim);
  transition: background-color 0.2s ease;
}

.project-summary {
  cursor: pointer;
}

.project-summary:hover .project-title {
  text-decoration: underline;
}

.editorial-rule-double {
  border: none;
  border-top: 3px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  height: 6px;
  margin: 1rem 0 2rem;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.project-snippet {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 800px;
}

.project-tech {
  color: var(--text-dim);
  font-size: 0.95rem;
}

.toggle-btn {
  background: none;
  border: none;
  color: var(--accent-ink);
  font-size: 0.85rem;
  cursor: pointer;
  letter-spacing: 0.05em;
  font-weight: 700;
  padding: 0;
  text-align: left;
  transition: color 0.2s ease;
}

.toggle-btn:hover {
  color: var(--text-main);
}

.project-drawer {
  margin-top: 1.5rem;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.editorial-rule-thin {
  border: none;
  border-top: 1px solid var(--border-strong);
  margin: 1.5rem 0;
}

.drawer-content {
  padding-left: 1rem;
  border-left: 2px solid var(--border-dim);
}

.section-label {
  font-size: 1.25rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}


.drawer-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.section-view-more {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
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
