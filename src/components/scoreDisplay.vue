<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Переменные
const score = ref<number>(JSON.parse(localStorage.getItem('score') || '0'));
const boostMultiplier = ref<number>(1);
const showPlusList = ref<{ id: number; x: number; y: number }[]>([]);
let intervalId: ReturnType<typeof setInterval> | undefined = undefined;
//TODO добавить += 1 к кнопке буст
// Обработка клика
function handleClick(event: MouseEvent) {
  score.value += boostMultiplier.value;
  localStorage.setItem('score', JSON.stringify(score.value));
  console.log('Сохранили:', score.value);

  const { clientX, clientY } = event;
  const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();

  showPlusList.value.push({
    id: Date.now(),
    x: clientX - containerRect.left,
    y: clientY - containerRect.top,
  });

  setTimeout(() => {
    showPlusList.value.shift();
  }, 1000);
}

// Автоматическое увеличение очков
function increaseScoreAutomatically() {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    score.value += boostMultiplier.value=1;
    localStorage.setItem('score', JSON.stringify(score.value));
    console.log('Автоматически увеличено:', score.value);
  }, 8000);
}

onMounted(() => {
  increaseScoreAutomatically();
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="container">
    <div class="score-display">
      <p>{{ score }}</p>
    </div>
    <div class="circle">
      <button class="button" @click="handleClick">
        <img
            src="@/assets/Emblem_of_National_Aviation_University.png"
            class="hamster"
            alt="hamster"
            draggable="false"
        />
        <span style="visibility: hidden;"></span>
      </button>
      <div
          v-for="item in showPlusList"
          :key="item.id"
          class="plus-one"
          :style="{ top: item.y + 'px', left: item.x + 'px' }">+1
      </div>
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
  position: relative;
}

.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  height: 220px;
  cursor: pointer;
  display: flex;
  overflow: visible;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
}

.hamster {
  width: 200px;
  height: 200px;
  cursor: pointer;
  object-fit: cover;
  pointer-events: none;
  transition: transform 0.3s ease;
}


.hamster:hover {
  transform: scale(2);
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
  user-select: none;
}
.plus-one {
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  opacity: 1;
  animation: moveUp 0.8s ease-out forwards, glow 0.3s ease;
  pointer-events: none;
  user-select: none;
}

@keyframes moveUp {
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -60px);
    opacity: 0;
  }
}

@keyframes glow {
  0% {
    text-shadow: 0 0 15px #00ff88, 0 0 25px #00ff88;
  }
  100% {
    text-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88;
  }
}
</style>
