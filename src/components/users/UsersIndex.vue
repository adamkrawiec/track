<template>
  <main-panel>
    <template #header>
        <h1>List of users</h1>
    </template>
    <template #body>
      <div class="w-full">
        <main-table
          :loading="loading"
          :items="users"
          loading-copy="Loading members..."
          empty-copy="No matching member found..."
          :headers="headers"
          >
          <template #data-row="{ item: user }">
            <td class="px-3 py-3 text-slate-500 text-slate-400 flex items-center">
              <img class="w-16 pr-2" src="/avatar.jpeg">
              <router-link :to="{ name: 'user-home', params: { userId: user.id } }">
                {{ user.fullName }}
              </router-link>
            </td>
            <td>
              {{ formatDate(user.createdAt, 'DD/MM/YYYY') }}
            </td>
          </template>
        </main-table>
      </div>
    </template>
  </main-panel>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUsersStore } from '@/stores/users'
import MainTable from '../shared/MainTable.vue'
import MainPanel from '../shared/MainPanel.vue'
import { formatDate } from '@/utils/format_date'

const usersStore = useUsersStore();

const users = computed(() => usersStore.users);
const loading = computed(() => usersStore.loading);

const headers = [{label: 'Full name' }, { label: 'Joined at'}];

onMounted(async() => await usersStore.fetchUsers());
</script>
