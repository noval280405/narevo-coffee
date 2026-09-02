<script setup lang="ts">
import type { MenuItem } from "~/data/menu";
defineProps<{ item: MenuItem }>();
const price = (n: number) => new Intl.NumberFormat("id-ID").format(n);
</script>
<template>
  <article
    class="group overflow-hidden rounded-[1.75rem] bg-milk transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-coffee/10"
  >
    <div class="relative aspect-[4/5] overflow-hidden">
      <img
        :src="item.image"
        :alt="`Foto ${item.name}`"
        class="image-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      /><span
        v-if="item.badge"
        class="absolute left-4 top-4 rounded-full bg-coffee px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white"
        >{{ item.badge }}</span
      >
    </div>
    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display text-xl text-coffee">{{ item.name }}</h3>
        <p class="whitespace-nowrap text-sm font-semibold text-caramel">
          Rp{{ price(item.price) }}
        </p>
      </div>
      <p class="mt-3 text-sm leading-6 text-coffee/60">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>
