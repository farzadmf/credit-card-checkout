<template lang="pug">
  v-container(mt-5)
    app-login-form
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppLoginForm from '@/components/LoginForm.vue';

@Component({
  components: {
    AppLoginForm,
  },
})
export default class AppLogin extends Vue {}
</script>
