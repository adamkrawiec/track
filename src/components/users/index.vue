<template>
  <h1>List of users</h1>
  <ul>
    <li
      v-for="user in users"
      :key="user.id"
      class="my-2"
    >
      <router-link :to="{ name: 'user-show', params: { id: user.id } }">
        {{ user.fullName }}
      </router-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'

const users = computed(() => usersStore.users);

const usersStore = useUsersStore();

onMounted(async() => await usersStore.fetchUsers());
</script>
