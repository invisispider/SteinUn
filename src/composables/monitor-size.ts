import { reactive, onMounted, onUnmounted, toRefs } from 'vue';

export function useMonitorSize() {
    const sizes = reactive({
        browserWidth: window.innerWidth,
        deviceWidth: screen.width,
        isMobile: false,
        isVertical: false
    })

    const browserResized = () => {
        sizes.browserWidth = window.innerWidth
        sizes.deviceWidth = screen.width
        sizes.isMobile = isMobile()
        sizes.isVertical = isVertical()
    }

    const isVertical = () => {
        return window.innerWidth<window.innerHeight ? true : false
    }
    const isMobile = () => {
        return window.innerWidth <= 600 ? true : false
    }

    onMounted(() => {
        window.addEventListener('resize', browserResized);
        sizes.isVertical = isVertical();
        sizes.isMobile = isMobile();
    })

    onUnmounted(() => {
        window.removeEventListener('resize', browserResized)
    })

    return {
        ...toRefs(sizes)
    }
}