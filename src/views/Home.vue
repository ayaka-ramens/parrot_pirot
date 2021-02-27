<template>
  <div class="fade-in">
    <h1>ParrotPirot</h1>
    <form @submit.prevent="citySelectSubmit">
      <p>行き先を選択してください</p>
      <ul v-for="(city, id) in cities" :key="id" class="choice-city">
        <li>
          <label for="id"><input type="radio" name="id" v-model="selectCity" :value="city"></label>
          <span v-text="city.name + ' / ' +city.country"/>
        </li>
      </ul>

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
  color: #494949;
}

h1, h2 {
  font-family: "Courier";
  padding: 13px;
  background: #e6f7ff;
  border-left: solid 5px #00aaff;
}

ul {
  list-style-type: none;
  padding: 1px 10px ;
}

button {
  padding: 3px 20px;
  border: none;
  background-color: #00aaff;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1452cc;
}

input[type="text"] {
  width: 30%;
  height: 32px;
  padding: 5px, 10px;
  font-size: 17px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 1.5px solid #ddd;
  box-sizing: border-box;
}

.fade-in {
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
