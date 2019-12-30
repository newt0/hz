import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  user: null
})

export const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.user != null
  },
  isLoggedIn(state) {
    return state.status === 'loggedIn'
  }
}

export const actions = {
  async logout({ dispatch, commit }, data) {
    // TODO: [My guess] Replacement this with middleware, is better
    try {
      await auth.signOut()
      commit('unSetUser')
      window.location.href = '/'
    } catch (err) {
      window.console.log('Logout error: ', err)
    }
  },
  setUser({ commit }, user) {
    commit('setUser', user)
  }
}

export const mutations = {
  setUser(state, user) {
    state.status = 'loggedIn'
    state.user = user
  },
  unSetUser() {
    state.status = 'loggedOut'
    state.user = null
  }
}
