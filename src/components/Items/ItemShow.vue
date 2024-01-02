<template>
  <div v-if="item">
    <div class="columns">
      <source-image :source="item.source" />
      <item-author v-if="item.author" :author="item.author" />
    </div>
    <h3 class="my-2">{{ item.title }}</h3>
    <p>{{ item.body }}</p>
    <div class="my-2" v-if="item.url">
      <item-cta-button :source="item.source" :url="item.url" />
    </div>
    <div v-if="item.task">
      <span v-if="item.task.completedAt">
        You have completed the task at {{ formatDate(item.task.completedAt, 'MM/DD/YYYY') }}
      </span>
      <span v-else>
        Task to complete at {{ formatDate(item.task.deadlineAt, 'MM/DD/YYYY') }}
      </span>
    </div>
    <div class="my-2">
      <back-button />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useItemsStore } from '@/stores/items'
import type IITem from '@/types/item'
import type { ComputedRef } from 'vue'
import SourceImage from './shared/SourceImage.vue'
import ItemAuthor from './shared/ItemAuthor.vue'
import ItemCtaButton from './shared/ItemCtaButton.vue'
import BackButton from '@/components/shared/BackButton.vue'
import { formatDate } from '@/utils/format_date.ts'

const itemsStore = useItemsStore();
const route = useRoute();

const item: ComputedRef<IITem | null> = computed(() => itemsStore.item);

const itemId: ComputedRef<string> = computed(() => Array.isArray(route.params.id) ? route.params.id[0]: route.params.id)

onMounted(async() => await itemsStore.fetchItem(itemId.value));
</script>