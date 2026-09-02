<script setup lang="ts">
import { gallery } from "~/data/gallery";
import SectionTitle from "~/components/ui/SectionTitle.vue";
</script>
<template>
  <section id="gallery" class="section-space">
    <div class="container-site">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionTitle eyebrow="A Glimpse Inside" title="Moments at Narevo" /><a
          href="https://instagram.com/narevocoffee"
          target="_blank"
          class="text-sm font-semibold text-caramel"
          >Follow @narevocoffee ↗</a
        >
      </div>
      <div class="mt-12 columns-2 gap-4 md:columns-3">
        <figure
          v-for="photo in gallery"
          :key="photo.src"
          class="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            :class="[
              'w-full object-cover transition duration-700 hover:scale-105',
              photo.tall ? 'h-96 md:h-[480px]' : 'h-56 md:h-72',
            ]"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
