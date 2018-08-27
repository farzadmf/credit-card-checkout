<template lang="pug">
  v-layout(row wrap)
    v-flex(xs12 pa-2)
      h1 Product List
    v-flex(v-if="!isLoggedIn" pa-2)
      p Please login to be able to purchase products
    v-flex(v-else v-for="(p, i) in products" :key="i" xs6 pa-2)
      app-product(:product="p")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import AppProduct from '@/components/Product.vue';
import { Getters } from '@/store';

@Component({
  components: {
    AppProduct,
  },
  computed: mapGetters([Getters.products, Getters.isLoggedIn]),
})
export default class AppProductList extends Vue {}
</script>
