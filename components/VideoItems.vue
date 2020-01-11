<template>
  <v-item-group>
    <v-container>
      <v-row>
        <!-- TODO: $store.state.video.items を 
          mapStates で定義した `VideoItems` から取得したい -->
        <v-col
          v-for="(item, key, index) in $store.state.video.items.items"
          :key="index"
          cols="12"
          md="4"
        >
          <youtube
            ref="youtube"
            :video-id="item.id.videoId"
            :width="videoWidth"
            :height="videoHeight"
          />
          <p>{{ item.snippet.title }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  name: 'VideoItems',
  data() {
    return {
      videoWidth: 288,
      videoHeight: 162,
      searchKeyword:
        this.$store.state.selectedHz + 'Hz music' || 'Solfeggio Harmonics Music'
    }
  },
  created() {
    this.getVideos()
  },
  methods: {
    getVideos() {
      this.$store.dispatch('video/getVideos', {
        keyword: this.searchKeyword
      })
    }
  }
}
</script>
