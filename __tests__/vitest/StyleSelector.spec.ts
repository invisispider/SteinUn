import { it, describe, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import StyleSelector from "@/components/StyleSelector.vue";
import { useStore } from "@/stores/index";
import { nextTick } from 'vue';
import { createTestingPinia } from "@pinia/testing";

describe("StyleSelector.vue", () => {
    const wrapper = mount(StyleSelector, {
        global: {
            plugins: [
                createTestingPinia({
                    stubActions: false,
                    createSpy: vi.fn,
                })
            ]
        }
    });
    const store = useStore();
    it('has a function to switch style', () => {
        expect(wrapper.vm.switchStyle).toBeDefined();
    })
    it('has styleMode in my imported store', () => {
        expect(store.styleMode).toBeDefined();
    })
    it('store defaults to light black', () => {
        expect(store.styleMode).toBe('light');
    })
    it('switches style mode correctly on button click', async () => {
        await wrapper.find('#dark-green').trigger('click');
        nextTick()
        expect(store.styleMode).toBe('green');
    })
    it('switches style with function', async () => {
        await wrapper.vm.switchStyle('light');
        expect(store.styleMode).toBe('light');

    })
    it("should have icons", () => {
        expect(wrapper.findAll("i").length).toBeGreaterThan(3);
    })
})