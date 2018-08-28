<template lang="pug">
  v-flex(xs12 text-xs-center)
    v-carousel(:cycle="false" v-model="currentCard")
      app-credit-card(v-for="(c, i) in creditCards" :key="i" :card="c")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppCreditCard from '@/components/CreditCard.vue';
import { mapActions, mapGetters } from 'vuex';
import { Getters, Mutations } from '@/store';

@Component({
  components: {
    AppCreditCard,
  },
  computed: mapGetters([Getters.creditCards]),
  methods: mapActions([Mutations.SET_CURRENT_CARD]),
})
export default class AppCreditCardList extends Vue {
  [key: string]: any;
  private currentCard = 0;

  private mounted() {
    this[Mutations.SET_CURRENT_CARD](0);
  }

  @Watch('currentCard')
  private onCurrentCardChanged(value: number) {
    this[Mutations.SET_CURRENT_CARD](value);
  }
}
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
