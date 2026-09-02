<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}>();
</script>
<template>
  <div :class="['max-w-2xl', center && 'mx-auto text-center']">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="mt-5 leading-7 text-coffee/65">
      {{ description }}
    </p>
  </div>
</template>
