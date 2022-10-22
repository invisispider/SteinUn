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
    <h2 class="title-place">
      {{ props.title }}
    </h2>
    <div class="article-place">
      <a :href="props.ytlink" target="_blank">
        <div
          class="video-place"
          :style="{ 'background-image': `url(${props.tnurl})` }"
        ></div>
      </a>
      <div class="text-place">
        <h4 class="date-place">
          {{ props.date }}
        </h4>
        {{ props.content }}
      </div>
    </div>
  </section>
</template>
