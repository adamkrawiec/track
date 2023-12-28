<template>
  <div class="wrapper">
    <div class="container mx-auto py-4">
      <div class="columns-3">
        <header-logo />
        <header-link page="items" label="Items" />
        <header-link page="users" label="Users" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderLink from './HeaderLink.vue'
</script>