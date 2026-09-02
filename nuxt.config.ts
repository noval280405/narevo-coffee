import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: { head: {
    htmlAttrs: { lang: 'id' },
    title: 'Narevo Coffee Tangerang | Coffee & Space',
    meta: [
      { name: 'description', content: 'Nikmati coffee, signature drinks, makanan, dan dessert di Narevo Coffee, coffee shop modern dan nyaman di Tangerang.' },
      { name: 'theme-color', content: '#3B2923' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap' }
    ]
  } }
})
