import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type IUser from '@/types/user'
import type ITaskSummary from '@/types/task-summary'
import { API_BASE_URL } from './constants';
import type IItem from '../types/item'

export const useUsersStore = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([]);
  const user: Ref<IUser | null> = ref(null);
  const userTaskSummary: Ref<ITaskSummary[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const favoriteItem: Ref<IItem | null> = ref(null);
  const lastCompletedItem: Ref<IItem | null> = ref(null);

  async function fetchUsers () {
    const data = await axios.get(`${API_BASE_URL}/users`);

    users.value = data.data.users;
  }

  async function fetchUser (userId: string) {
    const data = await axios.get(`${API_BASE_URL}/users/${userId}`);

    user.value = data.data;
  }

  async function fetchUserTaskSummary (userId: string) {
    const data = await axios.get(`${API_BASE_URL}/tasks/user/${userId}/summary`);
    userTaskSummary.value = data.data;
  }

  async function fetchUserFavorite (userId: string) {
    const data = await axios.get(`${API_BASE_URL}/activities/user/${userId}/favorite_item`);
    favoriteItem.value = data.data.item;
  }
  async function fetchUserLastCompleted (userId: string) {
    const data = await axios.get(`${API_BASE_URL}/activities/user/${userId}/last_completed`);
    lastCompletedItem.value = data.data.item;
  
  }
    
  return { users,
           user,
           loading,
           favoriteItem,
           lastCompletedItem,
           fetchUsers,
           fetchUser,
           userTaskSummary,
           fetchUserTaskSummary,
           fetchUserFavorite,
           fetchUserLastCompleted, }
})
