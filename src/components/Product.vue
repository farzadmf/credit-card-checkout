<template lang="pug">
  v-card(raised hover height="100%" @click.native="handleClick(product.id)")
    v-icon(:color="getCartIconColor(product.id)") shopping_cart
    v-card-media(:src="require(`@/assets/${product.fileName}.jpg`)" height="200px")
    v-card-title.title(primary-title) {{ product.title }}
    v-card-text {{ product.description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IProduct } from '@/store';
import { mapActions, mapGetters } from 'vuex';
import { Mutations, Getters } from '@/store';

@Component({
  computed: mapGetters([Getters.selectedProducts]),
  methods: mapActions([Mutations.ADD_TO_CART, Mutations.REMOVE_FROM_CART]),
})
export default class AppProduct extends Vue {
  private selectedProducts!: number[];
  @Prop() private product!: IProduct;

  private handleClick(productId: number) {
    // tslint:disable-next-line:no-console
    console.warn('HELLO', productId);
  }

  private getCartIconColor(productId: number) {
    if (this.selectedProducts.indexOf(productId) === -1) {
      return '';
    } else {
      return 'green';
    }
  }
}
</script>
