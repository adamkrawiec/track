<template>
  <h1>Tasks</h1>
  <tasks-summary :user-id="userId" />
  <main-table
    :items="tasks"
    loading-copy="Loading activities..."
    empty-copy="No activities found..."
    :headers="[{ label: 'Title' }, { label: 'Completed At' }, { label: 'Deadline' }]"
  >
    <template #data-row="{ item: task }">
      <td>{{ task.item.title }}</td>
      <td>{{ task.completedAt }}</td>
      <td>{{ task.deadline }}</td>
    </template>
  </main-table>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import TasksSummary from './tasks/tasks-summary.vue';
import MainTable from '@/components/shared/MainTable.vue';
import { useUsersStore } from '@/stores/users';

const props = defineProps<{ userId: string }>();

const usersStore = useUsersStore();

const tasks = computed(() => usersStore.tasks);

onMounted(() => usersStore.fetchUserTasks(props.userId));

</script>