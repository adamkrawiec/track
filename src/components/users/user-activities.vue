<template>
  <h1>Activities</h1>
  <main-table
    :items="activities"
    loading-copy="Loading activities..."
    empty-copy="No activities found..."
    :headers="[{ label: 'Title' }, { label: 'Verb' }, { label: 'Date' }]"
  >
    <template #data-row="{ item: activity }">
      <td>{{ activity.item.title }}</td>
      <td>{{ activity.verb }}</td>
      <td>{{ activity.createdAt }}</td>
    </template>
  </main-table>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';

import MainTable from '@/components/shared/MainTable.vue';
import { useUsersStore } from '@/stores/users';

const props = defineProps<{ userId: string }>();

const usersStore = useUsersStore();

const activities = computed(() => usersStore.activities);

onMounted(() => usersStore.fetchUserActivities(props.userId));
</script>