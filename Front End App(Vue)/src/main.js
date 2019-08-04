// Main js file 

//import vue 
import Vue from 'vue'
// import app
import App from './App'
// import jquery
window.$ = window.jQuery = require('jquery')
// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//import Router 
import VueRouter from 'vue-router'
import { routes } from './router/index.js'

// import HTTP module
import axios from 'axios'
import VueAxios from 'vue-axios'

// import Vuex
import Vuex from 'vuex'
import { storage } from './store/index.js'


// Uses
Vue.use(VueRouter)
Vue.use(VueAxios ,axios)
Vue.use(Vuex)

// create route instance
const router = new VueRouter({
  routes
})

// create state management instance
const store = new Vuex.Store(storage)

Vue.config.productionTip = false

// final config
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})