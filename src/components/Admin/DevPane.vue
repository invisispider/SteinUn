<script setup lang="ts">
import { useMonitorSize } from '@/composables/monitor-size';
const sizes = useMonitorSize();
</script>
<template>
    <div class="flex">
        <p>{{ sizes.browserWidth }} pixels: Browser</p>
        <p>{{ sizes.deviceWidth }} pixels: Device</p>
        <p>isMobile: {{  sizes.isMobile.value }}</p>
        <p>isVertical: {{ sizes.isVertical.value }}</p>
    </div>
</template>