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
        @click="openModal(project)"
      >
        <h3 class="project-title font-headline">{{ project.title }}</h3>
        
        <p class="project-snippet font-body">
          {{ project.description }}
        </p>
        
        <div class="project-tech">
          <em>Filed under: {{ project.technologies.join(', ') }}.</em>
        </div>
      </article>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more">
      <NuxtLink to="/projects" class="view-more-link font-heading">
        Read All Case Studies &rarr;
      </NuxtLink>
    </div>

    <!-- Project Detail Modal Overlay -->
    <Teleport to="body">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content">
          <!-- Close Button (text) -->
          <button class="modal-close-text font-mono" aria-label="Close modal" @click="closeModal">
            [ CLOSE ]
          </button>

          <div class="modal-header">
            <div class="modal-meta dateline mb-2">
              <span>{{ selectedProject.category }}</span>
              <span class="separator">|</span>
              <span>{{ selectedProject.year }}</span>
            </div>
            <h2 class="modal-title font-heading">{{ selectedProject.title }}</h2>
            <p class="modal-subtitle font-body"><em>{{ selectedProject.subtitle }}</em></p>
          </div>
          
          <hr class="editorial-rule-thin">

          <div class="modal-body">
            <p class="long-desc font-body">{{ selectedProject.longDescription || selectedProject.description }}</p>

            <div class="tech-stack mb-4">
              <span class="font-mono text-small dateline">TECHNOLOGIES:</span><br/>
              <em>{{ selectedProject.technologies.join(', ') }}</em>
            </div>

            <div v-if="selectedProject.stats" class="stats-box mb-4">
              <span class="font-mono dateline">KEY HIGHLIGHT:</span><br/>
              <span class="font-body">{{ selectedProject.stats }}</span>
            </div>
          </div>
          
          <hr class="editorial-rule-thin">

          <div class="modal-actions">
            <a 
              v-if="selectedProject.liveUrl" 
              :href="selectedProject.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary"
            >
              Visit Live Portal
            </a>
            <a 
              v-if="selectedProject.githubUrl" 
              :href="selectedProject.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-secondary"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects, type Project } from '~/data/portfolioData'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})

const selectedProject = ref<Project | null>(null)

const displayedProjects = computed(() => {
  if (props.isHome) {
    return projects.filter(p => p.featured)
  }
  return projects
})

const openModal = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedProject.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
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
  cursor: pointer;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-dim);
  transition: background-color 0.2s ease;
}

.project-article:hover {
  background-color: var(--bg-surface-subtle);
}

.project-article:hover .project-title {
  text-decoration: underline;
}

.article-meta {
  margin-bottom: 0.5rem;
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

/* Modal styling */
.modal-close-text {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 0.75rem;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.modal-close-text:hover {
  color: var(--text-main);
}

.modal-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 0.5rem;
  line-height: 1.1;
  padding-right: 2rem;
}

.modal-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
}

.editorial-rule-thin {
  border: none;
  border-top: 1px solid var(--border-strong);
  margin: 1.5rem 0;
}

.long-desc {
  font-size: 1.1rem;
  color: var(--text-main);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.text-small {
  font-size: 0.75rem;
}

.tech-stack em {
  font-size: 1rem;
  color: var(--text-muted);
}

.stats-box {
  padding-left: 1rem;
  border-left: 3px solid var(--accent-ink);
  font-size: 1.05rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
</style>
