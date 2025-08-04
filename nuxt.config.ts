// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/content'
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

  // Content configuration
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Traxis Manufacturing - Precision CNC Machining | Austin, TX',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Austin based CNC machining experts for aerospace, medical & industrial applications. High precision manufacturing with a personalized service.' 
        },
        { name: 'keywords', content: 'CNC machining, precision manufacturing, Austin Texas, aerospace parts, medical devices, industrial components' },
        { name: 'author', content: 'Traxis Manufacturing LLC' },
        // Enhanced Open Graph tags
        { property: 'og:title', content: 'Traxis Manufacturing LLC - Precision CNC Machining' },
        { property: 'og:description', content: 'Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://traxis-mfg.vercel.app' },
        { property: 'og:image', content: 'https://traxis-mfg.vercel.app/home-hero.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Traxis Manufacturing CNC Machining Facility' },
        { property: 'og:site_name', content: 'Traxis Manufacturing LLC' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Traxis Manufacturing LLC - Precision CNC Machining' },
        { name: 'twitter:description', content: 'Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications.' },
        { name: 'twitter:image', content: 'https://traxis-mfg.vercel.app/home-hero.webp' },
        { name: 'twitter:image:alt', content: 'Traxis Manufacturing CNC Machining Facility' },
        
        // Additional SEO meta tags
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'geo.region', content: 'US-TX' },
        { name: 'geo.placename', content: 'Austin' },
        { name: 'geo.position', content: '30.230;-97.744' },
        { name: 'ICBM', content: '30.230, -97.744' }
      ],
      link: [
        // Favicon suite
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        
        // Canonical URL (will be overridden by page-specific)
        { rel: 'canonical', href: 'https://traxis-mfg.vercel.app' },
        
        // Performance optimizations
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        
        // Browser compatibility
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#dc2626' }
      ],
      script: [
        // Google Analytics 4 - Non-blocking
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
          async: true,
          defer: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
          type: 'text/javascript',
          defer: true
        }
      ]
    }
  },

  // CSS configuration handled by Tailwind CSS module

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://traxis-mfg.vercel.app'
    }
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  },
  
  // CSS optimization
  css: [
    '~/assets/css/main.css'
  ],
  
  // Build optimizations
  build: {
    extractCSS: true
  },

  // Nitro optimizations for production
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: [
        '/',
        '/about',
        '/capabilities',
        '/capabilities/cnc-milling',
        '/capabilities/cnc-turning',
        '/capabilities/materials', 
        '/capabilities/equipment',
        '/work',
        '/process',
        '/contact',
        '/request-quote'
      ]
    },
    // Performance optimizations and security headers
    routeRules: {
      '/**': { 
        headers: { 
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Powered-By': ''
        } 
      }
    }
  },

  // Reduce HTTP requests through bundling
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            icons: ['@iconify/vue']
          }
        }
      }
    }
  }
})