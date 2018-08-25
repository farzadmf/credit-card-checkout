<template lang="pug">
  v-toolbar(dark color="primary")
    v-toolbar-title Credit Card Checkout
    v-spacer
    //- navigation-button(:to="isLoggedIn ? '/' : '/login'" :text="isLoggedIn ? 'Log out' : 'Login'")
    v-btn(@click.prevent="handleLogin" flat) {{ isLoggedIn ? 'Log Out' : 'Log in' }}
    navigation-button(to="/products" text="Products" v-if="isLoggedIn")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import NavigationButton from './NavigationButton.vue';
import { mapGetters, mapActions } from 'vuex';

@Component({
  components: {
    NavigationButton,
  },
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
