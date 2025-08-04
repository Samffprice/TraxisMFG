<template>
  <div>
    <!-- Page Header with your existing styling -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ content.title }}
          </h1>
          <p v-if="content.description" class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ content.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
              Work With Us
            </NuxtLink>
            <NuxtLink to="/capabilities" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              Our Capabilities
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section with your existing styling -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="prose prose-lg max-w-none">
            <!-- This is where the markdown content gets rendered with proper styling -->
            <div class="space-y-6 text-lg text-traxis-grey-600">
              <ContentRenderer :value="content" />
            </div>
          </div>
          <div v-if="content.image">
            <OptimizedImage 
              :src="content.image" 
              :webp-src="content.image?.replace('.jpg', '.webp')"
              :alt="content.title" 
              class="rounded-lg shadow-lg w-full"
              width="800"
              height="600"
              loading="lazy"
            />
            <p v-if="content.imageCaption" class="text-sm text-gray-500 mt-3 text-center">
              {{ content.imageCaption }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values section if content has values -->
    <section v-if="content.values" class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(value, index) in content.values" 
            :key="index"
            class="text-center"
          >
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon :name="value.icon || 'mdi:star'" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Sharing -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom text-center">
        <SocialShare 
          :title="content.title"
          :description="content.description"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<style>
/* Custom prose styling to match your design system */
.prose h2 {
  @apply text-3xl font-bold text-traxis-grey-900 mb-6 mt-8;
}

.prose h3 {
  @apply text-2xl font-semibold text-traxis-grey-900 mb-4 mt-6;
}

.prose p {
  @apply text-lg text-traxis-grey-600 mb-6 leading-relaxed;
}

.prose ul {
  @apply space-y-2 text-lg text-traxis-grey-600;
}

.prose li {
  @apply flex items-start;
}

.prose li::before {
  content: '';
  @apply w-2 h-2 bg-traxis-red-600 rounded-full mt-3 mr-3 flex-shrink-0;
}

.prose strong {
  @apply text-traxis-grey-900 font-semibold;
}
</style>