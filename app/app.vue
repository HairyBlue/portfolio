<template>
  <div class="app-root">
    <!-- Floating Header Navigation -->
    <HeaderNav />

    <!-- Massive Broadsheet Hero (Spanning Page, only on Home) -->
    <HeroSection v-if="route.path === '/'" />

    <!-- 2-Column Main Layout -->
    <div class="portfolio-container portfolio-layout">
      <!-- Left Column: Sticky Profile Sidebar -->
      <ProfileSidebar />

      <!-- Right Column: Dynamic Nuxt Page Route -->
      <main class="main-content">
        <NuxtPage />
        <FooterSection />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import HeaderNav from '~/components/HeaderNav.vue'
import HeroSection from '~/components/HeroSection.vue'
import ProfileSidebar from '~/components/ProfileSidebar.vue'
import FooterSection from '~/components/FooterSection.vue'

const route = useRoute()

// Schema.org Person, WebSite, and SiteNavigationElement (Google Sitelinks)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': 'https://hairyblue.pages.dev/#person',
            'name': 'Nicki Marty Pecision',
            'alternateName': 'Hairyblue',
            'jobTitle': 'Junior Software Engineer',
            'url': 'https://hairyblue.pages.dev',
            'sameAs': [
              'https://github.com/HairyBlue',
              'https://www.linkedin.com/in/nickimartypecision/'
            ],
            'address': {
              '@type': 'PostalAddress',
              'addressRegion': 'Mindanao',
              'addressCountry': 'Philippines'
            },
            'knowsAbout': [
              'Software Engineering',
              'Vue.js',
              'Nuxt.js',
              'TypeScript',
              'JavaScript',
              'Laravel',
              'Node.js',
              'Docker',
              'MySQL'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://hairyblue.pages.dev/#website',
            'url': 'https://hairyblue.pages.dev/',
            'name': 'Nicki Marty Pecision Portfolio',
            'alternateName': 'Hairyblue Developer Portfolio',
            'publisher': {
              '@id': 'https://hairyblue.pages.dev/#person'
            }
          }
        ]
      })
    }
  ]
})
</script>
