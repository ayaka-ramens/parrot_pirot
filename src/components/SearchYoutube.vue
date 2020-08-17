<template>
  <div class="searchYoutube">
    <input v-model="keyword" placeholder="検索キーワードを入力">
    <button @click="searchMovies">検索</button>

    <table v-show="results">
      <tr>
        <th>movie</th>
        <th>description</th>
      </tr>
      <tr v-for="movie in results" :key="movie.id.videoId">
        <td>
          <a :href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
            <img width="320" height="180" :src="movie.snippet.thumbnails.medium.url">
          </a>
        </td>
        <td>
          <b>{{ movie.snippet.title }}</b>
          <span>{{ movie.snippet.description }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchYoutube',
  data () {
    return {
      results: null,
      keyword: this.selectedCity,
      params: {
        q: '',
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: ''
      }
    }
  },
  mounted () {
    this.params.key = process.env.VUE_APP_YOUTUBE_API_KEY
    this.searchSelectCityMovie()
  },
  computed: {
    selectedCity () {
      return this.$store.state.selectedCity.country
    }
  },
  methods: {
    searchSelectCityMovie () {
      this.keyword = this.selectedCity + ' travel'
      this.searchMovies()
    },
    searchMovies () {
      this.params.q = this.keyword
      const self = this
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: this.params
        })
        .then(function (res) {
          self.results = res.data.items
        })
    }
  }
}
</script>

<style scoped>

</style>
