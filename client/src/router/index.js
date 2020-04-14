import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/front.vue'
import Home from '../views/home.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/front',
    name: 'Front',
    component: Front
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
