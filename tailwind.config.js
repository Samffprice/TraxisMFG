/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Traxis Red
        'traxis-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Industrial Grey Palette
        'traxis-grey': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Legacy colors for compatibility
        'traxis-primary': '#dc2626',     // Red-600
        'traxis-secondary': '#374151',   // Grey-700
        'traxis-accent': '#ef4444',      // Red-500
        'traxis-dark': '#1f2937',        // Grey-800
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}