<template>
  <section id="story" class="story-section">
    <!-- Header -->
    <div class="broadsheet-header">
      <h2 class="broadsheet-title font-headline">THE EDITORIAL CHRONICLES & DISPATCHES</h2>
      <div class="edition-index font-mono">
        <a href="javascript:void(0)" @click.prevent="openStory('dispatch-two')" class="index-link">[ LEAD DISPATCH: LATE TO THE WAVE ]</a>
        <span class="separator-dot">&bull;</span>
        <a href="javascript:void(0)" @click.prevent="openStory('dispatch-one')" class="index-link">[ ORIGIN CHRONICLE: {{ miniBlog.title.toUpperCase() }} ]</a>
      </div>
    </div>
    <hr class="editorial-rule-double">

    <div class="editorial-columns">
      <!-- Dispatch II: Lead Story -->
      <article class="feature-article excerpt-card" @click="openStory('dispatch-two')">
        <header class="article-header">
          <h3 class="article-title font-headline">LATE TO THE WAVE, BUT I BUILT MY OWN BOAT</h3>
          <p class="article-deck font-body"><em>How money, not doubt, pushed me to build my own AI agent crew</em></p>
          <div class="article-meta dateline">
            <span>By Nicki Marty Pecision</span>
            <span class="separator">|</span>
            <span>Mindanao, Philippines</span>
          </div>
        </header>

        <div class="article-body font-body">
          <p class="drop-cap">
            Everyone else seemed to be sprinting. Agentic workflows, vibe coding, whole fleets of AI agents shipping code while their owners slept — and I was still watching from the shore.
          </p>
          <p class="article-paragraph">
            It wasn't ego. It wasn't doubt about the technology either. It was money.
          </p>
          <p class="article-paragraph fade-out">
            I help support my mother alongside my siblings — she's a single parent who's gotten by on <em>diskarte ray puhunan</em> — resourcefulness as the only capital you've got...
          </p>
        </div>

        <div class="section-view-more">
          <button class="view-more-link font-headline">
            READ FULL DISPATCH &rarr;
          </button>
        </div>
      </article>

      <!-- Dispatch I: Companion Story -->
      <article class="feature-article excerpt-card" @click="openStory('dispatch-one')">
        <header class="article-header">
          <h3 class="article-title font-headline">{{ miniBlog.title.toUpperCase() }}</h3>
          <p class="article-deck font-body"><em>{{ miniBlog.subtitle }}</em></p>
          <div class="article-meta dateline">
            <span>By Nicki Marty Pecision</span>
            <span class="separator">|</span>
            <span>{{ miniBlog.date }}</span>
          </div>
        </header>

        <div class="article-body font-body">
          <p class="drop-cap">
            {{ miniBlog.paragraphs[0] }}
          </p>
          <p class="article-paragraph fade-out" v-if="miniBlog.paragraphs.length > 1">
            {{ miniBlog.paragraphs[1].substring(0, 150) }}...
          </p>
        </div>

        <div class="section-view-more">
          <button class="view-more-link font-headline">
            READ FULL CHRONICLE &rarr;
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { miniBlog } from '~/data/portfolioData'
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  isHome?: boolean
}>(), {
  isHome: true
})

const emit = defineEmits(['select-story'])
const router = useRouter()

function openStory(storyId: string) {
  if (props.isHome) {
    router.push({ path: '/story', hash: '#' + storyId })
  } else {
    emit('select-story', storyId)
  }
}
</script>

<style scoped>
.story-section {
  margin-bottom: 4rem;
}

.broadsheet-header {
  margin-bottom: 1rem;
  text-align: center;
}

.broadsheet-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.75rem;
}

.edition-index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.index-link {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s ease;
}

.index-link:hover {
  color: var(--accent-ink);
}

.separator-dot {
  color: var(--border-dim);
}

.editorial-rule-double {
  border: none;
  border-top: 3px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  height: 6px;
  margin: 1.5rem 0 2.5rem;
}

.editorial-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 992px) {
  .editorial-columns {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.excerpt-card {
  padding: 1.5rem;
  border: 1px solid var(--border-dim);
  background: var(--bg-surface);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.excerpt-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 var(--border-dim);
}

.article-header {
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed var(--border-dim);
  padding-bottom: 1.25rem;
  text-align: center;
}

.article-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.article-deck {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.article-meta {
  color: var(--text-dim);
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.separator {
  color: var(--border-dim);
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-main);
  flex-grow: 1;
}

.article-paragraph {
  margin-bottom: 1.25rem;
  text-align: justify;
}

.drop-cap {
  margin-bottom: 1.25rem;
  text-align: justify;
}

.fade-out {
  position: relative;
  mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
}

.section-view-more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  border-top: 1px dashed var(--border-dim);
  padding-top: 1.5rem;
}

.view-more-link {
  font-size: 1.1rem;
  color: var(--accent-ink);
  text-decoration: none;
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.excerpt-card:hover .view-more-link {
  color: var(--text-main);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .broadsheet-title {
    font-size: 2rem;
  }
}
</style>
