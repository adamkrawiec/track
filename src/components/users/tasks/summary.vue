<template>
  <div class="columns-1 py-2">
    <h3>Tasks summary:</h3>
  </div>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';
import type ITaskSummary from '@/types/task-summary';

interface IProps {
  userId: Number
}

const props = defineProps<IProps>();

const usersStore = useUsersStore();
const route = useRoute();

const backgroundColourClass: String = (status: String) => ({
  'completed': 'bg-emerald-200',
  'open': 'bg-sky-200',
  'overdue':'bg-sky-200'
})[status];

const taskSummary: Ref<ITaskSummary[]> = computed(() => usersStore.userTaskSummary);

onMounted(async() => await usersStore.fetchUserTaskSummary(props.userId));
onBeforeUnmount(() => usersStore.userTaskSummary.value = []);
</script>
