<template>  
  <section class="container">
    <header />
    <p>{{ username }}</p>
    <div>
      <app-logo />
      <h1 class="title">
        {{name}}
      </h1>
      <h2 class="subtitle">
        Nuxt.jsとFirebaseを使って簡単なWebサービスを作るテストです。
      </h2>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import Header from '@/components/Header.vue'
import auth from '@/plugins/firebase'
import Home from '@/components/Home.vue'
import Mypage from '@/components/Mypage.vue'
import { log } from 'util'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AppLogo,
    Header,
    Home,
    Mypage
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin: false, userData: null}
  },
  computed: {
    ...mapState('auth', ['username']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
  },
  methods: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>