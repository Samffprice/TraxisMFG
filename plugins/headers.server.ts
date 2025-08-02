export default defineNuxtPlugin(() => {
  // Remove X-Powered-By header for security
  if (process.server) {
    const { ssrContext } = useNuxtApp()
    if (ssrContext?.event?.node?.res) {
      ssrContext.event.node.res.removeHeader('X-Powered-By')
      // Set empty X-Powered-By header to override any framework defaults
      ssrContext.event.node.res.setHeader('X-Powered-By', '')
    }
  }
})