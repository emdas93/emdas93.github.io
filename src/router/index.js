import { createRouter, createWebHistory, createMemoryHistory } from "vue-router/auto";
// import { routes } from 'vue-router/auto-routes'
// Components
import IndexPage from "../pages/IndexPage.vue";
import PostPage from "../pages/PostPage.vue";
import Wxhack from "../pages/Wxhack.vue";

const routes = [
  { path: '/', name: 'index', component: IndexPage },
  { path: '/post/:slug', name: 'post', component: PostPage },
  { path: '/wxhack', name: 'wxhack', component: Wxhack}
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