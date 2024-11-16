<template>
    <div class="flex flex-1 flex-col">
        <PostCard :to="'/post/test'" />
        <PostCard :to="'/post/test'"/>
    </div>

    <div class="w-40">
        RIGHT SIDE
    </div>
</template>

<script setup>
import PostCard from '../components/posts/PostCard.vue';

</script>