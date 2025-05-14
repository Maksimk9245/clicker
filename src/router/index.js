import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/views/Login.vue'
import Login from '@/views/SignUp.vue'

const routes=[
    {path: '/login',component: Login},
    {path: '/signup',component: Signup},
]
const router= createRouter({
    history: createRouter(),
    routes
})

export default routes
