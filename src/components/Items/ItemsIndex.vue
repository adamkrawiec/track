<template>
  <h1>Hello items</h1>
  <table>
    <tr
      v-for="item in items"
      :key="`item-${item.id}`"
    >
      <td> {{ item.title }}</td>
      <td> {{ item.createdAt }}</td>
      <td>
        <span v-if="item.author">
          {{ item.author.fullName }}
        </span>
        <span v-else>-</span>
      </td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useItemsStore } from '@/stores/items'

const itemsStore = useItemsStore();

const items = computed(() => itemsStore.items);

onMounted(async() => await itemsStore.fetchItems());
</script>