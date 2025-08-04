<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ workHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ workHeader?.description }}
          </p>
          <NuxtLink :to="workHeader?.primaryButton?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
            {{ workHeader?.primaryButton?.text || 'Start Your Project' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="bg-white border-b border-traxis-grey-200 sticky top-16 z-40">
      <div class="container-custom">
        <div class="flex flex-wrap gap-4 py-6">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeFilter === filter.value
                ? 'bg-traxis-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Project Spotlights Grid -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer"
            @click="selectedProject = project"
          >
            <div class="aspect-w-16 aspect-h-10">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-48 object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                <span 
                  v-for="tag in project.tags"
                  :key="tag"
                  :class="[
                    'text-xs font-semibold px-2 py-1 rounded-full flex items-center',
                    getTagColor(tag)
                  ]"
                >
                  <Icon :name="getTagIcon(tag)" class="w-3 h-3 mr-1" />
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">{{ project.title }}</h3>
              <p class="text-traxis-grey-600 mb-4 line-clamp-3">{{ project.summary }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-traxis-grey-500">{{ project.industry }}</span>
                <Icon name="mdi:arrow-right" class="w-5 h-5 text-traxis-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ workTestimonials?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ workTestimonials?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-traxis-grey-50 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
              <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
              <div class="w-3 h-3 bg-orange-600 rounded-full"></div>
            </div>
            <blockquote class="text-gray-700 mb-4 italic">
              "{{ testimonial.quote }}"
            </blockquote>
            <footer class="text-sm text-traxis-grey-600">
              <strong>{{ testimonial.author }}</strong>
              <br>
              {{ testimonial.title }}, {{ testimonial.company }}
            </footer>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Summary -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ workCapabilities?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ workCapabilities?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            v-for="stat in workCapabilities?.stats"
            :key="stat.label"
          >
            <div class="text-3xl font-bold text-traxis-red-600 mb-2">{{ stat.value }}</div>
            <div class="text-traxis-grey-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-traxis-grey-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ workCta?.heading }}
        </h2>
        <p class="text-xl text-traxis-grey-300 mb-8 max-w-2xl mx-auto">
          {{ workCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="workCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ workCta?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
          <NuxtLink :to="workCta?.secondaryButton?.link || '/capabilities'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ workCta?.secondaryButton?.text || 'View Our Capabilities' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <ProjectDetailModal 
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Fetch content from collections using .first() to get single objects
const { data: workHeader } = await useAsyncData('work-header', () => queryCollection('workHeader').first())
const { data: workFilters } = await useAsyncData('work-filters', () => queryCollection('workFilters').first())
const { data: workProjects } = await useAsyncData('work-projects', () => queryCollection('workProjects').first())
const { data: workTestimonials } = await useAsyncData('work-testimonials', () => queryCollection('workTestimonials').first())
const { data: workCapabilities } = await useAsyncData('work-capabilities', () => queryCollection('workCapabilities').first())
const { data: workCta } = await useAsyncData('work-cta', () => queryCollection('workCta').first())

const activeFilter = ref('all')
const selectedProject = ref(null)

// Use filters from collections or fallback to default
const filters = computed(() => workFilters?.value?.filters || [
  { label: 'All Projects', value: 'all' },
  { label: 'Aerospace', value: 'aerospace' },
  { label: 'Medical', value: 'medical' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'CNC Milling', value: 'milling' },
  { label: 'CNC Turning', value: 'turning' }
])

// Use projects from collections or fallback to empty array
const projects = computed(() => workProjects?.value?.projects || [])

// Use testimonials from collections or fallback to empty array  
const testimonials = computed(() => workTestimonials?.value?.testimonials || [])

// Helper function to get appropriate icon for each tag
const getTagIcon = (tag) => {
  const iconMap = {
    'Aerospace': 'mdi:airplane',
    'Medical': 'mdi:medical-bag',
    'Industrial': 'mdi:factory',
    'Semiconductor': 'mdi:chip',
    'CNC Milling': 'mdi:cog-outline',
    'CNC Turning': 'mdi:rotate-3d-variant',
    '5-Axis': 'mdi:axis-z-rotate-clockwise',
    'Aluminum': 'mdi:gold',
    'Stainless Steel': 'mdi:iron',
    'Titanium': 'mdi:diamond-stone',
    'PEEK': 'mdi:chemical-weapon'
  }
  return iconMap[tag] || 'mdi:tag-outline'
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => 
    project.tags.some(tag => 
      tag.toLowerCase().includes(activeFilter.value) ||
      project.industry.toLowerCase().includes(activeFilter.value)
    )
  )
})

const getTagColor = (tag) => {
  const colors = {
    'Aerospace': 'bg-traxis-red-100 text-traxis-red-800',
    'Medical': 'bg-green-100 text-green-800',
    'Industrial': 'bg-orange-100 text-orange-800',
    'CNC Milling': 'bg-purple-100 text-purple-800',
    'CNC Turning': 'bg-yellow-100 text-yellow-800',
    '5-Axis': 'bg-red-100 text-red-800',
    'Aluminum': 'bg-gray-100 text-gray-800',
    'Titanium': 'bg-indigo-100 text-indigo-800',
    'Stainless Steel': 'bg-traxis-red-100 text-traxis-red-800',
    'PEEK': 'bg-pink-100 text-pink-800'
  }
  return colors[tag] || 'bg-gray-100 text-gray-800'
}

// SEO
useHead({
  title: 'Our Work - Project Portfolio | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Explore our portfolio of precision-machined components for aerospace, medical, and industrial applications. See how we solve complex manufacturing challenges with exceptional quality.' 
    },
    { name: 'keywords', content: 'precision machining portfolio, aerospace components, medical devices, industrial parts, CNC machining examples, project case studies' }
  ]
})
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>