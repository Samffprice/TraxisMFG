// Simple service worker for caching static assets
const CACHE_NAME = 'traxis-v1'
const STATIC_CACHE = [
  '/',
  '/traxislogo.webp',
  '/home-hero.webp',
  '/home-hero.jpg',
  '/about-us.webp', 
  '/about-us.jpg',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_CACHE))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return
  
  // Handle static assets
  if (event.request.url.includes('/public/') || 
      event.request.url.includes('/images/') ||
      event.request.url.includes('.webp') ||
      event.request.url.includes('.jpg') ||
      event.request.url.includes('.png')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request)
            .then((fetchResponse) => {
              // Cache successful responses
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone()
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseClone))
              }
              return fetchResponse
            })
        })
        .catch(() => {
          // Fallback for offline scenarios
          if (event.request.destination === 'image') {
            return new Response('', { status: 200, statusText: 'OK' })
          }
        })
    )
  }
})