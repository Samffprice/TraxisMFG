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
            Why Choose Traxis Manufacturing?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine state-of-the-art precision technology with accessible, 
            expert-driven human partnership to deliver exceptional results.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon="mdi:cog-outline"
            title="Capabilities"
            description="Advanced CNC milling and turning capabilities for complex geometries and tight tolerances across various materials."
            link="/capabilities"
          />
          <ServiceCard
            icon="mdi:briefcase-variant-outline"
            title="Our Work"
            description="Explore our portfolio of precision-machined components for aerospace, medical, and industrial applications."
            link="/work"
          />
          <ServiceCard
            icon="mdi:clipboard-list-outline"
            title="Our Process"
            description="Learn about our collaborative approach from design review to final delivery, ensuring quality at every step."
            link="/process"
          />
          <ServiceCard
            icon="mdi:account-group-outline"
            title="About Us"
            description="Meet our dedicated team of expert machinists and learn about our Austin-based facility and commitment to quality."
            link="/about"
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
              </div>
              <NuxtLink to="/work" class="btn-outline">
                View All Projects
              </NuxtLink>
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
// Icon component is auto-imported by @nuxt/icon

// SEO
useSEO({
  title: 'Traxis Manufacturing LLC - Precision CNC Machining with a Partnership Approach',
  description: 'Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications. Dedicated machinists providing personalized service for complex components.',
  keywords: 'CNC machining, precision manufacturing, Austin Texas, aerospace parts, medical devices, industrial components, tight tolerances',
  image: '/home-hero.jpg'
})
</script>