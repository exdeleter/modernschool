import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router/router";
import App from '@/components/App/App.vue'
import components from '@/components/UI'

import "./assets/main.css";

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router)
    .mount("#app");
