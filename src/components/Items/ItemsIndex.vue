<template>
    <main-panel>
    <template #body>
      <div class="mx-auto w-full max-w-4xl">
        <h1 class="pb-2">Items list</h1>
        <div class="py-2">
          Search
          <input class="px-1 border-2 rounded-md" v-model="search" />
        </div>
        <main-table
          :loading="loading"
          :items="items"
          loading-copy="Loading items..."
          empty-copy="No matching item found..."
          :headers="headers"
        >
          <template #data-row="{ item }">
            <item-row :item="item" />
          </template>
        </main-table>
        <pagination :pages="pages" :active-page="page" @page-change="onPageChange" />
      </div>
    </template>
  </main-panel>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, type ComputedRef } from 'vue'
import debounce from 'lodash/debounce'
import { useItemsStore } from '@/stores/items'
import MainTable from '../shared/MainTable.vue'
import ItemRow from './shared/ItemRow.vue'
import Pagination from '../shared/Pagination.vue'
import MainPanel from '../shared/MainPanel.vue'
import type IItem from '../../types/item'

const itemsStore = useItemsStore();

const search = ref('');

const items: ComputedRef<IItem[]> = computed(() => itemsStore.items);
const loading: ComputedRef<boolean> = computed(() => itemsStore.loading);
const page: ComputedRef<number> = computed(() => itemsStore.page); // add getter
const totalCount: ComputedRef<number> = computed(() => itemsStore.totalCount);
const pages: ComputedRef<number> = computed(() => itemsStore.pages);

const headers: Array<{ label: string, class?: string | undefined }> = [
  { label: 'Title', class: "w-7/12" },
  { label: 'Added at' },
  { label: 'Added by' }
];

const onInput = debounce(async () => {
  await itemsStore.searchItems(search.value)
}, 500)

async function onPageChange(newPage: number) {
  itemsStore.page = newPage;
  await itemsStore.fetchItems();
}

watch(search, onInput);

onMounted(() => itemsStore.fetchItems());
</script>