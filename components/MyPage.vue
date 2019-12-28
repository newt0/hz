<template lang="pug">
  <div v-if="loaded">
    <slot />
  </div>
</template>

<script>
import mapGetters from 'vuex'

export default {
  name: 'MyPage',
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  mounted() {
    if (!this.isAuthenticated) {
      // ログインしていなかったら飛ぶページを設定
      this.$router.push('account')
    }
  }
}
</script>
