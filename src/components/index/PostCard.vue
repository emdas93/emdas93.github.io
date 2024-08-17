<template>
    <router-link 
        :to="'/post/' + post.data.slug"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full md:my-3 hover:bg-gray-100"
        v-for="post in filteredPosts" 
        :key="post.data.slug">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="post.data.image" alt="TEXT" v-if="post.data.image !== ''" />
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">{{ post.data.title }}</h5>
            <p class="mb-3 font-normal text-gray-700">{{ post.data.description }}</p>
            <p class="mb-3 font-normal text-xs text-gray-700">{{ post.data.category }}</p>
            <div class="flex flex-row">
                <span v-for="tag in post.data.tags"
                    class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{{ tag }}</span>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    posts: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        default: '',
    }
})

const filteredPosts = computed(() => {
    if (props.category) {
        return props.posts.filter(post => post.data.category === props.category);
    }
    return props.posts;
});
</script>
