<template lang="pug">
  v-container()
    v-layout(row pa-2)
      h1 Product List
    app-product-list(v-if="isLoggedIn")
    v-layout(pa-2 v-else)
      p Please login to be able to purchase products
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import AppProductList from '@/components/ProductList.vue';

@Component({
  components: {
    AppProductList,
  },
  computed: mapGetters(['isLoggedIn']),
})
export default class AppProducts extends Vue {}
</script>
