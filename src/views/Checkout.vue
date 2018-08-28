<template lang="pug">
  v-container
    app-checkout-component
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCheckoutComponent from '@/components/CheckoutComponent.vue';


@Component({
  components: {
    AppCheckoutComponent,
  },
})
export default class AppCheckout extends Vue {}
</script>
