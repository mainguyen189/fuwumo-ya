import { createStore } from "vuex";

export default createStore({
    state: {
        cart: {
            items: [],
        },
        isAuthenticated: false,
        token: '',
        isLoading: false,
    },
    mutations: {
        initializeStore(state) {
            // check if cart exist first else create cart
            if (localStorage.getItem('cart')) {
                state.cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },

        addToCart(state, item) {
            const itemExist = state.cart.items.filter(it => it.product.id == item.product.id)

            if (itemExist.length) {
                itemExist[0].quantity = parseInt(itemExist[0].quantity) + parseInt(item.quantity)
            } else {
                state.cart.items.push(item)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    actions: {

    },
    modules: {

    }
})