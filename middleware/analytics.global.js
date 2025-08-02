export default defineNuxtRouteMiddleware((to) => {
  // Track page views for analytics
  if (process.client && typeof gtag !== 'undefined') {
    nextTick(() => {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: to.path
      })
    })
  }
})