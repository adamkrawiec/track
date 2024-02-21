<template>
  <div class="flex justify-center pt-4">
    <span
      v-for="page in pages"
      :key="page"
      class="px-2 m-1 border-2 rounded-md"
      :class="(page === activePage) ? 'bg-neutral-400' : 'bg-neutral-200'"
    >
      <a href="#" @click="$emit('pageChange', page)">{{ page }}</a>
    </span>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  pages: number
  activePage: number
}

defineProps<IProps>();
defineEmits(['pageChange']);
</script>