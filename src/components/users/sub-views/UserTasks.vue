<template>
  <div class="mx-auto max-w-screen-xl py-4">
    <tasks-summary :user-id="userId" />
  </div>
  <main-panel>
    <template #header>
      <h1>Tasks</h1>
    </template>
    <template #body>
      <main-table
        :items="tasks"
        :loading="loading"
        loading-copy="Loading activities..."
        empty-copy="No activities found..."
        :headers="[{ label: 'Title' }, { label: 'Completed At' }, { label: 'Deadline' }]"
      >
        <template #data-row="{ item: task }">
          <td class="p-2">
            <router-link :to="{ name: 'item-show', params: { itemId: task.item.id }}">
              {{ task.item.title }}
            </router-link>
          </td>
          <td class="p-2">
            <span v-if="task.completedAt">
              {{ formatDate(task.completedAt, 'DD/MM/YYYY') }}
            </span>
            <span v-else>-</span>
          </td>
          <td class="p-2">{{ formatDate(task.deadlineAt, 'DD/MM/YYYY') }}</td>
        </template>
      </main-table>
    </template>
  </main-panel>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import TasksSummary from '@/components/users/tasks/tasks-summary.vue';
import MainTable from '@/components/shared/MainTable.vue';
import { useUsersStore } from '@/stores/users';
import { formatDate } from '@/utils/format_date';
import MainPanel from '../../shared/MainPanel.vue';

const props = defineProps<{ userId: string }>();

const usersStore = useUsersStore();

const tasks = computed(() => usersStore.tasks);
const loading = computed(() => usersStore.loading); // fixme

onMounted(() => usersStore.fetchUserTasks(props.userId));

</script>