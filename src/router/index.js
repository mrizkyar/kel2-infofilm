import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trending from '../views/Trending.vue'
import coming from '../views/coming.vue'
import nowplaying from '../views/nowplaying.vue'
import film1 from '../views/film.vue'
import film2 from '../views/film2.vue'
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
  },
  {
    path: '/avenger',
    name: 'avenger',
    component: film1
  },
  {
    path: '/birds',
    name: 'birds',
    component: film2
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
