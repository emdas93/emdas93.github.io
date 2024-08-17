<template>
    <nav>
        <p class="text-sm">Categories</p>
        <ul class="ps-3">
            <li class="text-xs p-1"> <router-link :to="'/'">ALL</router-link></li>
            <li class="text-xs p-1" v-for="category in categories">
                <router-link :to="'/post/category/' + category">{{ category }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    categories:[],
})
</script>

<style>
</style>