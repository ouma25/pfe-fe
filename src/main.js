import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Login from './Login'
import Register from './Register'
import VueRouter from "vue-router"
import Routes from "./Routes";
import Card from './components/card';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Using libraries
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
Vue.use(VueRouter)

// Registering components
Vue.component('Login', Login)
Vue.component('Register', Register)
Vue.component('Card', Card)

// Importing routes
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

// Creating main component
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
