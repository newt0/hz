<template lang="pug">
  #firebaseui-auth-container
</template>

<script>
import * as firebaseui from 'firebaseui'
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)
        const config = {
          signInOptions: [authProviders.Google],
          callbacks: {
            // Nuxtのローカルサーバーで起こるCORSエラーのためこのように設定
            // 本番環境では不要
            signInSuccessWithAuthResult: (authResult) => {
              window.location.href = '/'
              return false // false を設定すると signInSuccessUrl にはリダイレクトしない
            }
          },
          signInSuccessUrl: '/',
          signInFlow: 'popup' // ログインフロー設定: Nuxt のローカルサーバーで起こる CORS エラーがあるので popup 推奨
        }

        ui.start('#firebaseui-auth-container', config)
      }
    })
  }
}
</script>
