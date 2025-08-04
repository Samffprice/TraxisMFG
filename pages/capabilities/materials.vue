<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-green-600 to-green-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-green-200 text-sm mb-6">
          <template v-for="(breadcrumb, index) in materialsHeader?.breadcrumbs" :key="breadcrumb.text">
            <NuxtLink v-if="index < (materialsHeader?.breadcrumbs?.length || 1) - 1" :to="breadcrumb.link" class="hover:text-white">
              {{ breadcrumb.text }}
            </NuxtLink>
            <span v-else class="text-white">{{ breadcrumb.text }}</span>
            <span v-if="index < (materialsHeader?.breadcrumbs?.length || 1) - 1" class="mx-2">/</span>
          </template>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ materialsHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-green-100 mb-8">
            {{ materialsHeader?.description }}
          </p>
          <NuxtLink :to="materialsHeader?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ materialsHeader?.primaryButton?.text || 'Get Material Quote' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Materials Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ materialsIntro?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ materialsIntro?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            v-for="category in materialsCategories?.categories" 
            :key="category.title"
            class="bg-gray-50 rounded-lg p-8"
          >
            <div class="flex items-center mb-6">
              <div :class="`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`">
                <Icon :name="category.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ category.title }}</h3>
            </div>
            
            <div class="space-y-6">
              <div 
                v-for="material in category.materials" 
                :key="material.name"
              >
                <h4 :class="`font-semibold text-gray-900 mb-2 ${material.featured ? 'flex items-center' : ''}`">
                  <Icon v-if="material.featured" name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                  {{ material.name }}
                </h4>
                <p class="text-sm text-gray-600 mb-2">{{ material.description }}</p>
                <p :class="`text-xs text-gray-500 ${material.featured ? 'flex items-center' : ''}`">
                  <Icon v-if="material.featured" name="mdi:application" class="w-3 h-3 text-gray-400 mr-1" />
                  {{ material.applications }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Material Selection Guide -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ materialsGuide?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ materialsGuide?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="guide in materialsGuide?.guides" 
            :key="guide.title"
            class="bg-white rounded-lg p-6 shadow-sm"
          >
            <Icon :name="guide.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-3 text-center">{{ guide.title }}</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li 
                v-for="recommendation in guide.recommendations" 
                :key="recommendation"
              >
                • {{ recommendation }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink :to="materialsGuide?.button?.link || '/contact'" class="btn-primary text-lg px-8 py-4">
            {{ materialsGuide?.button?.text || 'Get Material Consultation' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Custom Materials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ materialsCustom?.heading }}
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            {{ materialsCustom?.description }}
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-6 max-w-4xl mx-auto text-left">
            <div class="flex items-start">
              <Icon :name="materialsCustom?.noticeIcon || 'mdi:information'" class="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ materialsCustom?.noticeTitle }}</h3>
                <p class="text-gray-700 mb-4">
                  {{ materialsCustom?.noticeDescription }}
                </p>
                <ul class="space-y-1 text-sm text-gray-600">
                  <li 
                    v-for="requirement in materialsCustom?.requirements" 
                    :key="requirement"
                  >
                    • {{ requirement }}
                  </li>
                </ul>
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
          {{ materialsCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ materialsCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="materialsCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ materialsCta?.primaryButton?.text || 'Request Material Quote' }}
          </NuxtLink>
          <NuxtLink :to="materialsCta?.secondaryButton?.link || '/contact'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ materialsCta?.secondaryButton?.text || 'Material Consultation' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: materialsHeader } = await useAsyncData('materials-header', () => queryCollection('materialsHeader').first())
const { data: materialsIntro } = await useAsyncData('materials-intro', () => queryCollection('materialsIntro').first())
const { data: materialsCategories } = await useAsyncData('materials-categories', () => queryCollection('materialsCategories').first())
const { data: materialsGuide } = await useAsyncData('materials-guide', () => queryCollection('materialsGuide').first())
const { data: materialsCustom } = await useAsyncData('materials-custom', () => queryCollection('materialsCustom').first())
const { data: materialsCta } = await useAsyncData('materials-cta', () => queryCollection('materialsCta').first())

// SEO
useHead({
  title: 'Materials We Machine - Metals, Alloys & Plastics | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Comprehensive materials expertise including aluminum alloys, stainless steel, engineering plastics, and specialty alloys. Expert material selection for precision CNC machining.' 
    },
    { name: 'keywords', content: 'machining materials, aluminum alloys, stainless steel, PEEK, Delrin, titanium, Inconel, engineering plastics, material selection' }
  ]
})
</script>