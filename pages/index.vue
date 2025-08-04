<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Trust Elements / Client Industries -->
    <section class="bg-gray-50 py-12">
      <div class="container-custom">
        <div class="text-center mb-8">
          <p class="text-gray-600 text-sm uppercase tracking-wide font-semibold mb-4">
            Trusted by Leading Companies in
          </p>
          <div class="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:airplane" class="w-6 h-6" />
              <span class="font-medium">Aerospace</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:heart-pulse" class="w-6 h-6" />
              <span class="font-medium">Medical Devices</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:cog" class="w-6 h-6" />
              <span class="font-medium">Industrial Automation</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:chip" class="w-6 h-6" />
              <span class="font-medium">Semiconductor</span>
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
            {{ servicesData?.title || 'Why Choose Traxis Manufacturing?' }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ servicesData?.description || 'We combine state-of-the-art precision technology with accessible, expert-driven human partnership to deliver exceptional results.' }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            v-for="service in servicesData?.services || []"
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
            The Traxis Advantage
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Austin-Based Service -->
          <div class="text-center">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:map-marker" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">Austin-Based Partnership</h3>
            <p class="text-traxis-grey-600">
              Genuine local presence at 511 East Saint Elmo Road. Experience the benefits of 
              face-to-face collaboration and quick response times.
            </p>
          </div>
          
          <!-- Expert Machinists -->
          <div class="text-center">
            <div class="w-16 h-16 bg-traxis-grey-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-hard-hat" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">Dedicated Expert Machinists</h3>
            <p class="text-traxis-grey-600">
Our experienced team brings decades of precision machining expertise to every project, 
              ensuring exceptional quality and attention to detail.
            </p>
          </div>
          
          <!-- Quality Commitment -->
          <div class="text-center">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">Quality & Precision Focus</h3>
            <p class="text-traxis-grey-600">
Specializing in high-stakes industries where failure is not an option. 
              Complex geometries and tight tolerances are our specialty.
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
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600">
            {{ testimonialsData?.description || 'Real feedback from our valued customers' }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="testimonial in testimonialsData?.testimonials || []"
            :key="testimonial.name"
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
              <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
              <p class="text-gray-500">
                {{ testimonial.company }}{{ testimonial.company && testimonial.timeAgo ? ' • ' : '' }}{{ testimonial.timeAgo }}
              </p>
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
            Featured Project Spotlight
          </h2>
          <p class="text-xl text-gray-600">
See how we solve complex manufacturing challenges
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div class="md:flex">
            <div class="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center" 
                alt="High-Tolerance Aerospace Component" 
                class="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-8">
              <div class="mb-4">
                <span class="bg-traxis-red-100 text-traxis-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Aerospace
                </span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                High-Tolerance Manifold for Aerospace Application
              </h3>
              <p class="text-gray-600 mb-6">
Complex aluminum manifold featuring multiple intersecting bores with 
                positional tolerances of ±0.001". Our 5-axis machining approach 
                eliminated tolerance stacking and achieved 99.8% acceptance rate.
              </p>
              <div class="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Material:</strong> Aluminum 6061-T6</p>
                <p><strong>Tolerance:</strong> ±0.001" positional</p>
                <p><strong>Process:</strong> 5-Axis CNC Milling</p>
                <p><strong>Industry Standard:</strong> <a href="https://www.asme.org/" target="_blank" rel="noopener noreferrer" class="text-traxis-red-600 hover:text-traxis-red-700 underline">ASME Y14.5</a> GD&T</p>
              </div>
              <NuxtLink to="/work" class="btn-outline">
                See Our Portfolio
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
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our precision machining services and processes
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqsData?.faqs || []" 
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
              <Icon name="mdi:information" class="w-6 h-6 text-traxis-red-600" />
            </div>
            <div class="ml-3">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Please Note: Our Specialization
              </h3>
              <p class="text-gray-600">
                To ensure we provide the highest level of precision and service for our core clients, 
                Traxis Manufacturing focuses exclusively on industrial, aerospace, medical, and commercial 
                applications. We do not offer services for individual automotive projects, including custom 
                car parts or engine restoration work. This specialized focus allows us to dedicate our 
                expertise and resources to the complex, tight-tolerance components that our partners depend on.
                Learn more about <a href="https://www.fda.gov/medical-devices" target="_blank" rel="noopener noreferrer" class="text-traxis-red-600 hover:text-traxis-red-700 underline">FDA medical device standards</a> and <a href="https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft" target="_blank" rel="noopener noreferrer" class="text-traxis-red-600 hover:text-traxis-red-700 underline">FAA aerospace regulations</a> we comply with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our precision machining expertise can bring your designs to life. 
          Get a detailed quote and timeline for your project.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request a Quote
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Query content collections
const { data: testimonialsData } = await useAsyncData('home-testimonials', () => {
  return queryCollection('content').path('/home-testimonials').first()
})

const { data: servicesData } = await useAsyncData('home-services', () => {
  return queryCollection('content').path('/home-services').first()
})

const { data: faqsData } = await useAsyncData('home-faqs', () => {
  return queryCollection('content').path('/home-faqs').first()
})

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