import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '../views/home/Home.vue';

const routes = [{
    path: "/",
    // name: '/',
    component: Home,
}, {
    name: 'Home',
    path: '/home',
    component: Home,
}, {
    name: 'Gallery',
    path: '/gallery',
    component: () => import('../views/gallery/Gallery.vue')
}, {
    name: 'Paint',
    path: '/paint',
    component: () => import('../views/paint/Paint.vue')
}, {
    name: 'Admin',
    path: '/admin',
    component: () => import('../views/admin/Admin.vue')
},]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router