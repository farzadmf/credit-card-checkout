<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 Your Shopping Cart

    v-layout(v-if="isLoggedIn" row wrap)
      v-flex(xs12)
        p You have selected {{ selectedProducts.length }} products to purchase.
        p You can use one of the existing credit cards:

      v-flex(xs12)
        app-credit-card-list

      v-flex(xs12 mt-3)
        p Or, click the button below to add a new credit card:

      v-flex(xs12 text-xs-center)
        v-btn(large color="primary" @click.stop="dialog = true") Add Credit Card

      v-dialog(v-model="dialog" full-width)
        app-credit-card-form(@close="handleClose")

    v-layout(v-else)
      v-flex(xs12)
        p You must log in to be able to see the cart
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getters } from '@/store';
import AppCreditCardForm from '@/components/CreditCardForm.vue';
import AppCreditCardList from '@/components/CreditCardList.vue';

@Component({
  components: {
    AppCreditCardForm,
    AppCreditCardList,
  },
  computed: mapGetters([Getters.selectedProducts, Getters.isLoggedIn]),
})
export default class AppShoppingCart extends Vue {
  private dialog = false;

  private handleClose() {
    this.dialog = false;
  }
}
</script>

