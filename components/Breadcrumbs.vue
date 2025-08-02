<template>
  <nav class="bg-traxis-grey-50 border-b border-traxis-grey-200 py-3" aria-label="Breadcrumb">
    <div class="container-custom">
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <NuxtLink to="/" class="text-traxis-grey-600 hover:text-traxis-red-600 transition-colors duration-200">
            <Icon name="mdi:home" class="w-4 h-4" />
            <span class="sr-only">Home</span>
          </NuxtLink>
        </li>
        
        <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
          <Icon name="mdi:chevron-right" class="w-4 h-4 text-traxis-grey-400 mx-2" />
          <NuxtLink 
            v-if="crumb.to && index < breadcrumbs.length - 1"
            :to="crumb.to" 
            class="text-traxis-grey-600 hover:text-traxis-red-600 transition-colors duration-200"
          >
            {{ crumb.name }}
          </NuxtLink>
          <span 
            v-else 
            class="text-traxis-grey-900 font-medium"
            :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
          >
            {{ crumb.name }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const route = useRoute()
const config = useRuntimeConfig()

// Generate breadcrumbs based on current route if not provided
const breadcrumbs = computed(() => {
  if (props.items.length > 0) {
    return props.items
  }

  const pathSegments = route.path.split('/').filter(segment => segment)
  const crumbs = []
  
  for (let i = 0; i < pathSegments.length; i++) {
    const path = '/' + pathSegments.slice(0, i + 1).join('/')
    const segment = pathSegments[i]
    
    // Convert path segment to readable name
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    crumbs.push({
      name,
      to: i === pathSegments.length - 1 ? null : path // Don't link the current page
    })
  }
  
  return crumbs
})

// Generate structured data for breadcrumbs
const breadcrumbSchema = computed(() => {
  const baseUrl = config.public.siteUrl
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...breadcrumbs.value.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": crumb.to ? `${baseUrl}${crumb.to}` : undefined
      }))
    ]
  }
})

// Inject structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema.value)
    }
  ]
})
</script>