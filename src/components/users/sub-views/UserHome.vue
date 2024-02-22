<template>
  <div class="flex mx-auto max-w-screen-xl">
    <div class="flex-column px-4">
      <p class="flex mb-2">Last Completed Item</p>
      <item-tile :item="lastCompletedItem" />
    </div>
    <div class="flex-column px-4">
      <p class="flex mb-2">Favorite item</p>
      <item-tile :item="favoriteItem" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { ComputedRef } from 'vue';
import { useUsersStore } from '@/stores/users';
import type IItem from '@/types/item';
import ItemTile from '@/components/Items/ItemTile.vue';

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