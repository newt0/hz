import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import firebase from '~/plugins/firebase'
import firestoreModelName from '~/constants/firestoreModelName'

const firestore = firebase.firestore()

@Module({ stateFactory: true, namespaced: true, name: 'userManager' })
export default class UserManager extends VuexModule {
  private userUid?: string
  private userDisplayName?: string
  private userPhotoUrl?: string
  private userEmail?: string

  get getUserUid(): string {
    return this.userUid ?? ''
  }

  get getUserDisplayName(): string {
    return this.userDisplayName ?? ''
  }

  get getUserPhotoUrl(): string {
    return this.userPhotoUrl ?? ''
  }

  get getUserEmail(): string {
    return this.userEmail ?? ''
  }

  @Mutation
  private setUserUid(userUid?: string) {
    this.userUid = userUid
  }

  @Mutation
  private setUserDisplayName(userDisplayName?: string) {
    this.userDisplayName = userDisplayName
  }

  @Mutation
  private setUserPhotoUrl(userPhotoUrl?: string) {
    this.userPhotoUrl = userPhotoUrl
  }

  @Mutation
  private setUserEmail(userEmail?: string) {
    this.userEmail = userEmail
  }

  @Action({ rawError: true })
  async createUser(user: firebase.User) {
    const userUid = user.uid
    const userFields = {
      userDisplayName: user.displayName || '',
      userPhotoUrl: user.photoURL || '',
      userEmail: user.email || '',
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
    }
    await firestore
      .collection(firestoreModelName.version)
      .doc(process.env.FB_ROOT_VERSION)
      .collection(firestoreModelName.users)
      .doc(userUid)
      .set(userFields, { merge: true })
    this.setUserUid(userUid)
    this.setUserDisplayName(userFields.userDisplayName)
    this.setUserPhotoUrl(userFields.userPhotoUrl)
    this.setUserEmail(userFields.userEmail)
  }
}
