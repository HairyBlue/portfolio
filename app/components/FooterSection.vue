<template>
  <footer class="footer-section">
    <div class="colophon-inner">
      
      <div v-if="personalDetails.signatureQuote" class="footer-quote font-body">
        “{{ personalDetails.signatureQuote }}”
      </div>

      <div class="footer-grid">
        <div class="brand-info">
          <span class="logo-text font-heading">{{ personalDetails.name }}</span><br/>
          <span class="handle-text font-body">@{{ personalDetails.handle }}</span>
        </div>
        
        <div class="print-info font-mono dateline">
          PRINTED IN {{ personalDetails.location.toUpperCase() }}
        </div>

        <div class="footer-socials">
          <a 
            :href="personalDetails.socials.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="footer-link font-mono dateline"
          >
            GITHUB
          </a>
          <a 
            :href="personalDetails.socials.linkedin" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="footer-link font-mono dateline"
          >
            LINKEDIN
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copy-text font-mono">
          &copy; {{ currentYear }} {{ personalDetails.name }}. Built with Nuxt 4 SSG.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { personalDetails } from '~/data/portfolioData'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-section {
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 3px solid var(--border-strong);
}

.footer-quote {
  font-size: 1.5rem;
  color: var(--text-main);
  font-style: italic;
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-weight: 900;
  color: var(--text-main);
  font-size: 1.5rem;
  line-height: 1;
}

.handle-text {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.print-info {
  color: var(--text-dim);
  text-align: center;
}

.footer-socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.footer-link {
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent-ink);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid var(--border-dim);
  padding-top: 1rem;
}

.copy-text {
  font-size: 0.75rem;
  color: var(--text-dim);
}

@media (max-width: 768px) {
  .footer-grid {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-socials {
    align-items: center;
  }
}
</style>
