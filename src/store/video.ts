import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/plugins/axios-accessor'
import processingConstants from '~/constants/processingConstants'

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
    if (!process.env.YT_SEARCH_API_BASE_URL || !process.env.YT_API_KEY) {
      return
    }
    const requestParams = {
      key: process.env.YT_API_KEY,
      part: processingConstants.ajax.youtube.videoPart,
      q: keyword,
      maxResults: processingConstants.ajax.youtube.maxResultsNumber,
    }
    if (!requestParams) {
      return
    }
    // TODO: then()を使用しない書き方になおしたい
    //   例: Youtubeから返却値用のモデルを作って待ち構える感じとか
    const videoItems = await $axios
      .get(process.env.YT_SEARCH_API_BASE_URL, {
        params: requestParams,
        method: processingConstants.ajax.youtube.methodName,
        headers: processingConstants.ajax.requestHeaders,
        timeout: processingConstants.ajax.youtube.timeoutTime,
      })
      .then(result => {
        return result.data.items
      })
      .catch((error: any) => {
        throw new Error(error)
      })
    if (!videoItems) {
      return
    }
    return videoItems
  }
}
