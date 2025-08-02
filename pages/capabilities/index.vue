<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Precision CNC Machining Capabilities
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Advanced manufacturing solutions for aerospace, medical, and industrial applications. 
            From prototype to production, we deliver precision when it matters most.
          </p>
          <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
            Request a Quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Core Services Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive CNC machining services with expertise in complex geometries, 
            tight tolerances, and challenging materials.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- CNC Milling -->
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:cog" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">CNC Milling</h3>
            </div>
            <p class="text-gray-600 mb-6">
              High-precision milling services for complex components requiring tight tolerances. 
              Our 3-axis, 4-axis, and 5-axis capabilities handle everything from simple brackets 
              to intricate aerospace components.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                3, 4, and 5-axis milling capabilities
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Complex geometries and contours
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Tight tolerances to ±0.001"
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Wide range of materials
              </li>
            </ul>
            <NuxtLink to="/capabilities/cnc-milling" class="btn-outline">
              Learn More About Milling
            </NuxtLink>
          </div>

          <!-- CNC Turning -->
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:rotate-3d-variant" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">CNC Turning</h3>
            </div>
            <p class="text-gray-600 mb-6">
              Precision turning services for round components, shafts, and cylindrical parts. 
              Our advanced lathes with live tooling provide complete machining solutions 
              in a single setup.
            </p>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Live tooling capabilities
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Swiss-style precision turning
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Multi-axis simultaneous machining
              </li>
              <li class="flex items-center">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 mr-2" />
                Small to medium production runs
              </li>
            </ul>
            <NuxtLink to="/capabilities/cnc-turning" class="btn-outline">
              Learn More About Turning
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Expertise -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Materials We Work With
          </h2>
          <p class="text-xl text-gray-600">
            Expertise across a wide range of materials for diverse applications
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:gold" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Aluminum Alloys</h3>
            <p class="text-sm text-gray-600">6061, 7075, 2024, 5083</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:iron" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Stainless Steel</h3>
            <p class="text-sm text-gray-600">303, 304, 316, 17-4 PH</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:diamond-stone" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Engineering Plastics</h3>
            <p class="text-sm text-gray-600">Delrin, PEEK, Ultem, Nylon</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:copper" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Specialty Alloys</h3>
            <p class="text-sm text-gray-600">Titanium, Inconel, Brass</p>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/capabilities/materials" class="btn-primary">
            View Complete Materials List
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Collaboration & Design Support -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Design for Manufacturability (DFM) Collaboration
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              We don't just manufacture your parts – we partner with you to optimize your designs. 
              Our experienced machinists provide valuable DFM feedback to improve part quality, 
              reduce costs, and simplify production without compromising functionality.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-traxis-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Icon name="mdi:lightbulb" class="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Design Optimization</h4>
                  <p class="text-gray-600">Improve part design for better manufacturability and cost-effectiveness</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-6 h-6 bg-traxis-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Icon name="mdi:target" class="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Tolerance Analysis</h4>
                  <p class="text-gray-600">Ensure realistic tolerances that maintain function while optimizing cost</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-6 h-6 bg-traxis-red-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Icon name="mdi:speedometer" class="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Process Optimization</h4>
                  <p class="text-gray-600">Reduce setup time and improve efficiency through smart design choices</p>
                </div>
              </div>
            </div>
            
            <NuxtLink to="/process" class="btn-primary">
              Learn About Our Process
            </NuxtLink>
          </div>
          
          <div class="lg:text-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center" 
              alt="Design collaboration and DFM process" 
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Volume Capabilities -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Volume Capabilities
          </h2>
          <p class="text-xl text-gray-600">
            From prototype to production, we scale with your needs
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center bg-white rounded-lg p-8 shadow-sm">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:flask-outline" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Prototyping</h3>
            <p class="text-gray-600 mb-4">
              Single parts to small quantities for design validation and testing
            </p>
            <div class="text-sm text-gray-500">
              Quantity: 1-10 pieces
            </div>
          </div>
          
          <div class="text-center bg-white rounded-lg p-8 shadow-sm">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:package-variant" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Small Batch</h3>
            <p class="text-gray-600 mb-4">
              Low to medium volume production runs with consistent quality
            </p>
            <div class="text-sm text-gray-500">
              Quantity: 10-500 pieces
            </div>
          </div>
          
          <div class="text-center bg-white rounded-lg p-8 shadow-sm">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:factory" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Production</h3>
            <p class="text-gray-600 mb-4">
              Medium volume production with established processes and quality control
            </p>
            <div class="text-sm text-gray-500">
              Quantity: 500+ pieces
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art Equipment
          </h2>
          <p class="text-xl text-gray-600">
            Modern CNC machinery for precision and efficiency
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <Icon name="mdi:cog" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">5-Axis Machining Centers</h3>
            <p class="text-gray-600">Complex geometries in single setups</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:rotate-3d-variant" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">CNC Lathes with Live Tooling</h3>
            <p class="text-gray-600">Complete turning and milling operations</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:ruler" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">CMM Inspection</h3>
            <p class="text-gray-600">Precision measurement and quality assurance</p>
          </div>
        </div>
        
        <div class="text-center">
          <NuxtLink to="/capabilities/equipment" class="btn-primary text-lg px-8 py-4">
            View Complete Equipment List
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Discuss Your Project?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us to learn how our precision machining capabilities can bring your designs to life.
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

useHead({
  title: 'CNC Machining Capabilities - Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Advanced CNC milling and turning capabilities for aerospace, medical, and industrial applications. Precision machining with tight tolerances and expert DFM collaboration.' 
    },
    { name: 'keywords', content: 'CNC milling, CNC turning, precision machining, 5-axis machining, DFM, design for manufacturability, Austin Texas' }
  ]
})
</script>