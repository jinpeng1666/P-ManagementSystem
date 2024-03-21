import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import Home from '@/views/home'
import Employee from '@/views/employee'
import Department from '@/views/department'
import Salary from '@/views/salary'
import Relationship from '@/views/relationship'
import Message from '@/views/message'

Vue.use(VueRouter)

// 配置路由
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/department',
        component: Department
    },
    {
        path: '/employee',
        component: Employee
    },
    {
        path: '/salary',
        component: Salary
    },
    {
        path: '/relationship',
        component: Relationship
    },
    {
        path: '/message',
        component: Message
    }
]

export default new VueRouter({
    routes
})