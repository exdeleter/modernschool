import { createApp } from 'vue'
import App from './components/App/App.vue'
import { createPinia } from 'pinia'
import components from '@/components/UI'
import router from "@/router/router";

const pinia = createPinia()
const app = createApp(App)

//глобальная регистрация компонента
components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(pinia)
    .mount('#app')
