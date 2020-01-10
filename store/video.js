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
    const searchUrl = 'https://www.googleapis.com/youtube/v3/search'
    const params = {
      key: 'AIzaSyAKd9n12LheN4E0ZprTreXRl-fNt9jM-_I',
      part: 'snippet',
      q: payload.keyword,
      maxResults: 9
    }
    const headers = {
      'Content-Type': 'application/json'
    }

    // リクエスト送信
    const videos = await axios
      .get(searchUrl, {
        params: params,
        method: 'get',
        headers: headers,
        timeout: 15000
      })
      .then(function(res) {
        window.console.log('=======================')
        window.console.log(res.data)
        return res.data
      })
      .catch((error) => {
        window.console.log(error)
        this.$router.push('/')
      })

    commit('setVideos', videos)
  }
}
