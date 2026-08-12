<template>
  <div class="projects-page">
    <ProjectsSection :is-home="false" />
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
