<template lang="pug">
  v-layout(row wrap)
    v-flex(sm12)
      h1 Checkout

    v-flex(sm12 mt-3)
    div(v-if="isLoggedIn")
      p Congratulation! You purchased products ...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getters } from '@/store';

@Component({
  computed: mapGetters([Getters.isLoggedIn]),
})
export default class AppCheckoutComponent extends Vue {}
</script>
