<template lang="pug">
  v-flex(xs12 text-xs-center)
    v-carousel(:cycle="false" dark hide-delimiters)
      v-carousel-item
        div Hello1
      v-carousel-item
        div Hello2
      v-carousel-item
        div Hello3
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppCreditCardList extends Vue {}
</script>

<style scoped lang="scss">
$width: 500px;

.v-carousel {
  height: $width / 1.67;
  width: $width;
  margin: 0 auto;
}
</style>
