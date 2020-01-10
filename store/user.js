/// 現状は store/auth.js で
/// user オブジェクトを管理しているから、
/// このファイルは利用しない

export const state = () => ({
  displayName: ''
})

export const actions = {
  login({ commit }, user) {
    commit('setDisplayName', user.displayName)
  },
  logout({ commit }) {
    commit('setDisplayName', '')
  }
}

export const mutations = {
  setDisplayName(state, displayName) {
    state.displayName = displayName
  }
}

export const getters = {
  displayName: (state) => {
    return state.displayName
  }
}
