<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(item, key, index) in videoItems" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="item.id.videoId" :width="videoWidth" :height="videoHeight" />
          <p>{{ item.snippet.title }}</p>
          <p>
            <v-icon :disabled="isProcessing()" @click="clickFavoriteIcon(item.id.videoId, item.snippet.title)">
              mdi mdi-heart
            </v-icon>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { appAuthStore, videoStore, favoriteStore } from '@/store'
import Processing from '@/mixins/processing'
import videoConstants from '~/constants/videos'

@Component({})
export default class VideoItems extends mixins(Processing) {
  private videoWidth = videoConstants.videoWidth
  private videoHeight = videoConstants.videoHeight
  private searchKeyword = videoStore.getSelectedHz + 'Hz music' || 'Solfeggio Harmonics Music'
  private videoItems: Array<Object> = []

  mounted() {
    // TODO: setTimeout()を使わない方法を検討する
    // PR: https://github.com/maecha/hz/issues/14
    setTimeout(() => this.fetchVideoItems(), 0)
  }

  private async fetchVideoItems() {
    this.startProcessing()
    this.videoItems = await videoStore.fetchVideoItems(this.searchKeyword)
    this.endProcessing()
  }

  private async clickFavoriteIcon(favoriteVideoId: string, favoriteVideoTitle: string) {
    this.startProcessing()
    if (!appAuthStore.isAuthenticated) {
      alert('ログインをしてください')
      this.endProcessing()
      return
    }
    await favoriteStore.addFavorite({ favoriteVideoId: favoriteVideoId, favoriteVideoTitle: favoriteVideoTitle }).catch((error: any) => {
      alert(error)
    })
    this.endProcessing()
  }
}
</script>
