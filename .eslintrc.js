module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NUXT_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NUXT_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'prettier/prettier': 'error',
    'object-shorthand': 'off'
  }
}
