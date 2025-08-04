<template>
  <div>
    <!-- Now using your beautiful existing design with content from markdown -->
    <ContentLayout v-if="page" :content="page" />
    <div v-else class="container-custom section-padding text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Content not found</h1>
      <p class="text-gray-600">The requested content could not be loaded.</p>
    </div>
  </div>
</template>

<script setup>
// This example shows how to use your beautiful existing design with Nuxt Content v3
// The ContentLayout component applies all your styling, components, and design system

const { data: page } = await useAsyncData('about-content', () => {
  return queryCollection('content').path('/about').first()
})

// Dynamic SEO based on content
if (page.value) {
  useSEO({
    title: `${page.value.title} - Traxis Manufacturing`,
    description: page.value.description || 'Traxis Manufacturing - Precision CNC machining services',
    image: page.value.image || '/about-us.webp'
  })
} else {
  useSEO({
    title: 'Content Example - Traxis Manufacturing',
    description: 'Example of how to use Nuxt Content for easy content management'
  })
}
</script>