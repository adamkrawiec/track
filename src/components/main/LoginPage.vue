<template>
  <div>
    <div>
      <label>Login:</label>
      <input v-model="userId"/>
      <button @click="logIn">Log in</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['user_id']);

const userId = ref(null);

const logIn = () => {
  cookies.set('user_id', userId.value)
}
</script>