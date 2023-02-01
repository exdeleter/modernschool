import {createRouter, createWebHistory} from "vue-router"
import {
    AboutPage,
    OrganizationsPage,
    TeacherPage,
    ClassesPage,
    LoginPage,
    SubjectsPage,
    TeacherFormPage,
    NotFoundPage,
    HubPage,
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
    {
        path: '/subjects-page',
        component: SubjectsPage
    },
    {
        path: '/teacher-form-page/:id',
        component: TeacherFormPage,
        props: true,
    },
    {
        path: '/hub-page',
        component: HubPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    },
]

const router = createRouter({
    routes,
    history : createWebHistory(process.env.BASE_URL)
})

export default router