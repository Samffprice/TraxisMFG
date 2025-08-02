<template>
  <section class="relative bg-traxis-grey-900 text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="/home-hero.jpg" 
        alt="Traxis Manufacturing CNC Machining" 
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-traxis-grey-900 bg-opacity-60"></div>
    </div>
    
    <!-- Content -->
    <div class="relative container-custom section-padding">
      <div class="max-w-4xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Precision CNC Machining with a 
          <span class="text-traxis-red-500">Partnership Approach</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-traxis-grey-200 mb-8 max-w-3xl">
          Your Austin-based experts in CNC milling and turning for aerospace, medical, 
          and industrial applications. Dedicated machinists providing personalized service.
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            <Icon name="mdi:file-document-outline" class="w-5 h-5 mr-2" />
            Request a Quote
          </NuxtLink>
          <NuxtLink to="/work" class="btn-outline text-lg px-8 py-4 bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            <Icon name="mdi:eye-outline" class="w-5 h-5 mr-2" />
            See Our Work
          </NuxtLink>
        </div>
        
        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-traxis-grey-600">
          <div class="text-center">
            <div class="text-2xl font-bold text-traxis-red-500 mb-1">15+</div>
            <div class="text-sm text-traxis-grey-300">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-traxis-red-500 mb-1">±0.001"</div>
            <div class="text-sm text-traxis-grey-300">Precision Tolerance</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-traxis-red-500 mb-1">6 Week</div>
            <div class="text-sm text-traxis-grey-300">Standard Turnaround</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-traxis-red-500 mb-1">100%</div>
            <div class="text-sm text-traxis-grey-300">Austin-Based</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon
</script>