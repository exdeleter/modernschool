import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import AboutPage from "@/pages/AboutPage/AboutPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(import.meta.env.BASE_URL)
})

export default router