import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Grid from '@/components/Grid'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
