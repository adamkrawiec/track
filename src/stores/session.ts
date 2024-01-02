import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_BASE_URL } from './constants'

export const useSessionStore = defineStore('session', () => {
  const currentUser = ref(null);
  const sessionError: Ref<string | null> = ref(null);
  
  async function createSession (email: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/sessions`, { email }, { withCredentials: true })

      currentUser.value = response.data.user
    }
    catch(e) {
      sessionError.value = 'User with provided email not found'
    }
  }

  async function destroySession () {
    await axios.delete(`${API_BASE_URL}/sessions`, { withCredentials: true })

    currentUser.value = null
  }

  return {
    currentUser,
    sessionError,
    createSession,
    destroySession
  }
})