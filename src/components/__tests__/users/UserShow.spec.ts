import { describe, it, expect, vi, beforeAll } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import axios from 'axios';

import UserShow from "@/components/users/UserShow.vue";
import type IUser from "@/types/user";


const user: IUser = {
  id: "1",
  fullName: "John Doe",
  email: "doe@example.com",
  createdAt: new Date("2021-01-01T00:00:00Z"),
  _links: {}
}

describe("UserShow", () => {
  let wrapper: any;

  beforeAll(async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: user });
    wrapper = mount(
      UserShow,
      {
        props: { userId: '1' },
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
        },
      }
    )
    console.log(wrapper.html())
    await flushPromises();
  });

  it("renders user name", () => {
    expect(wrapper.find("[data-test='user-name']").text()).toContain("John Doe");
  });
});