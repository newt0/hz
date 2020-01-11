<template>
  <v-list three-line>
    <template v-for="video in videoList">
      <v-list-item :key="video.hz" @click="clickLink(video.hz)">
        <v-list-item-content>
          <v-list-item-title v-html="video.hz + ` Hz`"></v-list-item-title>
          <v-list-item-subtitle v-html="video.description">
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      videoList: [
        { hz: '174', description: '意識の拡大と進化の基礎' },
        { hz: '258', description: '多次元領域からの意識の拡大と促進' },
        { hz: '396', description: '罪の意識や恐怖からの開放' },
        { hz: '417', description: '変化に挑戦する心、知性' },
        { hz: '528', description: '無限の可能性、DNAの修復、奇跡' },
        { hz: '639', description: '人間関係の向上' },
        { hz: '741', description: '問題を解決する力、表現力の向上' },
        { hz: '852', description: '直感力の覚醒' },
        { hz: '936', description: '高次元、宇宙意識とつながる' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapActions(['setSelectedHz'])
  },
  methods: {
    clickLink(hzNumber) {
      this.$store.dispatch('setSelectedHz', hzNumber)
      this.$router.push({ name: 'video' })
    }
  }
}
</script>
