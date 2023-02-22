import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import ProductView from '../views/Product.vue'

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
      }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
