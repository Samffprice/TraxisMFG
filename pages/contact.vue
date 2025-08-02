<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Ready to discuss your precision machining needs? Get in touch with our team 
            for personalized service and expert guidance on your next project.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
              Request a Quote
            </NuxtLink>
            <a href="tel:+15123830089" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              Call (512) 383-0089
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
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <!-- Contact Methods -->
            <div class="space-y-8 mb-8">
              <!-- Phone -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="mdi:phone" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <strong>Local:</strong> 
                      <a href="tel:+15123830089" class="text-traxis-red-600 hover:text-traxis-red-700">(512) 383-0089</a>
                    </p>
                    <p class="text-gray-600">
                      <strong>Toll-Free:</strong> 
                      <a href="tel:+18889820898" class="text-traxis-red-600 hover:text-traxis-red-700">1 (888) 982-0898</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-traxis-grey-700 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="mdi:email" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <div class="space-y-1">
                    <p class="text-gray-600">
                      <strong>Sales & Quotes:</strong> 
                      <a href="mailto:sales@traxismfg.com" class="text-traxis-red-600 hover:text-traxis-red-700">sales@traxismfg.com</a>
                    </p>
                    <p class="text-gray-600">
                      <strong>General:</strong> 
                      <a href="mailto:info@traxismfg.com" class="text-traxis-red-600 hover:text-traxis-red-700">info@traxismfg.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="mdi:map-marker" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <div class="text-gray-600">
                    <p>Traxis Manufacturing LLC</p>
                    <p>511 East Saint Elmo Road</p>
                    <p>Austin, TX 78745</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-traxis-grey-700 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="mdi:clock-outline" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <div class="space-y-1 text-gray-600">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 4:30 PM</p>
                    <p><strong>Saturday:</strong> By Appointment</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p class="text-sm text-gray-500">(Central Standard Time)</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/traxis-manufacturing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-traxis-red-600 rounded-lg flex items-center justify-center text-white hover:bg-traxis-red-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Icon name="mdi:linkedin" class="w-5 h-5" />
                </a>
                <a 
                  href="mailto:sales@traxismfg.com"
                  class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white hover:bg-orange-700 transition-colors"
                  aria-label="Email"
                >
                  <Icon name="mdi:email" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="bg-gray-50 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <p class="text-gray-600 mb-6">
                Have a general question or want to learn more about our capabilities? 
                Use this form for non-quote inquiries.
              </p>
              
              <form @submit.prevent="submitContactForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="contactFirstName" class="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="contactFirstName"
                      v-model="contactForm.firstName"
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
                      v-model="contactForm.lastName"
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
                    v-model="contactForm.email"
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
                    v-model="contactForm.phone"
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
                    v-model="contactForm.subject"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <option value="">Select Subject</option>
                    <option value="capabilities">Capabilities Inquiry</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="facility">Facility Visit Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="mb-6">
                  <label for="contactMessage" class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    v-model="contactForm.message"
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
                  {{ isSubmittingContact ? 'Sending...' : 'Send Message' }}
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
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Visit Our Austin Facility</h2>
          <p class="text-xl text-gray-600">
            See our state-of-the-art manufacturing facility in person
          </p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <!-- Embedded Google Map -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.123456789!2d-97.7480567!3d30.2398743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4c25c234567%3A0x123456789abcdef!2s511%20E%20Saint%20Elmo%20Rd%2C%20Austin%2C%20TX%2078745!5e0!3m2!1sen!2sus!4v1234567890123"
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
              <div class="text-center">
                <Icon name="mdi:map-marker" class="w-8 h-8 text-traxis-red-600 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
                <p class="text-sm text-gray-600">511 E Saint Elmo Rd, Austin, TX 78745</p>
              </div>
              
              <div class="text-center">
                <Icon name="mdi:car" class="w-8 h-8 text-traxis-red-600 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">Parking</h3>
                <p class="text-sm text-gray-600">On-site parking available</p>
              </div>
              
              <div class="text-center">
                <Icon name="mdi:calendar" class="w-8 h-8 text-traxis-red-600 mx-auto mb-2" />
                <h3 class="font-semibold text-gray-900 mb-1">Visits</h3>
                <p class="text-sm text-gray-600">By appointment only</p>
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
          <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
          <p class="text-xl text-traxis-grey-100 mb-8">
            Subscribe to our newsletter for industry insights, company updates, 
            and precision machining tips.
          </p>
          
          <form @submit.prevent="submitNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Enter your email address"
              required
              class="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              :disabled="isSubmittingNewsletter"
              class="btn-secondary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon v-if="isSubmittingNewsletter" name="mdi:loading" class="w-5 h-5 mr-2 animate-spin" />
              {{ isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
          
          <p class="text-sm text-traxis-grey-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
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
            <Icon name="mdi:check-circle" class="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
            <p class="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you within one business day.
            </p>
            <button @click="showContactSuccess = false" class="btn-primary">
              Close
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
            <Icon name="mdi:email-check" class="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-4">Successfully Subscribed!</h3>
            <p class="text-gray-600 mb-6">
              You've been added to our newsletter. Thank you for your interest in Traxis Manufacturing.
            </p>
            <button @click="showNewsletterSuccess = false" class="btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
// Icon component is auto-imported by @nuxt/icon

const isSubmittingContact = ref(false)
const isSubmittingNewsletter = ref(false)
const showContactSuccess = ref(false)
const showNewsletterSuccess = ref(false)
const newsletterEmail = ref('')

const contactForm = reactive({
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
    
    console.log('Contact form data:', contactForm)
    
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
  Object.keys(contactForm).forEach(key => {
    contactForm[key] = ''
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