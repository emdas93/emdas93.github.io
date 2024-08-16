import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    id:'main',
    store: () => {
        return {
            title: '',
            tags: [],
        }
    },
    getters: {
        getTitle: (state) => {
            return state.title;
        }
    },

    actions: {
        setTitle(value){
            this.title = value;
        },
        setTags(value) {
            this.tags = value;
        }
    }
})
