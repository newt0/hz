<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(item, key, index) in favoriteList" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="item" :width="videoWidth" :height="videoHeight" />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { favoriteStore } from '@/store'
import videos from '~/constants/videos'

@Component
export default class FavoriteList extends Vue {
  private videoWidth = videos.videoWidth
  private videoHeight = videos.videoHeight
  private favoriteList: Array<Object> = []

  async mounted() {
    // await this.fetchFavoriteList()
  }

  // private async fetchFavoriteList() {
  //   this.favoriteList = await favoriteStore.fetchFavorites()
  // }
}
</script>
