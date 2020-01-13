import axios from 'axios'
import firebase from '~/plugins/firebase'

const firestore = firebase.firestore()
const userRef = firestore.collection('users')
const favoritesCollectionName = 'favorites'

export const state = () => ({
  favorites: []
})

export const mutations = {
  setFavorites(state, items) {
    state.favorites = items
  },
  addFavorite(state, favorite) {
    state.favorites.push(favorite)
  }
}

export const actions = {
  async getVideos({ commit }, payload) {
    const videoPart = 'snippet'
    const maxResultsNumber = 9
    const requestParams = {
      key: process.env.YT_API_KEY,
      part: videoPart,
      q: payload.keyword,
      maxResults: maxResultsNumber
    }
    const requestHeaders = {
      'Content-Type': 'application/json'
    }

    // リクエスト送信
    const methodName = 'get'
    const timeoutTime = 15000
    const videos = await axios
      .get(process.env.YT_SEARCH_API_BASE_URL, {
        params: requestParams,
        method: methodName,
        headers: requestHeaders,
        timeout: timeoutTime
      })
      .then(function(res) {
        return res.data
      })
      .catch((error) => {
        window.console.log(error)
        this.$router.push('/')
      })

    commit('setVideos', videos)
  },
  async addFavorite({ rootState, commit }, favoriteVideoId) {
    const userUid = rootState.user.userUid
    if (!userUid) {
      window.console.log('You have no Uid')
      return
    }
    await userRef
      .doc(userUid)
      .collection(favoritesCollectionName)
      .doc()
      .set({ favoriteId: favoriteVideoId }, { merge: true })
      .then(function(res) {
        commit('addFavorite', favoriteVideoId)
      })
      .catch(function(error) {
        window.console.error('Error adding document: ', error)
      })
  }
}
