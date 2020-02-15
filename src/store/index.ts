import { Store } from 'vuex'
import { initialiseStores } from '@/plugins/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '@/plugins/store-accessor'

// export const strict = false
// export const state = () => ({
//   user: null,
//   selectedHz: null
// })
// export const mutations = {
//   setUser(state, payload) {
//     state.user = payload
//   },
//   setSelectedHz(state, payload) {
//     state.selectedHz = payload
//   }
// }
// export const actions = {
//   setUser({ commit }, payload) {
//     commit('setUser', payload)
//   },
//   setSelectedHz({ commit }, payload) {
//     commit('setSelectedHz', payload)
//   }
// }
// export const getters = {
//   isAuthenticated(state) {
//     return !!state.user
//   }
// }
