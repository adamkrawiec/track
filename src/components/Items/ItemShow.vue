<template>
  <div v-if="item">
    <h3 class="my-2">{{ item.title }}</h3>
    <p>{{ item.body }}</p>
    <p v-if="item.author" class="my-2">
      Added by:
      <router-link :to="{ name: 'user-show', params: { id: item.author.id }}">
        {{ item.author.fullName }}
      </router-link>
    </p>
    <div class="my-2">
      <a target="_blank" :href="item.url">
        See article
      </a>
    </div>
    <div class="my-2">
      <a @click="router.go(-1)" href="#">Go back</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useItemsStore } from '@/stores/items'
import type IITem from '@/types/item';
import type { Ref } from 'vue';

const itemsStore = useItemsStore();
const route = useRoute();
const router = useRouter();

const item: Ref<IITem | null> = computed(() => itemsStore.item);

onMounted(async() => await itemsStore.fetchItem(route.params.id));
</script>