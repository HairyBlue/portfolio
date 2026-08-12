<template>
  <footer class="footer-section">
    <div class="footer-inner">
      <!-- Quote Card -->
      <div class="footer-quote-box portfolio-card mb-8">
        <p class="quote font-mono">
          “{{ personalDetails.signatureQuote }}”
        </p>
      </div>

      <div class="footer-bottom">
        <div class="brand">
          <span class="logo-text">{{ personalDetails.name }}</span>
          <span class="handle-text font-mono">@{{ personalDetails.handle }}</span>
        </div>

        <div class="footer-socials">
          <a 
            :href="personalDetails.socials.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="footer-link"
          >
            <IconGithub class="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            :href="personalDetails.socials.linkedin" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="footer-link"
          >
            <IconLinkedin class="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p class="copy-text font-mono">
          &copy; {{ currentYear }} Nicki Marty Pecision. Built with Nuxt 5 SSG.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'
import { personalDetails } from '~/data/portfolioData'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-section {
  padding-top: 2rem;
  border-top: 1px solid var(--border-dim);
}

.mb-8 {
  margin-bottom: 2rem;
}

.footer-quote-box {
  text-align: center;
  padding: 2rem;
  background: var(--bg-surface);
  border-color: var(--border-dim);
}

.quote {
  font-size: 1.15rem;
  color: var(--coffee-dark);
  font-weight: 600;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-weight: 800;
  color: var(--text-main);
  font-size: 1rem;
}

.handle-text {
  color: var(--text-dim);
  font-size: 0.875rem;
}

.footer-socials {
  display: flex;
  gap: 1.25rem;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--coffee-dark);
}

.copy-text {
  font-size: 0.775rem;
  color: var(--text-dim);
}
</style>
