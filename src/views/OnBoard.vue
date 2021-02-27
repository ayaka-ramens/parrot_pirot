<template>
  <div class="fade-in">
    <h1>OnBoard</h1>
    <p>ようやく機内に着きました、動画でも見て旅を想像しましょう</p>
    <searchYoutube/>
    <button @click="$router.push('/')">Homeに戻る</button>
  </div>
</template>

<script>
import SearchYoutube from '@/components/SearchYoutube.vue'

export default {
  name: 'OnBoard',
  components: {
    SearchYoutube
  }
}
</script>

<style scoped>
</style>
