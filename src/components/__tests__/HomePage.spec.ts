import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import { mount } from '@vue/test-utils'
import HomePage from '../home/HomePage.vue'
import { beforeEach } from 'node:test'

describe('HomePage', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    })
    expect(wrapper.text()).toContain('Dummy Home page')
  })
})
