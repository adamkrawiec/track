import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils'
import HomePage from '../home/HomePage.vue'
import HeaderBar from '../main/HeaderBar.vue'

describe('HomePage', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePage, {
      stubs: { RouterLinkStub },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    })

    expect(wrapper.text()).toContain('Dummy Home page')
  });

  it('renders header bar', () =>{
    const wrapper = shallowMount(HomePage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    })

    expect(wrapper.findComponent(HeaderBar).exists()).toBeTruthy()
  })
})
