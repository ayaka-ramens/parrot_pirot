<template>
  <div id=departure>
    <h2>Departure</h2>
    <div class="fade">
      <p><img src="../assets/departure.jpg" class="main-image"></p>
      <p>搭乗する航空会社「{{ selectedCity.airLine }}」のチェックインゲートを選んでください</p>
      <table>
        <tr>
          <th></th>
          <th>TIME</th>
          <th>DESTINATION</th>
          <th>AIRLINE</th>
          <th>FLIGHT</th>
          <th>GATE</th>
          <th>REMARKS</th>
        </tr>
        <tr  v-for="city in cities" :key="city.name">
          <td><input type="radio" :value="city.checkInGate" v-model="selectGate"></td>
          <td>{{ city.time }}</td>
          <td>{{ city.name }}</td>
          <td>{{ city.airLine }}</td>
          <td>{{ city.flight }}</td>
          <td>{{ city.checkInGate }}</td>
          <td>{{ city.remark }}</td>
        </tr>
      </table>
      <button @click="goToCheckIn">go to gate {{ selectGate }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Departure',
  data () {
    return {
      selectGate: ''
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    },
    selectedCity () {
      return this.$store.state.selectedCity
    }
  },
  methods: {
    goToCheckIn () {
      if (this.selectGate === this.selectedCity.checkInGate) {
        this.$router.push('/check-in')
      } else {
        alert('正しいチェックインゲートを選択してください')
      }
    }
  }
}
</script>

<style scoped>
</style>
