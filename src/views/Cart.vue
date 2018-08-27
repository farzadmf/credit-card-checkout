<template lang="pug">
  app-shopping-cart
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppShoppingCart from '@/components/ShoppingCart.vue';

@Component({
  components: {
    AppShoppingCart,
  },
})
export default class AppCart extends Vue {}
</script>
