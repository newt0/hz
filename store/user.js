import firebase from '~/plugins/firebase'

const firestore = firebase.firestore()
const userRef = firestore.collection('users')

export const state = () => ({
  userUid: '',
  userDisplayName: ''
})

export const actions = {
  setUserUid({ commit, userUid }) {
    commit('setUserUid', userUid)
  },
  setUserDisplayName({ commit, userDisplayName }) {
    commit('setUserDisplayName', userDisplayName)
  },
  async setUser({ commit }, user) {
    await userRef
      .doc(user.uid)
      .set({ uid: user.uid, displayName: user.displayName }, { merge: true })
      .then(function(res) {
        commit('setUserUid', user.uid)
        commit('setUserDisplayName', user.displayName)
      })
      .catch(function(error) {
        window.console.error('Error User-Data adding document: ', error)
      })
  }
}

export const mutations = {
  setUserDisplayName(state, userDisplayName) {
    state.userDisplayName = userDisplayName
  },
  setUserUid(state, userUid) {
    state.userUid = userUid
  }
}

export const getters = {
  userUid: (state) => {
    return state.userUid
  },
  displayName: (state) => {
    return state.userDisplayName
  }
}
