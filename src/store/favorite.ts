import { Module, VuexModule, Action } from 'vuex-module-decorators'
import firebase from '~/plugins/firebase'
import { userStore } from '@/store'
import firestoreModelName from '~/constants/firestoreModelName'

const firestore = firebase.firestore()

@Module({ stateFactory: true, namespaced: true, name: 'favorite' })
export default class Favorite extends VuexModule {
  @Action({ rawError: true })
  async addFavorite(favoriteVideoId: string) {
    const userUid = userStore.getUserUid
    await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .doc()
      .set({ favoriteId: favoriteVideoId }, { merge: true })
  }

  @Action({ rawError: true })
  async fetchFavorites() {
    const userUid = userStore.getUserUid
    const favorites = await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .get()
    return favorites.docs
  }
}
