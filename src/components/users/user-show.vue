<template>
  <div v-if="user" class="mx-auto">
    <main-panel>
      <template #body>
        <div class="flex py-4">
          <router-link
            class="px-2"
            :to="{ name: 'user-home', params: { userId: props.userId } }"
          >
            <img class="w-24" src="/avatar.jpeg">
            <h4 class="px-4">{{ user.fullName }}</h4>
          </router-link>
        </div>
        <div class="border-b-2 pt-4">
          <router-link
            class="px-2"
            :to="{name: 'user-activities', params: { userId: props.userId } }"
          >
            Activities
          </router-link>
          <router-link
            class="px-2"
            :to="{ name: 'user-tasks', params: { userId: props.userId } }"
          >
            Task
          </router-link>
        </div>
        <div class="pt-4">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </template>
    </main-panel>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
import type { ComputedRef } from 'vue';
import type IUser from '@/types/user.ts';
import MainPanel from '../shared/MainPanel.vue';

const props = defineProps<{ userId: string }>();

const usersStore = useUsersStore();

const user: ComputedRef<IUser | null> = computed(() => usersStore.user);

onMounted(() => usersStore.fetchUser(props.userId));

</script>
