import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Region from '../views/Region.vue'
import Country from '../views/Country.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/region/:slug',
    name: 'Region',
    component: Region
  },
  {
    path: '/country/:code',
    name: 'Country',
    component: Country
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
