import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import firebase from '@/plugins/firebase'

require('firebase/auth')
const auth: firebase.auth.Auth = firebase.auth()

@Module({ stateFactory: true, namespaced: true, name: 'appauth' })
export default class AppAuth extends VuexModule {
  private email?: string | null

  get isAuthenticated(): boolean {
    return this.email !== null
  }

  @Mutation
  private setUser(user: firebase.User) {
    this.email = user.email
  }

  @Mutation
  private removeUser() {
    this.email = null
  }

  @Action({ rawError: true })
  async logout() {
    await auth.signOut()
    this.removeUser()
  }
}
