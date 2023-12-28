<template>
  <div>
    <div>Added by:</div>
    <img class="w-24" src="/avatar.jpeg">
    <router-link :to="{ name: 'user-show', params: { id: author.id }}">
      {{ author.fullName }}
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