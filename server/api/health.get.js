// API endpoint for health checks and performance monitoring
export default defineEventHandler(async (event) => {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    performance: {
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    }
  }
})