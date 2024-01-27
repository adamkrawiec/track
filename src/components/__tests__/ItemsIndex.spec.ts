import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { nextTick } from 'vue'
import axios from 'axios'

import ItemsIndex from "../Items/ItemsIndex.vue"
import type IItem from '../../types/item'

const item: IItem = {
  id: "1",
  title: "My Item",
  source: "example.com",
  body: "My Item body",
  url: "https://example.com",
  _links: {},
  createdAt: "2021-01-01T00:00:00Z",
  author: {
    fullName: "John Doe",
    id: "1",
    email: "johndoe@example.com",
    createdAt: new Date("2021-01-01T00:00:00Z"),
    _links: {},
  }
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
    expect(wrapper.find("[data-test='table-empty']").text()).toContain("No matching item found");
  });

  it("renders loading view while loading", async () => {
    const wrapper = mount(ItemsIndex, {
      stubs: { RouterLinkStub },
      global: {
        plugins: [
          createTestingPinia({ createSpy: vi.fn, stubActions: false })
        ],
      },
    });
    await nextTick();
    
    expect(wrapper.find("[data-test='table-loading']").text()).toContain("Loading items...");
  });

  it("renders table with items atributes returned by api", async () => {
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
    
    expect(wrapper.find(`[data-test='item-${item.id}']`).html()).toContain("My Item");
    expect(wrapper.find(`[data-test='item-${item.id}']`).html()).toContain("John Doe");
  });
})
