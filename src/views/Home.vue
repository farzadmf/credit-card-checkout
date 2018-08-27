<template lang="pug">
  app-home-component
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHomeComponent from '@/components/HomeComponent.vue';

@Component({
  components: {
    AppHomeComponent,
  },
})
export default class AppHome extends Vue {}
</script>
