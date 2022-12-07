import {  createRouter, createWebHashHistory } from "vue-router";
import App from '@/App'
import ToDo from '@/pages/ToDo'
import Main from '@/pages/Main'
import Weather from '@/pages/Weather'

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
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router