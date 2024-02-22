<template>
  <div v-if="item" class="flex px-4 bg-neutral-100 shadow-lg py-4 mb-10 max-w-80 h-72">
    <router-link :to="{ name: 'item-show', params: { itemId: item.id }}" class="px-4">
      <img src="/item.png" />
      <p class="py-2 text-wrap">{{ item.title }}</p>
      <source-image class="py-2 w-full" :source="item.source" />
    </router-link>
  </div>
</template>
<script setup lang="ts">
import SourceImage from './shared/SourceImage.vue';
import type IItem from '@/types/item';

interface IProps {
  item: IItem | null
}

defineProps<IProps>();

</script>