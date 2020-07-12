import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCity: '',
    cities: [
      {
        name: 'TaiwanTaoyuan',
        country: 'Taiwan',
        airLine: 'EVA',
        boardingGate: 100,
        emoji: '🇹🇼'
      },
      {
        name: 'Heathrow',
        country: 'UK',
        airLine: 'British Airways',
        boardingGate: 248,
        emoji: '🇬🇧'
      },
      {
        name: 'Frankfurt',
        country: 'Germany',
        airLine: 'Lufthansa',
        boardingGate: 286,
        emoji: '🇩🇪'
      },
      {
        name: 'Suvarnabhumi',
        country: 'Thai',
        airLine: 'Thai Airways',
        boardingGate: 135,
        emoji: '🇹🇭'
      },
      {
        name: 'Helsinki-Vantaa',
        country: 'Finland',
        airLine: 'Finnair',
        boardingGate: 265,
        emoji: '🇫🇮'
      }
    ]
  },
  mutations: {
    setCity (state, val) {
      state.selectedCity = val
    }
  },
  actions: {
  },
  modules: {
  }
})
