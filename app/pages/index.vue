<template>
  <div class="home-page">
    <ProjectsSection :is-home="true" />
    
    <!-- CTA after Projects -->
    <div class="cta-section">
      <div class="telegraph-box">
        <h3 class="font-headline">★ NOTICE FOR CLIENTS & EMPLOYERS ★</h3>
        <p class="font-body">Commission an engineering build or transmit a telegraph.</p>
        <a :href="`mailto:nickimarty.pecision@gmail.com`" class="btn-primary">[ TRANSMIT TELEGRAPH / CONTACT ]</a>
      </div>
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
}

.telegraph-box {
  border: 4px double var(--border-strong);
  padding: 2rem;
  background: var(--bg-surface);
  max-width: 600px;
  width: 100%;
}

.telegraph-box h3 {
  font-family: var(--font-headline);
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.telegraph-box p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--text-muted);
}
</style>
