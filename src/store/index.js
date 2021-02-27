import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCity: '',
    cities: [
      {
        name: 'Taipei',
        country: 'Taiwan',
        airLine: 'EVA',
        time: '12:38',
        flight: 'BA 913',
        checkInGate: 'A',
        boardingGate: 100,
        remark: 'on time',
        emoji: '🇹🇼'
      },
      {
        name: 'London',
        country: 'UK',
        airLine: 'British Airways',
        time: '12:56',
        flight: 'AF5743',
        checkInGate: 'B',
        boardingGate: 248,
        remark: 'on time',
        emoji: '🇬🇧'
      },
      {
        name: 'Frankfurt',
        country: 'Germany',
        airLine: 'Lufthansa',
        time: '13:07',
        flight: 'AF5985',
        checkInGate: 'C',
        boardingGate: 286,
        remark: 'on time',
        emoji: '🇩🇪'
      },
      {
        name: 'Bangkok',
        country: 'Thai',
        airLine: 'Thai Airways',
        time: '13:21',
        flight: 'AT 607',
        boardingGate: 135,
        checkInGate: 'D',
        remark: 'on time',
        emoji: '🇹🇭'
      },
      {
        name: 'Helsinki',
        country: 'Finland',
        airLine: 'Finnair',
        time: '13:36',
        flight: 'AF5461',
        boardingGate: 265,
        checkInGate: 'E',
        remark: 'delayed',
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
