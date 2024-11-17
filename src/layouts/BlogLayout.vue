<template>
  <BlogHeader />
  <main>
    <div class="container mx-auto flex">
      <router-view></router-view>
    </div>
  </main>

  <BlogFooter />
</template>

<script setup lang="ts">
import BlogHeader from './BlogHeader.vue';
import BlogFooter from './BlogFooter.vue';
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
</style>