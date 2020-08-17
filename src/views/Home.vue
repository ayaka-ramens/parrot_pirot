<template>
  <div class="home">
    <h1>ParrotPirot</h1>
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
  name: 'Home',
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

<style>
body {
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  margin: 10px 50px;
}

h1, h2 {
  font-family: "Courier"
}

ul {
  color: #ffffff;
  list-style-type: none;
  background: #333333;
  width: 560px;
  padding: 10px 20px ;
}

.fade {
  animation-name: fadeIn;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  90% {
  opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.main-image {
  width: 600px;
}

.illust {
  width: 200px;
}

.emoji {
  font-size: 15pt;
}
</style>
