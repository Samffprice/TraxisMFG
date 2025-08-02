<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-orange-600 to-orange-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-orange-200 text-sm mb-6">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/capabilities" class="hover:text-white">Capabilities</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-white">CNC Turning</span>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Precision CNC Turning Services
          </h1>
          <p class="text-xl md:text-2xl text-orange-100 mb-8">
            Advanced turning capabilities for round components, shafts, and cylindrical parts 
            with live tooling for complete machining solutions in a single setup.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
              Get Turning Quote
            </NuxtLink>
            <NuxtLink to="/capabilities/equipment" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              See Turning Equipment
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
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Precision Turning Excellence
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Our CNC turning services deliver exceptional precision for round components, 
              shafts, and cylindrical parts. With advanced lathes featuring live tooling 
              and multi-axis capabilities, we can complete complex parts in a single setup, 
              ensuring superior accuracy and surface finish.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              From simple pins to complex aerospace shafts, our turning capabilities 
              handle everything from prototype quantities to medium production runs 
              with consistent quality and dimensional accuracy.
            </p>
            
            <div class="bg-orange-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Key Capabilities</h3>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Live tooling for milling operations
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Swiss-style precision turning
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Multi-axis simultaneous machining
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-3" />
                  Complete parts in single setup
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091913692-7c5b6bbee7b7?w=800&h=600&fit=crop&crop=center" 
              alt="High-precision CNC turning machine with live tooling" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Turning Capabilities -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Turning Capabilities
          </h2>
          <p class="text-xl text-gray-600">
            Comprehensive turning solutions for diverse manufacturing needs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Conventional Turning -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:rotate-right" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Conventional Turning</h3>
            <p class="text-gray-600 mb-4">
              Traditional turning operations for external and internal features including 
              facing, turning, boring, and threading operations.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                External turning and facing
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                Internal boring and reaming
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                Threading and grooving
              </li>
            </ul>
          </div>

          <!-- Live Tooling -->
          <div class="bg-white rounded-lg p-8 shadow-sm border-2 border-orange-600">
            <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:cog" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Live Tooling</h3>
            <p class="text-gray-600 mb-4">
              Powered tooling capabilities allow milling, drilling, and cross-hole 
              operations while the part remains in the turning setup.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                Cross-hole drilling and milling
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                Keyways and flats
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-orange-600 mr-2" />
                Complex geometries in one setup
              </li>
            </ul>
          </div>

          <!-- Swiss Turning -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mb-4">
              <Icon name="mdi:cog-outline" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Swiss-Style Turning</h3>
            <p class="text-gray-600 mb-4">
              High-precision turning for small diameter parts with excellent 
              surface finish and tight tolerances.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Small diameter precision parts
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                Excellent surface finish
              </li>
              <li class="flex items-center">
                <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                High-volume capability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common Turning Applications
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <Icon name="mdi:circle-outline" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Shafts & Rods</h3>
            <p class="text-sm text-gray-600">Precision shafts for mechanical assemblies</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:pipe" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Bushings & Sleeves</h3>
            <p class="text-sm text-gray-600">Cylindrical components with tight ID/OD tolerances</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:screw-machine-round-top" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Threaded Components</h3>
            <p class="text-sm text-gray-600">Precision threads and fasteners</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:medical-bag" class="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Medical Devices</h3>
            <p class="text-sm text-gray-600">Surgical instruments and implant components</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Turning Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us to discuss your CNC turning requirements and get a detailed quote.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request Turning Quote
          </NuxtLink>
          <NuxtLink to="/capabilities/equipment" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            See Turning Equipment
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

useHead({
  title: 'CNC Turning Services - Precision Turning | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'High-precision CNC turning services with live tooling and Swiss-style capabilities. Round components, shafts, and cylindrical parts for aerospace, medical, and industrial applications.' 
    },
    { name: 'keywords', content: 'CNC turning, precision turning, live tooling, Swiss turning, shafts, cylindrical parts, round components' }
  ]
})
</script>