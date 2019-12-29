<template>
  <v-footer color="light-green" app>
    <span class="white--text">&copy; 2019</span>
  </v-footer>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Footer',
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>
