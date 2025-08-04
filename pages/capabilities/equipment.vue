<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-purple-200 text-sm mb-6">
          <template v-for="(breadcrumb, index) in equipmentHeader?.breadcrumbs" :key="breadcrumb.text">
            <NuxtLink v-if="index < (equipmentHeader?.breadcrumbs?.length || 1) - 1" :to="breadcrumb.link" class="hover:text-white">
              {{ breadcrumb.text }}
            </NuxtLink>
            <span v-else class="text-white">{{ breadcrumb.text }}</span>
            <span v-if="index < (equipmentHeader?.breadcrumbs?.length || 1) - 1" class="mx-2">/</span>
          </template>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ equipmentHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-purple-100 mb-8">
            {{ equipmentHeader?.description }}
          </p>
          <NuxtLink :to="equipmentHeader?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ equipmentHeader?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Equipment Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ equipmentIntro?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ equipmentIntro?.subheading }}
          </p>
        </div>
        
        <!-- CNC Milling Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div :class="`w-12 h-12 ${equipmentMilling?.color} rounded-lg flex items-center justify-center mr-4`">
              <Icon :name="equipmentMilling?.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">{{ equipmentMilling?.title }}</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              v-for="machine in equipmentMilling?.machines" 
              :key="machine.name"
              class="bg-gray-50 rounded-lg p-6"
            >
              <h4 class="text-xl font-semibold text-gray-900 mb-4">{{ machine.name }}</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p 
                  v-for="spec in machine.specs" 
                  :key="spec.label"
                  :class="spec.hasIcon ? 'flex items-center' : ''"
                >
                  <Icon 
                    v-if="spec.hasIcon && spec.icon" 
                    :name="spec.icon" 
                    class="w-4 h-4 text-traxis-red-600 mr-2" 
                  />
                  <template v-if="spec.hasIcon">
                    <strong>{{ spec.label }}:</strong> {{ spec.value }}
                  </template>
                  <template v-else>
                    <strong>{{ spec.label }}:</strong> {{ spec.value }}
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CNC Turning Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div :class="`w-12 h-12 ${equipmentTurning?.color} rounded-lg flex items-center justify-center mr-4`">
              <Icon :name="equipmentTurning?.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">{{ equipmentTurning?.title }}</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              v-for="machine in equipmentTurning?.machines" 
              :key="machine.name"
              class="bg-gray-50 rounded-lg p-6"
            >
              <h4 class="text-xl font-semibold text-gray-900 mb-4">{{ machine.name }}</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p 
                  v-for="spec in machine.specs" 
                  :key="spec.label"
                  :class="spec.hasIcon ? 'flex items-center' : ''"
                >
                  <Icon 
                    v-if="spec.hasIcon && spec.icon" 
                    :name="spec.icon" 
                    class="w-4 h-4 text-orange-600 mr-2" 
                  />
                  <template v-if="spec.hasIcon">
                    <strong>{{ spec.label }}:</strong> {{ spec.value }}
                  </template>
                  <template v-else>
                    <strong>{{ spec.label }}:</strong> {{ spec.value }}
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Inspection & Quality Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div :class="`w-12 h-12 ${equipmentInspection?.color} rounded-lg flex items-center justify-center mr-4`">
              <Icon :name="equipmentInspection?.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">{{ equipmentInspection?.title }}</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              v-for="machine in equipmentInspection?.machines" 
              :key="machine.name"
              class="bg-gray-50 rounded-lg p-6"
            >
              <h4 class="text-xl font-semibold text-gray-900 mb-4">{{ machine.name }}</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p 
                  v-for="spec in machine.specs" 
                  :key="spec.label"
                >
                  <strong>{{ spec.label }}:</strong> {{ spec.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Supporting Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div :class="`w-12 h-12 ${equipmentSupporting?.color} rounded-lg flex items-center justify-center mr-4`">
              <Icon :name="equipmentSupporting?.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">{{ equipmentSupporting?.title }}</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="category in equipmentSupporting?.categories" 
              :key="category.name"
              class="bg-gray-50 rounded-lg p-6"
            >
              <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ category.name }}</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li 
                  v-for="item in category.items" 
                  :key="item"
                >
                  • {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Summary -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ equipmentCapabilities?.heading }}
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="capability in equipmentCapabilities?.capabilities" 
            :key="capability.title"
            class="text-center bg-white rounded-lg p-6 shadow-sm"
          >
            <Icon :name="capability.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ capability.title }}</h3>
            <p class="text-2xl font-bold text-traxis-red-600 mb-1">{{ capability.value }}</p>
            <p class="text-sm text-gray-600">{{ capability.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ equipmentCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ equipmentCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="equipmentCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ equipmentCta?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
          <NuxtLink :to="equipmentCta?.secondaryButton?.link || '/capabilities'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ equipmentCta?.secondaryButton?.text || 'Explore Our Services' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: equipmentHeader } = await useAsyncData('equipment-header', () => queryCollection('equipmentHeader').first())
const { data: equipmentIntro } = await useAsyncData('equipment-intro', () => queryCollection('equipmentIntro').first())
const { data: equipmentMilling } = await useAsyncData('equipment-milling', () => queryCollection('equipmentMilling').first())
const { data: equipmentTurning } = await useAsyncData('equipment-turning', () => queryCollection('equipmentTurning').first())
const { data: equipmentInspection } = await useAsyncData('equipment-inspection', () => queryCollection('equipmentInspection').first())
const { data: equipmentSupporting } = await useAsyncData('equipment-supporting', () => queryCollection('equipmentSupporting').first())
const { data: equipmentCapabilities } = await useAsyncData('equipment-capabilities', () => queryCollection('equipmentCapabilities').first())
const { data: equipmentCta } = await useAsyncData('equipment-cta', () => queryCollection('equipmentCta').first())

// SEO
useHead({
  title: 'Equipment List - CNC Machines & Inspection | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Complete equipment list including CNC milling centers, turning centers, 5-axis machining, CMM inspection, and precision measurement equipment for tight tolerance manufacturing.' 
    },
    { name: 'keywords', content: 'CNC equipment list, 5-axis machining, CMM inspection, precision equipment, Haas, DMG Mori, Mazak, Doosan, machining centers' }
  ]
})
</script>