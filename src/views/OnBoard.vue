<template>
  <div>
      <h2>OnBoard</h2>
    <div class="fade">
      <p>ようやく機内に着きました、動画でも見て旅を想像しましょう</p>
      <searchYoutube/>
      <button @click="$router.push('/')">Homeに戻る</button>
    </div>
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
