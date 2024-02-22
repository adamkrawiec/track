<template>
  <div class="columns-3 py-2" v-if="taskSummary">
    <div
      v-for="summary in taskSummary"
      :key="summary.status"
      class="columns-md border-2"
    >
      <div class="flex justify-center p-2" :class="backgroundColourClass(summary.status)">
        <h4 class="text-lg">{{ summary.status }}</h4>
      </div>
      <div class="flex justify-center p-4 bg-neutral-100">
        <h5 class="text-md">
          {{ summary.count }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue';
import { useUsersStore } from '@/stores/users';
import type { Ref } from 'vue';
import type ITaskSummary from '@/types/task-summary';

interface IProps {
  userId: string
}

interface IMap {
  [key: string]: string
}

const props = defineProps<IProps>();

const usersStore = useUsersStore();

function backgroundColourClass(status: string): string {
  const mapping: IMap = {
    'completed': 'bg-emerald-200',
    'open': 'bg-sky-200',
    'overdue':'bg-sky-200'
  };

  return mapping[status] || 'bg-sky-200'
};

const taskSummary: Ref<ITaskSummary[]> = computed(() => usersStore.userTaskSummary);

onMounted(async() => await usersStore.fetchUserTaskSummary(props.userId));
onBeforeUnmount(() => usersStore.userTaskSummary = []);
</script>
