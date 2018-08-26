<template lang="pug">
  v-container
    v-layout(row)
      v-flex(xs12)
        v-form(v-model="valid" lazy-validation ref="form")
          v-text-field(
            :rules="emailRules"
            label="Email"
            required
            v-model="email"
          )

          v-text-field(
            :rules="passwordRules"
            :type="'password'"
            label="Password"
            required
            v-model="password"
          )

    v-layout(row)
      v-flex(text-xs-center)
        v-btn(color="primary" :disabled="!valid" @click.prevent="submit") Submit
        v-btn(color="secondary" @click="clear") Clear
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppLogin extends Vue {
  private valid = false;
  private email = '';
  private password = '';

  private passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => (!!v && v.length >= 6) || 'Password must be at least 6 characters long',
    (v: string) => (!!v && v!.length <= 15) || 'Password must be at most 15 characters long',
  ];

  private emailRules = [
    (v: string) => !!v || 'E-mail is required',
    (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
  ];

  private clear() {
    this.$refs.form.reset();
  }

  private submit() {
    if (!this.$refs.form.validate()) {
      // tslint:disable-next-line:no-console
      console.warn('FORM IS NOT VALID');
    } else {
      // tslint:disable-next-line:no-console
      console.warn('SUBMIT THE FORM');
    }
  }
}
</script>
