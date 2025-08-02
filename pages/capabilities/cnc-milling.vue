<template>
  <div>
    <Breadcrumbs />
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <nav class="text-traxis-grey-200 text-sm mb-6">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/capabilities" class="hover:text-white">Capabilities</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-white">CNC Milling</span>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            High-Precision CNC Milling Services
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Advanced milling capabilities for complex components requiring tight tolerances 
            and superior surface finishes across a wide range of materials.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
              Get Milling Quote
            </NuxtLink>
            <NuxtLink to="/capabilities/equipment" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              See Milling Equipment
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Description -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              Precision Milling Excellence
            </h2>
            <p class="text-lg text-traxis-grey-600 mb-6">
              Our CNC milling services combine state-of-the-art equipment with decades of 
              machining expertise to produce complex components with exceptional precision. 
              From simple brackets to intricate aerospace components, we handle projects 
              that demand the highest levels of accuracy and quality.
            </p>
            <p class="text-lg text-traxis-grey-600 mb-8">
              Whether you need prototypes for design validation or medium-volume production 
              runs, our milling capabilities ensure consistent quality and dimensional accuracy 
              that meets the most stringent requirements.
            </p>
            
            <div class="bg-traxis-grey-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">Key Capabilities</h3>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Tolerances as tight as ±0.001"
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Complex 3D contours and geometries
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Thin-wall and deep-pocket machining
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Multiple setups minimized with 5-axis capability
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center" 
              alt="High-precision CNC milling machine in operation" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Milling Capabilities -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Our Milling Capabilities
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Comprehensive milling solutions for diverse manufacturing needs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 3-Axis Milling -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:axis-z-arrow" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">3-Axis Milling</h3>
            <p class="text-traxis-grey-600 mb-4">
              Traditional milling for straightforward geometries, pockets, slots, and holes. 
              Ideal for brackets, plates, and simple mechanical components.
            </p>
            <ul class="space-y-2 text-sm text-traxis-grey-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Work envelope up to 24" x 16" x 20"
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                High-speed spindles up to 15,000 RPM
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Automatic tool changers up to 40 tools
              </li>
            </ul>
          </div>

          <!-- 4-Axis Milling -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="w-12 h-12 bg-traxis-grey-700 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:rotate-orbit" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">4-Axis Milling</h3>
            <p class="text-traxis-grey-600 mb-4">
              Rotary axis capability for cylindrical features, angular surfaces, and 
              reduced setup requirements. Perfect for complex brackets and housings.
            </p>
            <ul class="space-y-2 text-sm text-traxis-grey-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-grey-700 mr-2" />
                Continuous rotary axis positioning
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-grey-700 mr-2" />
                Reduced setup time and improved accuracy
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-grey-700 mr-2" />
                Complex angular and helical features
              </li>
            </ul>
          </div>

          <!-- 5-Axis Milling -->
          <div class="bg-white rounded-lg p-8 shadow-sm border-2 border-traxis-red-600">
            <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:rotate-3d-variant" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-traxis-grey-900 mb-4">5-Axis Milling</h3>
            <p class="text-traxis-grey-600 mb-4">
              Simultaneous 5-axis machining for the most complex geometries. Eliminates 
              multiple setups and achieves superior surface finishes on complex contours.
            </p>
            <ul class="space-y-2 text-sm text-traxis-grey-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Simultaneous 5-axis capability
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Complex sculptured surfaces
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Aerospace and medical components
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Expertise -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Materials We Mill
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Expertise across metals, plastics, and specialty alloys
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Aluminum Alloys -->
          <div class="text-center p-6">
            <h3 class="text-lg font-semibold text-traxis-grey-900 mb-3">Aluminum Alloys</h3>
            <ul class="space-y-1 text-sm text-traxis-grey-600">
              <li>6061-T6 (General purpose)</li>
              <li>7075-T6 (High strength)</li>
              <li>2024-T3 (Aerospace)</li>
              <li>5083-H116 (Marine)</li>
              <li>6063-T6 (Extrusion)</li>
            </ul>
          </div>

          <!-- Stainless Steel -->
          <div class="text-center p-6">
            <h3 class="text-lg font-semibold text-traxis-grey-900 mb-3">Stainless Steel</h3>
            <ul class="space-y-1 text-sm text-traxis-grey-600">
              <li>303 (Free machining)</li>
              <li>304/304L (General purpose)</li>
              <li>316/316L (Corrosion resistant)</li>
              <li>17-4 PH (Precipitation hardening)</li>
              <li>15-5 PH (High strength)</li>
            </ul>
          </div>

          <!-- Engineering Plastics -->
          <div class="text-center p-6">
            <h3 class="text-lg font-semibold text-traxis-grey-900 mb-3">Engineering Plastics</h3>
            <ul class="space-y-1 text-sm text-traxis-grey-600">
              <li>Delrin (POM)</li>
              <li>PEEK (High performance)</li>
              <li>Ultem (PEI)</li>
              <li>Nylon 6/6 (PA6)</li>
              <li>Polycarbonate (PC)</li>
            </ul>
          </div>

          <!-- Specialty Alloys -->
          <div class="text-center p-6">
            <h3 class="text-lg font-semibold text-traxis-grey-900 mb-3">Specialty Alloys</h3>
            <ul class="space-y-1 text-sm text-traxis-grey-600">
              <li>Titanium Ti-6Al-4V</li>
              <li>Inconel 718</li>
              <li>Brass C360</li>
              <li>Bronze C932</li>
              <li>Tool steels</li>
            </ul>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/capabilities/materials" class="btn-outline">
            View Complete Materials List
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Applications & Industries -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Applications & Industries
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Precision milling for critical applications across diverse industries
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <Icon name="mdi:airplane" class="w-8 h-8 text-traxis-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-traxis-grey-900">Aerospace</h3>
            </div>
            <ul class="space-y-2 text-traxis-grey-600">
              <li>• Structural components</li>
              <li>• Engine parts</li>
              <li>• Brackets and housings</li>
              <li>• Heat exchangers</li>
              <li>• Manifolds and fittings</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <Icon name="mdi:heart-pulse" class="w-8 h-8 text-traxis-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-traxis-grey-900">Medical Devices</h3>
            </div>
            <ul class="space-y-2 text-traxis-grey-600">
              <li>• Surgical instruments</li>
              <li>• Implant components</li>
              <li>• Diagnostic equipment parts</li>
              <li>• Precision housings</li>
              <li>• Custom fixtures</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <Icon name="mdi:factory" class="w-8 h-8 text-traxis-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-traxis-grey-900">Industrial</h3>
            </div>
            <ul class="space-y-2 text-traxis-grey-600">
              <li>• Automation components</li>
              <li>• Precision fixtures</li>
              <li>• Valve bodies</li>
              <li>• Pump components</li>
              <li>• Custom tooling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality & Inspection -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092335878-7d6d14e42dd8?w=800&h=600&fit=crop&crop=center" 
              alt="Quality inspection and measurement equipment" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              Quality Assurance
            </h2>
            <p class="text-lg text-traxis-grey-600 mb-6">
              Every milled component undergoes rigorous quality inspection to ensure 
              compliance with your specifications. Our quality control process includes 
              in-process monitoring and final inspection using precision measurement equipment.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:ruler" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                <div>
                  <h4 class="font-semibold text-traxis-grey-900">CMM Inspection</h4>
                  <p class="text-traxis-grey-600">Coordinate measuring machine for precise dimensional verification</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <Icon name="mdi:certificate" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                <div>
                  <h4 class="font-semibold text-traxis-grey-900">First Article Inspection</h4>
                  <p class="text-traxis-grey-600">Complete dimensional report for initial part approval</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <Icon name="mdi:chart-line" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                <div>
                  <h4 class="font-semibold text-traxis-grey-900">Statistical Process Control</h4>
                  <p class="text-traxis-grey-600">Continuous monitoring to maintain consistent quality</p>
                </div>
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
          Ready to Start Your Milling Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us to discuss your CNC milling requirements and get a detailed quote.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request Milling Quote
          </NuxtLink>
          <NuxtLink to="/capabilities/equipment" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            View Equipment List
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

useHead({
  title: 'CNC Milling Services - Precision Machining | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'High-precision CNC milling services with 3, 4, and 5-axis capabilities. Complex geometries, tight tolerances, and superior surface finishes for aerospace, medical, and industrial applications.' 
    },
    { name: 'keywords', content: 'CNC milling, 5-axis machining, precision milling, complex geometries, tight tolerances, aerospace components, medical devices' }
  ]
})
</script>