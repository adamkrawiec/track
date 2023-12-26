<template>
  <div class="columns-3" v-if="taskSummary">
    <div
      v-for="summary in taskSummary"
      :key="summary.status"
      class="columns-md"
    >
      <h4>{{ summary.status }}</h4>
      <h5>
        {{ summary.count }}
      </h5>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';
import type ITaskSummary from '@/types/task-summary';

const props = defineProps({
  userId: Number
});

const usersStore = useUsersStore();
const route = useRoute();

const taskSummary: Ref<ITaskSummary[]> = computed(() => usersStore.userTaskSummary);

onMounted(async() => await usersStore.fetchUserTaskSummary(props.userId));

</script>
