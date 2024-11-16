<template>
  <div class="flex flex-row container mt-5">
    <div class="markdown-body" v-html="content">

    </div>
    <div class="w-40">
      <TocContainer :content="toc"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TocContainer from '../components/posts/TocContainer.vue';

// Markdown Imports ----------------------------------*/
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import markdownItHighlightJS from 'markdown-it-highlightjs';
import hljs from "highlight.js";
import matter from 'gray-matter';
import uslug from "uslug";
import { useSeoMeta } from '@unhead/vue';
/*----------------------------------------------------*/

import testMD from '/posts/test.md';

const route = useRoute();
const slug = route.params.slug;

console.log(route.params.slug);

const frontmatter = ref({});
const toc = ref({});
const content = ref("");

const md = markdownIt({
  html: true,
}).use(markdownItAnchor, { slugify: (s) => { return uslug(s) }, })
  .use(markdownItTocDoneRight, {
    containerClass: 'toc', // TOC 컨테이너 클래스 설정
    slugify: (s) => { return uslug(s) },
    callback: (html, ast) => {
      toc.value = generateToc(ast);
      toc.value = `<nav>${toc.value}</nav>`;
    }
  }).use(markdownItHighlightJS, {
    hljs: hljs
  });

function generateToc(node) {
  let html = "";
  // 현재 노드의 이름이 있는 경우 li 요소로 감싸기
  if (node.n) {
    let padding = 'ps-3';
    if (node.l === 1) {
      padding = '';
    }
    html += `<li class="text-sm text-slate-300 ${padding}"><a href="#${uslug(node.n)}">${node.n}`;
  }

  // "c" 키가 배열이고, 배열에 요소가 있는 경우 ul로 감싸고 재귀 호출
  if (Array.isArray(node.c) && node.c.length > 0) {
    html += "<ul>";
    node.c.forEach(childNode => {
      html += generateToc(childNode); // 하위 노드를 재귀적으로 처리
    });
    html += "</ul>";
  }

  // 현재 노드가 li로 시작했다면 li를 닫기
  if (node.n) {
    html += "</a></li>";
  }

  return html;
}


const matterObject = matter(testMD);

frontmatter.value = matterObject.data;

content.value = md.render(matterObject.content);

// const data = {
//   frontmatter: frontmatter,
//   toc: toc,
//   content: content
// }

// console.log(data);

useSeoMeta({
    title: 'emdas93 - ' + frontmatter.value.title,
    description: frontmatter.value.description,
    ogDescription: frontmatter.value.description,
    ogTitle: 'emdas93 - ' + frontmatter.value.title,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

</script>

<style>
@import '/node_modules/github-markdown-css/github-markdown-light.css';
@import '/node_modules/highlight.js/styles/vs.css';
</style>