<template lang="pug">
  v-container
    v-layout(row pa-2)
      h1 Product List
    app-product-list
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppProductList from '@/components/ProductList.vue';

@Component({
  components: {
    AppProductList,
  },
})
export default class AppProducts extends Vue {}
</script>
