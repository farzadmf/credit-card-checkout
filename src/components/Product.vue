<template lang="pug">
  v-card(height="400px" raised hover)
    v-card-media(:src="require(`@/assets/${product.fileName}.jpg`)" height="200px")
    v-card-title.title(primary-title) {{ product.title }}
    v-card-text {{ product.description }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IProduct } from '@/store';

@Component
export default class AppProduct extends Vue {
  @Prop() private product!: IProduct;
}
</script>
