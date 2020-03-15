import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'
import VueRouter from 'vue-router'
import routes from './routes/routes'

const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
