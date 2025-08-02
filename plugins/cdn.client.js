export default defineNuxtPlugin(() => {
  // CDN optimization for static resources
  if (process.client) {
    // Preload critical fonts from Google Fonts CDN
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap'
    link.as = 'style'
    link.onload = function() {
      this.rel = 'stylesheet'
    }
    document.head.appendChild(link)
    
    // Setup service worker for caching static assets
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .catch(() => {
            // Service worker registration failed - silent fail
          })
      })
    }
  }
})