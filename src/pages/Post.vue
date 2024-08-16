<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-3">
                <div class="mx-5 p-3">
                    <div v-html="postData.content" class="markdown-body"></div>
                </div>
            </div>
            <div class="relative">
                <TocContainer
                    class="fixed"
                    :content="postData.toc">
                </TocContainer>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useMainStore } from '/src/store/main';
import { usePostStore } from '/src/store/post.js';
import { useSeoMeta } from '@unhead/vue';

import TocContainer from '/src/components/post/TocContainer.vue';
onMounted(()=> {
    window.onload = function() {
    var pathname = window.location.pathname;

    // URL 끝에 '/'가 없고, 파일명도 포함되어 있지 않은 경우
    if (!pathname.endsWith('/') && !pathname.includes('.')) {
        var newPathname = pathname + '/';
        var newUrl = window.location.origin + newPathname + window.location.search + window.location.hash;

        window.location.replace(newUrl);
    }
};
})
const mainStore = useMainStore();
const postStore = usePostStore();

const postData = ref();

postData.value = await postStore.fetchContent();

mainStore.setTitle(postData.value.frontmatter.title);

useSeoMeta({
	title: 'emdas93 - ' + postData.value.frontmatter.title,
	description: postData.value.frontmatter.description,
	ogDescription: postData.value.frontmatter.description,
	ogTitle: 'emdas93 - ' + postData.value.frontmatter.title,
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
})

</script>

<style>
@import '/node_modules/github-markdown-css/github-markdown-light.css';
</style>
