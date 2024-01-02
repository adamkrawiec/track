<template>
  <div class="wrapper">
    <div class="container mx-auto py-4">
      <div class="columns-4">
        <header-logo />
        <header-link page="items" label="Items" />
        <header-link page="users" label="Users" />
        <a href="#" @click="logout">Logout</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderLink from './HeaderLink.vue'
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router'

const router = useRouter();

const sessionStore = useSessionStore();

async function logout() {
  await sessionStore.destroySession();

  router.push({ name: "new-session" })
}
</script>