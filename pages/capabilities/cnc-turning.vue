<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-orange-600 to-orange-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-orange-200 text-sm mb-6">
          <template v-for="(breadcrumb, index) in cncTurningHeader?.breadcrumbs" :key="breadcrumb.text">
            <NuxtLink v-if="index < (cncTurningHeader?.breadcrumbs?.length || 1) - 1" :to="breadcrumb.link" class="hover:text-white">
              {{ breadcrumb.text }}
            </NuxtLink>
            <span v-else class="text-white">{{ breadcrumb.text }}</span>
            <span v-if="index < (cncTurningHeader?.breadcrumbs?.length || 1) - 1" class="mx-2">/</span>
          </template>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ cncTurningHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-orange-100 mb-8">
            {{ cncTurningHeader?.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink :to="cncTurningHeader?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
              {{ cncTurningHeader?.primaryButton?.text || 'Get Turning Quote' }}
            </NuxtLink>
            <NuxtLink :to="cncTurningHeader?.secondaryButton?.link || '/capabilities/equipment'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              {{ cncTurningHeader?.secondaryButton?.text || 'See Turning Equipment' }}
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
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ cncTurningService?.heading }}
            </h2>
            <p 
              v-for="paragraph in cncTurningService?.paragraphs" 
              :key="paragraph"
              class="text-lg text-gray-600 mb-6"
            >
              {{ paragraph }}
            </p>
            
            <div class="bg-orange-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
              <ul class="space-y-2">
                <li 
                  v-for="capability in cncTurningService?.capabilities" 
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
              :src="cncTurningService?.image?.src || 'https://images.unsplash.com/photo-1581091913692-7c5b6bbee7b7?w=800&h=600&fit=crop&crop=center'" 
              :alt="cncTurningService?.image?.alt || 'High-precision CNC turning machine with live tooling'" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Turning Capabilities -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ cncTurningCapabilities?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ cncTurningCapabilities?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="capability in cncTurningCapabilities?.capabilities" 
            :key="capability.title"
            :class="`bg-white rounded-lg p-8 shadow-sm ${capability.featured ? 'border-2 border-orange-600' : ''}`"
          >
            <div :class="`w-12 h-12 ${capability.color} rounded-lg flex items-center justify-center mb-4`">
              <Icon :name="capability.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ capability.title }}</h3>
            <p class="text-gray-600 mb-4">
              {{ capability.description }}
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li 
                v-for="feature in capability.features" 
                :key="feature"
                class="flex items-center"
              >
                <Icon name="mdi:circle-medium" :class="`w-4 h-4 mr-2 ${capability.color === 'bg-traxis-red-600' ? 'text-traxis-red-600' : 'text-orange-600'}`" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ cncTurningApplications?.heading }}
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="application in cncTurningApplications?.applications" 
            :key="application.title"
            class="text-center"
          >
            <Icon :name="application.icon" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ application.title }}</h3>
            <p class="text-sm text-gray-600">{{ application.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ cncTurningCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ cncTurningCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="cncTurningCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ cncTurningCta?.primaryButton?.text || 'Request Turning Quote' }}
          </NuxtLink>
          <NuxtLink :to="cncTurningCta?.secondaryButton?.link || '/capabilities/equipment'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ cncTurningCta?.secondaryButton?.text || 'See Turning Equipment' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: cncTurningHeader } = await useAsyncData('cnc-turning-header', () => queryCollection('cncTurningHeader').first())
const { data: cncTurningService } = await useAsyncData('cnc-turning-service', () => queryCollection('cncTurningService').first())
const { data: cncTurningCapabilities } = await useAsyncData('cnc-turning-capabilities', () => queryCollection('cncTurningCapabilities').first())
const { data: cncTurningApplications } = await useAsyncData('cnc-turning-applications', () => queryCollection('cncTurningApplications').first())
const { data: cncTurningCta } = await useAsyncData('cnc-turning-cta', () => queryCollection('cncTurningCta').first())

// SEO
useHead({
  title: 'CNC Turning Services - Precision Turning | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'High-precision CNC turning services with live tooling and Swiss-style capabilities. Round components, shafts, and cylindrical parts for aerospace, medical, and industrial applications.' 
    },
    { name: 'keywords', content: 'CNC turning, precision turning, live tooling, Swiss turning, shafts, cylindrical parts, round components' }
  ]
})
</script>