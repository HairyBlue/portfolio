<template>
  <div class="home-page">
    <HeroSection />
    
    <ProjectsSection :is-home="true" />
    
    <!-- CTA after Projects -->
    <div class="cta-section">
      <h3 class="font-heading">Have a similar challenge? Let's talk.</h3>
      <a :href="`mailto:nickimarty.pecision@gmail.com`" class="btn-primary">Get in Touch</a>
    </div>
    
    <hr class="editorial-rule">
    
    <ExperienceSection :is-home="true" />
    <hr class="editorial-rule">
    
    <SkillsSection :is-home="true" />
    <hr class="editorial-rule">
    
    <TestimonialsSection />
    <hr class="editorial-rule">
    
    <StoryBlogSection :is-home="true" />
    <hr class="editorial-rule">
    
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
