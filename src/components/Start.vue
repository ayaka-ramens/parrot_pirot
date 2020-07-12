<template>
  <div id="start">
    <form @submit.prevent="citySelectSubmit">
      <p>行き先を選択してください</p>
      <div v-for="(city, id) in cities" :key="id">
        <label for="id"><input type="radio" name="id" v-model="selectCity" :value="city"></label>
        <span v-text="city.name + ' / ' +city.country"/>
      </div>
      <p class="emoji">{{ selectCity.emoji }}  ✈️  {{ selectCity.emoji }}  ✈️  {{ selectCity.emoji }}  ✈️  {{ selectCity.emoji }}</p>
      <button type="submit" class="form-submit">空港へ向かう</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectCity: ''
    }
  },
  computed: {
    cities: function () {
      return this.$store.state.cities
    }
  },
  methods: {
    citySelectSubmit: function () {
      this.$store.commit('setCity', this.selectCity)
      this.$router.push('/departure')
    }
  }
}
</script>

<style scoped>
.emoji {
  font-size: 15pt;
}
</style>
