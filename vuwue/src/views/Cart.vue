<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Cart</h1>
            </div>

            <div class="column is-12 box">
                <!-- show cart if there is product in cart -->
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem v-for="item in cart.items" v-bind:key="item.product.id" v-bind:initialItem="item" v-on:removeFromCart="removeFromCart"/>
                    </tbody>
                </table>

                <p v-else>You have no fumo in your cart UnU </p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>
                <strong>Mon {{ cartTotalPrice }}</strong>, {{ cartTotalLength }} fumo's 
                <hr>
                <!-- Todo: make cart checkout page -->
                <router-link to="/cart/checkout" class="button is-dark">Go to checkout</router-link>

            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
    name: 'CartView',
    components: {
        CartItem
    },

    data() {
        return {
            cart: {
                items: []
            }
        }
    },

    mounted() {
        this.cart = this.$store.state.cart
    },

    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(it => it.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, currentValue) => {
                return acc += currentValue.quantity
            }, 0)
        },

        cartTotalPrice() {
            return this.cart.items.reduce((acc, currentValue) => {
                return acc += currentValue.product.price * currentValue.quantity
            }, 0)
        },
    }

}


</script>