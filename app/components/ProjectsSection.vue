<template>
  <section id="projects" class="projects-section">
    <!-- Header -->
    <div class="section-header-row">
      <div class="section-header">
        <h2 class="section-title">{{ isHome ? 'RECENT' : 'ALL' }}</h2>
        <h2 class="section-subtitle">PROJECTS</h2>
      </div>

      <NuxtLink v-if="isHome" to="/projects" class="header-arrow-link" title="View All Projects">
        <IconArrowUpRight class="w-6 h-6" />
      </NuxtLink>
    </div>

    <!-- Vertical Projects List -->
    <div class="projects-list">
      <div 
        v-for="project in displayedProjects" 
        :key="project.id"
        class="portfolio-card project-item"
        @click="openModal(project)"
      >
        <div class="project-left">
          <!-- Thumbnail Image (if useImage is true & image provided) -->
          <div v-if="project.useImage && project.image" class="project-thumb-box img-box">
            <img :src="project.image" :alt="project.title" class="project-thumb-img" />
          </div>

          <!-- Fallback Badge Text (if useImage is false) -->
          <div v-else class="project-thumb-box font-mono">
            {{ project.badgeText }}
          </div>

          <div class="project-info">
            <h3 class="project-name">{{ project.title }}</h3>
            <p class="project-category font-mono">{{ project.subtitle }} &bull; {{ project.year }}</p>
            <p class="project-short-desc">{{ project.description }}</p>
          </div>
        </div>

        <div class="project-arrow-box">
          <IconArrowUpRight class="w-5 h-5" />
        </div>
      </div>
    </div>

    <!-- Bottom View All Button on Home Page -->
    <div v-if="isHome" class="section-view-more mt-6">
      <NuxtLink to="/projects" class="view-more-btn font-mono">
        <span>View All Projects</span>
        <IconArrowUpRight class="w-4 h-4" />
      </NuxtLink>
    </div>

    <!-- Project Detail Modal Overlay -->
    <Teleport to="body">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content portfolio-card">
          <!-- Circular Close Icon Button -->
          <button class="modal-close-btn" aria-label="Close modal" @click="closeModal">
            <IconX class="w-4 h-4" />
          </button>

          <div class="modal-header">
            <div class="modal-badge-row mb-3">
              <span class="category-pill font-mono">{{ selectedProject.category }}</span>
              <span class="year-pill font-mono">{{ selectedProject.year }}</span>
            </div>
            <h2 class="modal-title">{{ selectedProject.title }}</h2>
            <p class="modal-subtitle font-mono">{{ selectedProject.subtitle }}</p>
          </div>

          <div class="modal-body">
            <p class="long-desc">{{ selectedProject.longDescription || selectedProject.description }}</p>

            <div class="modal-section-title font-mono mb-2">TECHNOLOGIES USED</div>
            <div class="tech-tags mb-6">
              <span 
                v-for="tech in selectedProject.technologies" 
                :key="tech" 
                class="tag-pill highlight"
              >
                {{ tech }}
              </span>
            </div>

            <div v-if="selectedProject.stats" class="stats-box mb-6 font-mono">
              <span class="stats-label">KEY HIGHLIGHT:</span>
              <span class="stats-value">{{ selectedProject.stats }}</span>
            </div>
          </div>

          <div class="modal-actions">
            <a 
              v-if="selectedProject.liveUrl" 
              :href="selectedProject.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary"
            >
              <IconExternalLink class="w-4 h-4" />
              <span>Visit Live Portal</span>
            </a>
            <a 
              v-if="selectedProject.githubUrl" 
              :href="selectedProject.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-secondary"
            >
              <IconGithub class="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <button class="btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import IconArrowUpRight from '~/components/icons/IconArrowUpRight.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconExternalLink from '~/components/icons/IconExternalLink.vue'
import IconX from '~/components/icons/IconX.vue'
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

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.5rem;
}

.project-left {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.project-thumb-box {
  width: 64px;
  height: 64px;
  border-radius: 0.85rem;
  background: var(--coffee-latte);
  border: 1px solid var(--border-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--coffee-dark);
}

.project-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.project-category {
  font-size: 0.825rem;
  color: var(--coffee-roast);
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.project-short-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.4;
  max-width: 520px;
}

.project-arrow-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

@media (max-width: 640px) {
  .project-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
  }

  .project-left {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.85rem;
  }

  .project-arrow-box {
    align-self: flex-end;
  }
}

.project-item:hover .project-arrow-box {
  background: var(--coffee-dark);
  color: #ffffff;
  border-color: var(--coffee-dark);
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

/* Modal styling */
.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: var(--coffee-dark);
  color: #ffffff;
  border-color: var(--coffee-dark);
}

.modal-badge-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-pill {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: var(--coffee-dark);
  color: #ffffff;
  text-transform: uppercase;
}

.year-pill {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  color: var(--text-dim);
}

.modal-title {
  font-size: 1.85rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 0.25rem;
  padding-right: 2.5rem;
}

.modal-subtitle {
  font-size: 0.9rem;
  color: var(--coffee-roast);
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.long-desc {
  font-size: 1.025rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.modal-section-title {
  font-size: 0.75rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag-pill {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  background: var(--bg-surface-subtle);
  border: 1px solid var(--border-dim);
  color: var(--text-main);
}

.tag-pill.highlight {
  background: var(--coffee-latte);
  border-color: var(--border-strong);
  color: var(--coffee-dark);
  font-weight: 600;
}

.stats-box {
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: var(--bg-surface-subtle);
  border: 1px dashed var(--border-strong);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.stats-label {
  color: var(--text-dim);
  font-size: 0.75rem;
}

.stats-value {
  color: var(--coffee-dark);
  font-weight: 700;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid var(--border-dim);
}

.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mt-6 { margin-top: 1.5rem; }
</style>
