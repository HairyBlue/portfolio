<template>
  <div class="experience-page">
    <ExperienceSection :is-home="false" />
    
    <hr class="editorial-rule">
    <div class="cta-section">
      <h3 class="font-heading">Looking for this kind of builder?</h3>
      <a :href="`mailto:nickimarty.pecision@gmail.com`" class="btn-primary">Get in Touch</a>
    </div>
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
