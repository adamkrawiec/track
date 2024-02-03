<template>
  <header-bar />
  <div class="container mx-auto min-h-screen">
    <user-show :user-id="userId" />
  </div>
</template>
<script setup lang="ts">
import HeaderBar from '@/components/main/HeaderBar.vue'
import UserShow from '@/components/users/user-show.vue';

defineProps<{ userId: string }>();
</script>
