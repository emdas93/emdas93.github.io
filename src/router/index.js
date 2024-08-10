import { createRouter, createWebHistory } from "vue-router";

// Components
import Index from "/src/pages/Index.vue";
import Post from "../pages/Post.vue";

const routes = [
    { path: '/', name:'index', component: Index },
    { path: '/post/:slug', name:'post', component: Post }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;