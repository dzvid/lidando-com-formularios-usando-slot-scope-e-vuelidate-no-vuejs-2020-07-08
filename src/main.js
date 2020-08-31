import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import './tailwind.css'

import App from './App.vue'
import OpenAccount from './pages/OpenAccount'
import AccountSuccessfullyCreated from './pages/AccountSuccessfullyCreated'

Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'OpenAccount', component: OpenAccount },
  { path: '/success', name: 'Success', component: AccountSuccessfullyCreated }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
