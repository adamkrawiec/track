<template>
  <a @click="router.go(-1)" href="#">Go back</a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
</script>