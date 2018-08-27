<template lang="pug">
  v-toolbar(dark color="primary" fixed)
    router-link(to="/")
      v-btn.title(flat) Credit Card Checkout App
    v-spacer
    router-link(to="/cart" v-if="isLoggedIn")
      v-badge(left :color="cartColor")
        span(slot="badge") {{ selectedProducts.length }}
        v-icon(medium :color="cartColor") shopping_cart
    v-btn(@click.prevent="handleLogin" flat) {{ isLoggedIn ? 'Log Out' : 'Log in' }}
    router-link(to="/products" v-if="isLoggedIn")
      v-btn(flat) Products
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import { Mutations, Getters } from '@/store';

@Component({
  computed: {
    ...mapGetters([Getters.isLoggedIn, Getters.selectedProducts]),
    cartColor() {
      return this.selectedProducts.length > 0 ? 'orange' : '';
    },
  },
  methods: mapActions([Mutations.LOG_IN, Mutations.LOG_OUT]),
})
export default class AppToolbar extends Vue {
  handleLogin() {
    if (this.isLoggedIn) {
      this[Mutations.LOG_OUT]();
      this.$router.push('/');
    } else {
      this.$router.push('/login');
    }
  }
}
</script>
