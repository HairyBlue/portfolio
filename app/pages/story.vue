<template>
  <div class="story-page">
    <div v-if="activeStory">
      <div class="reader-tabs font-mono">
        <a href="javascript:void(0)" @click.prevent="closeStory" class="back-link">&larr; BACK TO DISPATCHES</a>
        <span class="separator">|</span>
        <button @click="activeStory = 'dispatch-two'" :class="{'active-tab': activeStory === 'dispatch-two'}">LEAD DISPATCH</button>
        <span class="separator">|</span>
        <button @click="activeStory = 'dispatch-one'" :class="{'active-tab': activeStory === 'dispatch-one'}">ORIGIN CHRONICLE</button>
      </div>
      <hr class="editorial-rule-double">
      <StoryReader :story-id="activeStory" />
    </div>
    
    <div v-else>
      <StoryBlogSection :is-home="false" @select-story="openStory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import StoryBlogSection from '~/components/StoryBlogSection.vue'
import StoryReader from '~/components/StoryReader.vue'

const route = useRoute()
const router = useRouter()
const activeStory = ref<string | null>(null)

function updateFromHash() {
  if (route.hash === '#dispatch-one') activeStory.value = 'dispatch-one'
  else if (route.hash === '#dispatch-two') activeStory.value = 'dispatch-two'
  else activeStory.value = null
}

onMounted(() => {
  updateFromHash()
})

watch(() => route.hash, () => {
  updateFromHash()
})

function openStory(storyId: string) {
  router.push({ path: '/story', hash: '#' + storyId })
}

function closeStory() {
  router.push({ path: '/story', hash: '' })
}

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

<style scoped>
.reader-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.back-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--accent-ink);
}

.separator {
  color: var(--border-dim);
}

.reader-tabs button {
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease;
  font-size: 0.9rem;
  padding: 0;
}

.reader-tabs button:hover {
  color: var(--accent-ink);
}

.reader-tabs button.active-tab {
  color: var(--text-main);
  border-bottom: 2px solid var(--accent-ink);
  padding-bottom: 2px;
}

.editorial-rule-double {
  border: none;
  border-top: 3px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  height: 6px;
  margin: 1.5rem 0 2.5rem;
}
</style>
