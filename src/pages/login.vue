<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>Login</span>
      </v-card-title>

      <v-window>
        <v-window-item>
          <div id="firebaseui-auth-container"></div>
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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as firebaseui from 'firebaseui'
import firebase, { authProviders } from '~/plugins/firebase'
import { appAuthStore, userStore } from '@/store'

@Component
export default class Login extends Vue {
  mounted() {
    const auth = firebase.auth()
    // TODO: 引数 user がログアウトしていても null にならない
    auth.onAuthStateChanged(_ => {
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
      const config = {
        signInOptions: [authProviders.Google],
        callbacks: {
          // Nuxtのローカルサーバーで起こる
          // CORSエラーのためこのように設定
          // 本番環境では不要
          signInSuccessWithAuthResult: (authResult: firebase.auth.UserCredential) => {
            if (!authResult.operationType || !authResult.user) {
              return false
            }
            appAuthStore.createLoginStatus(authResult.operationType)
            userStore.createUser(authResult.user)

            this.moveToIndexPage()

            // false を設定すると signInSuccessUrl にはリダイレクトしない
            return false
          },
        },
        // ログインフロー設定:
        // Nuxt のローカルサーバーで起こる CORS エラーがあるので popup 推奨
        signInFlow: 'popup',
      }
      ui.start('#firebaseui-auth-container', config)
    })
  }

  private moveToIndexPage() {
    this.$router.push('/')
  }
}
</script>
