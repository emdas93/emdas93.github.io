<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-4 md:col-span-3">
                <PostCard :posts="posts" :category="category"></PostCard>
            </div>
            <div class="m-3 md:block hidden">
                <nav>
                    <CategoryCard :categories="categories"></CategoryCard>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMainStore } from '/src/store/main';
import { usePostStore } from '/src/store/post';
import { useSeoMeta } from '@unhead/vue';
import matter from 'gray-matter';

import PostCard from '/src/components/index/PostCard.vue';
import CategoryCard from '/src/components/index/CategoryCard.vue';

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
const route = useRoute();
const categories = ref([]);
const category = ref('');

watch(() => route.params.category , (newValue, oldValue) => {
    category.value = route.params.category;
    mainStore.setTitle(category.value);
})

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

for (let i = 0; i < posts.value.length; ++i) {
    categories.value.push(posts.value[i].data.category);
}

let set = new Set(categories.value);
categories.value = [...set];

</script>

<style>

.card-image {
    height: 300px;
}
</style>