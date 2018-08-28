<template lang="pug">
  v-carousel-item(:src="require(`@/assets/${card.type}.png`)")
    div(:class="cardNumberClass") {{ card.number }}
    div(:class="cardDateClass") {{ card.expiryDate }}
    div(:class="cardNameClass") {{ card.name }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ICreditCard } from '@/store';

@Component
export default class AppCreditCard extends Vue {
  @Prop() private card!: ICreditCard;

  private get cardNumberClass() {
    return `card-number-${this.getClassColor()}`;
  }

  private get cardDateClass() {
    return `card-date-${this.getClassColor()}`;
  }

  private get cardNameClass() {
    return `card-name-${this.getClassColor()}`;
  }

  private getClassColor() {
    return this.card.type === 'Visa' ? 'black' : 'white';
  }
}
</script>

<style scoped lang="scss">
$text-shadow-size: 2px;

.card-details {
  position: absolute;
}

.white {
  color: white;
  text-shadow: $text-shadow-size $text-shadow-size black;
}

.black {
  color: black;
  text-shadow: $text-shadow-size $text-shadow-size gray;
}

.card-number {
  @extend .card-details;
  font-family: 'PT Mono', 'Courier New', Courier, monospace;
  font-size: 29px;
  left: 50px;
  letter-spacing: 4px;
  top: 142px;
  font-weight: bold;
}

.card-number-white {
  @extend .card-number;
  @extend .white;
}

.card-number-black {
  @extend .card-number;
  @extend .black;
}

.card-date {
  @extend .card-details;
  top: 200px;
  left: 285px;
  font-size: 25px;
  font-weight: bold;
}

.card-date-black {
  @extend .card-date;
  @extend .black;
}

.card-date-white {
  @extend .card-date;
  @extend .white;
}

.card-name {
  @extend .card-details;
  font-size: 35px;
  font-style: italic;
  top: 240px;
  left: 50px;
}

.card-name-black {
  @extend .card-name;
  @extend .black;
}

.card-name-white {
  @extend .card-name;
  @extend .white;
}

</style>
