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

// Check if the user has the right to view pages
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (App.token != null) {
      next()
      return
    }else
    {
      next('/login')
    }

  } else {
    next()
  }
})

// Creating main component
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
