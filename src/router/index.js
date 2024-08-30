import { createRouter, createWebHistory, createMemoryHistory } from "vue-router/auto";
// import { routes } from 'vue-router/auto-routes'
// Components
import IndexPage from "/src/pages/IndexPage.vue";
import PostPage from "/src/pages/PostPage.vue";
import MarkdownEditorPage from "/src/pages/MarkdownEditorPage.vue";
import ImageGeneratePage from "/src/pages/ImageGeneratePage.vue";

const routes = [
	{ path: '/', name: 'index', component: IndexPage },
	{ path: '/post/category/:category', name: 'category', component: IndexPage },
	{ path: '/post/:slug', name: 'post', component: PostPage },
    { path: '/editor', name: 'editor', component: MarkdownEditorPage },
    { path: '/image-generator', name: 'image-generator', component: ImageGeneratePage },
];

const isClient = typeof window !== 'undefined'

const router = createRouter({
	// prerender를 위해서 클라이언트인지 체크
	history: isClient
		? createWebHistory(import.meta.env.BASE_URL)
		: createMemoryHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
