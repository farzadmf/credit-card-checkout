<template lang="pug">
  v-card
    v-card-title.headline New Credit Card
    v-card-text
      v-form
        v-layout(row wrap)
          v-flex(sm12)
            v-text-field(
              label="Card Number"
              required
            )

          v-flex(sm12)
            v-text-field(
              label="Name on Card"
              required
            )

          v-flex(sm12)
            v-select(
              :items="['Visa', 'MasterCard']"
              label="Card Type"
              v-model="type"
            )

          v-flex(sm12)
            v-menu(
              full-width
              max-width="290px"
              min-width="290px"
              transition="scale-transition"
              v-model="menu"
            )

              v-text-field(
                slot="activator"
                v-model="formattedDate"
                label="Expiry Date"
                prepend-icon="event"
                readonly
                required
              )

              v-date-picker(
                @input="menu = false"
                no-title
                scrollable
                type="month"
                v-model="date"
              )

    v-card-actions
      v-flex(sm12 text-xs-center)
        v-btn(flat color="primary" @click.stop="submit") OK
        v-btn(flat color="secondary" @click.stop="cancel") Cancel
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class AppCreditCardForm extends Vue {
  private date = null;
  private formattedDate = '';
  private name = '';
  private number = '';
  private type = '';
  private menu = false;

  private resetValues() {
    this.name = '';
    this.number = '';
    this.type = '';
    this.date = null;
  }

  private cancel() {
    this.$emit('cancel');
  }

  private submit() {
    this.$emit('submit', {
      value: 'HELLO',
    });
  }

  @Watch('date')
  private onDateChanged(value: string) {
    const [year, month] = value.split('-');
    this.formattedDate = `${month}/${year.substring(2, 4)}`;
  }
}
</script>
