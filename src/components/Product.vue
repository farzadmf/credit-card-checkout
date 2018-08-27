<template lang="pug">
  v-card(
    @click.native="handleClick(product.id)"
    :dark="isSelected(product.id) ? true : false"
    height="100%"
    hover
    raised
  )
    v-layout(row)
      v-flex(xs12 text-xs-center)
        v-icon(:color="isSelected(product.id) ? 'green' : ''") shopping_cart
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
    if (this.selectedProducts.indexOf(productId) === -1) {
      this[Mutations.ADD_TO_CART](productId);
    } else {
      this[Mutations.REMOVE_FROM_CART](productId);
    }
  }

  private isSelected(productId: number) {
    return this.selectedProducts.indexOf(productId) !== -1;
  }
}
</script>
