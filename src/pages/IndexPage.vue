<template>

  <BlogHeader :sub-title="subTitle" />
  <main>
    <div class="container mx-auto flex">
      <div class="flex flex-1 flex-col">
        <PostCard :to="'/post/test'" />
        <PostCard :to="'/post/test'" />
      </div>

      <div class="w-40">
        RIGHT SIDE
      </div>
    </div>
  </main>
  <BlogFooter />



</template>

<script setup>
import { ref } from 'vue';
import { useSeoMeta } from '@unhead/vue';

import BlogHeader from '../layouts/BlogHeader.vue';
import BlogFooter from '../layouts/BlogFooter.vue';
import PostCard from '../components/posts/PostCard.vue';

const subTitle = ref("POST LIST");

useSeoMeta({
  title: 'emdas93 - ' + "Index",
  description: "Index Page",
  ogDescription: "Index Page",
  ogTitle: 'emdas93 - ' + "Index",
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>