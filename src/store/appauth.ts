import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import firebase from '@/plugins/firebase'

require('firebase/auth')
const auth: firebase.auth.Auth = firebase.auth()

@Module({ stateFactory: true, namespaced: true, name: 'appauth' })
export default class AppAuth extends VuexModule {
  // TODO: ステータスをenumで管理したい
  private loginStatus?: string | null

  get isAuthenticated(): boolean {
    return this.loginStatus !== null
  }

  @Mutation
  private setUser(operationType: string) {
    this.loginStatus = operationType
  }

  @Mutation
  private removeLoginStatus() {
    this.loginStatus = null
  }

  @Action({ rawError: true })
  createLoginStatus(operationType: string) {
    this.setUser(operationType)
  }

  @Action({ rawError: true })
  async logout() {
    await auth.signOut()
    this.removeLoginStatus()
  }
}
