<template lang="pug">
  v-layout(row wrap)
    v-flex(v-for="(p, i) in getProducts()" :key="i" xs6 pa-2)
      app-product(:product="p")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import AppProduct from '@/components/Product.vue';

@Component({
  components: {
    AppProduct,
  },
  methods: mapGetters(['getProducts']),
})
export default class AppProductList extends Vue {}
</script>
