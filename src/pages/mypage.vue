<template>
  <FavoriteList />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FavoriteList from '@/components/FavoriteList.vue'

@Component({ components: { FavoriteList } })
export default class MyPage extends Vue {}
</script>
