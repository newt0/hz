import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import firebase from '~/plugins/firebase'
// import { userStore } from '@/store'
import { Favorite } from '@/types/Favorite'
import firestoreModelName from '~/constants/firestoreModelName'

const firestore = firebase.firestore()

@Module({ stateFactory: true, namespaced: true, name: 'favoriteManager' })
export default class FavoriteManager extends VuexModule {
  favorites?: Favorite[]
  favoriteDocumentId?: string

  get getFavorites(): Favorite[] {
    return this.favorites ?? []
  }

  get getFavoriteDocumentId(): string {
    return this.favoriteDocumentId ?? ''
  }

  @Mutation
  private setFavorites(docSnapshot: Array<firebase.firestore.QueryDocumentSnapshot>) {
    const favoriteArray: Favorite[] = docSnapshot.map(doc => {
      return new Favorite({
        favoriteVideoId: doc.id,
        createdAt: firebase.firestore.Timestamp.now(),
        updatedAt: firebase.firestore.Timestamp.now(),
      })
    })
    this.favorites = favoriteArray
  }

  @Mutation
  private setFavoriteDocumentId(favoriteDocumentId: string) {
    this.favoriteDocumentId = favoriteDocumentId
  }

  @Action({ rawError: true })
  async addFavorite(favoriteVideoId: string) {
    const userUid = 'puUGy60sopUN5mnv8qm3x2wnIYl1'
    // const userUid = userStore.getUserUid
    await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .doc()
      .set({ favoriteVideoId: favoriteVideoId }, { merge: true })
  }

  @Action({ rawError: true })
  async removeFavorite(favoriteVideoId: string) {
    const userUid = 'puUGy60sopUN5mnv8qm3x2wnIYl1' // userStore.getUserUid
    await this.getFavoriteDocument(favoriteVideoId)
    await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .doc(this.getFavoriteDocumentId)
      .delete()
  }

  @Action({ rawError: true })
  async fetchFavorites() {
    const userUid = 'puUGy60sopUN5mnv8qm3x2wnIYl1' // userStore.getUserUid
    const favorites = await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .get()
    this.setFavorites(favorites.docs)
  }

  @Action({ rawError: true })
  private async getFavoriteDocument(favoriteVideoId: string) {
    const userUid = 'puUGy60sopUN5mnv8qm3x2wnIYl1' // userStore.getUserUid
    const querySnapshot = await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .collection(firestoreModelName.favorites)
      .get()
    const favoriteDoc: firebase.firestore.DocumentSnapshot[] = querySnapshot.docs.filter(favoriteDoc => {
      if (favoriteDoc.id === favoriteVideoId) {
        return favoriteDoc
      }
    })
    this.setFavoriteDocumentId(favoriteDoc[0].id)
  }
}
