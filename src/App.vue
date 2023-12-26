<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './app.css'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Track App" />
    </div>
  </header>
  <RouterView />
</template>
