<template>
  <v-dialog v-model="dialog" :max-width="confirmMaxWidth">
    <v-card>
      <v-card-title class="headline"> </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" @click.native="cancel">いいえ</v-btn>
        <v-btn color="primary lighten-1" @click.native="confirm">はい</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'ConfirmDialog',
})
export default class ConfirmDialog extends Vue {
  private dialog: boolean = false
  private confirmMaxWidth: number = 500
  private message: string = 'お気に入り動画を削除します。よろしいでしょうか？'

  open() {
    this.dialog = true
  }

  cancel() {
    this.dialog = false
  }

  confirm() {
    this.dialog = false
    this.$emit('confirm')
  }
}
</script>
