<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Example of using content from markdown files in v3 -->
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      <p>Content not found</p>
    </div>
  </div>
</template>

<script setup>
// This is an example page showing how to use Nuxt Content v3
// In v3, we need to query content explicitly and use ContentRenderer

const { data: page } = await useAsyncData('about-content', () => {
  return queryCollection('content').path('/about').first()
})

useSEO({
  title: 'Content Example - Traxis Manufacturing',
  description: 'Example of how to use Nuxt Content for easy content management'
})
</script>