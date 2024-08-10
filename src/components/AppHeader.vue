<template>
    <header class="bg-cover bg-center w-full h-60 overflow-hidden"
        style="background-image: url('/src/assets/images/banner.webp')">
        <div class="absolute inset-0 flex flex-col bg-black bg-opacity-70 h-60">
            <div class="container flex flex-row justify-between mx-auto my-5 px-5">
                <div class="">
                    <router-link to="/" class="text-xl font-bold text-white">EMDAS93</router-link>
                </div>
                <nav class="flex flex-row">
                    <span class="px-3 text-lg font-bold text-white">HOME</span>
                    <router-link to="/" class="px-3 text-lg font-bold text-white">POST</router-link>
                    <span class="px-3 text-lg font-bold text-white">INFO</span>
                </nav>
            </div>
            <div class="mx-auto my-20">
                <h1 class="text-2xl font-bold text-white">{{ mainStore.title }}</h1>
            </div>
        </div>
    </header>
</template>

<script setup>
import useMainStore from '../store/main';

const mainStore = useMainStore();


</script>