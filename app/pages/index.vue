<template>
  <div class="home-page">
    <HeroSection />
    <ProjectsSection :is-home="true" />
    <ExperienceSection :is-home="true" />
    <SkillsSection />
    <TestimonialsSection />
    <StoryBlogSection :is-home="true" />
    <EducationSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import StoryBlogSection from '~/components/StoryBlogSection.vue'
import EducationSection from '~/components/EducationSection.vue'

useSeoMeta({
  title: 'Nicki Marty Pecision - Junior Software Engineer | Portfolio',
  description: 'Portfolio of Nicki Marty Pecision (Hairyblue), a Junior Software Engineer specializing in Vue, Nuxt, Laravel, and TypeScript.',
  ogTitle: 'Nicki Marty Pecision - Junior Software Engineer',
  ogDescription: 'Portfolio of Nicki Marty Pecision (Hairyblue), a Junior Software Engineer specializing in Vue, Nuxt, Laravel, and TypeScript.',
  ogUrl: 'https://hairyblue.pages.dev/',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://hairyblue.pages.dev/' }
  ]
})
</script>
