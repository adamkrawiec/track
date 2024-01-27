import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from 'vue'
import axios from 'axios'

import ItemsIndex from "../Items/ItemsIndex.vue"
import type IItem from '../../types/item'
import { useItemsStore } from '@/stores/items'
import { mock } from 'node:test'

// const itemsStore = useItemsStore();

// vi.mock('axios');

const item: IItem = {
  id: "1",
  title: "My Item",
  source: "example.com",
  body: "My Item body",
  url: "https://example.com",
  _links: {},
  createdAt: "2021-01-01T00:00:00Z",
};

describe('ItemsIndex', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  });

  it("renders empty state", () => {
    const wrapper = mount(ItemsIndex, {
      stubs: { RouterLinkStub },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(wrapper.find("[data-test='empty-placeholder']").text()).toContain("No matching item found");
  });

  it("renders loading view while loading", async () => {
    const wrapper = await mount(ItemsIndex, {
      global: {
        plugins: [
          createTestingPinia({ createSpy: vi.fn, stubActions: false })
        ],
      },
    });
    
    // console.log(wrapper.html());
  });

  it("renders table with items returned by api", async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { items: [item]}});
    const wrapper = await mount(ItemsIndex, {
      stubs: { RouterLinkStub },
      global: {
        plugins: [
          createTestingPinia({ createSpy: vi.fn, stubActions: false })
        ],
      },
    });
    await nextTick();
    await nextTick();
    await nextTick();
    
    expect(wrapper.html()).toContain("My Item");
  });
})
