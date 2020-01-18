export default {
  mode: 'spa',
  env: {
    FRB_API_KEY: 'AIzaSyC_iqe3dxnC29ccwUiexazBqBXQ3VJUGmI',
    FRB_AUTH_DOMAIN: 'hz-healing-music.firebaseapp.com',
    FRB_DATABASE_URL: 'https://hz-healing-music.firebaseio.com',
    FRB_PROJECT_ID: 'hz-healing-music',
    FRB_STORAGE_BUCKET: 'hz-healing-music.appspot.com',
    FRB_MESSAGING_SENDER_ID: '1060518047944',
    FRB_APP_ID: '1:1060518047944:web:eb358cf9cd184d1c79f5fd',
    FRB_MEASUREMENT_ID: 'G-WPGLH004RN',
    YT_API_KEY: 'AIzaSyAKd9n12LheN4E0ZprTreXRl-fNt9jM-_I',
    YT_SEARCH_API_BASE_URL: 'https://www.googleapis.com/youtube/v3/search'
  },
  /*
   ** Headers of the page
   */
  head: {
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['firebaseui/dist/firebaseui.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify', '@/plugins/vue-youtube.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/vuetify', '@nuxtjs/axios', '@nuxtjs/dotenv'],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    extend(config, ctx) {}
  },
  router: {
    base: '/',
    middleware: ['authenticated']
  },
  axios: {}
}
