<template lang="pug">
  v-layout(row wrap)
    v-flex(sm12)
      h1 Checkout

    v-layout(v-if="isLoggedIn" row wrap mt-4)
      v-flex(sm12 text-xs-center)
        h3 Your purchase summary:
        v-divider

      v-flex(sm12 mt-4)
        div Products:
        v-data-table(
          :headers="headers"
          :items="purchasedProducts"
          class="elevation-1"
          hide-actions
        )
          template(slot="items" slot-scope="props")
            td {{ props.item.title }}
            td.text-xs-left {{ props.item.description }}
            td.text-xs-left
              img.product-image(:src="require(`@/assets/${props.item.fileName}.jpg`)")

      v-flex(sm12 mt-5)
        div Credit card:
        v-divider
        v-layout(row wrap mt-3)
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
import { Getters, Mutations, IProduct } from '@/store';

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
  private purchasedProducts!: IProduct[];
  private headers = [
    { text: 'Title', sortable: false },
    { text: 'Description', sortable: false },
    { text: 'Image', sortable: false },
  ];

  private get purchaseSuccessful() {
    return this[Getters.currentCard] !== -1 && this[Getters.selectedProducts].length > 0;
  }

  private get usedCard() {
    const index = this[Getters.currentCard];
    return this[Getters.creditCards][index];
  }

  private created() {
    const selected = this[Getters.selectedProducts] as number[];
    this.purchasedProducts = (this[Getters.products] as IProduct[])
      .filter(p => selected.indexOf(p.id) !== -1);
  }

  private mounted() {
    this[Mutations.RESET_SELECTED_PRODUCTS]();
  }
}
</script>

<style scoped lang="scss">
.product-image {
  width: 50px;
  height: 50px;
}
</style>
