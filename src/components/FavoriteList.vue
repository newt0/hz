<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(favorite, key, index) in favoriteList" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="favorite.favoriteVideoId" :width="videoWidth" :height="videoHeight" />
          <p>
            <v-icon @click="openConfirmDialog(favorite.favoriteVideoId)">
              mdi mdi-heart
            </v-icon>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <ConfirmDialog ref="confirmDialog" @confirm="clickRemoveFavoriteIcon()"></ConfirmDialog>
  </v-item-group>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { favoriteStore } from '@/store'
import { Favorite } from '@/types/Favorite'
import videos from '~/constants/videos'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

@Component({
  components: {
    ConfirmDialog,
  },
})
export default class FavoriteList extends Vue {
  private videoWidth = videos.videoWidth
  private videoHeight = videos.videoHeight
  private favoriteList: Favorite[] = []
  // TODO: この書き方はイケテいないので、いつか修正する
  private favoriteVideoIdForRemoving: string = ''

  // TODO: この書き方はイケテいないので、いつか修正する
  $refs!: {
    confirmDialog: ConfirmDialog
  }

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

  private async clickRemoveFavoriteIcon() {
    try {
      await favoriteStore.removeFavorite(this.favoriteVideoIdForRemoving)
      alert('削除しました')
      // TODO: this.favoriteListから動画データを削除する
      this.closeConfirmDialog()
    } catch (error) {
      alert(error)
    }
  }

  private openConfirmDialog(favoriteVideoId: string) {
    this.favoriteVideoIdForRemoving = favoriteVideoId
    this.$refs.confirmDialog.open()
  }

  private closeConfirmDialog() {
    this.favoriteVideoIdForRemoving = ''
    this.$refs.confirmDialog.cancel()
  }
}
</script>
