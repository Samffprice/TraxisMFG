<template>
  <picture>
    <!-- WebP format for modern browsers -->
    <source 
      v-if="webpSrc" 
      :srcset="webpSrc" 
      type="image/webp"
    >
    
    <!-- Fallback to original format -->
    <img 
      :src="src"
      :alt="alt"
      :class="imageClass"
      :loading="loading"
      :width="width"
      :height="height"
      @load="onLoad"
      @error="onError"
    >
  </picture>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  webpSrc: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    required: true
  },
  sizes: {
    type: String,
    default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number], 
    default: null
  },
  class: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  }
})

const emit = defineEmits(['load', 'error'])

const imageClass = computed(() => props.class)

const generateSrcSet = (baseSrc) => {
  if (!baseSrc) return ''
  
  // For now, just return the base source since we don't have multiple sizes
  // In production, you would generate multiple image sizes and use them here
  return baseSrc
}

const onLoad = (event) => {
  emit('load', event)
}

const onError = (event) => {
  emit('error', event)
}
</script>