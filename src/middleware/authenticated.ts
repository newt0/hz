import { Middleware, Context } from '@nuxt/types'
import { appAuthStore } from '@/store/index'

// eslint-disable-next-line require-await
const authenticated: Middleware = async (_: Context) => {
  console.log(appAuthStore.isAuthenticated)
  // if (!appAuthStore.isAuthenticated) {
  //   context.redirect('/login')
  // }
}

export default authenticated
