import {createRouter, createWebHistory} from "vue-router"
import {
    AboutPage,
    OrganizationsPage,
    TeacherPage,
    ClassesPage,
    LoginPage
} from "@pages";


const routes = [
    {
        path: '/',
        component: LoginPage
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
    {
        path: '/login-page',
        component: LoginPage
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router