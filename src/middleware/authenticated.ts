import { Middleware, Context } from '@nuxt/types'
import { appAuthStore } from '@/store/index'

const authenticated: Middleware = async (context: Context) => {
  await setTimeout(() => {
    if (!appAuthStore.isAuthenticated) {
      context.redirect('/login')
    }
  })
}

export default authenticated
