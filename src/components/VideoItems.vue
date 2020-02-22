<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(item, key, index) in videoItems" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="item.id.videoId" :width="videoWidth" :height="videoHeight" />
          <p>{{ item.snippet.title }}</p>
          <p>
            <v-icon @click="clickFavoriteIcon(item.id.videoId, item.snippet.title)">
              mdi mdi-heart
            </v-icon>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { appAuthStore, videoStore, favoriteStore } from '@/store'
import videos from '~/constants/videos'

@Component
export default class VideoItems extends Vue {
  private videoWidth = videos.videoWidth
  private videoHeight = videos.videoHeight
  private searchKeyword = videoStore.getSelectedHz + 'Hz music' || 'Solfeggio Harmonics Music'
  private videoItems: Array<Object> = []

  async mounted() {
    await this.fetchVideoItems()
  }

  private async fetchVideoItems() {
    this.videoItems = await videoStore.fetchVideoItems(this.searchKeyword)
  }

  private async clickFavoriteIcon(favoriteVideoId: string, favoriteVideoTitle: string) {
    if (!appAuthStore.isAuthenticated) {
      alert('ログインをしてください')
      return
    }
    await favoriteStore.addFavorite({ favoriteVideoId: favoriteVideoId, favoriteVideoTitle: favoriteVideoTitle }).catch((error: any) => {
      alert(error)
    })
  }
}
</script>
