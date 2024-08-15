import { createRouter, createWebHistory, createMemoryHistory } from "vue-router/auto";
// import { routes } from 'vue-router/auto-routes'
// Components
import Index from "/src/pages/Index.vue";
import Post from "/src/pages/Post.vue";

const routes = [
	{ path: '/', name: 'index', component: Index },
	{ path: '/post/:slug', name: 'post', component: Post }
];

const isClient = typeof window !== 'undefined'

const router = createRouter({
	// prerender를 위해서 클라이언트인지 체크
	history: isClient
		? createWebHistory(import.meta.env.BASE_URL)
		: createMemoryHistory(import.meta.env.BASE_URL),
	routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
	if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
		if (!localStorage.getItem('vuetify:dynamic-reload')) {
			console.log('Reloading page to fix dynamic import error')
			localStorage.setItem('vuetify:dynamic-reload', 'true')
			location.assign(to.fullPath)
		} else {
			console.error('Dynamic import error, reloading page did not fix it', err)
		}
	} else {
		console.error(err)
	}
})

export default router
