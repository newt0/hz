<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              ようこそ {{ userDisplayName }} さん
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="light-green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Hz Healing Music</v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    drawer: null,
    userName: 'ゲスト'
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['isLoggedIn']),
    userDisplayName() {
      return this.user ? this.user.displayName : this.userName
    }
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>
