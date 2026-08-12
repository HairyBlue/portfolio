<template>
  <div class="experience-page">
    <ExperienceSection :is-home="false" />
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '~/components/ExperienceSection.vue'

useSeoMeta({
  title: 'Work Experience - Nicki Marty Pecision',
  description: 'Professional work experience and software engineering background of Nicki Marty Pecision across municipal government and international software teams.',
  ogTitle: 'Work Experience - Nicki Marty Pecision',
  ogDescription: 'Professional work experience and software engineering background of Nicki Marty Pecision.',
  ogUrl: 'https://hairyblue.pages.dev/experience',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://hairyblue.pages.dev/experience' }
  ]
})
</script>
