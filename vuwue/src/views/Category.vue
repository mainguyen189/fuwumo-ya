<template> 
    <div class="page-category">
        <div class="column is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
            </div>
        </div>

        <ProductBox v-for="product in category.products" v-bind:key="product.id" v-bind:product="product" />
        
    </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'bulma-toast';
import ProductBox from '@/components/ProductBox.vue';

export default {
    name: 'CategoryView',
    components: {
        ProductBox
    },
    data() {
        return {
            category: {
                products: []
            }
        }
    },

    mounted() {
        this.getCategory()
    },
    watch: {
        $route(to) {
            if(to.name === 'Category') {
                this.getCategory()
            }
        }
    },
    method: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug

            this.$store.commit('settingIsLoading', true)
            axios
                .get(`/api/v1/products/${categorySlug}/`)
                .then(response => {
                    this.category = response.data
                    document.title = this.category.name + '- fumo'
                })
                .catch(error => {
                    console.log(error)

                    toast({
                        message: 'Something went wrong :( Try again',
                        type: 'is-danger',
                        dismissible: true,
                        pauseOnHover: true,
                        duration: 3600,
                        position: 'bottom-center'
                    })
                })
            this.$store.commit('setIsLoading', false)
        }
    }
}
</script>