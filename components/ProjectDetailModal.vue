<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="project">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="$emit('close')"
    ></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="sticky top-0 bg-white border-b border-traxis-grey-200 px-6 py-4 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-traxis-grey-900">{{ project.title }}</h2>
          <button
            @click="$emit('close')"
            class="text-traxis-grey-400 hover:text-traxis-grey-600 transition-colors"
          >
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <!-- Project Image -->
          <div class="mb-8">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <!-- Tags and Industry -->
          <div class="mb-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="tag in project.tags"
                :key="tag"
                :class="[
                  'text-xs font-semibold px-3 py-1 rounded-full',
                  getTagColor(tag)
                ]"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-lg text-traxis-grey-600 font-medium">{{ project.industry }}</p>
          </div>
          
          <!-- Project Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-traxis-grey-50 rounded-lg p-6">
            <div class="text-center">
              <h4 class="font-semibold text-traxis-grey-900 mb-2">Material</h4>
              <p class="text-traxis-grey-600">{{ project.material }}</p>
            </div>
            <div class="text-center">
              <h4 class="font-semibold text-traxis-grey-900 mb-2">Tolerance</h4>
              <p class="text-traxis-grey-600">{{ project.tolerance }}</p>
            </div>
            <div class="text-center">
              <h4 class="font-semibold text-traxis-grey-900 mb-2">Process</h4>
              <p class="text-traxis-grey-600">{{ project.process }}</p>
            </div>
          </div>
          
          <!-- Challenge Section -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-traxis-grey-900 mb-4 flex items-center">
              <Icon name="mdi:alert-circle-outline" class="w-6 h-6 text-traxis-red-600 mr-2" />
              The Challenge
            </h3>
            <p class="text-traxis-grey-700 leading-relaxed">{{ project.challenge }}</p>
          </div>
          
          <!-- Solution Section -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-traxis-grey-900 mb-4 flex items-center">
              <Icon name="mdi:lightbulb-outline" class="w-6 h-6 text-traxis-grey-700 mr-2" />
              The Traxis Solution
            </h3>
            <p class="text-traxis-grey-700 leading-relaxed">{{ project.solution }}</p>
          </div>
          
          <!-- Results Section -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-traxis-grey-900 mb-4 flex items-center">
              <Icon name="mdi:check-circle-outline" class="w-6 h-6 text-traxis-red-600 mr-2" />
              The Results
            </h3>
            <ul class="space-y-2">
              <li 
                v-for="result in project.results"
                :key="result"
                class="flex items-start text-traxis-grey-700"
              >
                <Icon name="mdi:check" class="w-5 h-5 text-traxis-red-600 mr-2 mt-0.5 flex-shrink-0" />
                {{ result }}
              </li>
            </ul>
          </div>
          
          <!-- CTA Section -->
          <div class="bg-traxis-grey-50 rounded-lg p-6 text-center">
            <h4 class="text-lg font-semibold text-traxis-grey-900 mb-2">
              Have a Similar Challenge?
            </h4>
            <p class="text-traxis-grey-600 mb-4">
              Let's discuss how we can apply our expertise to your precision machining project.
            </p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <NuxtLink 
                to="/request-quote" 
                class="btn-primary"
                @click="$emit('close')"
              >
                Request a Quote
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class="btn-outline"
                @click="$emit('close')"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

const getTagColor = (tag) => {
  const colors = {
    'Aerospace': 'bg-traxis-red-100 text-traxis-red-800',
    'Medical': 'bg-traxis-grey-100 text-traxis-grey-800',
    'Industrial': 'bg-traxis-red-100 text-traxis-red-800',
    'CNC Milling': 'bg-traxis-grey-100 text-traxis-grey-800',
    'CNC Turning': 'bg-traxis-red-100 text-traxis-red-800',
    '5-Axis': 'bg-traxis-red-100 text-traxis-red-800',
    'Aluminum': 'bg-traxis-grey-100 text-traxis-grey-800',
    'Titanium': 'bg-traxis-red-100 text-traxis-red-800',
    'Stainless Steel': 'bg-traxis-grey-100 text-traxis-grey-800',
    'PEEK': 'bg-traxis-red-100 text-traxis-red-800'
  }
  return colors[tag] || 'bg-traxis-grey-100 text-traxis-grey-800'
}
</script>