import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/index.html',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about.html',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    store.commit('SET_LOADING_TYPE', from.name && !from.hash ? 1 : 0)
    next()
})

export default router
