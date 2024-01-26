import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils'

import HeaderBar from '../main/HeaderBar.vue'
import HeaderLink from '../main/HeaderLink.vue'
import HeaderLogo from '../main/HeaderLogo.vue'
import { wrap } from 'module'

describe("HeaderBar", () => {
  const wrapper = mount(HeaderBar, {
    stubs: { RouterLinkStub },
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
  });

  it("renders links", () => {
    const headerLinks = wrapper.findAllComponents(HeaderLink);
    expect(headerLinks.length).toBe(2);
    expect(headerLinks.map((c) => c.props())).toEqual(
      [
        { page: 'items', label: 'Items' },
        { page: 'users', label: 'Users' }
      ]
    )
  });

  it("renders header logo", () => {
    expect(wrapper.findComponent(HeaderLogo).exists()).toBeTruthy();
  });

  it("renders logout button", () => {
    expect(wrapper.find("[data-test='logout-button']").exists()).toBeTruthy();
  });
})