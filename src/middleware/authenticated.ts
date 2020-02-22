import { Middleware, Context } from '@nuxt/types'
import { appAuthStore } from '@/store/index'

// eslint-disable-next-line require-await
const authenticated: Middleware = async (context: Context) => {
  if (context.route.path === '/mypage' && !appAuthStore.isAuthenticated) {
    context.redirect('/')
  }
}

export default authenticated
