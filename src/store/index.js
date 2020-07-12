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
        Departures: 'A',
        boardingGate: 100,
        emoji: '🇹🇼'
      },
      {
        name: 'Heathrow',
        country: 'UK',
        airLine: 'British Airways',
        Departures: 'A',
        boardingGate: 100,
        emoji: '🇬🇧'
      },
      {
        name: 'Frankfurt',
        country: 'Germany',
        airLine: 'Lufthansa',
        Departures: 'A',
        boardingGate: 100,
        emoji: '🇩🇪'
      },
      {
        name: 'Suvarnabhumi',
        country: 'Thai',
        airLine: 'Thai Airways',
        Departures: 'A',
        boardingGate: 100,
        emoji: '🇹🇭'
      },
      {
        name: 'Helsinki-Vantaa',
        country: 'Finland',
        airLine: 'Finnair',
        Departures: 'A',
        boardingGate: 100,
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
