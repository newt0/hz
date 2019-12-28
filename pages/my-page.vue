<template>
  <members-only>
    <h1>ログインしていないと見れないページ</h1>
    <a href="/">Home</a>
  </members-only>
</template>

<script>
import MyPage from '@/components/MyPage.vue'

export default {
  components: {
    MyPage
  }
}
</script>
