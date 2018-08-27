<template lang="pug">
  v-container(mt-5)
    v-layout(fill-height column)
      v-flex(xs2)
        h1 Your Shopping Cart
      v-flex(xs4)
        p.
          You have selected {{ selectedProducts.length }} products to purchase. Click
          the 'Add' button below to add a new credit cart.
      v-flex(xs2 text-xs-center)
        v-btn(large color="primary" @click.stop="dialog = true") Add Credit Card

      v-dialog(v-model="dialog" full-width)
        app-credit-card-form(@close="handleClose")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getters } from '@/store';
import AppCreditCardForm from '@/components/CreditCardForm.vue';

@Component({
  components: {
    AppCreditCardForm,
  },
  computed: mapGetters([Getters.selectedProducts]),
})
export default class AppCart extends Vue {
  private dialog = false;

  private handleClose() {
    this.dialog = false;
  }
}
</script>
