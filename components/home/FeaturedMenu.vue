<script setup lang="ts">
import { featuredMenus } from '~/data/menu'
import MenuCard from '~/components/ui/MenuCard.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>
<template><section class="section-space"><div class="container-site"><SectionTitle eyebrow="Our Selection" title="Narevo Favorites" description="A selection of our most loved drinks."/><div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><MenuCard v-for="item in featuredMenus" :key="item.id" :item="item"/></div></div></section></template>
