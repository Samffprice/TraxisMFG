<template>
  <div>
    <Breadcrumbs />
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <nav class="text-traxis-grey-200 text-sm mb-6">
          <template v-for="(breadcrumb, index) in cncMillingHeader?.breadcrumbs" :key="breadcrumb.text">
            <NuxtLink v-if="index < (cncMillingHeader?.breadcrumbs?.length || 1) - 1" :to="breadcrumb.link" class="hover:text-white">
              {{ breadcrumb.text }}
            </NuxtLink>
            <span v-else class="text-white">{{ breadcrumb.text }}</span>
            <span v-if="index < (cncMillingHeader?.breadcrumbs?.length || 1) - 1" class="mx-2">/</span>
          </template>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ cncMillingHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ cncMillingHeader?.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink :to="cncMillingHeader?.primaryButton?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
              {{ cncMillingHeader?.primaryButton?.text || 'Get Milling Quote' }}
            </NuxtLink>
            <NuxtLink :to="cncMillingHeader?.secondaryButton?.link || '/capabilities/equipment'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              {{ cncMillingHeader?.secondaryButton?.text || 'See Milling Equipment' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Description -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              {{ cncMillingService?.heading }}
            </h2>
            <p 
              v-for="paragraph in cncMillingService?.paragraphs" 
              :key="paragraph"
              class="text-lg text-traxis-grey-600 mb-6"
            >
              {{ paragraph }}
            </p>
            
            <div class="bg-traxis-grey-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">Key Capabilities</h3>
              <ul class="space-y-2">
                <li 
                  v-for="capability in cncMillingService?.capabilities" 
                  :key="capability.text"
                  class="flex items-center text-gray-700"
                >
                  <Icon :name="capability.icon" class="w-5 h-5 text-green-600 mr-3" />
                  {{ capability.text }}
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img 
              :src="cncMillingService?.image?.src || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center'" 
              :alt="cncMillingService?.image?.alt || 'High-precision CNC milling machine in operation'" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Milling Capabilities -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ cncMillingCapabilities?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ cncMillingCapabilities?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="capability in cncMillingCapabilities?.capabilities" 
            :key="capability.title"
            :class="`bg-white rounded-lg p-8 shadow-sm ${capability.featured ? 'border-2 border-traxis-red-600' : ''}`"
          >
            <div :class="`w-12 h-12 ${capability.color} rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="capability.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">{{ capability.title }}</h3>
            <p class="text-traxis-grey-600 mb-4">
              {{ capability.description }}
            </p>
            <ul class="space-y-2 text-sm text-traxis-grey-600">
              <li 
                v-for="feature in capability.features" 
                :key="feature"
                class="flex items-center"
              >
                <Icon name="mdi:circle-medium" :class="`w-4 h-4 mr-2 ${capability.color === 'bg-traxis-grey-700' ? 'text-traxis-grey-700' : 'text-traxis-red-600'}`" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Expertise -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ cncMillingMaterials?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ cncMillingMaterials?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="category in cncMillingMaterials?.categories" 
            :key="category.title"
            class="text-center p-6"
          >
            <h3 class="text-lg font-semibold text-traxis-grey-900 mb-3">{{ category.title }}</h3>
            <ul class="space-y-1 text-sm text-traxis-grey-600">
              <li v-for="material in category.materials" :key="material">
                {{ material }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink :to="cncMillingMaterials?.viewAllButton?.link || '/capabilities/materials'" class="btn-outline">
            {{ cncMillingMaterials?.viewAllButton?.text || 'View Complete Materials List' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Applications & Industries -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ cncMillingApplications?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ cncMillingApplications?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="industry in cncMillingApplications?.industries" 
            :key="industry.title"
            class="bg-white rounded-lg p-6 shadow-sm"
          >
            <div class="flex items-center mb-4">
              <Icon :name="industry.icon" class="w-8 h-8 text-traxis-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-traxis-grey-900">{{ industry.title }}</h3>
            </div>
            <ul class="space-y-2 text-traxis-grey-600">
              <li v-for="application in industry.applications" :key="application">
                • {{ application }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality & Inspection -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              :src="cncMillingQuality?.image?.src || 'https://images.unsplash.com/photo-1581092335878-7d6d14e42dd8?w=800&h=600&fit=crop&crop=center'" 
              :alt="cncMillingQuality?.image?.alt || 'Quality inspection and measurement equipment'" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              {{ cncMillingQuality?.heading }}
            </h2>
            <p class="text-lg text-traxis-grey-600 mb-6">
              {{ cncMillingQuality?.description }}
            </p>
            
            <div class="space-y-4">
              <div 
                v-for="feature in cncMillingQuality?.features" 
                :key="feature.title"
                class="flex items-start"
              >
                <Icon :name="feature.icon" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                <div>
                  <h4 class="font-semibold text-traxis-grey-900">{{ feature.title }}</h4>
                  <p class="text-traxis-grey-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ cncMillingCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ cncMillingCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="cncMillingCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ cncMillingCta?.primaryButton?.text || 'Request Milling Quote' }}
          </NuxtLink>
          <NuxtLink :to="cncMillingCta?.secondaryButton?.link || '/capabilities/equipment'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ cncMillingCta?.secondaryButton?.text || 'View Equipment List' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: cncMillingHeader } = await useAsyncData('cnc-milling-header', () => queryCollection('cncMillingHeader').first())
const { data: cncMillingService } = await useAsyncData('cnc-milling-service', () => queryCollection('cncMillingService').first())
const { data: cncMillingCapabilities } = await useAsyncData('cnc-milling-capabilities', () => queryCollection('cncMillingCapabilities').first())
const { data: cncMillingMaterials } = await useAsyncData('cnc-milling-materials', () => queryCollection('cncMillingMaterials').first())
const { data: cncMillingApplications } = await useAsyncData('cnc-milling-applications', () => queryCollection('cncMillingApplications').first())
const { data: cncMillingQuality } = await useAsyncData('cnc-milling-quality', () => queryCollection('cncMillingQuality').first())
const { data: cncMillingCta } = await useAsyncData('cnc-milling-cta', () => queryCollection('cncMillingCta').first())

// SEO
useHead({
  title: 'CNC Milling Services - Precision Machining | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'High-precision CNC milling services with 3, 4, and 5-axis capabilities. Complex geometries, tight tolerances, and superior surface finishes for aerospace, medical, and industrial applications.' 
    },
    { name: 'keywords', content: 'CNC milling, 5-axis machining, precision milling, complex geometries, tight tolerances, aerospace components, medical devices' }
  ]
})
</script>