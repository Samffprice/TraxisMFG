<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-purple-600 to-purple-700 text-white section-padding">
      <div class="container-custom">
        <nav class="text-purple-200 text-sm mb-6">
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/capabilities" class="hover:text-white">Capabilities</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-white">Equipment List</span>
        </nav>
        
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Our Equipment List
          </h1>
          <p class="text-xl md:text-2xl text-purple-100 mb-8">
            State-of-the-art CNC machinery and precision measurement equipment 
            for complex geometries and tight tolerance manufacturing.
          </p>
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request a Quote
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Equipment Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Precision Manufacturing Equipment
          </h2>
          <p class="text-xl text-gray-600">
            Modern CNC machinery for complex parts and tight tolerances
          </p>
        </div>
        
        <!-- CNC Milling Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-traxis-red-600 rounded-lg flex items-center justify-center mr-4">
              <Icon name="mdi:cog" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">CNC Milling Centers</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Haas VF-4SS Super Speed</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="flex items-center"><Icon name="mdi:settings" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Type:</strong> 3-Axis Vertical Machining Center</p>
                <p class="flex items-center"><Icon name="mdi:arrow-expand-all" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Travel:</strong> 50" x 20" x 25" (X, Y, Z)</p>
                <p class="flex items-center"><Icon name="mdi:speedometer" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Spindle:</strong> 15,000 RPM, 40-taper</p>
                <p class="flex items-center"><Icon name="mdi:wrench" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Tool Changer:</strong> 24-station automatic</p>
                <p class="flex items-center"><Icon name="mdi:star" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Features:</strong> High-speed machining, flood coolant, programmable coolant</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">DMG Mori DMU 50 ecoline</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="flex items-center"><Icon name="mdi:settings" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Type:</strong> 5-Axis Universal Machining Center</p>
                <p class="flex items-center"><Icon name="mdi:arrow-expand-all" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Travel:</strong> 24" x 20" x 18" (X, Y, Z)</p>
                <p class="flex items-center"><Icon name="mdi:speedometer" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Spindle:</strong> 12,000 RPM, HSK-A63</p>
                <p class="flex items-center"><Icon name="mdi:wrench" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Tool Changer:</strong> 42-station magazine</p>
                <p class="flex items-center"><Icon name="mdi:star" class="w-4 h-4 text-traxis-red-600 mr-2" /><strong>Features:</strong> Simultaneous 5-axis, tilting rotary table, automatic work setup</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Mazak VCN-530C</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> 3-Axis Vertical Machining Center</p>
                <p><strong>Travel:</strong> 41" x 20" x 20" (X, Y, Z)</p>
                <p><strong>Spindle:</strong> 10,000 RPM, 40-taper</p>
                <p><strong>Tool Changer:</strong> 30-station automatic</p>
                <p><strong>Features:</strong> Rigid tapping, through-spindle coolant, chip conveyor</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Okuma Genos M560-V</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> 4-Axis Vertical Machining Center</p>
                <p><strong>Travel:</strong> 22" x 15.7" x 15.7" (X, Y, Z)</p>
                <p><strong>Spindle:</strong> 12,000 RPM, 40-taper</p>
                <p><strong>Tool Changer:</strong> 20-station automatic</p>
                <p><strong>Features:</strong> 4th axis rotary table, thermal compensation, precision spindle</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CNC Turning Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
              <Icon name="mdi:rotate-3d-variant" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">CNC Turning Centers</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Doosan PUMA 2600SY</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p class="flex items-center"><Icon name="mdi:settings" class="w-4 h-4 text-orange-600 mr-2" /><strong>Type:</strong> CNC Lathe with Live Tooling</p>
                <p class="flex items-center"><Icon name="mdi:diameter-variant" class="w-4 h-4 text-orange-600 mr-2" /><strong>Swing:</strong> 18.1" over bed, 11.8" over cross slide</p>
                <p class="flex items-center"><Icon name="mdi:arrow-expand-horizontal" class="w-4 h-4 text-orange-600 mr-2" /><strong>Length:</strong> 20.9" between centers</p>
                <p class="flex items-center"><Icon name="mdi:speedometer" class="w-4 h-4 text-orange-600 mr-2" /><strong>Spindle:</strong> 4,000 RPM main, 5,000 RPM live tooling</p>
                <p class="flex items-center"><Icon name="mdi:star" class="w-4 h-4 text-orange-600 mr-2" /><strong>Features:</strong> Y-axis capability, sub-spindle, bar feeder ready</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Mazak QT Nexus 250-II MSY</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Multi-Tasking Turning Center</p>
                <p><strong>Swing:</strong> 10" over bed, 7.9" over cross slide</p>
                <p><strong>Length:</strong> 15.7" between centers</p>
                <p><strong>Spindle:</strong> 5,000 RPM main, 6,000 RPM live tooling</p>
                <p><strong>Features:</strong> Y-axis milling, sub-spindle, done-in-one capability</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Citizen K16E Swiss Lathe</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Swiss-Style CNC Lathe</p>
                <p><strong>Capacity:</strong> 0.625" bar diameter</p>
                <p><strong>Length:</strong> 5.9" machining length</p>
                <p><strong>Spindle:</strong> 10,000 RPM main spindle</p>
                <p><strong>Features:</strong> Guide bushing, back working, cross drilling</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Haas ST-20Y</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> CNC Lathe with Live Tooling</p>
                <p><strong>Swing:</strong> 17.5" over bed, 11.8" over cross slide</p>
                <p><strong>Length:</strong> 20.5" between centers</p>
                <p><strong>Spindle:</strong> 3,500 RPM main, 4,000 RPM live tooling</p>
                <p><strong>Features:</strong> Y-axis capability, 12-station BMT turret</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Inspection & Quality Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
              <Icon name="mdi:ruler" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Inspection & Quality Control</h3>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Zeiss Contura G2 CMM</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Coordinate Measuring Machine</p>
                <p><strong>Measuring Volume:</strong> 20" x 12" x 8"</p>
                <p><strong>Accuracy:</strong> ±0.0002" (±5 μm)</p>
                <p><strong>Features:</strong> VAST XTR scanning probe, climate compensation, Calypso software</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Mitutoyo Height Gages</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Digital Height Measuring</p>
                <p><strong>Range:</strong> 12" and 24" models</p>
                <p><strong>Resolution:</strong> 0.00005" (1 μm)</p>
                <p><strong>Features:</strong> Statistical analysis, air bearing, granite surface plate</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Optical Comparator</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Profile Projector</p>
                <p><strong>Screen:</strong> 14" diameter</p>
                <p><strong>Magnification:</strong> 10X, 20X, 50X, 100X</p>
                <p><strong>Features:</strong> Digital readout, edge detection, angle measurement</p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Surface Roughness Tester</h4>
              <div class="space-y-2 text-sm text-gray-600">
                <p><strong>Type:</strong> Portable Surface Measurement</p>
                <p><strong>Parameters:</strong> Ra, Rz, Rmax measurement</p>
                <p><strong>Range:</strong> 0.1 to 320 μin Ra</p>
                <p><strong>Features:</strong> Data logging, statistical analysis, profile display</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Supporting Equipment -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
              <Icon name="mdi:tools" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Supporting Equipment & Tooling</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Workholding</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li>• Kurt vises and fixtures</li>
                <li>• 5th axis workholding</li>
                <li>• Custom fixture design</li>
                <li>• Precision chucks and collets</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Cutting Tools</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li>• Carbide end mills</li>
                <li>• High-speed steel tools</li>
                <li>• Specialized tooling</li>
                <li>• Tool presetting equipment</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibent text-gray-900 mb-3">Material Handling</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li>• Overhead crane (2-ton)</li>
                <li>• Forklift capability</li>
                <li>• Material storage systems</li>
                <li>• Parts washing station</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Summary -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Equipment Capabilities Summary
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:ruler" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Tolerance</h3>
            <p class="text-2xl font-bold text-traxis-red-600 mb-1">±0.0002"</p>
            <p class="text-sm text-gray-600">Achievable on critical dimensions</p>
          </div>
          
          <div class="text-center bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:cube-outline" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Max Part Size</h3>
            <p class="text-2xl font-bold text-traxis-red-600 mb-1">50" x 20"</p>
            <p class="text-sm text-gray-600">Maximum envelope (milling)</p>
          </div>
          
          <div class="text-center bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:speedometer" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Spindle Speed</h3>
            <p class="text-2xl font-bold text-traxis-red-600 mb-1">15,000</p>
            <p class="text-sm text-gray-600">RPM maximum (high-speed)</p>
          </div>
          
          <div class="text-center bg-white rounded-lg p-6 shadow-sm">
            <Icon name="mdi:axis-arrow" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Axis Capability</h3>
            <p class="text-2xl font-bold text-traxis-red-600 mb-1">5-Axis</p>
            <p class="text-sm text-gray-600">Simultaneous machining</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Utilize Our Equipment?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Our state-of-the-art equipment is ready to tackle your most challenging 
          precision machining projects. Get started with a detailed quote.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/request-quote" class="btn-primary text-lg px-8 py-4">
            Request a Quote
          </NuxtLink>
          <NuxtLink to="/capabilities" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
    Explore Our Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

useHead({
  title: 'Equipment List - CNC Machines & Inspection | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Complete equipment list including CNC milling centers, turning centers, 5-axis machining, CMM inspection, and precision measurement equipment for tight tolerance manufacturing.' 
    },
    { name: 'keywords', content: 'CNC equipment list, 5-axis machining, CMM inspection, precision equipment, Haas, DMG Mori, Mazak, Doosan, machining centers' }
  ]
})
</script>