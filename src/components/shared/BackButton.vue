<template>
  <a @click="router.go(-1)" href="#" class="border-2 rounded-lg px-2 py-2 border-gray-700">Go back</a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
</script>