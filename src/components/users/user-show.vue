<template>
  <div v-if="user" class="mx-auto">
    <main-panel>
      <template #body>
        <div class="flex">
          <img class="w-24" src="/avatar.jpeg">
          <h4 class="px-4">{{ user.fullName }}</h4>
        </div>
        <tasks-summary :user-id="userId" />
      </template>
    </main-panel>
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
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRoute } from 'vue-router';
import type { ComputedRef } from 'vue';
import type IUser from '@/types/user.ts';
import TasksSummary from './tasks/tasks-summary.vue';
import MainPanel from '../shared/MainPanel.vue';
import type IItem from '../../types/item';
import ItemTile from '@/components/Items/ItemTile.vue';

const usersStore = useUsersStore();
const route = useRoute();

const user: ComputedRef<IUser | null> = computed(() => usersStore.user);

const userId: ComputedRef<string> = computed(() => Array.isArray(route.params.id) ? route.params.id[0]: route.params.id)

const favoriteItem: ComputedRef<IItem | null> = computed(() => usersStore.favoriteItem);
const lastCompletedItem: ComputedRef<IItem | null> = computed(() => usersStore.lastCompletedItem);

onMounted(() => {
  Promise.all([
    usersStore.fetchUser(userId.value),
    usersStore.fetchUserFavorite(userId.value),
    usersStore.fetchUserLastCompleted(userId.value)
  ])
});

</script>
