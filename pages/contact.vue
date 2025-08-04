<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ contactHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ contactHeader?.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink :to="contactHeader?.primaryButton?.link || '/request-quote'" class="btn-secondary text-lg px-8 py-4">
              {{ contactHeader?.primaryButton?.text || 'Request a Quote' }}
            </NuxtLink>
            <a :href="contactHeader?.secondaryButton?.link || 'tel:+15123830089'" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              {{ contactHeader?.secondaryButton?.text || 'Call (512) 383-0089' }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ contactInfo?.heading }}</h2>
            
            <!-- Contact Methods -->
            <div class="space-y-8 mb-8">
              <!-- Phone -->
              <div class="flex items-start">
                <div :class="`w-12 h-12 ${contactInfo?.phone?.color} rounded-lg flex items-center justify-center mr-4`">
                  <Icon :name="contactInfo?.phone?.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo?.phone?.title }}</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <strong>{{ contactInfo?.phone?.local?.label }}</strong> 
                      <a :href="contactInfo?.phone?.local?.link" class="text-traxis-red-600 hover:text-traxis-red-700">{{ contactInfo?.phone?.local?.number }}</a>
                    </p>
                    <p class="text-gray-600">
                      <strong>{{ contactInfo?.phone?.tollFree?.label }}</strong> 
                      <a :href="contactInfo?.phone?.tollFree?.link" class="text-traxis-red-600 hover:text-traxis-red-700">{{ contactInfo?.phone?.tollFree?.number }}</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div :class="`w-12 h-12 ${contactInfo?.email?.color} rounded-lg flex items-center justify-center mr-4`">
                  <Icon :name="contactInfo?.email?.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo?.email?.title }}</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <strong>{{ contactInfo?.email?.sales?.label }}</strong> 
                      <a :href="contactInfo?.email?.sales?.link" class="text-traxis-red-600 hover:text-traxis-red-700">{{ contactInfo?.email?.sales?.address }}</a>
                    </p>
                    <p class="text-gray-600">
                      <strong>{{ contactInfo?.email?.general?.label }}</strong> 
                      <a :href="contactInfo?.email?.general?.link" class="text-traxis-red-600 hover:text-traxis-red-700">{{ contactInfo?.email?.general?.address }}</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start">
                <div :class="`w-12 h-12 ${contactInfo?.address?.color} rounded-lg flex items-center justify-center mr-4`">
                  <Icon :name="contactInfo?.address?.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo?.address?.title }}</h3>
                  <div class="text-gray-600">
                    <p>{{ contactInfo?.address?.company }}</p>
                    <p>{{ contactInfo?.address?.street }}</p>
                    <p>{{ contactInfo?.address?.city }}</p>
                    <p>{{ contactInfo?.address?.country }}</p>
                  </div>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="flex items-start">
                <div :class="`w-12 h-12 ${contactInfo?.hours?.color} rounded-lg flex items-center justify-center mr-4`">
                  <Icon :name="contactInfo?.hours?.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo?.hours?.title }}</h3>
                  <div class="space-y-1 text-gray-600">
                    <p><strong>{{ contactInfo?.hours?.weekdays }}</strong></p>
                    <p><strong>{{ contactInfo?.hours?.saturday }}</strong></p>
                    <p><strong>{{ contactInfo?.hours?.sunday }}</strong></p>
                    <p class="text-sm text-gray-500">{{ contactInfo?.hours?.timezone }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ contactInfo?.social?.title }}</h3>
              <div class="flex space-x-4">
                <a 
                  v-for="link in contactInfo?.social?.links"
                  :key="link.platform"
                  :href="link.url" 
                  :target="link.platform === 'LinkedIn' ? '_blank' : undefined"
                  :rel="link.platform === 'LinkedIn' ? 'noopener noreferrer' : undefined"
                  :class="`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center text-white transition-colors`"
                  :aria-label="link.label"
                >
                  <Icon :name="link.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="bg-gray-50 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ contactForm?.title }}</h3>
              <p class="text-gray-600 mb-6">
                {{ contactForm?.description }}
              </p>
              
              <form @submit.prevent="submitContactForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="contactFirstName" class="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="contactFirstName"
                      v-model="formData.firstName"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                    />
                  </div>
                  
                  <div>
                    <label for="contactLastName" class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="contactLastName"
                      v-model="formData.lastName"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contactEmail"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  />
                </div>

                <div class="mb-4">
                  <label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contactPhone"
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  />
                </div>

                <div class="mb-4">
                  <label for="contactSubject" class="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="contactSubject"
                    v-model="formData.subject"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <option
                      v-for="subject in contactForm?.subjects"
                      :key="subject.value"
                      :value="subject.value"
                    >
                      {{ subject.label }}
                    </option>
                  </select>
                </div>

                <div class="mb-6">
                  <label for="contactMessage" class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    v-model="formData.message"
                    required
                    rows="5"
                    placeholder="Please tell us how we can help you..."
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmittingContact"
                  class="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon v-if="isSubmittingContact" name="mdi:loading" class="w-5 h-5 mr-2 animate-spin" />
                  {{ isSubmittingContact ? (contactForm?.submitButton?.submitting || 'Sending...') : (contactForm?.submitButton?.default || 'Send Message') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="bg-gray-50 py-16">
      <div class="container-custom">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ contactMap?.heading }}</h2>
          <p class="text-xl text-gray-600">
            {{ contactMap?.subheading }}
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <!-- Embedded Google Map -->
            <iframe
              :src="contactMap?.mapUrl"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-96"
            ></iframe>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                v-for="info in contactMap?.facilityInfo"
                :key="info.title"
                class="text-center"
              >
                <Icon :name="info.icon" class="w-8 h-8 text-traxis-red-600 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">{{ info.title }}</h3>
                <p class="text-sm text-gray-600">{{ info.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="section-padding bg-traxis-red-600 text-white">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">{{ contactNewsletter?.heading }}</h2>
          <p class="text-xl text-traxis-grey-100 mb-8">
            {{ contactNewsletter?.description }}
          </p>
          
          <form @submit.prevent="submitNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              :placeholder="contactNewsletter?.placeholder || 'Enter your email address'"
              required
              class="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              :disabled="isSubmittingNewsletter"
              class="btn-secondary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon v-if="isSubmittingNewsletter" name="mdi:loading" class="w-5 h-5 mr-2 animate-spin" />
              {{ isSubmittingNewsletter ? (contactNewsletter?.button?.submitting || 'Subscribing...') : (contactNewsletter?.button?.default || 'Subscribe') }}
            </button>
          </form>
          
          <p class="text-sm text-traxis-grey-200 mt-4">
            {{ contactNewsletter?.privacy }}
          </p>
        </div>
      </div>
    </section>

    <!-- Success Modals -->
    <!-- Contact Form Success -->
    <div v-if="showContactSuccess" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="showContactSuccess = false"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div class="text-center">
            <Icon :name="contactModals?.contactSuccess?.icon || 'mdi:check-circle'" class="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ contactModals?.contactSuccess?.title }}</h3>
            <p class="text-gray-600 mb-6">
              {{ contactModals?.contactSuccess?.message }}
            </p>
            <button @click="showContactSuccess = false" class="btn-primary">
              {{ contactModals?.contactSuccess?.button || 'Close' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Success -->
    <div v-if="showNewsletterSuccess" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="showNewsletterSuccess = false"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div class="text-center">
            <Icon :name="contactModals?.newsletterSuccess?.icon || 'mdi:email-check'" class="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ contactModals?.newsletterSuccess?.title }}</h3>
            <p class="text-gray-600 mb-6">
              {{ contactModals?.newsletterSuccess?.message }}
            </p>
            <button @click="showNewsletterSuccess = false" class="btn-primary">
              {{ contactModals?.newsletterSuccess?.button || 'Close' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Fetch content from collections using .first() to get single objects
const { data: contactHeader } = await useAsyncData('contact-header', () => queryCollection('contactHeader').first())
const { data: contactInfo } = await useAsyncData('contact-info', () => queryCollection('contactInfo').first())
const { data: contactForm } = await useAsyncData('contact-form', () => queryCollection('contactForm').first())
const { data: contactMap } = await useAsyncData('contact-map', () => queryCollection('contactMap').first())
const { data: contactNewsletter } = await useAsyncData('contact-newsletter', () => queryCollection('contactNewsletter').first())
const { data: contactModals } = await useAsyncData('contact-modals', () => queryCollection('contactModals').first())

const isSubmittingContact = ref(false)
const isSubmittingNewsletter = ref(false)
const showContactSuccess = ref(false)
const showNewsletterSuccess = ref(false)
const newsletterEmail = ref('')

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitContactForm = async () => {
  isSubmittingContact.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Contact form data:', formData)
    
    showContactSuccess.value = true
    resetContactForm()
  } catch (error) {
    console.error('Contact form submission error:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmittingContact.value = false
  }
}

const submitNewsletter = async () => {
  isSubmittingNewsletter.value = true
  
  try {
    // Simulate newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Newsletter subscription:', newsletterEmail.value)
    
    showNewsletterSuccess.value = true
    newsletterEmail.value = ''
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    alert('There was an error subscribing to the newsletter. Please try again.')
  } finally {
    isSubmittingNewsletter.value = false
  }
}

const resetContactForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = ''
  })
}

useHead({
  title: 'Contact Us - Get in Touch | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Contact Traxis Manufacturing for precision CNC machining services. Located in Austin, Texas. Call (512) 383-0089 or email sales@traxismfg.com for personalized service.' 
    },
    { name: 'keywords', content: 'contact Traxis Manufacturing, Austin Texas machining, CNC machining contact, precision manufacturing Austin, 511 East Saint Elmo Road' }
  ]
})
</script>