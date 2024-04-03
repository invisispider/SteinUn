import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing';
import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Namaste from "@/components/Landing/Namaste.vue";
import Technomancy from "@/components/Landing/Technomancy.vue";
import SteinunLimited from "@/components/Landing/SteinunLimited.vue";
import { createRouter, createWebHistory } from 'vue-router';

describe('Home', () => {
    const routes = [
        { path: '/', name: 'Home', component: Home, children: [
            { path: '/landing/Namaste', name: 'Namaste', component: Namaste },
            { path: '/landing/SteinunLimited', name: 'SteinunLimited', component: SteinunLimited },
            { path: '/landing/Technomancy', name: 'Technomancy', component: Technomancy }
        ]}
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes,
    });
    const pinia = createTestingPinia({
        stubActions: false,
        createSpy: vi.fn,
    });
    const wrapper = mount(Home, {
        global: {
            plugins: [router, pinia]
        }
    })
    it("generates the main wrapper", () => {
        expect(wrapper.find('div.flex-column').exists()).toBe(true);
    })
    it("contains sub-page names", () => {
        expect(wrapper.vm.pageSelections).toContain('Namaste')
    })
    it('shows page selector component', async () => {
        expect(wrapper.find('div[name="page-selector"]').isVisible()).toBe(true);
    })
    it('flex-column element is present', () => {
        const flexColumn = wrapper.find('[data-test-id="flex-column"]');
        expect(flexColumn.exists()).toBe(true);
    })
    it('home-changer is present', () => {
        const homeChanger = wrapper.find('.home-changer');
        expect(homeChanger.exists()).toBe(true);
    })
    it('home-content element is present', () => {
        const homeContent = wrapper.find('.home-content');
        expect(homeContent.exists()).toBe(true);
    })
    it('social-grp element is present', () => {
        const socialGrp = wrapper.find('.social-grp');
        expect(socialGrp.exists()).toBe(true);
    })
    it('changes pages correctly on button click', async () => {
        const currentPage = wrapper.find('h1#landing-title').text();
        expect(currentPage).toBe('Namaste');
        const nextButton = wrapper.find('.home-changer i[aria-label="next"');
        const prevButton = wrapper.find('.home-changer i[aria-label="prev"');
        expect(nextButton.exists()).toBe(true)
        expect(prevButton.exists()).toBe(true)
        await nextButton.trigger('click')
        const nextPage = wrapper.find('h1#landing-title').text();
        expect(nextPage).toBe('SteinunLimited');
        await prevButton.trigger('click');
        await prevButton.trigger('click');
        expect(wrapper.vm.selected).toBe('Technomancy');
    }); 
    it('displays the selected component', async () => {
        const initialComponent = wrapper.findComponent(Technomancy)
        expect(initialComponent.exists()).toBe(true);
        await wrapper.find('.home-changer i[aria-label="next"]').trigger('click');
        const updatedComponent = wrapper.findComponent(Namaste);
        // console.log(updatedComponent)
        expect(updatedComponent.exists()).toBe(true);
   });
})

