import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Departure from '@/views/Departure'
import CheckIn from '@/views/CheckIn'
import Immigration from '@/views/Immigration'
import BoardingGate from '@/views/BoardingGate'
import OnBoard from '@/views/OnBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/departure',
    name: 'Departure',
    component: Departure
  },
  {
    path: '/check-in',
    name: 'CheckIn',
    component: CheckIn
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
