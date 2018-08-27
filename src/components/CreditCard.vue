<template lang="pug">
  v-carousel-item(:src="require(`@/assets/${card.type}.png`)")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ICreditCard } from '@/store';

@Component
export default class AppCreditCard extends Vue {
  @Prop() private card!: ICreditCard;
}
</script>
