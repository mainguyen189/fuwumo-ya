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

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <router-link to="/scarlet" class="navbar-item">Scarlet Mansion</router-link>
          <router-link to="/eientei" class="navbar-item">Eientei</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log In</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Made in Gensokyo</p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMobileMenu: false,

      }
    }
  }
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
