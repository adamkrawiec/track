<template>
  <main-panel>
    <template #body>
      <div class="py-2 text-lg font-bold">
        <h1>Welcome to Tasky</h1>
      </div>
      <div class="py-2">
        <label>Email:</label>
      </div>
      <div>
        <input
          class="border-2 rounded-lg p-2"
          v-model="userEmail"
        />
      </div>
      <div class="py-2">
        <button class="border-2 rounded-lg px-4 py-2 bg-orange-600 border-orange-600 text-slate-50" @click="logIn">Log in</button>
      </div>
      <div v-if="sessionError" class="text-red-500">
        {{ sessionError }}
      </div>
    </template>
  </main-panel>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSessionStore } from '@/stores/session'
import { useRouter } from 'vue-router';
import MainPanel from '../shared/MainPanel.vue';

const router = useRouter();

const sessionStore = useSessionStore();

const userEmail = ref(null);

const sessionError = computed(() => sessionStore.sessionError)

const logIn = async () => {
  if (!userEmail.value) return;

  await sessionStore.createSession(userEmail.value);

  router.push({ name: "items" })
}
</script>