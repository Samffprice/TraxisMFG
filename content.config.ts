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
    }),

    // About page header
    aboutHeader: defineCollection({
      type: 'data',
      source: 'about/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        secondaryButton: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // About page story and mission
    aboutStory: defineCollection({
      type: 'data',
      source: 'about/story.yml',
      schema: z.object({
        heading: z.string(),
        paragraphs: z.array(z.string()),
        image: z.object({
          src: z.string(),
          webpSrc: z.string(),
          alt: z.string(),
          caption: z.string()
        })
      })
    }),

    // About page core values
    aboutValues: defineCollection({
      type: 'data',
      source: 'about/values.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        values: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          bgColor: z.string()
        }))
      })
    }),

    // About page team members
    aboutTeam: defineCollection({
      type: 'data',
      source: 'about/team.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        members: z.array(z.object({
          id: z.number(),
          name: z.string(),
          title: z.string(),
          photo: z.string(),
          bio: z.string(),
          experience: z.number(),
          certifications: z.string()
        }))
      })
    }),

    // About page facility information
    aboutFacility: defineCollection({
      type: 'data',
      source: 'about/facility.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        address: z.string(),
        description: z.string(),
        image: z.string(),
        features: z.array(z.object({
          icon: z.string(),
          text: z.string()
        })),
        areas: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string()
        }))
      })
    }),

    // About page quality and certifications
    aboutQuality: defineCollection({
      type: 'data',
      source: 'about/quality.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        description: z.string(),
        image: z.string(),
        certifications: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          bgColor: z.string()
        })),
        stats: z.array(z.object({
          value: z.string(),
          label: z.string()
        }))
      })
    }),

    // About page community section
    aboutCommunity: defineCollection({
      type: 'data',
      source: 'about/community.yml',
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
        })
      })
    }),

    // Process page header
    processHeader: defineCollection({
      type: 'data',
      source: 'process/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        button: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Process page steps
    processSteps: defineCollection({
      type: 'data',
      source: 'process/steps.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        steps: z.array(z.object({
          stepNumber: z.number(),
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          iconColor: z.string(),
          stepColor: z.string(),
          features: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string()
          })).optional(),
          acceptedFormats: z.array(z.string()).optional(),
          button: z.object({
            text: z.string(),
            link: z.string()
          }).optional(),
          highlights: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            description: z.string()
          })).optional()
        }))
      })
    }),

    // Process page timeline information
    processTimeline: defineCollection({
      type: 'data',
      source: 'process/timeline.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        standard: z.object({
          title: z.string(),
          duration: z.string(),
          description: z.string(),
          icon: z.string(),
          breakdown: z.array(z.object({
            phase: z.string(),
            duration: z.string()
          }))
        }),
        expedited: z.object({
          title: z.string(),
          subtitle: z.string(),
          description: z.string(),
          icon: z.string(),
          criteria: z.array(z.string()),
          button: z.object({
            text: z.string(),
            link: z.string()
          })
        })
      })
    }),

    // Process page FAQs
    processFaqs: defineCollection({
      type: 'data',
      source: 'process/faqs.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        faqs: z.array(z.object({
          question: z.string(),
          answer: z.string()
        }))
      })
    }),

    // Process page call-to-action
    processCta: defineCollection({
      type: 'data',
      source: 'process/cta.yml',
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
        })
      })
    }),

    // CNC Milling page header
    cncMillingHeader: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        breadcrumbs: z.array(z.object({
          text: z.string(),
          link: z.string()
        })),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        secondaryButton: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // CNC Milling service description
    cncMillingService: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/service.yml',
      schema: z.object({
        heading: z.string(),
        paragraphs: z.array(z.string()),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        capabilities: z.array(z.object({
          text: z.string(),
          icon: z.string()
        }))
      })
    }),

    // CNC Milling capabilities
    cncMillingCapabilities: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/capabilities.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        capabilities: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          color: z.string(),
          features: z.array(z.string()),
          featured: z.boolean().optional()
        }))
      })
    }),

    // CNC Milling materials
    cncMillingMaterials: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/materials.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        categories: z.array(z.object({
          title: z.string(),
          materials: z.array(z.string())
        })),
        viewAllButton: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // CNC Milling applications
    cncMillingApplications: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/applications.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        industries: z.array(z.object({
          title: z.string(),
          icon: z.string(),
          applications: z.array(z.string())
        }))
      })
    }),

    // CNC Milling quality
    cncMillingQuality: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/quality.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        }))
      })
    }),

    // CNC Milling call-to-action
    cncMillingCta: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-milling/cta.yml',
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
        })
      })
    })
  }
})