<script setup lang="ts">
const open = ref(false)
const scrolled = ref(false)
const route = useRoute()
const links = [['Home','/'],['About','/about'],['Menu','/menu'],['Gallery','/gallery'],['Location','/location'],['Contact','/contact']]
onMounted(() => { const update = () => scrolled.value = window.scrollY > 24; update(); window.addEventListener('scroll', update, { passive: true }) })
</script>
<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled || open ? 'bg-coffee/95 py-3 shadow-lg backdrop-blur' : 'bg-transparent py-5']">
    <nav class="container-site flex items-center justify-between" aria-label="Navigasi utama">
      <NuxtLink to="/" class="group flex items-center gap-3 text-white" aria-label="Kembali ke beranda"><span class="grid h-9 w-9 place-items-center rounded-full border border-white/30 font-display text-sm transition group-hover:bg-white group-hover:text-coffee">N</span><span><strong class="block font-display text-xl tracking-[.18em]">NAREVO</strong><small class="block text-[8px] tracking-[.28em] text-white/55">COFFEE & SPACE</small></span></NuxtLink>
      <div class="hidden items-center gap-8 md:flex"><NuxtLink v-for="link in links" :key="link[1]" :to="link[1]" :class="['relative py-2 text-sm text-white/75 transition hover:text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-caramel after:transition-transform', route.path === link[1] ? 'text-white after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100']">{{ link[0] }}</NuxtLink></div>
      <button class="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white md:hidden" :aria-expanded="open" aria-label="Buka menu" @click="open = !open">
        <span class="text-xl">{{ open ? '×' : '☰' }}</span>
      </button>
    </nav>
    <div v-if="open" class="container-site grid gap-1 pb-4 pt-4 md:hidden"><NuxtLink v-for="link in links" :key="link[1]" :to="link[1]" class="rounded-xl px-4 py-3 text-white hover:bg-white/10" @click="open = false">{{ link[0] }}</NuxtLink></div>
  </header>
</template>
