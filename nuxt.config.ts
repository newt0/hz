import { Configuration } from '@nuxt/types'
const envPath = `../.env.${process.env.NUXT_ENV || 'development'}`
require( 'dotenv' ).config( { path: envPath } )

const nuxtConfig: Configuration = {
  mode: 'spa',
  srcDir: 'src',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: '~/components/Loading.vue',
  css: [
    'firebaseui/dist/firebaseui.css'
  ],
  plugins: [
    { src: '~plugins/persistedstate.ts', ssr: false },
    '@/plugins/axiosAccessor',
    '@/plugins/firebase',
    '@/plugins/vuetify',
    '@/plugins/vueYoutube.js'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  dotenv: {
    filename: envPath
  },
  build: {
    extend(config: any, ctx: any) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  router: {
    base: '/',
    middleware: [
      'authenticated'
    ]
  }
}
export default nuxtConfig
