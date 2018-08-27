<template lang="pug">
  v-toolbar(dark color="primary")
    router-link(to="/")
      v-btn.title(flat) Credit Card Checkout App
    v-spacer
    v-btn(@click.prevent="handleLogin" flat) {{ isLoggedIn ? 'Log Out' : 'Log in' }}
    router-link(to="/products")
      v-btn(flat v-if="isLoggedIn") Products
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import { Mutations, Getters } from '@/store';

@Component({
  computed: mapGetters([Getters.isLoggedIn]),
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
