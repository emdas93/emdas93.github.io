import { createApp as createClientApp, createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from 'unhead'
import router from './router'

import './style.css'

import App from './App.vue'

const isClient = typeof window !== 'undefined';

const createApp = () => {
   
   // Plugins
   const store = createPinia();
   const head = createHead();
   
   const app = isClient ? createClientApp(App) : createSSRApp(App);

   app.use(router)
      .use(store)
      .use(head);

   isClient ? app.mount('#app') : '';

   return { app, router, head };

}

export { createApp }