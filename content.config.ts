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
    }),

    // CNC Turning page header
    cncTurningHeader: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-turning/header.yml',
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

    // CNC Turning service description
    cncTurningService: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-turning/service.yml',
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

    // CNC Turning capabilities
    cncTurningCapabilities: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-turning/capabilities.yml',
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

    // CNC Turning applications
    cncTurningApplications: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-turning/applications.yml',
      schema: z.object({
        heading: z.string(),
        applications: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        }))
      })
    }),

    // CNC Turning call-to-action
    cncTurningCta: defineCollection({
      type: 'data',
      source: 'capabilities/cnc-turning/cta.yml',
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

    // Equipment page header
    equipmentHeader: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/header.yml',
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
        })
      })
    }),

    // Equipment categories introduction
    equipmentIntro: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/intro.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string()
      })
    }),

    // CNC Milling equipment
    equipmentMilling: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/milling.yml',
      schema: z.object({
        title: z.string(),
        icon: z.string(),
        color: z.string(),
        machines: z.array(z.object({
          name: z.string(),
          specs: z.array(z.object({
            label: z.string(),
            value: z.string(),
            icon: z.string().optional(),
            hasIcon: z.boolean().optional()
          }))
        }))
      })
    }),

    // CNC Turning equipment
    equipmentTurning: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/turning.yml',
      schema: z.object({
        title: z.string(),
        icon: z.string(),
        color: z.string(),
        machines: z.array(z.object({
          name: z.string(),
          specs: z.array(z.object({
            label: z.string(),
            value: z.string(),
            icon: z.string().optional(),
            hasIcon: z.boolean().optional()
          }))
        }))
      })
    }),

    // Inspection & Quality equipment
    equipmentInspection: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/inspection.yml',
      schema: z.object({
        title: z.string(),
        icon: z.string(),
        color: z.string(),
        machines: z.array(z.object({
          name: z.string(),
          specs: z.array(z.object({
            label: z.string(),
            value: z.string(),
            icon: z.string().optional(),
            hasIcon: z.boolean().optional()
          }))
        }))
      })
    }),

    // Supporting equipment
    equipmentSupporting: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/supporting.yml',
      schema: z.object({
        title: z.string(),
        icon: z.string(),
        color: z.string(),
        categories: z.array(z.object({
          name: z.string(),
          items: z.array(z.string())
        }))
      })
    }),

    // Equipment capabilities summary
    equipmentCapabilities: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/capabilities.yml',
      schema: z.object({
        heading: z.string(),
        capabilities: z.array(z.object({
          title: z.string(),
          value: z.string(),
          description: z.string(),
          icon: z.string()
        }))
      })
    }),

    // Equipment call-to-action
    equipmentCta: defineCollection({
      type: 'data',
      source: 'capabilities/equipment/cta.yml',
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

    // Capabilities index page header
    capabilitiesHeader: defineCollection({
      type: 'data',
      source: 'capabilities/index/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Capabilities core services
    capabilitiesServices: defineCollection({
      type: 'data',
      source: 'capabilities/index/services.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        services: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          color: z.string(),
          features: z.array(z.string()),
          button: z.object({
            text: z.string(),
            link: z.string()
          })
        }))
      })
    }),

    // Capabilities materials expertise
    capabilitiesMaterials: defineCollection({
      type: 'data',
      source: 'capabilities/index/materials.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        materials: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          color: z.string()
        })),
        button: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Capabilities collaboration & DFM
    capabilitiesCollaboration: defineCollection({
      type: 'data',
      source: 'capabilities/index/collaboration.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        features: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        })),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        button: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Capabilities volume capabilities
    capabilitiesVolume: defineCollection({
      type: 'data',
      source: 'capabilities/index/volume.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        volumes: z.array(z.object({
          title: z.string(),
          description: z.string(),
          quantity: z.string(),
          icon: z.string(),
          color: z.string()
        }))
      })
    }),

    // Capabilities equipment overview
    capabilitiesEquipment: defineCollection({
      type: 'data',
      source: 'capabilities/index/equipment.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        equipment: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        })),
        button: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Capabilities call-to-action
    capabilitiesCta: defineCollection({
      type: 'data',
      source: 'capabilities/index/cta.yml',
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

    // Materials page header
    materialsHeader: defineCollection({
      type: 'data',
      source: 'capabilities/materials/header.yml',
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
        })
      })
    }),

    // Materials grid introduction
    materialsIntro: defineCollection({
      type: 'data',
      source: 'capabilities/materials/intro.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string()
      })
    }),

    // Materials categories
    materialsCategories: defineCollection({
      type: 'data',
      source: 'capabilities/materials/categories.yml',
      schema: z.object({
        categories: z.array(z.object({
          title: z.string(),
          icon: z.string(),
          color: z.string(),
          materials: z.array(z.object({
            name: z.string(),
            description: z.string(),
            applications: z.string(),
            featured: z.boolean().optional()
          }))
        }))
      })
    }),

    // Materials selection guide
    materialsGuide: defineCollection({
      type: 'data',
      source: 'capabilities/materials/guide.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        guides: z.array(z.object({
          title: z.string(),
          icon: z.string(),
          recommendations: z.array(z.string())
        })),
        button: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Materials custom materials section
    materialsCustom: defineCollection({
      type: 'data',
      source: 'capabilities/materials/custom.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        noticeTitle: z.string(),
        noticeDescription: z.string(),
        noticeIcon: z.string(),
        requirements: z.array(z.string())
      })
    }),

    // Materials call-to-action
    materialsCta: defineCollection({
      type: 'data',
      source: 'capabilities/materials/cta.yml',
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

    // Work page header
    workHeader: defineCollection({
      type: 'data',
      source: 'work/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        })
      })
    }),

    // Work page filters
    workFilters: defineCollection({
      type: 'data',
      source: 'work/filters.yml',
      schema: z.object({
        filters: z.array(z.object({
          label: z.string(),
          value: z.string()
        }))
      })
    }),

    // Work project portfolio
    workProjects: defineCollection({
      type: 'data',
      source: 'work/projects.yml',
      schema: z.object({
        projects: z.array(z.object({
          id: z.number(),
          title: z.string(),
          summary: z.string(),
          industry: z.string(),
          image: z.string(),
          tags: z.array(z.string()),
          challenge: z.string(),
          solution: z.string(),
          results: z.array(z.string()),
          material: z.string(),
          tolerance: z.string(),
          process: z.string()
        }))
      })
    }),

    // Work testimonials
    workTestimonials: defineCollection({
      type: 'data',
      source: 'work/testimonials.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        testimonials: z.array(z.object({
          id: z.number(),
          quote: z.string(),
          author: z.string(),
          title: z.string(),
          company: z.string()
        }))
      })
    }),

    // Work capabilities summary
    workCapabilities: defineCollection({
      type: 'data',
      source: 'work/capabilities.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        stats: z.array(z.object({
          value: z.string(),
          label: z.string()
        }))
      })
    }),

    // Work call-to-action
    workCta: defineCollection({
      type: 'data',
      source: 'work/cta.yml',
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

    // Contact page header
    contactHeader: defineCollection({
      type: 'data',
      source: 'contact/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        primaryButton: z.object({
          text: z.string(),
          link: z.string()
        }),
        secondaryButton: z.object({
          text: z.string(),
          link: z.string(),
          phone: z.string()
        })
      })
    }),

    // Contact information
    contactInfo: defineCollection({
      type: 'data',
      source: 'contact/info.yml',
      schema: z.object({
        heading: z.string(),
        phone: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          local: z.object({
            label: z.string(),
            number: z.string(),
            link: z.string()
          }),
          tollFree: z.object({
            label: z.string(),
            number: z.string(),
            link: z.string()
          })
        }),
        email: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          sales: z.object({
            label: z.string(),
            address: z.string(),
            link: z.string()
          }),
          general: z.object({
            label: z.string(),
            address: z.string(),
            link: z.string()
          })
        }),
        address: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          company: z.string(),
          street: z.string(),
          city: z.string(),
          country: z.string()
        }),
        hours: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          weekdays: z.string(),
          saturday: z.string(),
          sunday: z.string(),
          timezone: z.string()
        }),
        social: z.object({
          title: z.string(),
          links: z.array(z.object({
            platform: z.string(),
            url: z.string(),
            icon: z.string(),
            color: z.string(),
            label: z.string()
          }))
        })
      })
    }),

    // Contact form configuration
    contactForm: defineCollection({
      type: 'data',
      source: 'contact/form.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        subjects: z.array(z.object({
          value: z.string(),
          label: z.string()
        })),
        submitButton: z.object({
          default: z.string(),
          submitting: z.string()
        })
      })
    }),

    // Contact map section
    contactMap: defineCollection({
      type: 'data',
      source: 'contact/map.yml',
      schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        mapUrl: z.string(),
        facilityInfo: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string()
        }))
      })
    }),

    // Contact newsletter
    contactNewsletter: defineCollection({
      type: 'data',
      source: 'contact/newsletter.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        placeholder: z.string(),
        button: z.object({
          default: z.string(),
          submitting: z.string()
        }),
        privacy: z.string()
      })
    }),

    // Contact success modals
    contactModals: defineCollection({
      type: 'data',
      source: 'contact/modals.yml',
      schema: z.object({
        contactSuccess: z.object({
          icon: z.string(),
          title: z.string(),
          message: z.string(),
          button: z.string()
        }),
        newsletterSuccess: z.object({
          icon: z.string(),
          title: z.string(),
          message: z.string(),
          button: z.string()
        })
      })
    }),

    // Request quote page header
    quoteHeader: defineCollection({
      type: 'data',
      source: 'request-quote/header.yml',
      schema: z.object({
        title: z.string(),
        description: z.string()
      })
    }),

    // Request quote introduction
    quoteIntro: defineCollection({
      type: 'data',
      source: 'request-quote/intro.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        infoNeeded: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string()
        })),
        confidentiality: z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string()
        })
      })
    }),

    // Request quote form configuration
    quoteForm: defineCollection({
      type: 'data',
      source: 'request-quote/form.yml',
      schema: z.object({
        title: z.string(),
        inquiryTypes: z.array(z.object({
          value: z.string(),
          label: z.string()
        })),
        materials: z.array(z.object({
          group: z.string(),
          options: z.array(z.object({
            value: z.string(),
            label: z.string()
          }))
        })),
        quantities: z.array(z.object({
          value: z.string(),
          label: z.string()
        })),
        timelines: z.array(z.object({
          value: z.string(),
          label: z.string()
        })),
        applications: z.array(z.object({
          value: z.string(),
          label: z.string()
        })),
        fileUpload: z.object({
          title: z.string(),
          description: z.string(),
          supportedFormats: z.string(),
          maxSize: z.string(),
          browseText: z.string()
        }),
        ndaText: z.string(),
        buttons: z.object({
          submit: z.object({
            default: z.string(),
            submitting: z.string()
          }),
          clear: z.string()
        })
      })
    }),

    // Request quote alternative contact
    quoteContact: defineCollection({
      type: 'data',
      source: 'request-quote/contact.yml',
      schema: z.object({
        heading: z.string(),
        description: z.string(),
        phone: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          local: z.string(),
          tollFree: z.string(),
          hours: z.string()
        }),
        email: z.object({
          icon: z.string(),
          color: z.string(),
          title: z.string(),
          address: z.string(),
          responseTime: z.string()
        })
      })
    }),

    // Request quote success modal
    quoteModal: defineCollection({
      type: 'data',
      source: 'request-quote/modal.yml',
      schema: z.object({
        icon: z.string(),
        title: z.string(),
        message: z.string(),
        button: z.string()
      })
    })
  }
})