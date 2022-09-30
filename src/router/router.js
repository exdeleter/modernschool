import MainPage from "@/pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import AboutPage from "@/pages/AboutPage/AboutPage.vue";
import OrganizationsPage from "@/pages/OrganizationsPage/OrganizationsPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/organizations',
        component: OrganizationsPage
    },
    {
        path: '/about',
        component: AboutPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router