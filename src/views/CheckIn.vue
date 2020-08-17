<template>
  <div>
    <h2>CheckIn</h2>
    <div class="fade">
      <p>チェックイン・荷物を預けます</p>
      <button  v-if="!fade" @click="weighBaggege">荷物を預ける</button>
      <transition name="fade">
        <div v-if="fade">
          <p>
            <img src="../assets/suitcase.png" class="illust">
            <img src="../assets/backpack.png" class="illust">
          </p>
          <div class="weighing-scale">
            <div class="weigh">{{ weigh1 }}kg</div>
            <div class="weigh">{{ weigh2 }}kg</div>
          </div>
        </div>
      </transition>
      <br>
      <template v-if="baggeageCheck">
        <p>荷物を預けました！</p>
        <button @click="goToImmigration">出国審査へ行く</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baggeageCheck: false,
      fade: false,
      weigh1: 0,
      weigh2: 0
    }
  },
  methods: {
    weighBaggege () {
      this.fade = true
      const from1 = this.weigh1
      const from2 = this.weigh2
      const to1 = 23
      const to2 = 10

      const DURATION = 2000
      const startTime = Date.now()

      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        const progress = elapsedTime / DURATION

        if (progress < 1) {
          this.weigh1 = Math.floor(from1 + progress * (to1 - from1))
          this.weigh2 = Math.floor(from2 + progress * (to2 - from2))
        } else {
          this.weigh1 = to1
          this.weigh2 = to2
          clearInterval(timer)
          this.baggeageCheck = true
        }
      }, 16)
    },
    goToImmigration () {
      this.$router.push('/immigration')
    }
  }
}
</script>
<style scoped>
.weighing-scale {
  font-size: 30px;
}
.weigh {
  display: inline-block;
  margin: 0 70px;
}
.fade-enter {
  opacity: 0;
  transform: scaleY(0);
}
.fade-enter-to {
  transition: all .7s ease;
  transform: scaleY(1);
}
</style>
