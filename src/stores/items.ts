import { ref } from 'vue'
import type { Ref } from 'vue'
import type IItem from '@/types/item'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_BASE_URL } from './constants';

export const useItemsStore = defineStore('items', () => {
  const items: Ref<IItem[]> = ref([]);
  const item: Ref<IItem | null> = ref(null);

  async function fetchItems () {
    const response = await axios.get(
      `${API_BASE_URL}/items`,
      { withCredentials: true }
    );

    items.value = response.data.items;
  }

  async function fetchItem (itemId: string) {
    const response = await axios.get(
      `${API_BASE_URL}/items/${itemId}`,
      { params: { include_task: true },
        withCredentials: true }
      );

    item.value = response.data.item;
  }

  async function searchItems(title: string) {
    const response = await axios.get(
      `${API_BASE_URL}/items`,
      {
        params: { title }, 
        withCredentials: true
      }
    );
    items.value = response.data.items;
  }

  return {
    items,
    item,
    fetchItems,
    searchItems,
    fetchItem
  }
})