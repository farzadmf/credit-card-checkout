<template lang="pug">
  v-app
    app-toolbar
    v-container(mt-5)
      transition(enter-active-class="animated slideInUp faster")
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppToolbar from '@/components/Toolbar.vue';

@Component({
  components: {
    AppToolbar,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '~animate.css/animate.css';

</style>
