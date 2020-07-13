<template>
  <div>
    <h2>BoardingGate</h2>
    <div class="fade">
      <p>日本食に別れを告げます</p>
      <img src="../assets/food1.jpeg" class="food-image">
      <img src="../assets/food2.jpg" class="food-image">
      <img src="../assets/food3.jpg" class="food-image">
      <img src="../assets/food4.jpeg" class="food-image">
      <button @click="$router.push('/on-board')">機内へ行く</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.food-image {
  display: inline-block; /* ここがポイント */
  height: 300px;
}
</style>
