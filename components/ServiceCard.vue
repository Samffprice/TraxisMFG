<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden card-hover h-full">
    <div class="p-6 h-full flex flex-col">
      <!-- Icon -->
      <div class="mb-4">
        <div class="w-12 h-12 bg-gradient-to-br from-traxis-red-600 to-traxis-grey-700 rounded-lg flex items-center justify-center shadow-md">
          <Icon :name="icon" class="w-6 h-6 text-white" />
        </div>
      </div>
      
      <!-- Content -->
      <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-6 flex-grow">{{ description }}</p>
      
      <!-- CTA -->
      <NuxtLink 
        :to="link" 
        class="text-traxis-red-600 hover:text-traxis-grey-700 font-semibold inline-flex items-center transition-colors"
      >
        {{ buttonText || 'Learn More' }}
        <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Learn More'
  }
})
</script>