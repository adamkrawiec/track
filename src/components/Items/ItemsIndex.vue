<template>
  <div class="flex-1 justify-between px-4 mx-auto max-w-screen-xl">
    <div class="mx-auto w-full max-w-4xl">
      <h1 class="pb-2">Items list</h1>
      <div class="py-2">
        Search
        <input class="px-1 border-2 rounded-md" v-model="search" />
      </div>
      <table class="table-fixed border-collapse w-full border border-slate-400 border-slate-500 bg-white text-sm shadow-sm">
        <thead>
          <tr class="bg-white border-b text-gray-700 uppercase bg-gray-50">
            <th class="px-3 py-3 w-7/12">Title</th>
            <th class="px-3 py-3">Added at</th>
            <th class="px-3 py-3">Added by</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading" >
            <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center">
              Loading items...
            </td>
          </tr>
          <tr v-else-if="items.length === 0" >
            <td colspan="3" class="px-3 py-3 text-slate-500 text-slate-400 text-center">
              No matching item found...
            </td>
          </tr>
          <tr
            v-else
            class="bg-white border-b"
            v-for="item in items"
            :key="`item-${item.id}`"
          >
            <td class="px-3 py-3 text-slate-500 text-slate-400 flex items-center">
              <img src="/item.png" class="w-20"/>
              <router-link :to="{ name: 'item-show', params: { id: item.id }}" class="px-4">
                {{ item.title }}
              </router-link>
            </td>
            <td class="px-3 py-3 text-slate-500 text-slate-400">
              {{ item.createdAt }}
            </td>
            <td class="px-3 py-3 text-slate-500 text-slate-400">
              <span v-if="item.author">
                <router-link :to="{ name: 'user-show', params: { id: item.author.id }}">
                  {{ item.author.fullName }}
                </router-link>
              </span>
              <span v-else>-</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center pt-4">
        <span class="px-2 m-1 border-2 rounded-md" :class="{ 'bg-slate-400': (page === 1) }">
          <a href="#" @click="onPageChange(1)">1</a>
        </span>
        <span class="px-2 m-1 border-2 rounded-md"  :class="{ 'bg-slate-400': (page === 2) }">
          <a href="#" @click="onPageChange(2)">2</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { debounce } from 'lodash'
import { useItemsStore } from '@/stores/items'

const itemsStore = useItemsStore();

const search = ref('');

const items = computed(() => itemsStore.items);
const loading = computed(() => itemsStore.loading);
const page = computed(() => itemsStore.page); // add getter

const onInput = debounce(async () => {
  await itemsStore.searchItems(search.value)
}, 500)

async function onPageChange(newPage: number) {
  itemsStore.page = newPage;
  await itemsStore.fetchItems();
}

watch(search, onInput);

onMounted(async() => await itemsStore.fetchItems());
</script>