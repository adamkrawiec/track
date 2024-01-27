import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount, RouterLinkStub, flushPromises } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import axios from 'axios'

import ItemShow from "@/components/Items/ItemShow.vue";
import type IItem from "@/types/item";

const item: IItem = {
  id: "1",
  title: "Testing Item with Nice Title",
  source: "example.com",
  url: 'example.com/abc-123',
  body: "Very long description full of details with a lot of text. Just to make sure it will display correctly.",
};

describe("ItemShow", () => {
  let wrapper: any;
  
  beforeEach(async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { item }});
    wrapper = mount(
      ItemShow,
      {
        propsData: { itemId: '1' },
        stubs: { RouterLinkStub },
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
        },
      }
    )
    await flushPromises();
  });

  it("renders item title", () => {
    expect(wrapper.find("[data-test='item-title']").text()).toContain(item.title);
  });

  it("renders item body", () => {
    expect(wrapper.find("[data-test='item-body']").text()).toContain(item.body);
  });

  it("renders link to the item", () => {
    expect(wrapper.find("[data-test='item-link']").attributes().href).toEqual(item.url);
    expect(wrapper.find("[data-test='item-link']").text()).toEqual("Read article");
  });
})