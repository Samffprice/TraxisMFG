<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ processHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ processHeader?.description }}
          </p>
          <NuxtLink :to="processHeader?.button?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
            {{ processHeader?.button?.text || 'Start Your Project' }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ processSteps?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600 max-w-3xl mx-auto">
            {{ processSteps?.subheading }}
          </p>
        </div>
        
        <div class="space-y-16">
          <div 
            v-for="step in processSteps?.steps" 
            :key="step.stepNumber"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <!-- Content Section - Odd steps on left, Even steps on right -->
            <div :class="step.stepNumber % 2 === 1 ? 'lg:order-1' : 'lg:order-2'">
              <div class="flex items-center mb-6">
                <div :class="`w-16 h-16 ${step.stepColor} rounded-full flex items-center justify-center mr-4`">
                  <span class="text-white text-xl font-bold">{{ step.stepNumber }}</span>
                </div>
                <h3 class="text-2xl font-bold text-traxis-grey-900">{{ step.title }}</h3>
              </div>
              <p class="text-lg text-traxis-grey-600 mb-6">
                {{ step.description }}
              </p>
              
              <!-- Accepted Formats (Step 1) -->
              <div v-if="step.acceptedFormats" class="bg-traxis-grey-50 rounded-lg p-6 mb-6">
                <h4 class="font-semibold text-traxis-grey-900 mb-3">We Accept:</h4>
                <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div 
                    v-for="format in step.acceptedFormats" 
                    :key="format"
                    class="flex items-center"
                  >
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    {{ format }}
                  </div>
                </div>
              </div>
              
              <!-- Features List (Step 2 & 4) -->
              <div v-if="step.features" class="space-y-4 mb-6">
                <div 
                  v-for="feature in step.features" 
                  :key="feature.title"
                  class="flex items-start"
                >
                  <Icon :name="feature.icon" :class="`w-6 h-6 ${step.iconColor} mr-3 mt-1`" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">{{ feature.title }}</h4>
                    <p class="text-traxis-grey-600">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Highlights Grid (Step 3) -->
              <div v-if="step.highlights" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div 
                  v-for="highlight in step.highlights" 
                  :key="highlight.title"
                  class="bg-traxis-grey-50 rounded-lg p-4"
                >
                  <Icon :name="highlight.icon" :class="`w-8 h-8 ${step.iconColor} mb-2`" />
                  <h4 class="font-semibold text-traxis-grey-900 mb-1">{{ highlight.title }}</h4>
                  <p class="text-sm text-traxis-grey-600">{{ highlight.description }}</p>
                </div>
              </div>
              
              <!-- Button (if exists) -->
              <NuxtLink 
                v-if="step.button" 
                :to="step.button.link" 
                class="btn-primary"
              >
                {{ step.button.text }}
              </NuxtLink>
            </div>
            
            <!-- Icon Section - Odd steps on right, Even steps on left -->
            <div :class="step.stepNumber % 2 === 1 ? 'lg:order-2' : 'lg:order-1'">
              <div class="text-center">
                <Icon :name="step.icon" :class="`w-32 h-32 ${step.iconColor} mx-auto mb-4`" />
                <p class="text-traxis-grey-600">
                  <span v-if="step.stepNumber === 1">Upload your CAD files and project details</span>
                  <span v-else-if="step.stepNumber === 2">Collaborative design review and DFM feedback</span>
                  <span v-else-if="step.stepNumber === 3">State-of-the-art manufacturing floor</span>
                  <span v-else-if="step.stepNumber === 4">Rigorous quality assurance and inspection</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Information -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ processTimeline?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ processTimeline?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Standard Timeline -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon :name="processTimeline?.standard?.icon || 'mdi:calendar-clock'" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-traxis-grey-900">{{ processTimeline?.standard?.title }}</h3>
            </div>
            <div class="text-center mb-6">
              <div class="text-4xl font-bold text-traxis-red-600 mb-2">{{ processTimeline?.standard?.duration }}</div>
              <p class="text-traxis-grey-600">Typical production timeline</p>
            </div>
            <p class="text-traxis-grey-600 text-center mb-6">
              {{ processTimeline?.standard?.description }}
            </p>
            <div class="space-y-3">
              <div 
                v-for="(breakdown, index) in processTimeline?.standard?.breakdown" 
                :key="breakdown.phase"
                :class="`flex justify-between items-center py-2 ${index < (processTimeline?.standard?.breakdown?.length || 1) - 1 ? 'border-b border-gray-100' : ''}`"
              >
                <span class="text-traxis-grey-600">{{ breakdown.phase }}</span>
                <span class="font-semibold text-traxis-grey-900">{{ breakdown.duration }}</span>
              </div>
            </div>
          </div>

          <!-- Expedited Service -->
          <div class="bg-white rounded-lg p-8 shadow-sm border-2 border-orange-600">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-traxis-grey-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon :name="processTimeline?.expedited?.icon || 'mdi:lightning-bolt'" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-traxis-grey-900">{{ processTimeline?.expedited?.title }}</h3>
            </div>
            <div class="text-center mb-6">
              <div class="text-2xl font-bold text-traxis-grey-700 mb-2">{{ processTimeline?.expedited?.subtitle }}</div>
              <p class="text-traxis-grey-600">For urgent requirements</p>
            </div>
            <p class="text-traxis-grey-600 text-center mb-6">
              {{ processTimeline?.expedited?.description }}
            </p>
            <div class="bg-orange-50 rounded-lg p-4 mb-6">
              <h4 class="font-semibold text-traxis-grey-900 mb-2">Rush Service Criteria:</h4>
              <ul class="space-y-1 text-sm text-traxis-grey-600">
                <li v-for="criterion in processTimeline?.expedited?.criteria" :key="criterion">• {{ criterion }}</li>
              </ul>
            </div>
            <NuxtLink :to="processTimeline?.expedited?.button?.link || '/contact'" class="btn-outline w-full justify-center">
              {{ processTimeline?.expedited?.button?.text || 'Discuss Rush Service' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            {{ processFaqs?.heading }}
          </h2>
          <p class="text-xl text-traxis-grey-600">
            {{ processFaqs?.subheading }}
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="(faq, index) in processFaqs?.faqs"
              :key="index"
              class="bg-traxis-grey-50 rounded-lg"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
              >
                <h3 class="text-lg font-semibold text-traxis-grey-900">{{ faq.question }}</h3>
                <Icon 
                  :name="activeFaq === index ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
                  class="w-6 h-6 text-traxis-grey-600"
                />
              </button>
              <div 
                v-show="activeFaq === index"
                class="px-6 pb-6"
              >
                <p class="text-traxis-grey-600" v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ processCta?.heading }}
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ processCta?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="processCta?.primaryButton?.link || '/request-quote'" class="btn-primary text-lg px-8 py-4">
            {{ processCta?.primaryButton?.text || 'Request a Quote' }}
          </NuxtLink>
          <NuxtLink :to="processCta?.secondaryButton?.link || '/contact'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            {{ processCta?.secondaryButton?.text || 'Contact Us' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Fetch content from collections using .first() to get single objects
const { data: processHeader } = await useAsyncData('process-header', () => queryCollection('processHeader').first())
const { data: processSteps } = await useAsyncData('process-steps', () => queryCollection('processSteps').first())
const { data: processTimeline } = await useAsyncData('process-timeline', () => queryCollection('processTimeline').first())
const { data: processFaqs } = await useAsyncData('process-faqs', () => queryCollection('processFaqs').first())
const { data: processCta } = await useAsyncData('process-cta', () => queryCollection('processCta').first())

// FAQ functionality
const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// SEO
useHead({
  title: 'Our Process - From Design to Delivery | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Learn about our collaborative precision machining process from design review to delivery. Includes DFM feedback, quality assurance, and transparent timeline management.' 
    },
    { name: 'keywords', content: 'machining process, DFM collaboration, quality assurance, precision manufacturing, CNC machining timeline, manufacturing process' }
  ]
})
</script>