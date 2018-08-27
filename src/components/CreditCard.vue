<template lang="pug">
  v-carousel-item(:src="require(`@/assets/${card.type}.png`)")
    div#card-number {{ card.number }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ICreditCard } from '@/store';

@Component
export default class AppCreditCard extends Vue {
  @Prop() private card!: ICreditCard;
}
</script>

<style scoped lang="scss">
#card-number {
  color: white;
  font-family: 'PT Mono', 'Courier New', Courier, monospace;
  font-size: 29px;
  left: 50px;
  letter-spacing: 4px;
  position: absolute;
  text-shadow: 3px 3px black;
  top: 142px;
  font-weight: bold;
}
</style>
