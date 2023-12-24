import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type IUser from '../types/user'

export const useUsersStore = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([]);

  async function fetchUsers () {
    let data = await axios.get("http://localhost:3000/users");

    users.value = data.data.users;
  }

  return { users, fetchUsers }
})
