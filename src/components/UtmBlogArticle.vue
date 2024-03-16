<script setup lang="ts">
const props = defineProps([
  "id",
  "date",
  "content",
  "tnurl",
  "ytlink",
  "title",
]);
</script>
<template>
  <section class="utm-blog-article">
    <h3 class="title-place">{{ props.title }}</h3>
    <div class="tn-place">
      <a :href="props.ytlink" target="_blank">
        <div
          class="video-place"
          :style="{ 'background-image': `url(${props.tnurl})` }"
        ></div>
      </a>
    </div>
    <div class="desc-place">{{ props.content }}</div>
  </section>
</template>
