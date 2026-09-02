<script setup lang="ts">
const title = "Gallery & Suasana | Narevo Coffee Tangerang";
const description =
  "Lihat suasana hangat, interior modern, racikan kopi, dan berbagai momen di Narevo Coffee Tangerang.";
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
      eyebrow="Narevo Journal"
      title="Moments Worth Keeping."
      description="Sudut nyaman, aroma kopi, dan cerita orang-orang yang mengisi ruang Narevo setiap harinya."
      image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85"
      index="03"
    /><HomeGallerySection />
  </div>
</template>
