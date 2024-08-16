import { createRouter, createWebHistory, createMemoryHistory } from "vue-router/auto";
// import { routes } from 'vue-router/auto-routes'
// Components
import Index from "/src/pages/Index.vue";
import Post from "/src/pages/Post.vue";
import Category from "/src/pages/Category.vue";

const routes = [
	{ path: '/', name: 'index', component: Index },
	{ path: '/post/:slug', name: 'post', component: Post },
	{ path: '/post/category/:category', name: 'category', component: Category }
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
