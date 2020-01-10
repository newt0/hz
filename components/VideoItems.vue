<template>
  <v-item-group>
    <v-container>
      <p>bbb</p>
      <v-row>
        <v-col
          v-for="(item, key, index) in videoItems"
          :key="index"
          cols="12"
          md="4"
        >
          <p>aaa</p>
          <youtube ref="youtube" :video-id="item.id.videoId" />
          <p>Title here. Title here. Title here. Title here. Title here.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VideoItems',
  computed: {
    ...mapState({
      // selectedHz: 'index/selectedHz',
      videoItems: 'video/items'
    })
  },
  async asyncData({ store }) {
    window.console.log(store.state.selectedHz)
    await store.dispatch('video/getVideos', {
      keyword: store.state.selectedHz
    })
  }
}
</script>
