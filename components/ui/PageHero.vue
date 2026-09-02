<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  index: string;
}>();
</script>
<template>
  <section
    class="relative flex min-h-[72vh] items-end overflow-hidden bg-coffee pb-16 pt-36 text-white md:pb-20"
  >
    <img :src="image" :alt="title" class="absolute inset-0 image-cover" />
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"
    ></div>
    <div class="container-site relative">
      <div class="grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <div class="max-w-3xl reveal">
          <p class="mb-5 text-xs uppercase tracking-[.3em] text-[#e4b48f]">
            {{ eyebrow }}
          </p>
          <h1
            class="font-display text-5xl leading-tight sm:text-6xl md:text-7xl"
          >
            {{ title }}
          </h1>
          <p class="mt-6 max-w-xl text-base leading-7 text-white/65">
            {{ description }}
          </p>
        </div>
        <!-- <div
          class="hidden items-end gap-3 border-l border-white/30 pl-6 md:flex"
        >
          <strong class="font-display text-5xl text-white/20">{{
            index
          }}</strong
          ><span class="pb-1 text-xs uppercase tracking-[.25em] text-white/50"
            >Narevo<br />Journal</span
          >
        </div> -->
      </div>
    </div>
  </section>
</template>
