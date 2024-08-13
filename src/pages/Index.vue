<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-3">
                <router-link v-for="post in posts" :to="'/post/' + post.data.slug" class="mx-5 border-y p-3">
                    <h3 class="text-xl font-bold">{{ post.data.title }}</h3>
                    <h5 class="text-sm font-bold">{{ post.data.description }}</h5>
                    <p class="text-xs">{{ post.data.created_at }}</p>
                    <p class="mt-2 text-sm text-slate-600 line-clamp-3">{{ post.content }}</p>
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
import { useMainStore } from '../store/main';
import { usePostStore } from '../store/post';
import { useHead, useSeoMeta } from 'unhead';

import matter from 'gray-matter';

const mainStore = useMainStore();
const postStore = usePostStore();

mainStore.setTitle('BLOG');

useSeoMeta({
	title: 'emdas93 - ' + 'index page',
	description: 'emdas93의 블로그입니다.',
	ogDescription: 'emads93의 블로그입니다.',
	ogTitle: 'emdas93 - ' + 'index page',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
})

const posts = ref([]);

if (import.meta.env.MODE === 'development') {
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
} else if (import.meta.env.MODE === 'production') {

}
</script>