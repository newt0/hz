<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Login</span>
      </v-card-title>

      <v-window>
        <v-window-item>
          <FirebaseAuth />
          <v-card-text>
            <p class="caption grey--text text--darken-1 text-center">
              ※ ログインにはGoogleアカウントが必要です。
            </p>
          </v-card-text>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script>
import FirebaseAuth from '@/components/FirebaseAuth'

export default {
  name: 'Login',
  components: {
    FirebaseAuth
  }
}
</script>

<style>
</style>
