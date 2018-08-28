<template lang="pug">
  v-card
    v-card-title.headline New Credit Card
    v-card-text
      v-form(ref="form" v-model="valid")
        v-layout(row wrap)
          v-flex(sm12)
            v-text-field(
              :rules="cardNumberRules"
              label="Card Number"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              required
              v-model="number"
            )

          v-flex(sm12)
            v-text-field(
              :rules="nameRules"
              label="Name on Card"
              required
              v-model="name"
            )

          v-flex(sm12)
            v-select(
              :items="['Visa', 'MasterCard']"
              :rules="cardTypeRules"
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
                :rules="dateRules"
                label="Expiry Date"
                placeholder="MM/YY"
                prepend-icon="event"
                readonly
                required
                slot="activator"
                v-model="formattedDate"
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
import { ICreditCard } from '@/store';

@Component
export default class AppCreditCardForm extends Vue {
  public $refs!: { form: HTMLFormElement };

  private date = null;
  private formattedDate = '';
  private menu = false;
  private name = '';
  private number = '';
  private type = '';
  private valid = false;

  private cardNumberRules = [
    (v: string) => !!v || 'Card number is required',
    (v: string) => (!!v && /\d{4}-\d{4}-\d{4}-\d{4}/.test(v)) || 'Number format should be xxxx-xxxx-xxxx-xxxx',
  ];

  private cardTypeRules = [
    (v: string) => !!v || 'Please specify the card type',
  ];

  private dateRules = [
    (v: string) => !!v || 'Please specify the expiry date',
  ];

  private nameRules = [
    (v: string) => !!v || 'Name is required',
    (v: string) => (!!v && v.length <= 20) || 'Name length should be at most 20 characters',
  ];

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
    if (!this.$refs.form.validate()) {
      return;
    }

    const card = {
      name: this.name,
      number: this.number,
      expiryDate: this.date,
      type: this.type,
    };

    this.$emit('submit', card);
  }

  @Watch('date')
  private onDateChanged(value: string) {
    const [year, month] = value.split('-');
    this.formattedDate = `${month}/${year.substring(2, 4)}`;
  }
}
</script>
