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
          },
          {
            '@type': 'ItemList',
            '@id': 'https://hairyblue.pages.dev/#sitelinks',
            'name': 'Portfolio Site Navigation',
            'itemListElement': [
              {
                '@type': 'SiteNavigationElement',
                'position': 1,
                'name': 'Projects',
                'description': 'Featured software engineering projects built by Nicki Marty Pecision.',
                'url': 'https://hairyblue.pages.dev/projects'
              },
              {
                '@type': 'SiteNavigationElement',
                'position': 2,
                'name': 'Work Experience',
                'description': 'Professional software engineering experience across municipal government systems and international development teams.',
                'url': 'https://hairyblue.pages.dev/experience'
              },
              {
                '@type': 'SiteNavigationElement',
                'position': 3,
                'name': 'Tech Stack & Tools',
                'description': 'Comprehensive technology stack, programming languages, databases, and DevOps tools.',
                'url': 'https://hairyblue.pages.dev/skills'
              },
              {
                '@type': 'SiteNavigationElement',
                'position': 4,
                'name': 'My Story',
                'description': 'Origin story and journey into software engineering by Nicki Marty Pecision.',
                'url': 'https://hairyblue.pages.dev/story'
              }
            ]
          }
        ]
      })
    }
  ]
})
</script>
