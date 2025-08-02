<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Our Work - Project Spotlights
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Explore our portfolio of precision-machined components for aerospace, medical, 
            and industrial applications. See how we solve complex manufacturing challenges 
            with innovative solutions and exceptional quality.
          </p>
          <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
            Start Your Project
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="bg-white border-b border-traxis-grey-200 sticky top-16 z-40">
      <div class="container-custom">
        <div class="flex flex-wrap gap-4 py-6">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeFilter === filter.value
                ? 'bg-traxis-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Project Spotlights Grid -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer"
            @click="selectedProject = project"
          >
            <div class="aspect-w-16 aspect-h-10">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-48 object-cover"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                <span 
                  v-for="tag in project.tags"
                  :key="tag"
                  :class="[
                    'text-xs font-semibold px-2 py-1 rounded-full flex items-center',
                    getTagColor(tag)
                  ]"
                >
                  <Icon :name="getTagIcon(tag)" class="w-3 h-3 mr-1" />
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-xl font-semibold text-traxis-grey-900 mb-3">{{ project.title }}</h3>
              <p class="text-traxis-grey-600 mb-4 line-clamp-3">{{ project.summary }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-traxis-grey-500">{{ project.industry }}</span>
                <Icon name="mdi:arrow-right" class="w-5 h-5 text-traxis-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            What Our Clients Say
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Trusted partners across aerospace, medical, and industrial sectors
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-traxis-grey-50 rounded-lg p-6"
          >
            <div class="flex items-center mb-4">
              <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
              <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
              <div class="w-3 h-3 bg-orange-600 rounded-full"></div>
            </div>
            <blockquote class="text-gray-700 mb-4 italic">
              "{{ testimonial.quote }}"
            </blockquote>
            <footer class="text-sm text-traxis-grey-600">
              <strong>{{ testimonial.author }}</strong>
              <br>
              {{ testimonial.title }}, {{ testimonial.company }}
            </footer>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Summary -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Our Proven Expertise
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Delivering precision across diverse applications and materials
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-traxis-red-600 mb-2">500+</div>
            <div class="text-traxis-grey-600">Projects Completed</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-traxis-red-600 mb-2">±0.001"</div>
            <div class="text-traxis-grey-600">Precision Achieved</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-traxis-red-600 mb-2">99.5%</div>
            <div class="text-traxis-grey-600">On-Time Delivery</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-traxis-red-600 mb-2">15+</div>
            <div class="text-traxis-grey-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-traxis-grey-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Add Your Project to Our Portfolio?
        </h2>
        <p class="text-xl text-traxis-grey-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your precision machining project to life with 
          the same quality and attention to detail shown in our portfolio.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request a Quote
          </NuxtLink>
          <NuxtLink to="/capabilities" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            View Our Capabilities
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <ProjectDetailModal 
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// Icon component is auto-imported by @nuxt/icon

const activeFilter = ref('all')
const selectedProject = ref(null)

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Aerospace', value: 'aerospace' },
  { label: 'Medical', value: 'medical' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'CNC Milling', value: 'milling' },
  { label: 'CNC Turning', value: 'turning' }
]

// Helper function to get appropriate icon for each tag
const getTagIcon = (tag) => {
  const iconMap = {
    'Aerospace': 'mdi:airplane',
    'Medical': 'mdi:medical-bag',
    'Industrial': 'mdi:factory',
    'Semiconductor': 'mdi:chip',
    'CNC Milling': 'mdi:cog-outline',
    'CNC Turning': 'mdi:rotate-3d-variant',
    '5-Axis': 'mdi:axis-z-rotate-clockwise',
    'Aluminum': 'mdi:gold',
    'Stainless Steel': 'mdi:iron',
    'Titanium': 'mdi:diamond-stone',
    'PEEK': 'mdi:chemical-weapon'
  }
  return iconMap[tag] || 'mdi:tag-outline'
}

const projects = [
  {
    id: 1,
    title: 'High-Tolerance Aerospace Manifold',
    summary: 'Complex aluminum manifold with multiple intersecting bores requiring ±0.001" positional tolerance. 5-axis machining eliminated tolerance stacking.',
    industry: 'Aerospace',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
    tags: ['Aerospace', 'CNC Milling', '5-Axis', 'Aluminum'],
    challenge: 'The client approached Traxis with a critical component for their next-generation analysis machine. Their previous supplier struggled to consistently produce the complex aluminum manifold, which featured multiple intersecting bores and required positional tolerances of ±0.001". This inconsistency was causing assembly delays and jeopardizing the product launch.',
    solution: 'Our engineering team immediately initiated a Design for Manufacturability (DFM) review. We collaborated with the client\'s engineers to suggest minor, non-functional design modifications that would improve tool access and ensure greater stability during machining. The part was then programmed for our 5-axis CNC mill, allowing us to machine all critical features in a single setup.',
    results: [
      'Achieved and maintained a part acceptance rate of over 99.8% across production runs',
      'Eliminated the client\'s assembly line fitment issues, reducing their final assembly time by an estimated 15%',
      'Successfully delivered the initial prototype run and subsequent medium-volume production orders on schedule'
    ],
    material: 'Aluminum 6061-T6',
    tolerance: '±0.001" positional',
    process: '5-Axis CNC Milling'
  },
  {
    id: 2,
    title: 'Medical Device Surgical Instrument',
    summary: 'Precision surgical instrument requiring bio-compatible materials and exceptional surface finish for sterile medical environments.',
    industry: 'Medical Devices',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
    tags: ['Medical', 'CNC Turning', 'Stainless Steel'],
    challenge: 'A leading medical device manufacturer needed a complex surgical instrument with intricate internal passages for fluid flow. The component required FDA-compliant materials, exceptional surface finish, and dimensional accuracy critical for patient safety.',
    solution: 'Using our CNC turning capabilities with live tooling, we manufactured the instrument in a single setup to maintain concentricity and eliminate assembly tolerances. Special attention was paid to surface finish requirements for biocompatibility.',
    results: [
      'Achieved Ra 8 surface finish on all critical surfaces',
      'Met all dimensional requirements with ±0.0005" tolerance',
      'Delivered prototypes within 2-week timeline for FDA testing'
    ],
    material: '316L Stainless Steel',
    tolerance: '±0.0005"',
    process: 'CNC Turning with Live Tooling'
  },
  {
    id: 3,
    title: 'Industrial Automation Housing',
    summary: 'Heavy-duty aluminum housing for industrial automation equipment requiring IP67 sealing and EMI shielding properties.',
    industry: 'Industrial Automation',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
    tags: ['Industrial', 'CNC Milling', 'Aluminum'],
    challenge: 'Industrial equipment manufacturer required a robust housing for harsh factory environments. The housing needed precise seal grooves for IP67 rating and specific surface treatments for EMI shielding.',
    solution: 'Our 4-axis milling capability allowed us to machine the complex housing geometry while maintaining critical seal surface tolerances. We coordinated with approved finishers for the EMI shielding treatment.',
    results: [
      'Achieved IP67 sealing performance in field testing',
      'Met EMI shielding requirements per MIL-STD-461',
      'Reduced customer assembly time by 30% through design optimization'
    ],
    material: 'Aluminum 6061-T6',
    tolerance: '±0.002"',
    process: '4-Axis CNC Milling'
  },
  {
    id: 4,
    title: 'Aerospace Engine Component',
    summary: 'High-temperature titanium component for commercial aircraft engine requiring extensive quality documentation and AS9100 compliance.',
    industry: 'Aerospace',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop&crop=center',
    tags: ['Aerospace', 'CNC Turning', 'Titanium'],
    challenge: 'Aerospace customer needed critical engine components manufactured from titanium with extensive material traceability and quality documentation per AS9100 requirements.',
    solution: 'We implemented full material traceability from mill certificates through final inspection. Our quality system provided complete documentation including first article inspection reports and ongoing SPC data.',
    results: [
      'Achieved 100% first-pass inspection rate',
      'Delivered complete material traceability documentation',
      'Met delivery schedule for critical path engine assembly'
    ],
    material: 'Titanium Ti-6Al-4V',
    tolerance: '±0.001"',
    process: 'CNC Turning'
  },
  {
    id: 5,
    title: 'PEEK Medical Implant Component',
    summary: 'Bio-compatible PEEK component for spinal implant system requiring exceptional precision and surface quality for human implantation.',
    industry: 'Medical Devices',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
    tags: ['Medical', 'CNC Milling', 'PEEK'],
    challenge: 'Medical device OEM required PEEK components for spinal implant system. Parts needed FDA-compliant materials with exceptional dimensional accuracy and surface finish for direct patient contact.',
    solution: 'Specialized tooling and machining parameters were developed for PEEK to achieve required surface finish while maintaining dimensional stability. All processing was done in controlled environment.',
    results: [
      'Achieved required surface finish for biocompatibility',
      'Maintained ±0.0002" tolerance on critical features',
      'Provided complete validation documentation for FDA submission'
    ],
    material: 'PEEK (Medical Grade)',
    tolerance: '±0.0002"',
    process: 'Precision CNC Milling'
  },
  {
    id: 6,
    title: 'Semiconductor Equipment Fixture',
    summary: 'Ultra-precision aluminum fixture for semiconductor manufacturing equipment requiring exceptional flatness and parallelism.',
    industry: 'Semiconductor',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
    tags: ['Industrial', 'CNC Milling', 'Aluminum'],
    challenge: 'Semiconductor equipment manufacturer needed precision fixtures with flatness requirements of 0.0001" over 12" length for critical wafer processing equipment.',
    solution: 'Using our most precise machining center with climate-controlled environment, we achieved exceptional flatness through careful process control and stress-relief procedures.',
    results: [
      'Achieved 0.00005" flatness over 12" length',
      'Exceeded parallelism requirements by 50%',
      'Enabled customer to meet semiconductor industry specifications'
    ],
    material: 'Aluminum 6061-T6',
    tolerance: '±0.0001"',
    process: 'Ultra-Precision CNC Milling'
  }
]

const testimonials = [
  {
    id: 1,
    quote: 'Traxis Manufacturing consistently delivers exceptional quality parts on time. Their attention to detail and collaborative approach make them our preferred machining partner.',
    author: 'Sarah Johnson',
    title: 'Lead Engineer',
    company: 'Leading Aerospace Company'
  },
  {
    id: 2,
    quote: 'The team at Traxis goes above and beyond to understand our requirements. Their DFM feedback has saved us both time and money on multiple projects.',
    author: 'Michael Chen',
    title: 'Product Development Manager',
    company: 'Medical Device Manufacturer'
  },
  {
    id: 3,
    quote: 'Working with Traxis feels like having an extension of our own engineering team. Their expertise in precision machining is unmatched in the Austin area.',
    author: 'Robert Martinez',
    title: 'Operations Director',
    company: 'Industrial Equipment Company'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => 
    project.tags.some(tag => 
      tag.toLowerCase().includes(activeFilter.value) ||
      project.industry.toLowerCase().includes(activeFilter.value)
    )
  )
})

const getTagColor = (tag) => {
  const colors = {
    'Aerospace': 'bg-traxis-red-100 text-traxis-red-800',
    'Medical': 'bg-green-100 text-green-800',
    'Industrial': 'bg-orange-100 text-orange-800',
    'CNC Milling': 'bg-purple-100 text-purple-800',
    'CNC Turning': 'bg-yellow-100 text-yellow-800',
    '5-Axis': 'bg-red-100 text-red-800',
    'Aluminum': 'bg-gray-100 text-gray-800',
    'Titanium': 'bg-indigo-100 text-indigo-800',
    'Stainless Steel': 'bg-traxis-red-100 text-traxis-red-800',
    'PEEK': 'bg-pink-100 text-pink-800'
  }
  return colors[tag] || 'bg-gray-100 text-gray-800'
}

useHead({
  title: 'Our Work - Project Portfolio | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Explore our portfolio of precision-machined components for aerospace, medical, and industrial applications. See how we solve complex manufacturing challenges with exceptional quality.' 
    },
    { name: 'keywords', content: 'precision machining portfolio, aerospace components, medical devices, industrial parts, CNC machining examples, project case studies' }
  ]
})
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>