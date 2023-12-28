import { ref } from 'vue'
import type { Ref } from 'vue'
import type IItem from '@/types/item'
import { defineStore } from 'pinia'
import axios from 'axios'
import { API_BASE_URL } from './constants';
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies();
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
      { withCredentials: true }
      );

    item.value = response.data.item;
  }

  return {
    items,
    item,
    fetchItems,
    fetchItem
  }
})