import { Module, VuexModule, Mutation /*, Action */ } from 'vuex-module-decorators'
import firebase from '~/plugins/firebase'
// import firestoreModelName from '~/constants/firestoreModelName'
import { User } from '~/types/User'

const firestore = firebase.firestore()

@Module({ stateFactory: true, namespaced: true, name: 'userManager' })
export default class UserManager extends VuexModule {
  private user?: User
  private userUid?: string
  private userDisplayName?: string

  get getUserUid(): string {
    return this.userUid ?? ''
  }

  get getUserDisplayName(): string {
    return this.userDisplayName ?? ''
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
  private setUser(docData?: firebase.firestore.DocumentData) {
    const userData = docData as firebase.firestore.DocumentData
    if (!userData) {
      return
    }
    const user = new User({
      userDisplayName: userData.userDisplayName,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    })
    this.user = user
  }
}

// export const actions = {
//   async setUser({ commit }, user) {
//     await userRef
//       .doc(user.uid)
//       .set({ uid: user.uid, displayName: user.displayName }, { merge: true })
//       .then(function(res) {
//         commit('setUserUid', user.uid)
//         commit('setUserDisplayName', user.displayName)
//       })
//       .catch(function(error) {
//         window.console.error('Error User-Data adding document: ', error)
//       })
//   }
// }

// export const mutations = {
//   setUserDisplayName(state, userDisplayName) {
//     state.userDisplayName = userDisplayName
//   },
//   setUserUid(state, userUid) {
//     state.userUid = userUid
//   }
// }

// export const getters = {
//   userUid: (state) => {
//     return state.userUid
//   },
//   displayName: (state) => {
//     return state.userDisplayName
//   }
// }
