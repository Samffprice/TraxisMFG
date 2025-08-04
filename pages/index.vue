<template>
  <div>
    <!-- Hero Section -->
    <HeroSection :hero="hero" />
    
    <!-- Trust Elements / Client Industries -->
    <section class="bg-gray-50 py-12">
      <div class="container-custom">
        <div class="text-center mb-8">
          <p class="text-gray-600 text-sm uppercase tracking-wide font-semibold mb-4">
            {{ industries.heading }}
          </p>
          <div class="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div 
              v-for="industry in industries.industries" 
              :key="industry.name"
              class="flex items-center space-x-2"
            >
              <Icon :name="industry.icon" class="w-6 h-6" />
              <span class="font-medium">{{ industry.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary Cards Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ services.heading }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ services.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            v-for="service in services.services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :link="service.link"
            :button-text="service.buttonText"
          />
        </div>
      </div>
    </section>

    <!-- Key Differentiators -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ advantages.heading }}
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="advantage in advantages.advantages" 
            :key="advantage.title"
            class="text-center"
          >
            <div :class="`w-16 h-16 ${advantage.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon :name="advantage.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">{{ advantage.title }}</h3>
            <p class="text-traxis-grey-600">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ testimonials.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ testimonials.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="testimonial in testimonials.testimonials" 
            :key="testimonial.author"
            class="bg-white rounded-lg shadow-md p-6 border-l-4 border-traxis-red-600"
          >
            <div class="flex items-start space-x-1 mb-4">
              <Icon 
                v-for="star in testimonial.rating" 
                :key="star"
                name="mdi:star" 
                class="w-5 h-5 text-yellow-400" 
              />
            </div>
            <p class="text-gray-600 mb-4 italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="text-sm">
              <p class="font-semibold text-gray-900">{{ testimonial.author }}</p>
              <p class="text-gray-500">{{ testimonial.role }} • {{ testimonial.timeAgo }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Project Spotlight -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ featuredProject.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ featuredProject.subheading }}
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div class="md:flex">
            <div class="md:w-1/2">
              <img 
                :src="featuredProject.project.image" 
                :alt="featuredProject.project.imageAlt" 
                class="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-8">
              <div class="mb-4">
                <span class="bg-traxis-red-100 text-traxis-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {{ featuredProject.project.category }}
                </span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {{ featuredProject.project.title }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ featuredProject.project.description }}
              </p>
              <div class="space-y-2 text-sm text-gray-600 mb-6">
                <p v-for="spec in featuredProject.project.specs" :key="spec.label">
                  <strong>{{ spec.label }}:</strong> 
                  <span v-if="spec.label === 'Industry Standard'">
                    <a href="https://www.asme.org/" target="_blank" rel="noopener noreferrer" class="text-traxis-red-600 hover:text-traxis-red-700 underline">{{ spec.value }}</a>
                  </span>
                  <span v-else>{{ spec.value }}</span>
                </p>
              </div>
              <NuxtLink :to="featuredProject.project.buttonLink" class="btn-outline">
                {{ featuredProject.project.buttonText }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ faqsContent.heading }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ faqsContent.subheading }}
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqsContent.faqs" 
            :key="index"
            class="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-traxis-red-500 focus:ring-inset"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
              <Icon 
                :name="activeFaq === index ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
                class="w-5 h-5 text-gray-500 flex-shrink-0 ml-2"
              />
            </button>
            <div 
              v-show="activeFaq === index"
              class="px-6 pb-4 border-t border-gray-200 bg-white"
            >
              <p class="text-gray-600 pt-4" v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Notice -->
    <section class="bg-gray-100 py-8">
      <div class="container-custom">
        <div class="bg-white rounded-lg border-l-4 border-traxis-red-600 p-6 shadow-sm">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <Icon :name="industryNotice.icon" class="w-6 h-6 text-traxis-red-600" />
            </div>
            <div class="ml-3">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ industryNotice.title }}
              </h3>
              <p class="text-gray-600">
                {{ industryNotice.description }}
                <span v-if="industryNotice.links">
                  Learn more about 
                  <template v-for="(link, index) in industryNotice.links" :key="link.text">
                    <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-traxis-red-600 hover:text-traxis-red-700 underline">{{ link.text }}</a><span v-if="index < industryNotice.links.length - 1"> and </span>
                  </template>
                  we comply with.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section :class="`section-padding ${cta.backgroundColor || 'bg-gray-900'} text-white`">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ cta.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ cta.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="cta.primaryButton.link" class="btn-primary text-lg px-8 py-4">
            {{ cta.primaryButton.text }}
          </NuxtLink>
          <NuxtLink :to="cta.secondaryButton.link" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ cta.secondaryButton.text }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Fetch content from collections using .first() to get single objects
const { data: hero } = await useAsyncData('home-hero', () => queryCollection('homeHero').first())
const { data: industries } = await useAsyncData('home-industries', () => queryCollection('homeIndustries').first())
const { data: services } = await useAsyncData('home-services', () => queryCollection('homeServices').first())
const { data: advantages } = await useAsyncData('home-advantages', () => queryCollection('homeAdvantages').first())
const { data: testimonials } = await useAsyncData('home-testimonials', () => queryCollection('homeTestimonials').first())
const { data: featuredProject } = await useAsyncData('home-featured-project', () => queryCollection('homeFeaturedProject').first())
const { data: faqsContent } = await useAsyncData('home-faqs', () => queryCollection('homeFaqs').first())
const { data: industryNotice } = await useAsyncData('home-industry-notice', () => queryCollection('homeIndustryNotice').first())
const { data: cta } = await useAsyncData('home-cta', () => queryCollection('homeCta').first())

// FAQ functionality
const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// SEO
useSEO({
  title: 'Traxis Manufacturing - Precision CNC Machining | Austin, TX',
  description: 'Austin based CNC machining experts for aerospace, medical & industrial applications. High precision manufacturing with personalized service.',
  keywords: 'CNC machining, precision manufacturing, Austin Texas, aerospace parts, medical devices, industrial components, tight tolerances',
  image: '/home-hero.webp'
})
</script>