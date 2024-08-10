import { defineStore } from "pinia";

const useMainStore = defineStore('main', {
    id:'main',
    store: () => {
        return {
            title: ''
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
        }
    }
})

export default useMainStore;