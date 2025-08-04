<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ aboutHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ aboutHeader?.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink :to="aboutHeader?.primaryButton?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
              {{ aboutHeader?.primaryButton?.text || 'Work With Us' }}
            </NuxtLink>
            <NuxtLink :to="aboutHeader?.secondaryButton?.link || '/capabilities'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              {{ aboutHeader?.secondaryButton?.text || 'Our Capabilities' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story & Mission -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              {{ aboutStory?.heading }}
            </h2>
            <div class="space-y-6 text-lg text-traxis-grey-600">
              <p v-for="paragraph in aboutStory?.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div>
            <OptimizedImage 
              :src="aboutStory?.image?.src || '/about-us.jpg'" 
              :webp-src="aboutStory?.image?.webpSrc || '/about-us.webp'"
              :alt="aboutStory?.image?.alt || 'Traxis Manufacturing facility in Austin, Texas'" 
              class="rounded-lg shadow-lg w-full"
              width="800"
              height="600"
              loading="lazy"
            />
            <p class="text-sm text-gray-500 mt-3 text-center">
              {{ aboutStory?.image?.caption }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ aboutValues?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ aboutValues?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="value in aboutValues?.values" 
            :key="value.title"
            class="text-center"
          >
            <div :class="`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon :name="value.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Our Team -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ aboutTeam?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ aboutTeam?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in aboutTeam?.members"
            :key="member.id"
            class="text-center bg-gray-50 rounded-lg p-8"
          >
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
            <p class="text-traxis-red-600 font-medium mb-4">{{ member.title }}</p>
            <p class="text-gray-600 mb-4">{{ member.bio }}</p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span v-if="member.experience">{{ member.experience }} years experience</span>
              <span v-if="member.certifications">{{ member.certifications }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Austin Facility -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ aboutFacility?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ aboutFacility?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              {{ aboutFacility?.address }}
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              {{ aboutFacility?.description }}
            </p>
            <div class="space-y-4">
              <div 
                v-for="feature in aboutFacility?.features" 
                :key="feature.text"
                class="flex items-center"
              >
                <Icon :name="feature.icon" class="w-6 h-6 text-traxis-red-600 mr-3" />
                <span class="text-gray-700">{{ feature.text }}</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              :src="aboutFacility?.image || 'https://images.unsplash.com/photo-1581091870621-57c4312c9c1b?w=800&h=600&fit=crop&crop=center'" 
              alt="Clean, modern machine shop interior" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        
        <!-- Facility Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="area in aboutFacility?.areas" 
            :key="area.title"
            class="text-center"
          >
            <Icon :name="area.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ area.title }}</h3>
            <p class="text-gray-600">{{ area.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality & Certifications -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ aboutQuality?.heading }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ aboutQuality?.subheading }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Our Quality Commitment
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              {{ aboutQuality?.description }}
            </p>
            
            <div class="space-y-6">
              <div 
                v-for="cert in aboutQuality?.certifications" 
                :key="cert.title"
                :class="`${cert.bgColor} rounded-lg p-6`"
              >
                <div class="flex items-center mb-4">
                  <Icon :name="cert.icon" :class="`w-8 h-8 mr-3 ${cert.icon.includes('airplane') ? 'text-orange-600' : cert.icon.includes('shield') ? 'text-green-600' : 'text-traxis-red-600'}`" />
                  <h4 class="text-lg font-semibold text-gray-900">{{ cert.title }}</h4>
                </div>
                <p class="text-gray-600">
                  {{ cert.description }}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              :src="aboutQuality?.image || 'https://images.unsplash.com/photo-1581092335878-7d6d14e42dd8?w=800&h=600&fit=crop&crop=center'" 
              alt="Quality inspection and measurement" 
              class="rounded-lg shadow-lg w-full mb-6"
            />
            
            <div class="grid grid-cols-2 gap-4 text-center">
              <div 
                v-for="stat in aboutQuality?.stats" 
                :key="stat.label"
                class="bg-gray-50 rounded-lg p-4"
              >
                <div class="text-2xl font-bold text-traxis-red-600 mb-1">{{ stat.value }}</div>
                <div class="text-sm text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Sharing -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom text-center">
        <SocialShare 
          :title="'About Traxis Manufacturing - Austin CNC Machining Experts'"
          :description="'Learn about our precision machining team and facility in Austin, Texas.'"
        />
      </div>
    </section>

    <!-- Local Community -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {{ aboutCommunity?.heading }}
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {{ aboutCommunity?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="aboutCommunity?.primaryButton?.link || '/work'" class="btn-primary text-lg px-8 py-4">
            {{ aboutCommunity?.primaryButton?.text || 'See Our Work' }}
          </NuxtLink>
          <NuxtLink :to="aboutCommunity?.secondaryButton?.link || '/request-quote'" class="btn-outline text-lg px-8 py-4">
            {{ aboutCommunity?.secondaryButton?.text || 'Work With Us' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch content from collections using .first() to get single objects
const { data: aboutHeader } = await useAsyncData('about-header', () => queryCollection('aboutHeader').first())
const { data: aboutStory } = await useAsyncData('about-story', () => queryCollection('aboutStory').first())
const { data: aboutValues } = await useAsyncData('about-values', () => queryCollection('aboutValues').first())
const { data: aboutTeam } = await useAsyncData('about-team', () => queryCollection('aboutTeam').first())
const { data: aboutFacility } = await useAsyncData('about-facility', () => queryCollection('aboutFacility').first())
const { data: aboutQuality } = await useAsyncData('about-quality', () => queryCollection('aboutQuality').first())
const { data: aboutCommunity } = await useAsyncData('about-community', () => queryCollection('aboutCommunity').first())

// SEO
useSEO({
  title: 'About Us - Meet Our Team | Traxis Manufacturing',
  description: 'Learn about Traxis Manufacturing - Austin-based precision machining experts committed to quality, collaboration, and personalized service. Meet our experienced team and facility.',
  keywords: 'about Traxis Manufacturing, Austin machining company, precision manufacturing team, CNC machining facility, quality certifications',
  image: '/about-us.jpg'
})
</script>