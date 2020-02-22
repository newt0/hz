import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance; // eslint-disable-line

function initializeAxios(axiosInstance: NuxtAxiosInstance): void {
  $axios = axiosInstance
}

const accessor: Plugin = ({ $axios }): void => {
  initializeAxios($axios)
}

export { $axios }
export default accessor
