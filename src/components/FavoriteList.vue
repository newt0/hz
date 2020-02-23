<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="(favorite, key, index) in favoriteList" :key="index" cols="12" md="4">
          <youtube ref="youtube" :video-id="favorite.favoriteVideoId" :width="videoWidth" :height="videoHeight" />
          <p>
            <v-icon :disabled="isProcessing()" @click="openConfirmDialog(favorite.favoriteVideoId)">
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
import { Component, mixins } from 'nuxt-property-decorator'
import { favoriteStore } from '@/store'
import { Favorite } from '@/types/Favorite'
import videoConstants from '~/constants/videos'
import Processing from '@/mixins/processing'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

@Component({
  components: {
    ConfirmDialog,
  },
})
export default class FavoriteList extends mixins(Processing) {
  private videoWidth = videoConstants.videoWidth
  private videoHeight = videoConstants.videoHeight
  private favoriteList: Favorite[] = []
  // TODO: この書き方はイケテいないので、いつか修正する
  private favoriteVideoIdForRemoving: string = ''

  // TODO: この書き方はイケテいないので、いつか修正する
  $refs!: {
    confirmDialog: ConfirmDialog
  }

  mounted() {
    // TODO: setTimeout()を使わない方法を検討する
    // PR: https://github.com/maecha/hz/issues/14
    setTimeout(() => this.fetchFavoriteList(), 0)
  }

  private async fetchFavoriteList() {
    this.startProcessing()
    try {
      await favoriteStore.fetchFavorites()
      this.favoriteList = favoriteStore.getFavorites
    } catch (error) {
      alert(error)
    }
    this.endProcessing()
  }

  private async clickRemoveFavoriteIcon() {
    this.startProcessing()
    try {
      await favoriteStore.removeFavorite(this.favoriteVideoIdForRemoving)
      alert('削除しました')
      // TODO: 表示用のデータを更新：this.favoriteListから動画データを削除する
      this.closeConfirmDialog()
    } catch (error) {
      alert(error)
    }
    this.endProcessing()
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
