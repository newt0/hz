export const state = () => ({
  email: '',
  displayName: ''
})

export const actions = {
  login({ commit }, user) {
    commit('setEmail', user.email)
    commit('setDisplayName', user.displayName)
  },
  logout({ commit }) {
    commit('setEmail', '')
    commit('setDisplayName', '')
  }
}

export const mutations = {
  setEmail(state, email) {
    state.email = email
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName
  }
}

export const getters = {
  isLogin: (state) => {
    return !!state.email
  },
  displayName: (state) => {
    return state.displayName
  }
}
