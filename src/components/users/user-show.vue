<template>
  <div v-if="user" class="columns-1">
    <div class="columns">
      {{ user.fullName }}
    </div>
    <tasks-summary :user-id="user.id" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';
import type IUser from '@/types/user.ts';
import TasksSummary from './tasks/tasks-summary.vue';

const usersStore = useUsersStore();
const route = useRoute();

const user: Ref<IUser> = computed(() => usersStore.user);

onMounted(async() => await usersStore.fetchUser(parseInt(route.params.id)));

</script>
