<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-3">
                <router-link :to="'/post/' + post.data.slug"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full md:my-3 hover:bg-gray-100"
                    v-for="post in posts">
                    <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/assets/images/test.png" alt="TEXT"> -->
                     <div class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg">
                        <h5>HI</h5>
                     </div>
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
            <div class="">
                <nav>
                    <p class="text-sm">POST</p>
                    <ul class="ps-3">
                        <li class="text-xs p-1">Javascript</li>
                        <li class="text-xs p-1">Database</li>
                        <li class="text-xs p-1">PHP</li>
                        <li class="text-xs p-1">Github</li>
                        <li class="text-xs p-1">일상</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '/src/store/main';
import { usePostStore } from '/src/store/post';
import { useSeoMeta } from '@unhead/vue';

import matter from 'gray-matter';

const mainStore = useMainStore();
const postStore = usePostStore();

mainStore.setTitle('BLOG');
mainStore.setTags([]);

useSeoMeta({
    title: 'emdas93 - ' + 'index page',
    description: 'emdas93의 블로그입니다.',
    ogDescription: 'emads93의 블로그입니다.',
    ogTitle: 'emdas93 - ' + 'index page',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

const posts = ref([]);

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
//} else if (import.meta.env.MODE === 'production') {

//}
</script>
