import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import ProductView from '../views/Product.vue'
import CategoryView from '../views/Category.vue'

const routes = [
    {
        path: "/",
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/:category_slug/:product_slug/',
        name: 'ProductView',
        component: ProductView
    },
    {
        path: '/:category_slug/',
        name: 'CategoryView',
        component: CategoryView
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
