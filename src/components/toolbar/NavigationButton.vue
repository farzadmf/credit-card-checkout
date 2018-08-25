<template lang="pug">
  router-link(:to="to")
    v-btn(flat) {{ text }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationButton extends Vue {
  @Prop() private text!: string;
  @Prop() private to!: string;
}
</script>
