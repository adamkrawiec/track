<template>
  <header-bar />
  <div class="container mx-auto min-h-screen">
    <users-index />
  </div>
</template>
<script setup lang="ts">
import HeaderBar from '@/components/main/HeaderBar.vue'
import UsersIndex from '../../components/users/users-index.vue'
</script>
