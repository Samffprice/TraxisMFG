// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Work Sans': [400, 500, 600, 700]
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Traxis Manufacturing LLC - Precision CNC Machining with a Partnership Approach',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications. Dedicated machinists providing personalized service for complex components.' 
        },
        { name: 'keywords', content: 'CNC machining, precision manufacturing, Austin Texas, aerospace parts, medical devices, industrial components' },
        { name: 'author', content: 'Traxis Manufacturing LLC' },
        { property: 'og:title', content: 'Traxis Manufacturing LLC - Precision CNC Machining' },
        { property: 'og:description', content: 'Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS configuration handled by Tailwind CSS module

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://traxismfg.com'
    }
  }
})