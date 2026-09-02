<script setup lang="ts">
import SectionTitle from "~/components/ui/SectionTitle.vue";
const items = [
  [
    "01",
    "Crafted Coffee",
    "Coffee dibuat menggunakan pilihan beans berkualitas.",
  ],
  [
    "02",
    "Comfortable Space",
    "Nyaman untuk bekerja, berbincang, atau menikmati waktu sendiri.",
  ],
  ["03", "Fresh Ingredients", "Menggunakan bahan yang fresh dan berkualitas."],
  [
    "04",
    "Good Moments",
    "Tempat menikmati berbagai momen bersama orang terdekat.",
  ],
];
</script>
<template>
  <section class="section-space bg-milk">
    <div class="container-site">
      <SectionTitle eyebrow="Why Narevo" title="The Narevo Experience" center />
      <div
        class="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-coffee/10 md:grid-cols-2 lg:grid-cols-4"
      >
        <article v-for="item in items" :key="item[0]" class="bg-milk p-8">
          <span class="text-xs text-caramel">{{ item[0] }}</span>
          <h3 class="mt-12 font-display text-2xl text-coffee">{{ item[1] }}</h3>
          <p class="mt-3 text-sm leading-6 text-coffee/60">{{ item[2] }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
