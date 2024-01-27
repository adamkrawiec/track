<template>
  <header-bar />
  <div class="container mx-auto min-h-screen">
    <item-show :item-id="itemId"/>
  </div>
</template>
<script setup lang="ts">
import HeaderBar from '@/components/main/HeaderBar.vue'
import ItemShow from '@/components/Items/ItemShow.vue'

defineProps<{ itemId: string }>();
</script>