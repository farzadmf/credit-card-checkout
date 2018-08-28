<template lang="pug">
  v-flex(xs12 text-xs-center)
    v-carousel(:cycle="false")
      app-credit-card(v-for="(c, i) in creditCards" :key="i" :card="c")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCreditCard from '@/components/CreditCard.vue';
import { mapGetters } from 'vuex';
import { Getters } from '@/store';

@Component({
  components: {
    AppCreditCard,
  },
  computed: mapGetters([Getters.creditCards]),
})
export default class AppCreditCardList extends Vue {}
</script>

<style scoped lang="scss">
$width: 400px;

.v-carousel {
  height: $width / 1.67;
  width: $width;
  margin: 0 auto;
}

.v-carousel__controls {
  height: 25px;
}

.v-carousel__prev {
  left: -10px;
}

.v-carousel__next {
  right: -10px;
}
</style>
