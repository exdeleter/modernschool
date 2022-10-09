import {createRouter, createWebHistory} from "vue-router"
import {
    MainPage,
    AboutPage,
    OrganizationsPage,
    TeacherPage,
} from "@pages";


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
        path: '/teacher',
        component: TeacherPage
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