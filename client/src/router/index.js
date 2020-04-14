import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/front.vue'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front
  },
  {
    path: '/Home',
    name: 'Front',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
