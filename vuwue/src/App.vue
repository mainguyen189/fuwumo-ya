<template>
  <div id="wrapper">
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>FUWUMO YA</strong></router-link>
        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu" 
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- search bar -->
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="Whose fumo are you looking for?" name="query">
                </div>

                <div class="control">
                  <button class="button is-success">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        
        <div class="navbar-end">
          <router-link to="/scarlet" class="navbar-item">Scarlet Mansion</router-link>
          <router-link to="/eientei" class="navbar-item">Eientei</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log In</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{  cartTotalLength }})</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Made in Gensokyo</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        showMobileMenu: false,
        cart: {
          items: []
        }
      }
    },
    beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      // check if user is authenticated
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token" + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
    mounted() {
      this.cart = this.$store.state.cart
    },

    computed: {
      cartTotalLength() {
        let totalLength = 0
        for (let i = 0; i< this.cart.items.length; i++) {
          totalLength += this.cart.items[i].quantity
        }

        return totalLength
      }
    }
  }
</script>

<style lang="scss">
@import "../node_modules/bulma";

.lds-dual-ring {
  display: inline-block;
  width: auto;
  height: auto;
}

.lds-dual-ring:after {
  content: "";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid azure;
  border-color: azure transparent azure transparent;
  animation: lds-dual-ring 1.5s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: auto;
  overflow: hidden;

  -webkit-animation: all 0.5s;
  transition: all 0.5s;

  &.is-loading {
    height: 80px;
  }
}
</style>
