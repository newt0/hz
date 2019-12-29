import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '', // I'm not sure that whether this is necessary or not.
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
    await auth.signOut()
    commit('unSetUser')
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
