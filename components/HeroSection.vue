<template>
  <section class="relative bg-traxis-grey-900 text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <OptimizedImage 
        :src="hero?.backgroundImage?.replace('.webp', '.jpg') || '/home-hero.jpg'" 
        :webp-src="hero?.backgroundImage || '/home-hero.webp'"
        alt="Traxis Manufacturing CNC Machining" 
        class="w-full h-full object-cover"
        loading="eager"
        width="1600"
        height="900"
      />
      <div class="absolute inset-0 bg-traxis-grey-900 bg-opacity-60"></div>
    </div>
    
    <!-- Content -->
    <div class="relative container-custom section-padding">
      <div class="max-w-4xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {{ hero?.title }}
          <span class="text-traxis-red-500">{{ hero?.subtitle }}</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-traxis-grey-200 mb-8 max-w-3xl">
          {{ hero?.description }}
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink :to="hero?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            <Icon name="mdi:file-document-outline" class="w-5 h-5 mr-2" />
            {{ hero?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
          <NuxtLink :to="hero?.secondaryButton?.link || '/work'" class="btn-outline text-lg px-8 py-4 bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            <Icon name="mdi:eye-outline" class="w-5 h-5 mr-2" />
            {{ hero?.secondaryButton?.text || 'See Our Work' }}
          </NuxtLink>
        </div>
        
        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-traxis-grey-600">
          <div 
            v-for="stat in hero?.stats" 
            :key="stat.label"
            class="text-center"
          >
            <div class="text-2xl font-bold text-traxis-red-500 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-traxis-grey-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Define props for hero content
defineProps({
  hero: {
    type: Object,
    default: () => ({})
  }
})
</script>