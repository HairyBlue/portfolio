<template>
  <div class="projects-page">
    <ProjectsSection :is-home="false" />
    
    <hr class="editorial-rule">
    <div class="cta-section">
      <h3 class="font-heading">Have a project in mind? Let's talk.</h3>
      <a :href="`mailto:nickimarty.pecision@gmail.com`" class="btn-primary">Commission Work</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsSection from '~/components/ProjectsSection.vue'

useSeoMeta({
  title: 'Projects - Nicki Marty Pecision',
  description: 'Featured software engineering projects built by Nicki Marty Pecision (Hairyblue), including e-Bulletin Portal, Camote Utils, and AR Mobile Anatomy.',
  ogTitle: 'Projects - Nicki Marty Pecision',
  ogDescription: 'Featured software engineering projects built by Nicki Marty Pecision (Hairyblue).',
  ogUrl: 'https://hairyblue.pages.dev/projects',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://hairyblue.pages.dev/projects' }
  ]
})
</script>

<style scoped>
.cta-section {
  text-align: center;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-section h3 {
  font-size: 2rem;
  color: var(--text-main);
}
</style>
