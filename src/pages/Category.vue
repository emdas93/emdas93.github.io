<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-3">
                <router-link :to="'/post/' + post.data.slug"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full md:my-3 hover:bg-gray-100"
                    v-for="post in posts" v-show="post.data.category === category">
                    <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/assets/images/test.png" alt="TEXT"> -->
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
            </div>
            <div class="m-3">
                <nav>
                    <p class="text-sm">Categories</p>
                    <ul class="ps-3">
                        <li class="text-xs p-1"> <router-link :to="'/'">ALL</router-link></li>
                        <li class="text-xs p-1" v-for="category in categories"> <router-link :to="'/post/category/' + category">{{ category }}</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useMainStore } from '/src/store/main';
import { usePostStore } from '/src/store/post';
import { useSeoMeta } from '@unhead/vue';
import { useRoute } from 'vue-router';

import matter from 'gray-matter';

const mainStore = useMainStore();
const postStore = usePostStore();

useSeoMeta({
    title: 'emdas93 - ' + 'index page',
    description: 'emdas93의 블로그입니다.',
    ogDescription: 'emads93의 블로그입니다.',
    ogTitle: 'emdas93 - ' + 'index page',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const posts = ref([]);
const route = useRoute();
const categories = ref([]);
const category = ref('');

watch(() => route.params.category , (newValue, oldValue) => {
    category.value = route.params.category;
    mainStore.setTitle(category.value);
})

//if (import.meta.env.MODE === 'development' || import.meta.env.MODE === 'generate') {
await postStore.markdownListLoad();

const files = Object.keys(postStore.markdownFileList);

for (let filename in files) {
    let mdFile = await postStore.markdownFileList[files[filename]]();
    let frontmatter = matter(mdFile.default);
    if (frontmatter.data.slug !== 'tamplate') {
        const content = frontmatter.content.replace('#', '').replace('**', '').slice(0, 290);
        const putData = {
            data: frontmatter.data,
            content: content
        }
        posts.value.push(putData);
    }
}

for (let i = 0 ; i < posts.value.length ; ++i){
    categories.value.push(posts.value[i].data.category);
}

category.value = route.params.category;

let set = new Set(categories.value);
categories.value = [...set];

mainStore.setTitle(category.value);
mainStore.setTags([]);

//} else if (import.meta.env.MODE === 'production') {

//}
</script>

<style>
@media (min-width: 768) {
    .card-image {
        height: 300px
    }
}
.card-image{
    height: 300px;
}
</style>