<template>
  <VideoItems />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VideoItems from '@/components/VideoItems.vue'

@Component({
  components: {
    VideoItems,
  },
})
export default class Video extends Vue {}
</script>
