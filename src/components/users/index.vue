<template>
  <h1>List of users</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.fullName }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([]);

onMounted(async() => {
  let data = await axios.get("http://localhost:3000/users");

  users.value = data.data.users;
});

</script>
