<template>
  <div v-if="user" class="columns-1">
    <div class="columns">
      <img class="w-24" src="/avatar.jpeg">
      {{ user.fullName }}
    </div>
    <tasks-summary :user-id="userId" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRoute } from 'vue-router';
import type { ComputedRef } from 'vue';
import type IUser from '@/types/user.ts';
import TasksSummary from './tasks/tasks-summary.vue';

const usersStore = useUsersStore();
const route = useRoute();

const user: ComputedRef<IUser | null> = computed(() => usersStore.user);

const userId: ComputedRef<string> = computed(() => Array.isArray(route.params.id) ? route.params.id[0]: route.params.id)

onMounted(async() => await usersStore.fetchUser(userId.value));

</script>
