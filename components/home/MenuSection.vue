<script setup lang="ts">
import { menus, type MenuCategory } from "~/data/menu";
import MenuCard from "~/components/ui/MenuCard.vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";
const filters: { label: string; value: "all" | MenuCategory }[] = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "Signature", value: "signature" },
  { label: "Non Coffee", value: "non-coffee" },
  { label: "Tea", value: "tea" },
  { label: "Food", value: "food" },
  { label: "Dessert", value: "dessert" },
];
const active = ref<"all" | MenuCategory>("all");
const visible = computed(() =>
  active.value === "all"
    ? menus
    : menus.filter((m) => m.category === active.value),
);
</script>
<template>
  <section id="menu" class="section-space bg-coffee text-white">
    <div class="container-site">
      <SectionTitle
        eyebrow="Digital Menu"
        title="Explore Our Menu"
        description="From classic coffee to signature creations."
        class="[&>h2]:!text-white [&>p:last-child]:!text-white/60"
      />
      <div class="my-10 flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="filter in filters"
          :key="filter.value"
          :class="[
            'whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition',
            active === filter.value
              ? 'border-white bg-white text-coffee'
              : 'border-white/20 text-white/70 hover:border-white/50',
          ]"
          @click="active = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
      <TransitionGroup
        name="list"
        tag="div"
        class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        ><MenuCard v-for="item in visible" :key="item.id" :item="item"
      /></TransitionGroup>
    </div>
  </section>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
