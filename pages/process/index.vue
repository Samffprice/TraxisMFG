<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-traxis-grey-800 to-traxis-grey-900 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Our Process - From Design to Delivery
          </h1>
          <p class="text-xl md:text-2xl text-traxis-grey-100 mb-8">
            Discover our collaborative approach to precision machining. From initial design 
            review to final delivery, we ensure quality and transparency at every step.
          </p>
          <NuxtLink to="/request-quote" class="btn-secondary text-lg px-8 py-4">
            Start Your Project
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            The Traxis Manufacturing Process
          </h2>
          <p class="text-xl text-traxis-grey-600 max-w-3xl mx-auto">
            Our streamlined process ensures consistent quality, clear communication, 
            and on-time delivery for every project.
          </p>
        </div>
        
        <div class="space-y-16">
          <!-- Step 1 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-1">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white text-xl font-bold">1</span>
                </div>
                <h3 class="text-2xl font-bold text-traxis-grey-900">Submit Your Design & Request a Quote</h3>
              </div>
              <p class="text-lg text-traxis-grey-600 mb-6">
                Begin your project by sending us your design files and project requirements. 
                We accept all standard CAD formats and engineering drawings.
              </p>
              <div class="bg-traxis-grey-50 rounded-lg p-6 mb-6">
                <h4 class="font-semibold text-traxis-grey-900 mb-3">We Accept:</h4>
                <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    STEP files (.stp, .step)
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    IGES files (.igs, .iges)
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    SolidWorks files (.sldprt)
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    AutoCAD files (.dwg, .dxf)
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    PDF drawings
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:check" class="w-4 h-4 text-traxis-red-600 mr-2" />
                    Other major CAD formats
                  </div>
                </div>
              </div>
              <NuxtLink to="/request-quote" class="btn-primary">
                Submit Your Files
              </NuxtLink>
            </div>
            <div class="lg:order-2">
              <div class="text-center">
                <Icon name="mdi:file-upload" class="w-32 h-32 text-traxis-red-600 mx-auto mb-4" />
                <p class="text-traxis-grey-600">Upload your CAD files and project details</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="text-center">
                <Icon name="mdi:account-group" class="w-32 h-32 text-traxis-grey-700 mx-auto mb-4" />
                <p class="text-traxis-grey-600">Collaborative design review and DFM feedback</p>
              </div>
            </div>
            <div>
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-traxis-grey-700 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white text-xl font-bold">2</span>
                </div>
                <h3 class="text-2xl font-bold text-traxis-grey-900">Collaborative Review & Quoting</h3>
              </div>
              <p class="text-lg text-traxis-grey-600 mb-6">
                Our experienced machinists thoroughly review your design and provide valuable 
                Design for Manufacturability (DFM) feedback to optimize your part for production.
              </p>
              <div class="space-y-4 mb-6">
                <div class="flex items-start">
                  <Icon name="mdi:lightbulb" class="w-6 h-6 text-traxis-grey-700 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">Design Optimization</h4>
                    <p class="text-traxis-grey-600">Suggestions to improve manufacturability without compromising function</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:calculator" class="w-6 h-6 text-traxis-grey-700 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">Cost Analysis</h4>
                    <p class="text-traxis-grey-600">Transparent pricing with detailed cost breakdown</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:clock-outline" class="w-6 h-6 text-traxis-grey-700 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">Timeline Planning</h4>
                    <p class="text-traxis-grey-600">Realistic scheduling based on current capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="lg:order-1">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white text-xl font-bold">3</span>
                </div>
                <h3 class="text-2xl font-bold text-traxis-grey-900">Precision Manufacturing</h3>
              </div>
              <p class="text-lg text-traxis-grey-600 mb-6">
                Once the design is finalized and the quote is approved, your project moves 
                to our state-of-the-art shop floor where our dedicated machinists craft 
                your components with precision and care.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-traxis-grey-50 rounded-lg p-4">
                  <Icon name="mdi:cog" class="w-8 h-8 text-traxis-red-600 mb-2" />
                  <h4 class="font-semibold text-traxis-grey-900 mb-1">Advanced Equipment</h4>
                  <p class="text-sm text-traxis-grey-600">5-axis milling and CNC turning</p>
                </div>
                <div class="bg-traxis-grey-50 rounded-lg p-4">
                  <Icon name="mdi:account-hard-hat" class="w-8 h-8 text-traxis-red-600 mb-2" />
                  <h4 class="font-semibold text-traxis-grey-900 mb-1">Expert Machinists</h4>
                  <p class="text-sm text-traxis-grey-600">Decades of experience</p>
                </div>
                <div class="bg-traxis-grey-50 rounded-lg p-4">
                  <Icon name="mdi:chart-line" class="w-8 h-8 text-traxis-red-600 mb-2" />
                  <h4 class="font-semibold text-traxis-grey-900 mb-1">Process Control</h4>
                  <p class="text-sm text-traxis-grey-600">Continuous monitoring</p>
                </div>
                <div class="bg-traxis-grey-50 rounded-lg p-4">
                  <Icon name="mdi:update" class="w-8 h-8 text-traxis-red-600 mb-2" />
                  <h4 class="font-semibold text-traxis-grey-900 mb-1">Progress Updates</h4>
                  <p class="text-sm text-traxis-grey-600">Regular communication</p>
                </div>
              </div>
            </div>
            <div class="lg:order-2">
              <div class="text-center">
                <Icon name="mdi:factory" class="w-32 h-32 text-traxis-red-600 mx-auto mb-4" />
                <p class="text-traxis-grey-600">State-of-the-art manufacturing floor</p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="text-center">
                <Icon name="mdi:shield-check" class="w-32 h-32 text-traxis-red-600 mx-auto mb-4" />
                <p class="text-traxis-grey-600">Rigorous quality assurance and inspection</p>
              </div>
            </div>
            <div>
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white text-xl font-bold">4</span>
                </div>
                <h3 class="text-2xl font-bold text-traxis-grey-900">Quality Assurance & Delivery</h3>
              </div>
              <p class="text-lg text-traxis-grey-600 mb-6">
                Every part undergoes rigorous quality inspection to ensure it meets all 
                dimensional tolerances and quality standards before careful packaging and delivery.
              </p>
              <div class="space-y-4 mb-6">
                <div class="flex items-start">
                  <Icon name="mdi:ruler" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">CMM Inspection</h4>
                    <p class="text-traxis-grey-600">Precision dimensional verification</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:certificate" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">Quality Documentation</h4>
                    <p class="text-traxis-grey-600">Complete inspection reports and certifications</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:truck-delivery" class="w-6 h-6 text-traxis-red-600 mr-3 mt-1" />
                  <div>
                    <h4 class="font-semibold text-traxis-grey-900">Secure Packaging</h4>
                    <p class="text-traxis-grey-600">Careful packaging and on-time delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Information -->
    <section class="section-padding bg-traxis-grey-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Timeline & Delivery
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Transparent scheduling and reliable delivery
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Standard Timeline -->
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-traxis-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="mdi:calendar-clock" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-traxis-grey-900">Standard Timeline</h3>
            </div>
            <div class="text-center mb-6">
              <div class="text-4xl font-bold text-traxis-red-600 mb-2">6 Weeks</div>
              <p class="text-traxis-grey-600">Typical production timeline</p>
            </div>
            <p class="text-traxis-grey-600 text-center mb-6">
              Our standard production timeline allows us to dedicate the necessary time and 
              attention to detail that high-precision components demand, ensuring we deliver 
              the highest quality results.
            </p>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-traxis-grey-600">Quote Response</span>
                <span class="font-semibold text-traxis-grey-900">1-2 Business Days</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-traxis-grey-600">Design Review</span>
                <span class="font-semibold text-traxis-grey-900">2-3 Business Days</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-traxis-grey-600">Manufacturing</span>
                <span class="font-semibold text-traxis-grey-900">4-5 Weeks</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-traxis-grey-600">Final Inspection</span>
                <span class="font-semibold text-traxis-grey-900">2-3 Business Days</span>
              </div>
            </div>
          </div>

          <!-- Expedited Service -->
          <div class="bg-white rounded-lg p-8 shadow-sm border-2 border-orange-600">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-traxis-grey-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="mdi:lightning-bolt" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-traxis-grey-900">Expedited Service</h3>
            </div>
            <div class="text-center mb-6">
              <div class="text-2xl font-bold text-traxis-grey-700 mb-2">Rush Available</div>
              <p class="text-traxis-grey-600">For urgent requirements</p>
            </div>
            <p class="text-traxis-grey-600 text-center mb-6">
              Need a faster turnaround? Contact us directly to discuss the possibility 
              and requirements for expedited service options. Subject to capacity and project complexity.
            </p>
            <div class="bg-orange-50 rounded-lg p-4 mb-6">
              <h4 class="font-semibold text-traxis-grey-900 mb-2">Rush Service Criteria:</h4>
              <ul class="space-y-1 text-sm text-traxis-grey-600">
                <li>• Project complexity assessment</li>
                <li>• Current shop capacity</li>
                <li>• Material availability</li>
                <li>• Premium pricing applies</li>
              </ul>
            </div>
            <NuxtLink to="/contact" class="btn-outline w-full justify-center">
              Discuss Rush Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-traxis-grey-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-traxis-grey-600">
            Common questions about our process and capabilities
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="bg-traxis-grey-50 rounded-lg"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-traxis-red-600"
              >
                <h3 class="text-lg font-semibold text-traxis-grey-900">{{ faq.question }}</h3>
                <Icon 
                  :name="activeFaq === index ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
                  class="w-6 h-6 text-traxis-grey-600"
                />
              </button>
              <div 
                v-show="activeFaq === index"
                class="px-6 pb-6"
              >
                <p class="text-traxis-grey-600" v-html="faq.answer"></p>
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
          Ready to Experience Our Process?
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Start your precision machining project today and experience our collaborative, 
          quality-focused approach firsthand.
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
import { ref } from 'vue'
// Icon component is auto-imported by @nuxt/icon

const activeFaq = ref(null)

const faqs = [
  {
    question: "What is your typical lead time for a project?",
    answer: "Our standard production timeline is typically 6 weeks from design approval to delivery. This allows us to dedicate the necessary time and attention to detail that high-precision components demand. For urgent requirements, expedited service may be available depending on project complexity and current capacity."
  },
  {
    question: "What CAD file formats do you accept for quotes?",
    answer: "We accept all major CAD file formats including STEP (.stp, .step), IGES (.igs, .iges), SolidWorks (.sldprt), AutoCAD (.dwg, .dxf), and PDF drawings. If you have files in other formats, please contact us to confirm compatibility."
  },
  {
    question: "What production volumes do you handle?",
    answer: "We specialize in prototype to medium-volume production runs. This includes single prototypes for design validation, small batches (10-500 pieces), and medium production runs (500+ pieces). We focus on providing personalized service regardless of quantity."
  },
  {
    question: "What materials can you machine?",
    answer: "We work with a wide range of materials including aluminum alloys (6061, 7075, 2024), stainless steels (303, 304, 316, 17-4 PH), engineering plastics (Delrin, PEEK, Ultem, Nylon), and specialty alloys (Titanium, Inconel, Brass). Contact us for specific material requirements not listed."
  },
  {
    question: "What tolerances can you achieve?",
    answer: "We routinely achieve tolerances as tight as ±0.001\" on critical dimensions. Our capabilities include positional tolerances, geometric dimensioning and tolerancing (GD&T), and surface finish requirements. Specific tolerances depend on part geometry, material, and machining process."
  },
  {
    question: "Do you provide Design for Manufacturability (DFM) feedback?",
    answer: "Yes! DFM collaboration is a core part of our service. Our experienced machinists review your designs and provide recommendations to improve manufacturability, reduce costs, and enhance quality without compromising functionality. This collaborative approach often results in better parts at lower costs."
  },
  {
    question: "What are your quality control and inspection procedures?",
    answer: "Every part undergoes rigorous quality inspection using precision measurement equipment including CMM (Coordinate Measuring Machine). We provide first article inspection reports for initial parts and maintain statistical process control throughout production. All work is performed to ISO quality standards."
  },
  {
    question: "Can you work with materials that I supply?",
    answer: "Yes, we can work with customer-supplied materials. We'll need material certifications and specifications to ensure proper machining parameters. Please note that we cannot guarantee material quality for customer-supplied stock, and additional setup time may be required."
  },
  {
    question: "What are your payment terms?",
    answer: "For new customers, we typically require 50% payment upon order placement and 50% upon completion. For established customers with approved credit, we offer Net 30 payment terms. We accept wire transfers, ACH, checks, and major credit cards."
  },
  {
    question: "Do you provide assembly services?",
    answer: "While our primary focus is precision machining, we can provide basic assembly services for multi-component projects. Complex assemblies are typically handled by our network of trusted partners. Contact us to discuss your specific assembly requirements."
  },
  {
    question: "How do you handle proprietary designs and confidentiality?",
    answer: "We take confidentiality very seriously. All customer designs and proprietary information are protected under strict non-disclosure agreements. Our team is experienced in working with sensitive aerospace, medical, and commercial applications requiring the highest levels of confidentiality."
  }
]

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

useHead({
  title: 'Our Process - From Design to Delivery | Traxis Manufacturing',
  meta: [
    { 
      name: 'description', 
      content: 'Learn about our collaborative precision machining process from design review to delivery. Includes DFM feedback, quality assurance, and transparent timeline management.' 
    },
    { name: 'keywords', content: 'machining process, DFM collaboration, quality assurance, precision manufacturing, CNC machining timeline, manufacturing process' }
  ]
})
</script>