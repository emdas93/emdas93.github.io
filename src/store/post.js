import { defineStore } from "pinia";

import matter from "gray-matter";
import markdownIt from "markdown-it";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import uslug from "uslug";

import { useRoute, useRouter } from "vue-router";

const usePostStore = defineStore({
    id: 'post',
    store: () => {
        return {
            toc: '',
            content: '',
            matter: {},
            postList: [],
        }
    },
    getters: {
        getToc: (state) => {
            return state.toc
        },
        getMatter: (state) => {
            return state.matter;
        },
        getContent: (state) => {
            return state.content;
        }

    },
    actions: {
        async getPost() {

            // Markdown Setting
            const md = markdownIt({ html: true });
            md.use(markdownItTocDoneRight, {
                containerClass: 'toc',
                slugify: (s) => {
                    return uslug(s);
                },
                callback: (html, ast) => {
                    this.toc = html;
                }
            })

            const route = useRoute();
            console.log(route.params.slug);

            // Markdown File Load
            const filename = '/posts/' + route.params.slug + '.md';
            const mdFile = await import.meta.glob('/posts/*.md')[filename]();
            const module = matter(mdFile.default);
            
            this.matter = module.data;
            this.content = module.content;
        },
        async getPostList() {
            this.postList = await import.meta.glob('/posts/*.md');
		},
    }
});

export default usePostStore;