<template>
  <div class="wrap">
    <header class="relative w-full h-60 overflow-hidden bg-cover bg-center bg-slate-600 header" id="header">
      <div class="absolute inset-0 flex flex-row justify-between mx-10 py-5 h-60 text-slate-50">
        <div class="brand-logo">
          <router-link to="/"><h1 class="text-3xl">Blog</h1></router-link>
        </div>

        <nav>
          <span class="px-2">ITEM1</span>
          <span class="px-2">ITEM2</span>
          <span class="px-2">ITEM3</span>
          <span class="px-2">ITEM4</span>
        </nav>
      </div>
      <div class="relative mx-auto my-36 text-center text-slate-50">
        <h1 class="text-3xl">ALL</h1>
      </div>
    </header>

    <main>
      <div class="container mx-auto flex">
        <router-view></router-view>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
</style>