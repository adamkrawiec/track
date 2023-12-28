<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from '@/components/main/HeaderBar.vue'
import './app.css'
</script>

<template>
  <header-bar />
  <RouterView />
</template>
