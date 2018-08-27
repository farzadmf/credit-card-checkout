<template lang="pug">
  v-card
    v-card-title.headline New Credit Card
    v-card-text
      v-form
        v-layout(row wrap)
          v-flex(sm6 pr-2)
            v-text-field(
              label="Name"
              required
            )
          v-flex(sm6 pl-2)
            v-text-field(
              label="Email"
              required
            )
    v-card-actions
      v-flex(xs-12 text-xs-center)
        v-btn(block color="green" @click="close") Close
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppCreditCardForm extends Vue {
  private close() {
    this.$emit('close');
  }
}
</script>
