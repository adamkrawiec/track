<template>
  <div v-if="user" class="mx-auto">
    <main-panel>
      <template #body>
        <router-link
          class="px-2 min-w-10"
          :to="{ name: 'user-home', params: { userId: props.userId } }"
        >
          <img class="w-24" src="/avatar.jpeg">
          <h4 class="py-2" data-test="user-name">{{ user.fullName }}</h4>
        </router-link>
        <div class="pt-4">
          <router-link
            class="px-2"
            data-test="user-home-link"
            :to="{name: 'user-home', params: { userId: props.userId } }"
          >
            Profile
          </router-link>
          <router-link
            class="px-2"
            data-test="user-activities-link"
            :to="{name: 'user-activities', params: { userId: props.userId } }"
          >
            Activities
          </router-link>
          <router-link
            class="px-2"
            data-test="user-tasks-link"
            :to="{ name: 'user-tasks', params: { userId: props.userId } }"
          >
            Task
          </router-link>
        </div>
      </template>
    </main-panel>
    <div class="pt-4">
      <router-view />
    </div>
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
const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim libero, porta a pretium et, maximus quis ante. Morbi id placerat enim, quis ultrices augue. Curabitur id dui varius, consectetur urna eget, pretium magna. Etiam ut erat bibendum, rutrum eros et, accumsan felis.";
onMounted(() => usersStore.fetchUser(props.userId));

</script>
