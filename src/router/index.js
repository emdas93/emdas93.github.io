import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";

// Components
import Index from "../pages/Index.vue";
import Post from "../pages/Post.vue";

const routes = [
    { path: '/', name:'index', component: Index },
    { path: '/post/:slug', name:'post', component: Post }
];

const isClient = typeof window !== 'undefined'

const router = createRouter({
    // prerender를 위해서 클라이언트인지 체크
	history: isClient
		? createWebHistory(import.meta.env.BASE_URL)
		: createMemoryHistory(import.meta.env.BASE_URL),
	routes,
})

export default router;
