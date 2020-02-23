<template>
  <v-overlay :value="loading" class="loading-overlay">
    <p>読み込み中...</p>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Loading extends Vue {
  protected loading: boolean = false

  public start() {
    this.loading = true
  }

  public finish() {
    this.loading = false
  }
}
</script>

<style scoped>
.loading-overlay {
  z-index: 10 !important;
}
</style>
