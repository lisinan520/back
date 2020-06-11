import Vue from 'vue'
import Router from 'vue-router'

import admins from "./admin"
Vue.use(Router)

export default new Router({
  routes: [
    ...admins
  ]
})
