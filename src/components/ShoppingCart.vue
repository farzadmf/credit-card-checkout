<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12)
      h1 Your Shopping Cart

    v-layout(v-if="isLoggedIn" row wrap)
      v-flex(xs12 mt-3)
        p You have selected {{ selectedProducts.length }} products to purchase.

      v-layout(row wrap v-if="selectedProducts.length > 0")
        v-flex(xs12 mt-3)
          p.
            Select a credit card to be used for payment (You can also click the <b>ADD CREDIT CARD</b>
            button to add a new card.)

        v-flex(xs12 text-xs-center)
          v-btn(large color="primary" @click.stop="dialog = true") Add Credit Card

        v-flex(xs12)
          app-credit-card-list

        v-flex(xs12 mt-5)
          v-btn(block color="secondary" @click="completePurchase") Complete Purchase

        v-dialog(v-model="dialog" max-width="400px" persistent)
          app-credit-card-form(@cancel="closeDialog" @submit="handleSubmit")

    v-layout(v-else)
      v-flex(xs12 mt-3)
        p You must log in to be able to see the cart
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { Getters, Mutations, ICreditCard } from '@/store';
import AppCreditCardForm from '@/components/CreditCardForm.vue';
import AppCreditCardList from '@/components/CreditCardList.vue';

@Component({
  components: {
    AppCreditCardForm,
    AppCreditCardList,
  },
  computed: mapGetters([Getters.selectedProducts, Getters.isLoggedIn]),
  methods: mapActions([Mutations.ADD_CREDIT_CARD, Mutations.RESET_SELECTED_PRODUCTS]),
})
export default class AppShoppingCart extends Vue {
  [key: string]: any;
  private dialog = false;

  private closeDialog() {
    this.dialog = false;
  }

  private handleSubmit({ value }: any) {
    this.closeDialog();

    const card: ICreditCard = {
      expiryDate: '08/20',
      name: 'FARZAD',
      number: '3333-3333-4444-5555',
      type: 'Visa',
    };

    this[Mutations.ADD_CREDIT_CARD](card);
  }

  private completePurchase() {
    this[Mutations.RESET_SELECTED_PRODUCTS]();
    this.$router.push('/checkout');
  }
}
</script>

