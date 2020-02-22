import createPersistedState from 'vuex-persistedstate'
import { Context } from '@nuxt/types'

declare global {
  interface Window {
    onNuxtReady: any
  }
}

export default ({ store, isHMR }: Context) => {
  // In case of HMR, mutation occurs before nuxReady, so previously saved state
  // gets replaced with original state received from server. So, we've to skip HMR.
  // Also nuxtReady event fires for HMR as well, which results multiple registration of
  // vuex-persistedstate plugin
  if (isHMR && !process.client) {
    return
  }
  window.onNuxtReady(() => {
    const options = {
      key: 'vuex',
      paths: ['appauth', 'userManager', 'video'], // localStorageに保存したいstoreを入れる
    }
    createPersistedState(options)(store) // vuex plugins can be connected to store, even after creation
  })
}
