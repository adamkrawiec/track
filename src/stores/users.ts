import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', () => {
  const users = ref([]);

  async function fetchUsers () {
    let data = await axios.get("http://localhost:3000/users");

    users.value = data.data.users;
  }

  return { users, fetchUsers }
})
