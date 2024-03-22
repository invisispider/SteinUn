import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing';
import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Greeting from "@/components/Landing/Greeting.vue";
import Artist from "@/components/Landing/Artist.vue";
import SteinunLimited from "@/components/Landing/SteinunLimited.vue";
import { createRouter, createWebHistory } from 'vue-router';

describe('Home', () => {
    const routes = [
        { path: '/', name: 'Home', redirect: 'landing/Greeting', component: Home, children: [
            { path: '/landing/Greeting', name: 'Greeting', component: Greeting },
            { path: '/landing/SteinunLimited', name: 'SteinunLimited', component: SteinunLimited },
            { path: '/landing/Artist', name: 'Artist', component: Artist }
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
        expect(wrapper.vm.pageSelections).toContain('Greeting')
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
        const currentPage = await wrapper.find('.home-changer .flex-grow div').text();
        expect(currentPage).toBe('Greeting');
        const nextButton = wrapper.find('.home-changer i[aria-label="next"');
        const prevButton = wrapper.find('.home-changer i[aria-label="prev"');
        expect(nextButton.exists()).toBe(true)
        expect(prevButton.exists()).toBe(true)
        await nextButton.trigger('click')
        const nextPage = await wrapper.find('.home-changer .flex-grow div').text();        
        expect(wrapper.vm.selected).toBe('SteinunLimited');
        await prevButton.trigger('click');
        await prevButton.trigger('click');
        expect(wrapper.vm.selected).toBe('Artist');
    }); 
    it('displays the selected component', async () => {
        const initialComponent = wrapper.findComponent(Artist)
        expect(initialComponent.exists()).toBe(true);
        await wrapper.find('.home-changer i[aria-label="next"]').trigger('click');
        const updatedComponent = wrapper.findComponent(Greeting);
        expect(updatedComponent.exists()).toBe(true);
   });
})

