import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import ProductView from '../views/Product.vue'
import CategoryView from '../views/Category.vue'
import SearchView from '../views/Search.vue'
import CartView from '../views/Cart.vue'
import SignUpView from '../views/SignUp.vue'
import LogInView from '../views/LogIn.vue'

const routes = [
    {
        path: "/",
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/search',
        name: 'SearchView',
        component: SearchView
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
    },
    {
        path: '/cart',
        name: 'CartView',
        component: CartView
    },
    {
        path: '/sign-up',
        name: 'SignUpView',
        component: SignUpView
    },
    {
        path: '/log-in',
        name: 'LogInView',
        component: LogInView
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
