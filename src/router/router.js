import {  createRouter, createWebHashHistory } from "vue-router";
import ToDo from '@/pages/ToDo'
import Main from '@/pages/Main'
import Weather from '@/pages/Weather'
import News from "@/pages/News"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Todo',
        component: ToDo
    },
    {
        path: '/Weather',
        component: Weather
    },
    {
        path: '/News',
        component: News
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router