import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted'
import Vuesax from 'vuesax'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Vuetable, VuetablePagination, VuetablePaginationInfo } from 'vuetable-2'
import Datatable from 'vue2-datatable-component'

Vue.use(Datatable)
// Install BootstrapVue
Vue.use(Vuetable)
Vue.use(VuetablePagination)
Vue.use(VuetablePaginationInfo)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuesax)
Vue.config.productionTip = false
Vue.use(Toasted)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
