import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import Home from '@/views/home'
import Employee from '@/views/employee'

Vue.use(VueRouter)

// 配置路由
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/employee',
        component: Employee
    }
]

export default new VueRouter({
    routes
})