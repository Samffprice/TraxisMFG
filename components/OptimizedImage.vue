<template>
  <picture>
    <!-- WebP format for modern browsers -->
    <source 
      v-if="webpSrc" 
      :srcset="generateSrcSet(webpSrc)" 
      :sizes="sizes"
      type="image/webp"
    >
    
    <!-- Fallback to original format -->
    <img 
      :src="src"
      :srcset="generateSrcSet(src)"
      :sizes="sizes"
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
  
  const ext = baseSrc.split('.').pop()
  const baseName = baseSrc.replace(`.${ext}`, '')
  
  // Generate different sizes for responsive images
  return [
    `${baseName}-400w.${ext} 400w`,
    `${baseName}-800w.${ext} 800w`,
    `${baseName}-1200w.${ext} 1200w`,
    `${baseSrc} 1600w`
  ].join(', ')
}

const onLoad = (event) => {
  emit('load', event)
}

const onError = (event) => {
  emit('error', event)
}
</script>