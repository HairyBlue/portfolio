// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-12',
  telemetry: false,
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Nicki Marty Pecision | Software Engineer Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Nicki Marty Pecision (Hairyblue) - Junior Software Engineer specializing in Vue, Nuxt, TypeScript, Laravel, and Full Stack web development.'
        },
        { name: 'keywords', content: 'Software Engineer, Web Developer, Nicki Marty Pecision, Hairyblue, Vue, Nuxt, TypeScript, Laravel, Mindanao, Philippines' },
        { name: 'author', content: 'Nicki Marty Pecision' },
        { name: 'theme-color', content: '#2c2420' },
        
        // Open Graph / Facebook
        { property: 'og:site_name', content: 'Nicki Marty Pecision Portfolio' },
        { property: 'og:title', content: 'Nicki Marty Pecision | Software Engineer' },
        { property: 'og:description', content: 'Crafting digital experiences with Vue, Nuxt, Laravel, and TypeScript.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hairyblue.pages.dev/' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nicki Marty Pecision | Software Engineer' },
        { name: 'twitter:description', content: 'Crafting digital experiences with Vue, Nuxt, Laravel, and TypeScript.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://hairyblue.pages.dev/' }
      ]
    }
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
