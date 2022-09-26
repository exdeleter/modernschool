import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: MainPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(import.meta.env.BASE_URL)
})

export default router