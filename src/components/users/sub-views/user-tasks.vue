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
      <td>
        <router-link :to="{ name: 'item-show', params: { itemId: task.item.id }}">
          {{ task.item.title }}
        </router-link>
      </td>
      <td>
        <span v-if="task.completedAt">
          {{ formatDate(task.completedAt, 'DD/MM/YYYY') }}
        </span>
        <span v-else>-</span>
      </td>
      <td>{{ formatDate(task.deadlineAt, 'DD/MM/YYYY') }}</td>
    </template>
  </main-table>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import TasksSummary from '@/components/users/tasks/tasks-summary.vue';
import MainTable from '@/components/shared/MainTable.vue';
import { useUsersStore } from '@/stores/users';
import { formatDate } from '@/utils/format_date';

const props = defineProps<{ userId: string }>();

const usersStore = useUsersStore();

const tasks = computed(() => usersStore.tasks);

onMounted(() => usersStore.fetchUserTasks(props.userId));

</script>