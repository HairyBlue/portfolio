<template>
  <div class="app-root">
    <!-- Floating Header Navigation -->
    <HeaderNav />

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
import HeaderNav from '~/components/HeaderNav.vue'
import ProfileSidebar from '~/components/ProfileSidebar.vue'
import FooterSection from '~/components/FooterSection.vue'

// Global Schema.org Structured Data (Person & Software Engineer)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
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
      })
    }
  ]
})
</script>
