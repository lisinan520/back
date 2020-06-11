import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用reset.css
import '@/assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import Axios from 'axios'
Vue.prototype.$http = Axios
// 全局路由守卫

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
