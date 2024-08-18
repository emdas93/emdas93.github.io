<template>
    <header id="header" class="bg-cover bg-center w-full h-60 overflow-hidden header-baner">
        <div class="absolute inset-0 flex flex-col bg-black bg-opacity-70 h-60">
            <div class="container flex flex-row justify-between mx-auto my-5 px-5">
                <div class="">
                    <router-link to="/" class="text-xl font-bold text-white">EMDAS93</router-link>
                </div>
                <nav class="flex flex-row">
                    <router-link to="/" class="px-3 text-lg font-bold text-white">HOME</router-link>
                    <router-link to="/editor" class="px-3 text-lg font-bold text-white">EDITOR</router-link>
                    <router-link to="/image-generator" class="px-3 text-lg font-bold text-white">GENERATOR</router-link>
                    <router-link to="/" class="px-3 text-lg font-bold text-white">INFO</router-link>
                </nav>
            </div>
            <div class="mx-auto my-20">
                <h1 class="text-2xl font-bold text-white">{{ mainStore.title }}</h1>
                <div class="flex flex-row justify-center mt-3">
                    <span v-for="tag in mainStore.tags" class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{{ tag }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useMainStore } from '/src/store/main';

const mainStore = useMainStore();

</script>
<style>
.header-baner {
    background-image: url('/src/assets/images/banner.webp');
}
</style>
