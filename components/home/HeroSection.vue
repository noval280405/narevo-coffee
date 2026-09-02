<template>
  <section
    id="home"
    class="relative flex min-h-screen items-end overflow-hidden bg-coffee text-white"
  >
    <img
      src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=88"
      alt="Suasana hangat Narevo Coffee"
      class="absolute inset-0 image-cover"
      fetchpriority="high"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
    ></div>
    <div
      class="absolute right-8 top-1/2 hidden -translate-y-1/2 items-center gap-4 lg:flex"
    >
      <span class="h-20 w-px bg-white/40"></span
      ><span
        class="vertical-label text-[10px] uppercase tracking-[.35em] text-white/55"
        >Est. twenty twenty six</span
      >
    </div>
    <div class="container-site relative pb-10 pt-36 md:pb-12">
      <div class="reveal max-w-4xl">
        <div class="mb-6 flex items-center gap-4">
          <span class="h-px w-12 bg-caramel"></span>
          <p
            class="text-xs font-semibold uppercase tracking-[.3em] text-white/65"
          >
            Coffee & Space · Tangerang
          </p>
        </div>
        <h1
          class="font-display text-5xl leading-[1.02] sm:text-6xl md:text-8xl"
        >
          Coffee Made for<br /><em class="font-normal text-[#e4b48f]"
            >Better Moments.</em
          >
        </h1>
        <p class="mt-7 max-w-xl text-base leading-7 text-white/75 md:text-lg">
          Carefully crafted coffee, refreshing drinks, and a warm space designed
          for every moment.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <NuxtLink
            to="/menu"
            class="btn-primary !bg-white !text-coffee hover:!bg-[#e4b48f]"
            >Explore Our Menu</NuxtLink
          ><NuxtLink to="/location" class="btn-light">Visit Narevo</NuxtLink>
        </div>
      </div>
      <div
        class="mt-14 grid border-t border-white/25 pt-6 text-sm sm:grid-cols-3"
      >
        <div class="py-2">
          <p class="text-white/50">Open Daily</p>
          <strong>08:00 — 23:00</strong>
        </div>
        <div class="py-2">
          <p class="text-white/50">Our Place</p>
          <strong>Coffee & Space</strong>
        </div>
        <div class="py-2">
          <p class="text-white/50">Find Us</p>
          <strong>Tangerang, Indonesia</strong>
        </div>
      </div>
    </div>
  </section>
</template>
