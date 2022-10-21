import {createRouter, createWebHistory} from "vue-router"
import {
    MainPage,
    AboutPage,
    OrganizationsPage,
    TeacherPage,
    ClassesPage
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
    {
        path: '/classes-page',
        component: ClassesPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router