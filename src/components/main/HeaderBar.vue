<template>
  <div class="wrapper bg-neutral-400 mb-10" >
    <div class="container mx-auto py-4">
      <div class="columns-4">
        <header-logo />
        <header-link data-test="items-link" page="items" label="Items" />
        <header-link page="users" label="Users" />
        <a href="#" @click="logout" data-test="logout-button">Logout</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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