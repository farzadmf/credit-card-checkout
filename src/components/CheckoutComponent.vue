<template lang="pug">
  v-layout(row wrap)
    v-flex(sm12)
      h1 Checkout

    v-flex(sm12 mt-3)
    v-layout(v-if="isLoggedIn" row wrap)
      v-flex(sm12)
        h3 Your purchase summary:
        v-divider

      v-flex(sm12 mt-3)
        p Products:
          ul
            li(v-for="(n, i) in purchasedProducts" :key="i") <b>{{ products[n].title }}</b>

      v-flex(sm12)
        v-divider

      v-flex(sm12 mt-3)
        p Credit card:
        v-layout(row wrap)
          v-flex(xs3)
            p Number:
          v-flex(xs9)
            p <b>{{ usedCard.number }}</b>
          v-flex(xs3)
            p Name:
          v-flex(xs9)
            p <b>{{ usedCard.name }}</b>
          v-flex(xs3)
            p Expiry Date:
          v-flex(xs9)
            p <b>{{ usedCard.expiryDate }}</b>
          v-flex(xs3)
            p Type:
          v-flex(xs9)
            p <b>{{ usedCard.type }}</b>

    div(v-else)
      p You must log in to be able to purchase
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { Getters, Mutations } from '@/store';

@Component({
  computed: mapGetters([
    Getters.creditCards,
    Getters.currentCard,
    Getters.isLoggedIn,
    Getters.products,
    Getters.selectedProducts,
    Getters.currentCard,
  ]),
  methods: mapActions([Mutations.RESET_SELECTED_PRODUCTS]),
})
export default class AppCheckoutComponent extends Vue {
  [key: string]: any;
  private purchasedProducts!: number[];

  private get purchaseSuccessful() {
    return this[Getters.currentCard] !== -1 && this[Getters.selectedProducts].length > 0;
  }

  private get usedCard() {
    const index = this[Getters.currentCard];
    return this[Getters.creditCards][index];
  }

  private created() {
    this.purchasedProducts = this[Getters.selectedProducts];
  }

  private mounted() {
    this[Mutations.RESET_SELECTED_PRODUCTS]();
  }
}
</script>
