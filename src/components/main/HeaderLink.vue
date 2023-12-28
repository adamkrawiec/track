<template>
  <div class="columns-1">
    <router-link :to="{ name: page}">
      {{ label }}
    </router-link>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  page: string,
  label: string
}
defineProps<IProps>()
</script>