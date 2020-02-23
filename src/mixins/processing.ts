import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Processing extends Vue {
  processing = false

  startProcessing() {
    this.processing = true
  }

  endProcessing() {
    this.processing = false
  }

  isProcessing() {
    return this.processing
  }

  startLoading() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  }

  endLoading() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish()
    })
  }
}
