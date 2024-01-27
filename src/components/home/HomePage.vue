<template>
  <header-bar />
  <div class="h-screen">
    <main-panel>
      <template #body>
        Dummy Home page
      </template>
    </main-panel>
  </div>
</template>
<script setup lang="ts">
import HeaderBar from '@/components/main/HeaderBar.vue'
import MainPanel from '@/components/shared/MainPanel.vue'
</script>