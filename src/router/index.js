import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trending from '../views/Trending.vue'
import coming from '../views/coming.vue'
import nowplaying from '../views/nowplaying.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/nowplaying',
    name: 'nowplaying',
    component: nowplaying
  },
  {
    path: '/coming',
    name: 'coming',
    component: coming
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
