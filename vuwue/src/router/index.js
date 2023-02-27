import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/Home.vue'
import ProductView from '../views/Product.vue'
import CategoryView from '../views/Category.vue'
import SearchView from '../views/Search.vue'
import CartView from '../views/Cart.vue'
import SignUpView from '../views/SignUp.vue'
import LogInView from '../views/LogIn.vue'
import MyAccountView from '../views/MyAccount.vue'

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
    {
        path: '/my-account',
        name: 'MyAccountView',
        component: MyAccountView,
        meta: {
            requiredLogin: true
        }
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to,from,next) => {
    // trigger when requiredlogin is true
    if (to.matched.some(record => record.meta.requiredLogin) && !store.state.isAuthenticated) {
        next({ name: 'LogIn', query: { to: to.path }});
    } else {
        next()
    }
})

export default router
