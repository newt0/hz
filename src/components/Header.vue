<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> ようこそ {{ userDisplayName() }} さん </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLoggedIn()" link to="mypage">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLoggedIn()" link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else link to="/login">
          <v-list-item-action>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary lighten-1 white--text">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>hz - Solfeggio Harmonics Music</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { appAuthStore, userStore } from '@/store'

@Component
export default class Header extends Vue {
  drawer: Object | null = null
  userName: string = 'ゲスト'

  private userDisplayName() {
    return appAuthStore.isAuthenticated ? userStore.getUserDisplayName : this.userName
  }

  private isLoggedIn() {
    return appAuthStore.isAuthenticated
  }

  private async logout() {
    await appAuthStore.logout()
    this.moveToIndexPage()
  }

  private moveToIndexPage() {
    this.$router.push('/')
  }
}
</script>
