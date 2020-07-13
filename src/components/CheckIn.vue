<template>
  <div>
    <h2>CheckIn</h2>
    <div class="fade">
      <p>チェックイン・荷物を預けます</p>
      <p><img src="../assets/baggages.png" class="illust"></p>
      <p>[ランダムな数字をアニメーション後に結果表示=>baggeageCheckをtrueにする]</p>
      <p v-if="baggeageCheck">荷物を預けました！</p>
      <button @click="$router.push('/immigration')">出国審査へ行く</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      baggeageCheck: true
    }
  }
}
</script>

<style scoped>
</style>
