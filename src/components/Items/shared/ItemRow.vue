<template>
    <td class="px-3 py-3 text-slate-500 text-slate-400 flex items-center">
      <img src="/item.png" class="w-20"/>
      <router-link :to="{ name: 'item-show', params: { id: item.id }}" class="px-4">
        {{ item.title }}
      </router-link>
    </td>
    <td class="px-3 py-3 text-slate-500 text-slate-400">
      {{ item.createdAt }}
    </td>
    <td class="px-3 py-3 text-slate-500 text-slate-400">
      <span v-if="item.author">
        <router-link :to="{ name: 'user-show', params: { id: item.author.id }}">
          {{ item.author.fullName }}
        </router-link>
      </span>
      <span v-else>-</span>
    </td>
</template>
<script setup lang="ts">
import type IItem from '@/types/item';

interface IProps {
  item: IItem
}

defineProps<IProps>();
</script>