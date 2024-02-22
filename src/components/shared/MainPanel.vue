<template>
  <div class="mx-auto max-w-screen-xl">
    <div v-if="slots.header" class="bg-neutral-200 py-2 px-4">
      <slot name="header" />
    </div>
    <div class="flex justify-between px-4 bg-neutral-100 shadow-lg py-4 mb-10">
      <div class="flex-1">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
const slots = useSlots()
</script>