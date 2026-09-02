<script setup lang="ts">
const title = "Menu & Harga Narevo Coffee Tangerang";
const description =
  "Lihat menu dan harga Narevo Coffee: espresso, signature coffee, non-coffee, tea, makanan, pastry, dan dessert mulai Rp15.000.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});
</script>
<template>
  <div>
    <UiPageHero
      eyebrow="Sip, Taste, Enjoy"
      title="Made to Match Your Mood."
      description="Dari espresso klasik sampai signature creations—temukan rasa yang tepat untuk momenmu hari ini."
      image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=85"
      index="02"
    /><HomeMenuSection />
  </div>
</template>
