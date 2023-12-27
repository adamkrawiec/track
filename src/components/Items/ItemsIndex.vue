<template>
  <h1>Hello items</h1>
  <table>
    <tr
      v-for="item in items"
      :key="`item-${item.id}`"
    >
      <td>
        <router-link :to="{ name: 'item-show', params: { id: item.id }}">
          {{ item.title }}
        </router-link>
      </td>
      <td> {{ item.createdAt }}</td>
      <td>
        <span v-if="item.author">
          <router-link :to="{ name: 'user-show', params: { id: item.author.id }}">
            {{ item.author.fullName }}
          </router-link>
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