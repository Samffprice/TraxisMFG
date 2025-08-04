<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ capabilitiesHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ capabilitiesHeader?.description }}
          </p>
          <NuxtLink :to="capabilitiesHeader?.primaryButton?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
            {{ capabilitiesHeader?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Services Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ capabilitiesServices?.heading }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ capabilitiesServices?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            v-for="service in capabilitiesServices?.services" 
            :key="service.title"
            class="bg-gray-50 rounded-xl p-8"
          >
            <div class="flex items-center mb-6">
              <div :class="`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`">
                <Icon :name="service.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ service.title }}</h3>
            </div>
            <p class="text-gray-600 mb-6">
              {{ service.description }}
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center"
              >
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                {{ feature }}
              </li>
            </ul>
            <NuxtLink :to="service.button.link" class="btn-outline">
              {{ service.button.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Expertise -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ capabilitiesMaterials?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ capabilitiesMaterials?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="material in capabilitiesMaterials?.materials" 
            :key="material.title"
            class="text-center"
          >
            <div :class="`w-16 h-16 ${material.color} rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon :name="material.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ material.title }}</h3>
            <p class="text-sm text-gray-600">{{ material.description }}</p>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink :to="capabilitiesMaterials?.button?.link || '/capabilities/materials'" class="btn-primary">
            {{ capabilitiesMaterials?.button?.text || 'View Complete Materials List' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Collaboration & Design Support -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ capabilitiesCollaboration?.heading }}
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              {{ capabilitiesCollaboration?.description }}
            </p>
            
            <div class="space-y-4 mb-8">
              <div 
                v-for="feature in capabilitiesCollaboration?.features" 
                :key="feature.title"
                class="flex items-start"
              >
                <div class="w-6 h-6 bg-traxis-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Icon :name="feature.icon" class="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ feature.title }}</h4>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <NuxtLink :to="capabilitiesCollaboration?.button?.link || '/process'" class="btn-primary">
              {{ capabilitiesCollaboration?.button?.text || 'Learn About Our Process' }}
            </NuxtLink>
          </div>
          
          <div class="lg:text-center">
            <img 
              :src="capabilitiesCollaboration?.image?.src || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center'" 
              :alt="capabilitiesCollaboration?.image?.alt || 'Design collaboration and DFM process'" 
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Volume Capabilities -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ capabilitiesVolume?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ capabilitiesVolume?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="volume in capabilitiesVolume?.volumes" 
            :key="volume.title"
            class="text-center bg-white rounded-lg p-8 shadow-sm"
          >
            <div :class="`w-16 h-16 ${volume.color} rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon :name="volume.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ volume.title }}</h3>
            <p class="text-gray-600 mb-4">
              {{ volume.description }}
            </p>
            <div class="text-sm text-gray-500">
              {{ volume.quantity }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ capabilitiesEquipment?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ capabilitiesEquipment?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div 
            v-for="equipment in capabilitiesEquipment?.equipment" 
            :key="equipment.title"
            class="text-center"
          >
            <Icon :name="equipment.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ equipment.title }}</h3>
            <p class="text-gray-600">{{ equipment.description }}</p>
          </div>
        </div>
        
        <div class="text-center">
          <NuxtLink :to="capabilitiesEquipment?.button?.link || '/capabilities/equipment'" class="btn-primary text-lg px-8 py-4">
            {{ capabilitiesEquipment?.button?.text || 'See All Equipment' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ capabilitiesCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ capabilitiesCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="capabilitiesCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ capabilitiesCta?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
          <NuxtLink :to="capabilitiesCta?.secondaryButton?.link || '/contact'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ capabilitiesCta?.secondaryButton?.text || 'Start Project' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: capabilitiesHeader } = await useAsyncData('capabilities-header', () => queryCollection('capabilitiesHeader').first())
const { data: capabilitiesServices } = await useAsyncData('capabilities-services', () => queryCollection('capabilitiesServices').first())
const { data: capabilitiesMaterials } = await useAsyncData('capabilities-materials', () => queryCollection('capabilitiesMaterials').first())
const { data: capabilitiesCollaboration } = await useAsyncData('capabilities-collaboration', () => queryCollection('capabilitiesCollaboration').first())
const { data: capabilitiesVolume } = await useAsyncData('capabilities-volume', () => queryCollection('capabilitiesVolume').first())
const { data: capabilitiesEquipment } = await useAsyncData('capabilities-equipment', () => queryCollection('capabilitiesEquipment').first())
const { data: capabilitiesCta } = await useAsyncData('capabilities-cta', () => queryCollection('capabilitiesCta').first())

// SEO
useHead({
  title: 'CNC Machining Capabilities - Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Advanced CNC milling and turning capabilities for aerospace, medical, and industrial applications. Precision machining with tight tolerances and expert DFM collaboration.' 
    },
    { name: 'keywords', content: 'CNC milling, CNC turning, precision machining, 5-axis machining, DFM, design for manufacturability, Austin Texas' }
  ]
})
</script>