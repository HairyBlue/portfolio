<template>
  <div class="skills-page">
    <SkillsSection :is-home="false" />
  </div>
</template>

<script setup lang="ts">
import SkillsSection from '~/components/SkillsSection.vue'

useSeoMeta({
  title: 'Tech Stack & Tools - Nicki Marty Pecision',
  description: 'Comprehensive tech stack, frameworks, programming languages, databases, and DevOps tools used by Nicki Marty Pecision.',
  ogTitle: 'Tech Stack & Tools - Nicki Marty Pecision',
  ogDescription: 'Comprehensive tech stack, frameworks, programming languages, databases, and DevOps tools used by Nicki Marty Pecision.',
  ogUrl: 'https://hairyblue.pages.dev/skills',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://hairyblue.pages.dev/skills' }
  ]
})
</script>
