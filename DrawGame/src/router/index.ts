import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    name: '/',
    path: '/home',
    component: () => import('../views/home/Home.vue')
}, {
    name: 'home',
    path: '/home',
    component: () => import('../views/home/Home.vue')
}, {
    name: 'gallery',
    path: '/gallery',
    component: () => import('../views/gallery/Gallery.vue')
},]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router