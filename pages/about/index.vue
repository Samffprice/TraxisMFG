<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            About Traxis Manufacturing
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Austin-based precision machining experts committed to delivering exceptional 
            quality through personalized service and collaborative partnerships.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
              Work With Us
            </NuxtLink>
            <NuxtLink to="/capabilities" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-traxis-grey-900">
              Our Capabilities
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story & Mission -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-6">
              Our Story & Mission
            </h2>
            <div class="space-y-6 text-lg text-traxis-grey-600">
              <p>
                Founded in 2009, Traxis Manufacturing LLC was established with a clear vision: 
                to provide precision CNC machining services that combine cutting-edge technology 
                with the personal touch of a dedicated team. Located in the heart of Austin, Texas, 
                we've grown from a small machine shop to a trusted partner for companies across 
                aerospace, medical, and industrial sectors.
              </p>
              <p>
                Our mission is simple yet powerful: to deliver exceptional precision machining 
                through collaborative partnerships, unwavering quality standards, and personalized 
                service that treats every project as if it were our own. We believe that the best 
                manufacturing results come from understanding not just what our clients need, 
                but why they need it.
              </p>
              <p>
                At Traxis, we're not just machinists – we're problem solvers, collaborators, 
                and craftsmen who take pride in transforming complex designs into precision 
                reality. Every component we produce reflects our commitment to excellence and 
                our dedication to our clients' success.
              </p>
            </div>
          </div>
          <div>
            <img 
              src="/about-us.jpg" 
              alt="Traxis Manufacturing facility in Austin, Texas" 
              class="rounded-lg shadow-lg w-full"
            />
            <p class="text-sm text-gray-500 mt-3 text-center">
              Our Austin facility at 511 East Saint Elmo Road
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:handshake" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
            <p class="text-gray-600">
              We work as an extension of your team, collaborating closely to achieve the best results.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:target" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Precision</h3>
            <p class="text-gray-600">
              Uncompromising commitment to accuracy and quality in every component we produce.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:account-heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Personalized Service</h3>
            <p class="text-gray-600">
              Every client receives dedicated attention and customized solutions for their needs.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:lightbulb" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600">
              Continuous improvement in processes, technology, and problem-solving approaches.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Our Team -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Dedicated Team
          </h2>
          <p class="text-xl text-gray-600">
            Experienced professionals committed to precision and quality
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="text-center bg-gray-50 rounded-lg p-8"
          >
            <img 
              :src="member.photo" 
              :alt="member.name" 
              class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
            <p class="text-traxis-red-600 font-medium mb-4">{{ member.title }}</p>
            <p class="text-gray-600 mb-4">{{ member.bio }}</p>
            <div class="flex justify-center space-x-4 text-sm text-gray-500">
              <span v-if="member.experience">{{ member.experience }} years experience</span>
              <span v-if="member.certifications">{{ member.certifications }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Austin Facility -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Austin Facility
          </h2>
          <p class="text-xl text-gray-600">
            State-of-the-art equipment in a modern, organized environment
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              511 East Saint Elmo Road, Austin, TX 78745
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              Our 15,000 square foot facility houses state-of-the-art CNC equipment in a 
              climate-controlled environment designed for precision manufacturing. The clean, 
              well-organized shop floor reflects our commitment to quality and efficiency.
            </p>
            <div class="space-y-4">
              <div class="flex items-center">
                <Icon name="mdi:factory" class="w-6 h-6 text-traxis-red-600 mr-3" />
                <span class="text-gray-700">15,000 sq ft manufacturing space</span>
              </div>
              <div class="flex items-center">
                <Icon name="mdi:thermometer" class="w-6 h-6 text-traxis-red-600 mr-3" />
                <span class="text-gray-700">Climate-controlled environment</span>
              </div>
              <div class="flex items-center">
                <Icon name="mdi:security" class="w-6 h-6 text-traxis-red-600 mr-3" />
                <span class="text-gray-700">Secure facility with controlled access</span>
              </div>
              <div class="flex items-center">
                <Icon name="mdi:truck" class="w-6 h-6 text-traxis-red-600 mr-3" />
                <span class="text-gray-700">Convenient shipping and receiving</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091870621-57c4312c9c1b?w=800&h=600&fit=crop&crop=center" 
              alt="Clean, modern machine shop interior" 
              class="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        
        <!-- Facility Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <Icon name="mdi:cog" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Manufacturing Floor</h3>
            <p class="text-gray-600">Modern CNC equipment with advanced capabilities</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:ruler" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Quality Lab</h3>
            <p class="text-gray-600">Precision measurement and inspection equipment</p>
          </div>
          
          <div class="text-center">
            <Icon name="mdi:office-building" class="w-12 h-12 text-traxis-red-600 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Engineering Office</h3>
            <p class="text-gray-600">Design review and programming workstations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality & Certifications -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality & Certifications
          </h2>
          <p class="text-xl text-gray-600">
            Committed to the highest standards of quality and compliance
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Our Quality Commitment
            </h3>
            <p class="text-lg text-gray-600 mb-6">
              Quality is not just a department at Traxis – it's ingrained in every aspect 
              of our operation. From incoming material inspection to final delivery, we 
              maintain rigorous quality standards that meet or exceed industry requirements.
            </p>
            
            <div class="space-y-6">
              <div class="bg-traxis-grey-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:certificate" class="w-8 h-8 text-traxis-red-600 mr-3" />
                  <h4 class="text-lg font-semibold text-gray-900">ISO 9001:2015</h4>
                </div>
                <p class="text-gray-600">
                  Certified quality management system ensuring consistent processes 
                  and continuous improvement across all operations.
                </p>
              </div>
              
              <div class="bg-orange-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:airplane" class="w-8 h-8 text-orange-600 mr-3" />
                  <h4 class="text-lg font-semibold text-gray-900">AS9100 Compliant</h4>
                </div>
                <p class="text-gray-600">
                  Aerospace quality standards compliance for critical aviation 
                  and defense applications requiring the highest levels of quality.
                </p>
              </div>
              
              <div class="bg-green-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:shield-check" class="w-8 h-8 text-green-600 mr-3" />
                  <h4 class="text-lg font-semibold text-gray-900">FDA Compliant</h4>
                </div>
                <p class="text-gray-600">
                  Medical device manufacturing compliance for components requiring 
                  FDA-approved materials and processes.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581092335878-7d6d14e42dd8?w=800&h=600&fit=crop&crop=center" 
              alt="Quality inspection and measurement" 
              class="rounded-lg shadow-lg w-full mb-6"
            />
            
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-2xl font-bold text-traxis-red-600 mb-1">99.8%</div>
                <div class="text-sm text-gray-600">First Pass Yield</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-2xl font-bold text-traxis-red-600 mb-1">±0.001"</div>
                <div class="text-sm text-gray-600">Typical Tolerance</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-2xl font-bold text-traxis-red-600 mb-1">100%</div>
                <div class="text-sm text-gray-600">Parts Inspected</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="text-2xl font-bold text-traxis-red-600 mb-1">15+</div>
                <div class="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600">
            Trusted partnerships built on quality and reliability
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white rounded-lg p-6 shadow-sm"
          >
            <div class="flex items-center mb-4">
              <div class="flex space-x-1">
                <Icon v-for="i in 5" :key="i" name="mdi:star" class="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <blockquote class="text-gray-700 mb-4 italic">
              "{{ testimonial.quote }}"
            </blockquote>
            <footer class="text-sm">
              <strong class="text-gray-900">{{ testimonial.author }}</strong>
              <p class="text-gray-600">{{ testimonial.title }}</p>
              <p class="text-gray-500">{{ testimonial.company }}</p>
            </footer>
          </div>
        </div>
      </div>
    </section>

    <!-- Local Community -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Proud Members of the Austin Community
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          As an Austin-based company, we're committed to supporting the local technology 
          and manufacturing ecosystem. We believe in building long-term relationships 
          with our clients and contributing to the growth of Austin's advanced manufacturing sector.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/work" class="btn-primary text-lg px-8 py-4">
            See Our Work
          </NuxtLink>
          <NuxtLink to="/request-quote" class="btn-outline text-lg px-8 py-4">
            Work With Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Icon component is auto-imported by @nuxt/icon

const teamMembers = [
  {
    id: 1,
    name: "Michael Rodriguez",
    title: "Founder & President",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Founded Traxis with a vision to provide exceptional precision machining through collaborative partnerships. Brings extensive experience in aerospace and medical device manufacturing.",
    experience: 25,
    certifications: "Six Sigma Black Belt"
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Lead Manufacturing Engineer",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face",
    bio: "Oversees all manufacturing operations and quality systems. Expert in DFM optimization and process improvement with focus on aerospace applications.",
    experience: 18,
    certifications: "Certified Quality Engineer"
  },
  {
    id: 3,
    name: "David Thompson",
    title: "Shop Foreman",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Manages day-to-day shop operations and leads our team of skilled machinists. Specialist in 5-axis programming and complex setups.",
    experience: 22,
    certifications: "Master Machinist"
  },
  {
    id: 4,
    name: "Lisa Parker",
    title: "Quality Manager",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Ensures all parts meet or exceed customer specifications. Manages quality systems, inspection procedures, and customer compliance requirements.",
    experience: 15,
    certifications: "ASQ Certified"
  },
  {
    id: 5,
    name: "Robert Kim",
    title: "Senior CNC Programmer",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Develops complex CNC programs for multi-axis machining. Specializes in medical device components and tight-tolerance aerospace parts.",
    experience: 16,
    certifications: "NIMS Certified"
  },
  {
    id: 6,
    name: "Amanda Foster",
    title: "Customer Success Manager",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Manages customer relationships and project coordination. Ensures clear communication throughout the manufacturing process from quote to delivery.",
    experience: 12,
    certifications: "PMP Certified"
  }
]

const testimonials = [
  {
    id: 1,
    quote: "Traxis Manufacturing has been our go-to precision machining partner for over five years. Their attention to detail and collaborative approach consistently exceed our expectations.",
    author: "Jennifer Walsh",
    title: "Senior Engineering Manager",
    company: "Aerospace Technology Company"
  },
  {
    id: 2,
    quote: "The team at Traxis truly understands our medical device requirements. Their quality systems and attention to regulatory compliance give us complete confidence in their work.",
    author: "Dr. Mark Stevens",
    title: "Chief Technology Officer",
    company: "Medical Device Manufacturer"
  },
  {
    id: 3,
    quote: "Working with Traxis feels like having an extension of our own engineering team. Their DFM feedback has saved us significant time and money on multiple projects.",
    author: "Carlos Mendoza",
    title: "Product Development Director",
    company: "Industrial Equipment Company"
  }
]

useHead({
  title: 'About Us - Meet Our Team | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Learn about Traxis Manufacturing - Austin-based precision machining experts committed to quality, collaboration, and personalized service. Meet our experienced team and facility.' 
    },
    { name: 'keywords', content: 'about Traxis Manufacturing, Austin machining company, precision manufacturing team, CNC machining facility, quality certifications' }
  ]
})
</script>