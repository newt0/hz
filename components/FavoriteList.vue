<template>
  <v-item-group>
    <v-container>
      <v-row>
        <!-- TODO: $store.state.favorites.favorites を 
          mapStates で定義した `favorites` から取得したい -->
        <v-col
          v-for="(item, key, index) in $store.state.favorites.favorites"
          :key="index"
          cols="12"
          md="4"
        >
          <youtube
            ref="youtube"
            :video-id="item"
            :width="videoWidth"
            :height="videoHeight"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FavoriteList',
  data() {
    return {
      videoWidth: 288,
      videoHeight: 162
    }
  },
  computed: {
    ...mapActions(['favorites/fetchFavorites'])
  },
  mounted() {
    this.favoriteList()
  },
  methods: {
    favoriteList() {
      this.$store.dispatch('favorites/fetchFavorites')
    }
  }
}
</script>
