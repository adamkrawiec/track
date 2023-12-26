import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type IUser from '@/types/user'
import type ITaskSummary from '@/types/task-summary'

const API_BASE_URL = 'http://localhost:3000';
export const useUsersStore = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([]);
  const user: Ref<IUser | null> = ref(null);
  const userTaskSummary: Ref<ITaskSummary[]> = ref([]);

  async function fetchUsers () {
    let data = await axios.get(`${API_BASE_URL}/users`);

    users.value = data.data.users;
  }

  async function fetchUser (userId: Number) {
    let data = await axios.get(`${API_BASE_URL}/users/${userId}`);

    user.value = data.data;
  }

  async function fetchUserTaskSummary (userId: Number) {
    let data = await axios.get(`${API_BASE_URL}/tasks/user/${userId}/summary`);
    userTaskSummary.value = data.data;
  }

  return { users,
           user,
           fetchUsers,
           fetchUser,
           userTaskSummary,
           fetchUserTaskSummary }
})
