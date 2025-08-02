<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-green-600 to-green-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-green-200 text-sm mb-6">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/capabilities" class="hover:text-white">Capabilities</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-white">Materials</span>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Materials We Machine
          </h1>
          <p class="text-xl md:text-2xl text-green-100 mb-8">
            Expertise across a comprehensive range of metals, alloys, and engineering plastics 
            for diverse industrial applications and demanding performance requirements.
          </p>
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Get Material Quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Materials Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Materials Expertise
          </h2>
          <p class="text-xl text-gray-600">
            From standard aluminum alloys to exotic aerospace materials
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Aluminum Alloys -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:gold" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Aluminum Alloys</h3>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                  <Icon name="mdi:circle-medium" class="w-4 h-4 text-traxis-red-600 mr-2" />
                  6061-T6 (General Purpose)
                </h4>
                <p class="text-sm text-gray-600 mb-2">Excellent machinability, good corrosion resistance, moderate strength</p>
                <p class="text-xs text-gray-500 flex items-center">
                  <Icon name="mdi:application" class="w-3 h-3 text-gray-400 mr-1" />
                  Applications: General fabrication, brackets, housings
                </p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">7075-T6 (High Strength)</h4>
                <p class="text-sm text-gray-600 mb-2">High strength-to-weight ratio, excellent fatigue resistance</p>
                <p class="text-xs text-gray-500">Applications: Aerospace structural components, high-stress parts</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">2024-T3/T4 (Aerospace)</h4>
                <p class="text-sm text-gray-600 mb-2">High strength, good fatigue resistance, aerospace certified</p>
                <p class="text-xs text-gray-500">Applications: Aircraft structures, aerospace components</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">5083-H116 (Marine Grade)</h4>
                <p class="text-sm text-gray-600 mb-2">Excellent corrosion resistance, non-heat treatable</p>
                <p class="text-xs text-gray-500">Applications: Marine applications, chemical equipment</p>
              </div>
            </div>
          </div>

          <!-- Stainless Steel -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:iron" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Stainless Steel</h3>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">303 (Free Machining)</h4>
                <p class="text-sm text-gray-600 mb-2">Excellent machinability, good corrosion resistance</p>
                <p class="text-xs text-gray-500">Applications: Machined components, fasteners, shafts</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">304/304L (General Purpose)</h4>
                <p class="text-sm text-gray-600 mb-2">Good corrosion resistance, formable, weldable</p>
                <p class="text-xs text-gray-500">Applications: Food processing, chemical equipment</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">316/316L (Corrosion Resistant)</h4>
                <p class="text-sm text-gray-600 mb-2">Superior corrosion resistance, medical grade</p>
                <p class="text-xs text-gray-500">Applications: Medical devices, marine, pharmaceutical</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">17-4 PH (Precipitation Hardening)</h4>
                <p class="text-sm text-gray-600 mb-2">High strength, good corrosion resistance, heat treatable</p>
                <p class="text-xs text-gray-500">Applications: Aerospace, high-strength applications</p>
              </div>
            </div>
          </div>

          <!-- Engineering Plastics -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:diamond-stone" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Engineering Plastics</h3>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Delrin (POM) - Acetal</h4>
                <p class="text-sm text-gray-600 mb-2">Excellent machinability, low friction, good dimensional stability</p>
                <p class="text-xs text-gray-500">Applications: Gears, bearings, mechanical components</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">PEEK (Polyetheretherketone)</h4>
                <p class="text-sm text-gray-600 mb-2">High temperature resistance, chemical resistance, biocompatible</p>
                <p class="text-xs text-gray-500">Applications: Medical implants, aerospace, chemical processing</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Ultem (PEI) - Polyetherimide</h4>
                <p class="text-sm text-gray-600 mb-2">High strength, flame retardant, electrical insulation</p>
                <p class="text-xs text-gray-500">Applications: Aerospace interiors, electrical components</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Nylon 6/6 (PA6)</h4>
                <p class="text-sm text-gray-600 mb-2">High strength, good wear resistance, chemical resistance</p>
                <p class="text-xs text-gray-500">Applications: Mechanical components, automotive parts</p>
              </div>
            </div>
          </div>

          <!-- Specialty Alloys -->
          <div class="bg-gray-50 rounded-lg p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Icon name="mdi:diamond" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Specialty Alloys</h3>
            </div>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Titanium Ti-6Al-4V (Grade 5)</h4>
                <p class="text-sm text-gray-600 mb-2">High strength-to-weight ratio, biocompatible, corrosion resistant</p>
                <p class="text-xs text-gray-500">Applications: Aerospace, medical implants, racing</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Inconel 718</h4>
                <p class="text-sm text-gray-600 mb-2">High temperature strength, oxidation resistant</p>
                <p class="text-xs text-gray-500">Applications: Jet engine components, gas turbines</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Brass C360 (Free Cutting)</h4>
                <p class="text-sm text-gray-600 mb-2">Excellent machinability, good corrosion resistance</p>
                <p class="text-xs text-gray-500">Applications: Fittings, electrical components, decorative parts</p>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Tool Steels (A2, D2, O1)</h4>
                <p class="text-sm text-gray-600 mb-2">High hardness, wear resistance, heat treatable</p>
                <p class="text-xs text-gray-500">Applications: Tooling, dies, wear components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Material Selection Guide -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Material Selection Guidance
          </h2>
          <p class="text-xl text-gray-600">
            Let our experts help you choose the right material for your application
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:thermometer" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-3 text-center">Temperature Requirements</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Room temperature: Aluminum, Steel, Plastics</li>
              <li>• Elevated temperature: Stainless Steel, Inconel</li>
              <li>• High temperature: Titanium, PEEK</li>
              <li>• Cryogenic: Aluminum 6061, Stainless 316</li>
            </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:weight" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-3 text-center">Strength-to-Weight</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Lightweight: Aluminum 7075, Titanium</li>
              <li>• High strength: Tool steels, 17-4 PH</li>
              <li>• Fatigue resistance: 7075, 2024 aluminum</li>
              <li>• Impact resistance: Steel alloys</li>
            </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:shield-check" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-3 text-center">Corrosion Resistance</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Marine: 5083 aluminum, 316 stainless</li>
              <li>• Chemical: PEEK, 316L stainless</li>
              <li>• General: 6061 aluminum, 304 stainless</li>
              <li>• Galvanic compatibility considerations</li>
            </ul>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <NuxtLink to="/contact" class="btn-primary text-lg px-8 py-4">
            Get Material Consultation
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Custom Materials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Don't See Your Material?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            We regularly work with specialty materials not listed here. 
            Contact us to discuss your specific material requirements.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-6 max-w-4xl mx-auto text-left">
            <div class="flex items-start">
              <Icon name="mdi:information" class="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Customer-Supplied Materials</h3>
                <p class="text-gray-700 mb-4">
                  We can work with customer-supplied materials when you have specific sourcing 
                  requirements or specialty alloys. We'll need material certifications and 
                  specifications to ensure proper machining parameters.
                </p>
                <ul class="space-y-1 text-sm text-gray-600">
                  <li>• Material certification required</li>
                  <li>• Machining parameters verified</li>
                  <li>• Additional setup time may apply</li>
                  <li>• Quality guarantee on workmanship only</li>
                </ul>
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
          Need Help Selecting Materials?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Our material experts can help you choose the optimal material for your application, 
          considering performance, cost, and manufacturability.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request Material Quote
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
            Material Consultation
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

useHead({
  title: 'Materials We Machine - Metals, Alloys & Plastics | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Comprehensive materials expertise including aluminum alloys, stainless steel, engineering plastics, and specialty alloys. Expert material selection for precision CNC machining.' 
    },
    { name: 'keywords', content: 'machining materials, aluminum alloys, stainless steel, PEEK, Delrin, titanium, Inconel, engineering plastics, material selection' }
  ]
})
</script>