<script setup>
import { ref,} from 'vue'

   const score =ref(0)
    function handleClick () {
      score.value++
      console.log(`score is: ${score.value}`)
    }



</script>

<template>
  <div class="score-display">
      <p>Очки: {{ score }} </p>
  </div>

  <div class="circle">
        <button class="button" @click="handleClick">TAP TAP</button>
  </div>


</template>

<style scoped>

.circle {
  width: 300px;
  height: 300px;
  display: flex;
  background-color: darkseagreen ;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.button {
  width: 300px;
  height: 300px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.button:hover {
  background-color: lightseagreen ;
}
.score-display {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
  color: lightgrey;
  margin: 20px;
}
</style>