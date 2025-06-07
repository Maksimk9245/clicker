import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
