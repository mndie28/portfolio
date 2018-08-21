// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#3398cc', // Widget Header
    secondary: '#333b46', // Navigation - Lighten 2 for Widget Header
    accent: '#3398cc', //  buttons
    error: colors.red.base,
    warning: colors.amber.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
