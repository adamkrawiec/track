import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_BASE_URL } from './constants';

export const useItemsStore = defineStore('items', () => {
  const items = ref([]);

  async function fetchItems () {
    const data = await axios.get(`${API_BASE_URL}/items`);

    items.value = data.data.items;
  }

  return {
    items,
    fetchItems
  }
})