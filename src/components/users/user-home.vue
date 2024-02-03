<template>
  <div class="flex mx-auto max-w-screen-xl justify-between">
    <div class="flex-column mr-auto">
      <p class="flex mb-2">Last Completed Item</p>
      <item-tile :item="lastCompletedItem" />
    </div>
    <div class="flex-column ml-auto">
      <p class="flex mb-2">Favorite item</p>
      <item-tile :item="favoriteItem" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { ComputedRef } from 'vue';
import { useUsersStore } from '@/stores/users';
import type IItem from '../../types/item';
import ItemTile from '../Items/ItemTile.vue';

const props = defineProps<{ userId: string }>();

const favoriteItem: ComputedRef<IItem | null> = computed(() => usersStore.favoriteItem);
const lastCompletedItem: ComputedRef<IItem | null> = computed(() => usersStore.lastCompletedItem);

const usersStore = useUsersStore();
onMounted(() => {
  Promise.all([
    usersStore.fetchUserFavorite(props.userId),
    usersStore.fetchUserLastCompleted(props.userId)
  ])
});
</script>