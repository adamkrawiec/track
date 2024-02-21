import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { API_BASE_URL } from './constants';
import type { Ref } from 'vue';

export const useUserActivitiesStore = defineStore('userActivities', () => {
  const activities: Ref<any[]> = ref([]);
  const loading: Ref<boolean> = ref(false);

  async function fetchUserActivities(userId: string) {
    const data = await axios.get(`${API_BASE_URL}/activities/user/${userId}`);
    activities.value = data.data.data;
  }

  return { activities, loading, fetchUserActivities };
});