<template lang="pug">
  v-toolbar(dark color="primary")
    v-toolbar-title Credit Card Checkout
    v-spacer
    v-btn(@click.prevent="handleLogin" flat) {{ isLoggedIn ? 'Log Out' : 'Log in' }}
    router-link(to="/products")
      v-btn(flat v-if="isLoggedIn") Products
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['logIn', 'logOut']),
})
export default class AppToolbar extends Vue {
  handleLogin() {
    if (this.isLoggedIn) {
      this.logOut();
      this.$router.push('/');
    } else {
      this.$router.push('/login');
    }
  }
}
</script>
