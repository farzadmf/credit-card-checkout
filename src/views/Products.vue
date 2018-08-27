<template lang="pug">
  app-product-list
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import AppProductList from '@/components/ProductList.vue';
import { Getters } from '@/store';

@Component({
  components: {
    AppProductList,
  },
  computed: mapGetters([Getters.isLoggedIn]),
})
export default class AppProducts extends Vue {}
</script>
