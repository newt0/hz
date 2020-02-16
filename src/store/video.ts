import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/plugins/axios-accessor'

// import firebase from '~/plugins/firebase'
// import firestoreModelName from '~/constants/firestoreModelName'

// const firestore = firebase.firestore()

@Module({ stateFactory: true, namespaced: true, name: 'video' })
export default class Video extends VuexModule {
  selectedHz?: string

  get getSelectedHz(): string {
    return this.selectedHz ?? ''
  }

  @Mutation
  private setSelectedHz(selectedHz: string) {
    this.selectedHz = selectedHz
  }

  @Action({ rawError: true })
  updateSelectedHz(selectedHz: string) {
    this.setSelectedHz(selectedHz)
  }

  @Action({ rawError: true })
  async fetchVideoItems(keyword: string) {
    const videoPart = 'snippet'
    const maxResultsNumber = 9
    const requestParams = {
      key: process.env.YT_API_KEY,
      part: videoPart,
      q: keyword,
      maxResults: maxResultsNumber,
    }
    const requestHeaders = {
      'Content-Type': 'application/json',
    }

    const methodName = 'get'
    const timeoutTime = 15000
    if (!process.env.YT_SEARCH_API_BASE_URL) {
      return
    }
    // TODO: then()を使用しない書き方になおしたい
    //   例: Youtubeから返却値用のモデルを作って待ち構える感じとか
    const videoItems = await $axios
      .get(process.env.YT_SEARCH_API_BASE_URL, {
        params: requestParams,
        method: methodName,
        headers: requestHeaders,
        timeout: timeoutTime,
      })
      .then(result => {
        return result.data.items
      })
      .catch((error: any) => {
        window.console.log(error)
      })
    if (!videoItems) {
      return
    }
    return videoItems
  }
}
