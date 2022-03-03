import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fontawesome from '@fortawesome/fontawesome-svg-core'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('fa-icon', fontawesome)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
