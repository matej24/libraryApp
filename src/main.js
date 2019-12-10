import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faClock, faComments, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ClientTable, Event } from 'vue-tables-2';
import Notifications from 'vue-notification'


library.add(faBook, faClock, faComments, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ClientTable)

Vue.use(BootstrapVue)

Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
