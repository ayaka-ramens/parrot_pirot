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
}

h1, h2 {
  font-family: "Courier"
}
</style>
