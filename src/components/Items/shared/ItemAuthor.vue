<template>
  <div class="my-2 border-2 rounded-lg px-4 py-2 border-orange-600 w-fit">
    <router-link :to="{ name: 'user-show', params: { id: author.id }}">
      <div class="flex items-center">
        <img class="w-20 bg-neutral-100" src="/avatar.jpeg">
        <span>{{ author.fullName }}</span>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import type IUser from "@/types/user.ts"

interface IProps {
  author: IUser
}

defineProps<IProps>();

</script>