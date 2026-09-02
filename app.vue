<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://narevo-coffee.pages.dev'
const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`)

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      name: 'Narevo Coffee',
      url: siteUrl,
      image: `${siteUrl}/images/menu/generated/coffee-8.png`,
      description: 'Coffee shop modern dan nyaman di Tangerang dengan pilihan coffee, signature drinks, makanan, dan dessert.',
      slogan: 'Brewed for Better Moments.',
      priceRange: 'Rp15.000–Rp35.000',
      servesCuisine: ['Coffee', 'Beverages', 'Cafe Food', 'Dessert'],
      address: { '@type': 'PostalAddress', streetAddress: 'Jl. Boulevard Narevo No. 10', addressLocality: 'Tangerang', addressRegion: 'Banten', addressCountry: 'ID' },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '08:00', closes: '22:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '23:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '08:00', closes: '23:59' }
      ],
      sameAs: ['https://instagram.com/narevocoffee', 'https://tiktok.com/@narevocoffee']
    })
  }]
})

useSeoMeta({
  ogSiteName: 'Narevo Coffee',
  ogType: 'website',
  ogLocale: 'id_ID',
  ogUrl: canonicalUrl,
  ogImage: `${siteUrl}/images/menu/generated/coffee-8.png`,
  ogImageAlt: 'Narevo Coffee — Brewed for Better Moments',
  twitterCard: 'summary_large_image',
  twitterImage: `${siteUrl}/images/menu/generated/coffee-8.png`
})
</script>
<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
