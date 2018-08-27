<template lang="pug">
  v-container(text-xs-center)
    v-flex(xs12 v-if="!isLoggedIn")
      h1 Credit Card Checkout App
      h3 Click 'LOGIN' to Continue ...
    v-flex(xs12 v-else)
      h1 Welcome!
      h3 Go to 'Products' to Purchase ...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getters } from '@/store';

@Component({
  computed: mapGetters([Getters.isLoggedIn]),
})
export default class AppHome extends Vue {}
</script>
