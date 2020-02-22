import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppAuth from '@/store/appauth'
import User from '@/store/userManager'
import Video from '@/store/video'
import Favorite from '~/store/favoriteManager'

let appAuthStore: AppAuth; // eslint-disable-line
let userStore: User; // eslint-disable-line
let videoStore: Video; // eslint-disable-line
let favoriteStore: Favorite; // eslint-disable-line

function initialiseStores(store: Store<any>): void {
  appAuthStore = getModule(AppAuth, store)
  userStore = getModule(User, store)
  videoStore = getModule(Video, store)
  favoriteStore = getModule(Favorite, store)
}

export { initialiseStores, appAuthStore, userStore, videoStore, favoriteStore }
