<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(item, key, index) in videoItems" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="item.id.videoId" :width="videoWidth" :height="videoHeight" />
          <p>{{ item.snippet.title }}</p>
          <p>
            <v-icon @click="clickFavoriteIcon(item.id.videoId)">
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
import { videoStore } from '@/store'

@Component
export default class VideoItems extends Vue {
  private videoWidth = '288'
  private videoHeight = '162'
  private searchKeyword = videoStore.getSelectedHz + 'Hz music' || 'Solfeggio Harmonics Music'
  private videoItems: Array<Object> = []

  created() {
    this.getVideos()
  }

  private async getVideos() {
    this.videoItems = await videoStore.fetchVideoItems(this.searchKeyword)
  }

  private clickFavoriteIcon() {
    console.log('clickFavoriteIcon')
  }
}
</script>
