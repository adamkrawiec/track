<script setup lang="ts">
import { RouterView } from 'vue-router'
import './app.css'
</script>

<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Transition name="slide-fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
