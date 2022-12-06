import {  createRouter, createWebHashHistory } from "vue-router";
import App from '@/App'
import ToDo from '@/pages/ToDo'
import Main from '@/pages/Main'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Todo',
        component: ToDo
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router