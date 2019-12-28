<template lang="pug">
  v-toolbar
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn(flat='') {{ username }}
      v-btn(flat='' v-if="isLoggedIn" @click="logout") Logout
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState('auth', ['username']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>
