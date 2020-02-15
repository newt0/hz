<template>
  <v-footer dark padless>
    <v-card flat tile class="light-green lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        ソルフェジオ周波数とは、レオナルド・G・ホロウィッツが著書の中で提唱した、 396Hz、417Hz、528Hz、639Hz、741Hz、852Hz の 6
        種類から構成される音階のことです。現在では、周波数の差が 111という計算から導かれた、174Hz、285Hz、936Hz を加えた 9 種類を、
        ソルフェジオ周波数と呼ぶことが主流となっています。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text"> {{ currentYear() }} — <strong>hz</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { appAuthStore } from '@/store'

@Component
export default class Footer extends Vue {
  icons: Array<string> = ['mdi mdi-facebook', 'mdi mdi-twitter', 'mdi mdi-google-plus', 'mdi mdi-linkedin', 'mdi mdi-instagram']

  isLoggedIn() {
    console.log('isLoggedIn')
  }

  currentYear() {
    return new Date().getFullYear()
  }
}
</script>
