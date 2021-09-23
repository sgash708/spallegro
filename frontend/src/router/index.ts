import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import Interval from '@/views/Interval.vue'
import Note from '@/views/Note.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    // TOPページ
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // サービスについて
    path: '/about',
    name: 'About',
    component: About
  },
  {
    // インターバル
    path: '/interval',
    name: 'Interval',
    component: Interval
  },
  {
    // インターバル
    path: '/note',
    name: 'Note',
    component: Note
  },
  {
    // 404
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
