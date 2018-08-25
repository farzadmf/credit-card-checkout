<template lang="pug">
  v-app
    app-toolbar
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppToolbar from '@/components/toolbar/Toolbar.vue';

@Component({
  components: {
    AppToolbar,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
</style>
