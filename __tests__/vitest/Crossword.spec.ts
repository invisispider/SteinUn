import { it, describe, expect } from 'vitest'
import { mount } from "@vue/test-utils"
import Crossword from "@/views/Crossword.vue";
import useCrossword from "@/composables/Crosswords/crosswordvideogame"
describe("Crossword App", () => {
    it("should display a grid", () => {
        const wrapper = mount(Crossword);
        expect(wrapper.findAll('td').length).toEqual(11*11);
    })
    it.todo("should collapse menus", () => {

    })
    it.todo("should fill in characters", () => {

    })
    it.todo("first clue should be correct", () => {
        
    })
})