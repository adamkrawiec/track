<template>
  <main-panel v-if="user">
    <template #body>
      <div class="flex">
        <img class="w-24" src="/avatar.jpeg">
        <h4 class="px-4">{{ user.fullName }}</h4>
      </div>
      <tasks-summary :user-id="userId" />
      <div>
         <p v-if="lastCompletedItem">Last Completed: {{ lastCompletedItem.title }}</p>
         <p v-if="favoriteItem">Favorite: {{ favoriteItem.title }}</p>
      </div>
    </template>
  </main-panel>
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

const usersStore = useUsersStore();
const route = useRoute();

const user: ComputedRef<IUser | null> = computed(() => usersStore.user);

const userId: ComputedRef<string> = computed(() => Array.isArray(route.params.id) ? route.params.id[0]: route.params.id)

const favoriteItem: ComputedRef<IItem | null> = computed(() => usersStore.favoriteItem);
const lastCompletedItem: ComputedRef<IItem | null> = computed(() => usersStore.lastCompletedItem);

onMounted(async() => {
  await usersStore.fetchUser(userId.value)
  await usersStore.fetchUserFavorite(userId.value)
  await usersStore.fetchUserLastCompleted(userId.value)
});

</script>
