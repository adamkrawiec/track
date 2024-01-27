<template>
  <main-panel v-if="item">
    <template #body>
      <div class="mx-auto w-full max-w-2xl">
        <source-image class="py-2 w-full" :source="item.source" />
        <item-author v-if="item.author" :author="item.author" />
        <h3 class="text-lg font-bold py-2">{{ item.title }}</h3>
        <p class="py-4 w-full">{{ item.body }}</p>
        <item-cta-button v-if="item.url" :source="item.source" :url="item.url" />
        <item-task v-if="item.task" :task="item.task" />
        <div class="pt-3">
          <back-button />
        </div>
      </div>
    </template>
  </main-panel>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useItemsStore } from '@/stores/items'
import type IITem from '@/types/item'
import type { ComputedRef } from 'vue'
import SourceImage from './shared/SourceImage.vue'
import ItemAuthor from './shared/ItemAuthor.vue'
import ItemCtaButton from './shared/ItemCtaButton.vue'
import ItemTask from './shared/ItemTask.vue'
import BackButton from '@/components/shared/BackButton.vue'
import MainPanel from '../shared/MainPanel.vue'

const props = defineProps<{ itemId: string }>();

const itemsStore = useItemsStore();

const item: ComputedRef<IITem | null> = computed(() => itemsStore.item);

onMounted(async() => await itemsStore.fetchItem(props.itemId));
</script>