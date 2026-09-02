<script setup lang="ts">
const title = "Lokasi & Jam Buka Narevo Coffee Tangerang";
const description =
  "Temukan alamat, Google Maps, fasilitas, dan jam operasional Narevo Coffee di Tangerang. Buka setiap hari mulai pukul 08.00.";
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
      eyebrow="Come Say Hello"
      title="Your Table Is Waiting."
      description="Temukan kami di Tangerang. Datang untuk kopinya, tinggal lebih lama untuk suasananya."
      image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=85"
      index="04"
    />
    <section class="border-b border-coffee/10 bg-milk">
      <div
        class="container-site grid divide-y divide-coffee/10 md:grid-cols-3 md:divide-x md:divide-y-0"
      >
        <div class="py-7 md:px-7 md:first:pl-0">
          <p class="text-[10px] uppercase tracking-widest text-caramel">
            From Jakarta
          </p>
          <strong class="mt-2 block font-display text-xl text-coffee"
            >± 45 min drive</strong
          >
        </div>
        <div class="py-7 md:px-7">
          <p class="text-[10px] uppercase tracking-widest text-caramel">
            Best time to visit
          </p>
          <strong class="mt-2 block font-display text-xl text-coffee"
            >Morning & sunset</strong
          >
        </div>
        <div class="py-7 md:px-7">
          <p class="text-[10px] uppercase tracking-widest text-caramel">
            Atmosphere
          </p>
          <strong class="mt-2 block font-display text-xl text-coffee"
            >Warm & unhurried</strong
          >
        </div>
      </div>
    </section>
    <HomeLocationSection /><HomeOpeningHours />
  </div>
</template>
