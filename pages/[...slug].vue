<template>
  <div>
    <!-- Document-driven mode for Nuxt Content v3 -->
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      <h1>Page not found</h1>
      <p>The requested page could not be found.</p>
    </div>
  </div>
</template>

<script setup>
// Document-driven mode implementation for Nuxt Content v3
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

// Set SEO based on content
if (page.value) {
  useSEO({
    title: page.value.title || 'Traxis Manufacturing',
    description: page.value.description || 'Precision CNC machining services'
  })
}
</script>