<template lang="pug">
  v-container(text-xs-center)
    h1 Welcome to Credit Card Checkout App
    p(v-if="!isLoggedIn") Clock 'LOGIN' to Continue ...
    p(v-else) Go to 'Products' to Purchase ...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['isLoggedIn']),
})
export default class AppHome extends Vue {}
</script>
