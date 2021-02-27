<template>
  <div class="fade-in">
    <h1>Departure</h1>
    <p><img src="../assets/departure.jpg" class="main-image"></p>
    <p>搭乗する航空会社「{{ selectedCity.airLine }}」のチェックインゲートを選んでください</p>
    <table class="checkin-board">
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
    <p><button @click="goToCheckIn">{{ selectGate }}ゲートにチェックインしに行く</button></p>
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
.checkin-board {
  border-collapse: collapse;
  border-spacing: 0;
}
.checkin-board tr {
  border-bottom: solid 1px #eee;
}
.checkin-board th, .checkin-board td {
  text-align: left;
  padding: 12px 10px;
}
</style>
