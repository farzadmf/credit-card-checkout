<template lang="pug">
  v-layout
    v-flex(xs12 text-xs-center v-if="!isLoggedIn")
      h1 Credit Card Checkout App
      h3 Click 'LOG IN' to Continue ...
    v-flex(xs12 text-xs-center v-else)
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
export default class AppHomeComponent extends Vue {}
</script>
