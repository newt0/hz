import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppAuth from '@/store/appauth'
import User from '~/store/userManager'

let appAuthStore: AppAuth; // eslint-disable-line
let userStore: User; // eslint-disable-line

function initialiseStores(store: Store<any>): void {
  appAuthStore = getModule(AppAuth, store)
  userStore = getModule(User, store)
}

export { initialiseStores, appAuthStore, userStore }
