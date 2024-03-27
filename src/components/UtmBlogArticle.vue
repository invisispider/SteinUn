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
    <a :href="props.ytlink" target="_blank">
    <img
      class="video-place"
      :src="props.tnurl"
    />
        <!-- <div class="tn-place"></div> -->
    <!-- </div> -->
    </a>
    <div class="desc-place">{{ props.content }}</div>
  </section>
</template>
