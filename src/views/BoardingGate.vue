<template>
  <div>
    <h2>BoardingGate</h2>
    <p>日本食に別れを告げましょう</p>
    <hooper class="hooper-slide" :settings="hooperSettings">
      <slide><img src="../assets/food1.jpeg" class="food-image"></slide>
      <slide><img src="../assets/food2.jpg" class="food-image"></slide>
      <slide><img src="../assets/food3.jpg" class="food-image"></slide>
      <slide><img src="../assets/food4.jpg" class="food-image"></slide>
      <slide><img src="../assets/food5.jpg" class="food-image"></slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <br>
    <button @click="$router.push('/on-board')">機内へ行く</button>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'BoardingGate',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data () {
    return {
      hooperSettings: {
        autoPlay: true
      }
    }
  }
}
</script>

<style scoped>
.food-image {
  width: 700px;
}
.hooper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 700px;
}
</style>
