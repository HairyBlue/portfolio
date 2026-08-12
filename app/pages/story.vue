<template>
  <div class="story-page">
    <StoryBlogSection :is-home="false" />
  </div>
</template>

<script setup lang="ts">
import StoryBlogSection from '~/components/StoryBlogSection.vue'

useSeoMeta({
  title: 'My Story - Nicki Marty Pecision',
  description: 'Origin story: From Management Accounting to Software Engineer. Nicki Marty Pecisions journey into full stack software development.',
  ogTitle: 'My Story - Nicki Marty Pecision',
  ogDescription: 'Origin story: From Management Accounting to Software Engineer. Nicki Marty Pecisions journey into full stack software development.',
  ogUrl: 'https://hairyblue.pages.dev/story',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://hairyblue.pages.dev/story' }
  ]
})
</script>
