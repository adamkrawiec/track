<template>
  <h1>Activities</h1>
  <main-table
    :items="activities"
    :loading="loading"
    loading-copy="Loading activities..."
    empty-copy="No activities found..."
    :headers="headers"
  >
    <template #data-row="{ item: activity }">
      <td>{{ activity.item.title }}</td>
      <td>{{ activity.verb }}</td>
      <td>{{ formatDate(activity.createdAt, SHORT_DATE_FORMAT) }}</td>
    </template>
  </main-table>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';

import MainTable from '@/components/shared/MainTable.vue';
import { useUserActivitiesStore } from '../../../stores/user-activities';
import { formatDate, SHORT_DATE_FORMAT } from '@/utils/format_date';

const headers = [
  { label: 'Title' },
  { label: 'Verb' },
  { label: 'Date' },
];
const props = defineProps<{ userId: string }>();

const userActivitiesStore = useUserActivitiesStore();

const activities = computed(() => userActivitiesStore.activities);
const loading = computed(() => userActivitiesStore.loading);

onMounted(() => userActivitiesStore.fetchUserActivities(props.userId));
</script>