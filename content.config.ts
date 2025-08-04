import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Home page hero section
    homeHero: defineCollection({
      type: 'data',
      source: 'home/hero.yml',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        secondaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        backgroundImage: z.string(),
        stats: z.array(z.object({
          value: z.string(),
          label: z.string()
        }))
      })
    }),

    // Home page industries/trust elements
    homeIndustries: defineCollection({
      type: 'data', 
      source: 'home/industries.yml',
      schema: z.object({
        heading: z.string(),
        industries: z.array(z.object({
          name: z.string(),
          icon: z.string()
        }))
      })
    }),

    // Home page advantages/differentiators
    homeAdvantages: defineCollection({
      type: 'data',
      source: 'home/advantages.yml', 
      schema: z.object({
        heading: z.string(),
        subheading: z.string().optional(),
        advantages: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          bgColor: z.string()
        }))
      })
    }),

    // Home page testimonials
    homeTestimonials: defineCollection({
      type: 'data',
      source: 'home/testimonials.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        testimonials: z.array(z.object({
          quote: z.string(),
          author: z.string(),
          role: z.string(),
          rating: z.number(),
          timeAgo: z.string()
        }))
      })
    }),

    // Home page FAQs
    homeFaqs: defineCollection({
      type: 'data',
      source: 'home/faqs.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        faqs: z.array(z.object({
          question: z.string(),
          answer: z.string()
        }))
      })
    }),

    // Home page featured project
    homeFeaturedProject: defineCollection({
      type: 'data',
      source: 'home/featured-project.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        project: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          imageAlt: z.string(),
          category: z.string(),
          specs: z.array(z.object({
            label: z.string(),
            value: z.string()
          })),
          buttonText: z.string(),
          buttonLink: z.string()
        })
      })
    }),

    // Home page industry notice
    homeIndustryNotice: defineCollection({
      type: 'data',
      source: 'home/industry-notice.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        links: z.array(z.object({
          text: z.string(),
          url: z.string()
        })).optional()
      })
    }),

    // Home page call-to-action
    homeCta: defineCollection({
      type: 'data',
      source: 'home/cta.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        secondaryButton: z.object({
          text: z.string(), 
          link: z.string()
        }),
        backgroundColor: z.string().optional()
      })
    }),

    // Home page services/summary cards
    homeServices: defineCollection({
      type: 'data',
      source: 'home/services.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        services: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          link: z.string(),
          buttonText: z.string()
        }))
      })
    })
  }
})