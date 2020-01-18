import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

console.log(1)

Vue.use(Vuetify, {
  theme: {
    primary: '#F29B8A',
    accent: colors.grey.darken3,
    secondary: '#BC375F',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
