<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ quoteHeader?.title }}
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            {{ quoteHeader?.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ quoteIntro?.heading }}
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              {{ quoteIntro?.description }}
            </p>
          </div>

          <!-- Information Needed -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div
              v-for="info in quoteIntro?.infoNeeded"
              :key="info.title"
              class="text-center p-6 bg-traxis-grey-50 rounded-lg"
            >
              <Icon :name="info.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
              <h3 class="font-semibold text-gray-900 mb-2">{{ info.title }}</h3>
              <p class="text-sm text-gray-600">{{ info.description }}</p>
            </div>
          </div>

          <!-- Confidentiality Assurance -->
          <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-12">
            <div class="flex items-start">
              <Icon :name="quoteIntro?.confidentiality?.icon" class="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ quoteIntro?.confidentiality?.title }}</h3>
                <p class="text-gray-700">
                  {{ quoteIntro?.confidentiality?.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Request Form -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ quoteForm?.title }}</h3>
            
            <!-- Contact Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
              
              <div>
                <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  id="title"
                  v-model="form.title"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                />
              </div>
            </div>

            <!-- Inquiry Type -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Type of Inquiry *
              </label>
              <div class="space-y-2">
                <label
                  v-for="inquiryType in quoteForm?.inquiryTypes"
                  :key="inquiryType.value"
                  class="flex items-center"
                >
                  <input
                    v-model="form.inquiryType"
                    type="radio"
                    :value="inquiryType.value"
                    class="text-traxis-red-600 focus:ring-traxis-red-600"
                  />
                  <span class="ml-2">{{ inquiryType.label }}</span>
                </label>
              </div>
            </div>

            <!-- Project Description -->
            <div class="mb-6">
              <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                {{ form.inquiryType === 'quote' ? 'Project Description *' : 'Message *' }}
              </label>
              <textarea
                id="description"
                v-model="form.description"
                required
                rows="4"
                :placeholder="form.inquiryType === 'quote' ? 'Please describe your project, including the type of parts, applications, and any special requirements...' : 'Please describe your inquiry...'"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
              ></textarea>
            </div>

            <!-- Quote-specific fields (conditional) -->
            <div v-if="form.inquiryType === 'quote'" class="space-y-6 mb-6">
              <!-- File Upload -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ quoteForm?.fileUpload?.title }}
                </label>
                <div 
                  @drop="handleDrop"
                  @dragover.prevent
                  @dragenter.prevent
                  class="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-traxis-red-400 transition-colors"
                >
                  <Icon name="mdi:cloud-upload" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p class="text-gray-600 mb-2">
                    {{ quoteForm?.fileUpload?.description }} 
                    <button type="button" @click="$refs.fileInput.click()" class="text-traxis-red-600 hover:text-traxis-red-700">
                      {{ quoteForm?.fileUpload?.browseText }}
                    </button>
                  </p>
                  <p class="text-xs text-gray-500">
                    {{ quoteForm?.fileUpload?.supportedFormats }}
                  </p>
                  <input
                    ref="fileInput"
                    type="file"
                    multiple
                    accept=".step,.stp,.iges,.igs,.sldprt,.dwg,.dxf,.pdf"
                    @change="handleFileSelect"
                    class="hidden"
                  />
                </div>
                
                <!-- File List -->
                <div v-if="uploadedFiles.length > 0" class="mt-4">
                  <h4 class="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="(file, index) in uploadedFiles" 
                      :key="index"
                      class="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <div class="flex items-center">
                        <Icon name="mdi:file" class="w-5 h-5 text-gray-500 mr-2" />
                        <span class="text-sm text-gray-700">{{ file.name }}</span>
                        <span class="text-xs text-gray-500 ml-2">({{ formatFileSize(file.size) }})</span>
                      </div>
                      <button
                        type="button"
                        @click="removeFile(index)"
                        class="text-red-600 hover:text-red-800"
                      >
                        <Icon name="mdi:delete" class="w-5 h-5" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Project Details Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="material" class="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Material
                  </label>
                  <select
                    id="material"
                    v-model="form.material"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <template v-for="materialGroup in quoteForm?.materials" :key="materialGroup.group">
                      <optgroup v-if="materialGroup.group !== 'Select Material' && materialGroup.group !== 'Other'" :label="materialGroup.group">
                        <option
                          v-for="option in materialGroup.options"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </optgroup>
                      <template v-else>
                        <option
                          v-for="option in materialGroup.options"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </template>
                    </template>
                  </select>
                </div>

                <div>
                  <label for="quantity" class="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Needed
                  </label>
                  <select
                    id="quantity"
                    v-model="form.quantity"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <option
                      v-for="quantity in quoteForm?.quantities"
                      :key="quantity.value"
                      :value="quantity.value"
                    >
                      {{ quantity.label }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">
                    Target Timeline
                  </label>
                  <select
                    id="timeline"
                    v-model="form.timeline"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <option
                      v-for="timeline in quoteForm?.timelines"
                      :key="timeline.value"
                      :value="timeline.value"
                    >
                      {{ timeline.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="application" class="block text-sm font-medium text-gray-700 mb-2">
                    Application/Industry
                  </label>
                  <select
                    id="application"
                    v-model="form.application"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
                  >
                    <option
                      v-for="application in quoteForm?.applications"
                      :key="application.value"
                      :value="application.value"
                    >
                      {{ application.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- NDA Option -->
            <div v-if="form.inquiryType === 'quote'" class="mb-6">
              <label class="flex items-start">
                <input
                  v-model="form.needsNDA"
                  type="checkbox"
                  class="mt-1 text-traxis-red-600 focus:ring-traxis-red-600"
                />
                <span class="ml-2 text-sm text-gray-700">
                  {{ quoteForm?.ndaText }}
                </span>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon v-if="isSubmitting" name="mdi:loading" class="w-5 h-5 mr-2 animate-spin" />
                {{ isSubmitting ? (quoteForm?.buttons?.submit?.submitting || 'Submitting...') : (quoteForm?.buttons?.submit?.default || 'Submit Request') }}
              </button>
              
              <button
                type="button"
                @click="resetForm"
                class="btn-outline text-lg px-8 py-3"
              >
                {{ quoteForm?.buttons?.clear || 'Clear Form' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Alternative Contact -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            {{ quoteContact?.heading }}
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            {{ quoteContact?.description }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div :class="`${quoteContact?.phone?.color} rounded-lg p-8`">
              <Icon :name="quoteContact?.phone?.icon" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ quoteContact?.phone?.title }}</h3>
              <div class="space-y-2">
                <p class="text-lg font-medium text-gray-900">{{ quoteContact?.phone?.local }}</p>
                <p class="text-lg font-medium text-gray-900">{{ quoteContact?.phone?.tollFree }}</p>
                <p class="text-sm text-gray-600">{{ quoteContact?.phone?.hours }}</p>
              </div>
            </div>
            
            <div :class="`${quoteContact?.email?.color} rounded-lg p-8`">
              <Icon :name="quoteContact?.email?.icon" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ quoteContact?.email?.title }}</h3>
              <div class="space-y-2">
                <p class="text-lg font-medium text-gray-900">{{ quoteContact?.email?.address }}</p>
                <p class="text-sm text-gray-600">
                  {{ quoteContact?.email?.responseTime }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="showSuccessModal = false"></div>
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div class="text-center">
            <Icon :name="quoteModal?.icon || 'mdi:check-circle'" class="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ quoteModal?.title }}</h3>
            <p class="text-gray-600 mb-6">
              {{ quoteModal?.message }}
            </p>
            <button @click="showSuccessModal = false" class="btn-primary">
              {{ quoteModal?.button || 'Close' }}
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
const { data: quoteHeader } = await useAsyncData('quote-header', () => queryCollection('quoteHeader').first())
const { data: quoteIntro } = await useAsyncData('quote-intro', () => queryCollection('quoteIntro').first())
const { data: quoteForm } = await useAsyncData('quote-form', () => queryCollection('quoteForm').first())
const { data: quoteContact } = await useAsyncData('quote-contact', () => queryCollection('quoteContact').first())
const { data: quoteModal } = await useAsyncData('quote-modal', () => queryCollection('quoteModal').first())

const isSubmitting = ref(false)
const showSuccessModal = ref(false)
const uploadedFiles = ref([])

const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  title: '',
  email: '',
  phone: '',
  inquiryType: 'quote',
  description: '',
  material: '',
  quantity: '',
  timeline: '',
  application: '',
  needsNDA: false
})

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  addFiles(files)
}

const handleDrop = (event) => {
  event.preventDefault()
  const files = Array.from(event.dataTransfer.files)
  addFiles(files)
}

const addFiles = (files) => {
  const validTypes = ['.step', '.stp', '.iges', '.igs', '.sldprt', '.dwg', '.dxf', '.pdf']
  const maxSize = 25 * 1024 * 1024 // 25MB

  files.forEach(file => {
    const extension = '.' + file.name.split('.').pop().toLowerCase()
    
    if (!validTypes.includes(extension)) {
      alert(`File ${file.name} is not a supported format.`)
      return
    }
    
    if (file.size > maxSize) {
      alert(`File ${file.name} is too large. Maximum size is 25MB.`)
      return
    }
    
    uploadedFiles.value.push(file)
  })
}

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to your backend
    console.log('Form data:', form)
    console.log('Files:', uploadedFiles.value)
    
    showSuccessModal.value = true
    resetForm()
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error submitting your request. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'boolean') {
      form[key] = false
    } else {
      form[key] = ''
    }
  })
  form.inquiryType = 'quote'
  uploadedFiles.value = []
}

useHead({
  title: 'Request a Quote - Get Precision Machining Pricing | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Get a detailed quote for your precision CNC machining project. Upload CAD files, specify requirements, and receive transparent pricing with realistic timelines.' 
    },
    { name: 'keywords', content: 'CNC machining quote, precision manufacturing pricing, CAD file upload, machining services quote, Austin Texas machining' }
  ]
})
</script>