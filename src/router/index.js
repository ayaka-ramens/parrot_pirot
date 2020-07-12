import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Departures from '@/components/Departures'
import CheckIn from '@/components/CheckIn'
import SecurityCheck from '@/components/SecurityCheck'
import Immigration from '@/components/Immigration'
import BoardingGate from '@/components/BoardingGate'
import OnBoard from '@/components/OnBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/departures',
    name: 'Departures',
    component: Departures
  },
  {
    path: '/check-in',
    name: 'CheckIn',
    component: CheckIn
  },
  {
    path: '/security-check',
    name: 'SecurityCheck',
    component: SecurityCheck
  },
  {
    path: '/immigration',
    name: 'Immigration',
    component: Immigration
  },
  {
    path: '/boarding-gate',
    name: 'BoardingGate',
    component: BoardingGate
  },
  {
    path: '/on-board',
    name: 'OnBoard',
    component: OnBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
