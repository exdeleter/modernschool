import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from "@/router/router";
import "@/index.css"

const app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .mount('#app')
