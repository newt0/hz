<template>
  <FavoriteList />
</template>

<script>
import { mapGetters } from 'vuex'
import FavoriteList from '@/components/FavoriteList.vue'

export default {
  components: {
    FavoriteList
  },
  computed: {
    ...mapGetters(['auth/isAuthenticated', 'auth/isLoggedIn'])
  },
  mounted() {
    // if (!this.isAuthenticated) {
    //   this.$router.push('/')
    // }
  }
}
</script>
