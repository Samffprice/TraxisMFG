<template>
  <div></div>
</template>

<script setup>
// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Traxis Manufacturing LLC",
  "url": "https://traxismfg.com",
  "logo": "https://traxismfg.com/traxislogo.webp",
  "description": "Austin-based precision CNC machining experts specializing in aerospace, medical, and industrial applications.",
  "foundingDate": "2009",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "511 East Saint Elmo Road",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-512-XXX-XXXX",
    "contactType": "Customer Service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/traxis-manufacturing"
  ]
}

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://traxismfg.com/#LocalBusiness",
  "name": "Traxis Manufacturing LLC",
  "image": "https://traxismfg.com/about-us.jpg",
  "description": "Precision CNC machining services with a partnership approach in Austin, Texas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "511 East Saint Elmo Road",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78745",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.230",
    "longitude": "-97.744"
  },
  "url": "https://traxismfg.com",
  "telephone": "+1-512-XXX-XXXX",
  "priceRange": "$$",
  "openingHours": [
    "Mo-Fr 08:00-17:00"
  ],
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD"
}

// Manufacturing Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Precision CNC Machining Services",
  "description": "Professional CNC milling, turning, and precision machining for aerospace, medical, and industrial applications.",
  "provider": {
    "@type": "Organization",
    "name": "Traxis Manufacturing LLC"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Austin, Texas and surrounding areas"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CNC Machining Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CNC Milling",
          "description": "Precision CNC milling services for complex components"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CNC Turning",
          "description": "High-precision CNC turning and lathe services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "5-Axis Machining",
          "description": "Advanced 5-axis CNC machining for complex geometries"
        }
      }
    ]
  }
}

// Inject all schemas into the head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessSchema)
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(serviceSchema)
    }
  ]
})
</script>