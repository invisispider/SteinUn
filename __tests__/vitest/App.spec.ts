import { describe, it, expect, beforeEach, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing';
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";
import Namaste from "@/components/Landing/Namaste.vue";
import { useMonitorSize } from '@/composables/monitor-size';
describe("App", () => {
  const size = useMonitorSize();
  const routes = [
    { path: '/', name: 'Home', redirect: 'landing/Namaste', component: Home, children: [
        { path: '/landing/Namaste', name: 'Namaste', component: Namaste },
      ]
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  const pinia = createTestingPinia({
    stubActions: false,
    createSpy: vi.fn,
  });
  const wrapper = mount(App, {
    global: {
      plugins: [pinia, router]
    }
  });
  it("renders properly", () => {
    expect(App).toBeTruthy();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#appWrapper').exists()).toBe(true);
    expect(wrapper.find('#appWrapper').text()).toContain("nightlight");
  });
  it("renders sidebar", () => {
    const sidebar = wrapper.findComponent({ name: 'Sidebar' });
    expect(sidebar.exists()).toBe(true);
  })
  it("renders Style selector", () => {
    const styleSelector = wrapper.findComponent({ name: 'StyleSelector' });
    expect(styleSelector.exists()).toBe(true);
  })
  it("renders Router view", () => {
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
  })
  it("renders Home componet", () => {
    const homeComponent = wrapper.findComponent( { name: 'Home' });
    expect(homeComponent.exists()).toBe(true);
  })
  it("renders Namaste component", () => {
    expect(wrapper.vm.isVertical).toBe('horizontal');

  })
});