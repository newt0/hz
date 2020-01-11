import axios from 'axios'

export const state = () => ({
  items: [],
  isLoading: false
})

export const mutations = {
  setVideos(state, items) {
    state.items = items
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
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
  }
}
