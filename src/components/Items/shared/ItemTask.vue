<template>
  <div v-if="task" class="py-4">
    <span v-if="task.completedAt" class="my-2 border-2 rounded-lg px-4 py-2 border-green-500 w-fit">
      <font-awesome-icon :icon="['far', 'circle-check']" class="text-green-500 text-xl" />
      You have completed the task at {{ formatDate(task.completedAt, 'DD/MM/YYYY') }}
    </span>
    <span v-else-if="task.overdue" class="my-2 border-2 rounded-lg px-4 py-2 border-orange-500 w-fit">
      <font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="text-orange-500 text-xl" />
      Task to complete at {{ formatDate(task.deadlineAt, 'DD/MM/YYYY') }}
    </span>
    <span v-else class="my-2 border-2 rounded-lg px-4 py-2 border-slate-500 w-fit">
      Task to complete at {{ formatDate(task.deadlineAt, 'DD/MM/YYYY') }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { formatDate } from '@/utils/format_date.ts'

interface IProps {
  task: {
    id: string,
    deadlineAt: Date,
    completedAt: Date,
    overdue: Boolean,
    _links: {
      complete: string
    }
  }
}

defineProps<IProps>();
</script>