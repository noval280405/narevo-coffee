<script setup lang="ts">
const title = "Narevo Coffee Tangerang | Coffee & Space";
const description =
  "Nikmati coffee, signature drinks, makanan, dan dessert di Narevo Coffee. Coffee shop modern, hangat, dan nyaman di Tangerang.";
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
    <HomeHeroSection /><HomeAboutSection /><HomeFeaturedMenu /><HomeExperienceSection />
    <section class="relative overflow-hidden bg-coffee py-20 text-white">
      <div
        class="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10"
      ></div>
      <div
        class="container-site relative flex flex-col justify-between gap-8 md:flex-row md:items-center"
      >
        <div>
          <p class="mb-3 text-xs uppercase tracking-[.28em] text-caramel">
            Come as you are
          </p>
          <h2 class="max-w-2xl font-display text-4xl md:text-6xl">
            Your next favorite moment starts here.
          </h2>
        </div>
        <NuxtLink to="/location" class="btn-light shrink-0"
          >Plan Your Visit →</NuxtLink
        >
      </div>
    </section>
  </div>
</template>
