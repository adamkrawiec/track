<template>
  <h1>List of users</h1>
  <ul>
    <li
      v-for="user in users"
      :key="`user-${user.id}`"
      class="my-2"
    >
      <router-link :to="{ name: 'user-show', params: { id: `${user.id}` } }">
        {{ user.fullName }}
      </router-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore();

const users = computed(() => usersStore.users);

onMounted(async() => await usersStore.fetchUsers());
</script>
