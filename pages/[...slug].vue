<template>
  <div>
    <!-- Document-driven mode with your beautiful styling -->
    <ContentLayout v-if="page" :content="page" />
    <div v-else class="container-custom section-padding text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p class="text-gray-600">The requested page could not be found.</p>
      <NuxtLink to="/" class="btn-primary mt-6 inline-block">
        Return Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Document-driven mode implementation for Nuxt Content v3
// Now with your beautiful existing design system applied to all content
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

// Set SEO based on content
if (page.value) {
  useSEO({
    title: `${page.value.title} - Traxis Manufacturing` || 'Traxis Manufacturing',
    description: page.value.description || 'Precision CNC machining services',
    image: page.value.image || '/home-hero.webp'
  })
}
</script>