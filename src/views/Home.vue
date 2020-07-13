<template>
  <div class="home">
    <h1>ParrotPirot</h1>
    <Start/>
  </div>
</template>

<script>
import Start from '@/components/Start.vue'

export default {
  name: 'Home',
  components: {
    Start
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
</style>
