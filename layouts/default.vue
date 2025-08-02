<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header Navigation -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container-custom">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/traxislogo.webp" 
              alt="Traxis Manufacturing Logo" 
              class="h-12 w-auto"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path === '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/capabilities" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path.startsWith('/capabilities') }"
            >
              Capabilities
            </NuxtLink>
            <NuxtLink 
              to="/work" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path.startsWith('/work') }"
            >
              Work
            </NuxtLink>
            <NuxtLink 
              to="/process" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path.startsWith('/process') }"
            >
              Process
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path.startsWith('/about') }"
            >
              About Us
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-traxis-grey-700 hover:text-traxis-red-600 font-medium transition-colors"
              :class="{ 'text-traxis-red-600 font-semibold': $route.path.startsWith('/contact') }"
            >
              Contact
            </NuxtLink>
            
            <!-- Primary CTA -->
                               <NuxtLink to="/request-quote" class="btn-primary">
                     Request a Quote
                   </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden text-traxis-grey-700 hover:text-traxis-red-600 p-2"
            aria-label="Toggle mobile menu"
          >
            <Icon v-if="!isMobileMenuOpen" name="mdi:menu" class="w-6 h-6" />
            <Icon v-else name="mdi:close" class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          v-show="isMobileMenuOpen" 
          class="lg:hidden border-t border-gray-200 py-4 space-y-4"
        >
          <NuxtLink 
            to="/" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/capabilities" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            Capabilities
          </NuxtLink>
          <NuxtLink 
            to="/work" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            Work
          </NuxtLink>
          <NuxtLink 
            to="/process" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            Process
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            About Us
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block text-traxis-grey-700 hover:text-traxis-red-600 font-medium py-2"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <NuxtLink 
            to="/request-quote" 
            class="btn-primary w-full justify-center mt-4"
            @click="isMobileMenuOpen = false"
          >
            Request a Quote
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <StructuredData />
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-4">
              <img 
                src="/traxislogo.webp" 
                alt="Traxis Manufacturing Logo" 
                class="h-8 w-auto"
              />
              <h3 class="text-xl font-bold">Traxis Manufacturing LLC</h3>
            </div>
            <p class="text-gray-300 mb-4 max-w-md">
              Austin-based precision CNC machining experts providing personalized service 
              for aerospace, medical, and industrial applications.
            </p>
            <div class="space-y-2 text-sm text-gray-300">
              <p class="flex items-center">
                <Icon name="mdi:map-marker" class="w-4 h-4 mr-2" />
                511 East Saint Elmo Road, Austin, TX 78745
              </p>
              <p class="flex items-center">
                <Icon name="mdi:phone" class="w-4 h-4 mr-2" />
                (512) 383-0089
              </p>
              <p class="flex items-center">
                <Icon name="mdi:email" class="w-4 h-4 mr-2" />
                sales@traxismfg.com
              </p>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/capabilities/cnc-milling" class="text-gray-300 hover:text-white transition-colors">CNC Milling</NuxtLink></li>
              <li><NuxtLink to="/capabilities/cnc-turning" class="text-gray-300 hover:text-white transition-colors">CNC Turning</NuxtLink></li>
              <li><NuxtLink to="/capabilities" class="text-gray-300 hover:text-white transition-colors">Precision Machining</NuxtLink></li>
              <li><NuxtLink to="/capabilities/materials" class="text-gray-300 hover:text-white transition-colors">Materials</NuxtLink></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/work" class="text-gray-300 hover:text-white transition-colors">Our Work</NuxtLink></li>
              <li><NuxtLink to="/process" class="text-gray-300 hover:text-white transition-colors">Our Process</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Traxis Manufacturing LLC. All rights reserved.
          </p>
          <div class="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Icon name="mdi:facebook" class="w-5 h-5" />
            </a>
            <a href="mailto:info@traxismfg.com" class="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Icon name="mdi:email-outline" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Icon component is auto-imported by @nuxt/icon

const isMobileMenuOpen = ref(false)
</script>