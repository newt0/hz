<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(favorite, key, index) in favoriteList" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="favorite.favoriteVideoId" :width="videoWidth" :height="videoHeight" />
          <p>
            <v-icon @click="clickRemoveFavoriteIcon(favorite.favoriteVideoId)">
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
import { favoriteStore } from '@/store'
import { Favorite } from '@/types/Favorite'
import videos from '~/constants/videos'

@Component
export default class FavoriteList extends Vue {
  private videoWidth = videos.videoWidth
  private videoHeight = videos.videoHeight
  private favoriteList: Favorite[] = []

  async mounted() {
    await this.fetchFavoriteList()
  }

  private async fetchFavoriteList() {
    try {
      await favoriteStore.fetchFavorites()
      this.favoriteList = favoriteStore.getFavorites
    } catch (error) {
      alert(error)
    }
  }

  private async clickRemoveFavoriteIcon(favoriteVideoId: string) {
    await favoriteStore.removeFavorite(favoriteVideoId).catch((error: any) => {
      alert(error)
    })
  }
}
</script>
