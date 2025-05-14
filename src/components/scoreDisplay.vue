<script setup>
import { ref } from 'vue'
const score = ref(
    JSON.parse(localStorage.getItem('score')) || 0
)

function handleClick() {
  score.value++
  localStorage.setItem('score', JSON.stringify(score.value))
  console.log('Сохранили:', score.value)
}

</script>

<template>
  <div class="container">
  <div class="score-display">
    <p>Очки: {{ score }}</p>
  </div>
  <div class="circle">
    <button class="button" @click="handleClick">
      <img
          src="@/assets/Emblem_of_National_Aviation_University.png"
          class="hamster"
          alt="hamster"
          style="width: 450px; height: 300px"
          @click="score++"
          draggable="false"
      />
      <span style="visibility: hidden;">TAP TAP</span>
    </button>
  </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.circle {
  width: 250px;
  height: 250px;
  display: flex;
  background-color: darkseagreen;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.circle img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  pointer-events: none;
  max-width: 100%;
  max-height: 100%;
}
.button {
  width: 200px;
  height: 200px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.hamster {
  width: 200px;
  height: auto;
  cursor: pointer;
  transition: transform 0.1s ease;
  user-select: none;
}
.hamster:hover {
  transform: scale(1.1);
}
.button:hover {
  background-color: lightseagreen;
}
.score-display {
  font-size: 24px;
  font-weight: bold;
  color: lightgrey;
  margin-bottom: 10px;
  text-align: center;
}
</style>

