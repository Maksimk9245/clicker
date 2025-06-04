<script setup lang="ts">
import { ref } from 'vue'
import { activateBoost } from '@/boostStore'

const score=ref(0)

const showLine = ref(false)
const showLines=ref(false)

const isActive = ref(false)
const isCooldown = ref(false)


function clickHandler() {
  if (isCooldown.value||isActive.value) return;
  isActive.value = false
  activateBoost()
  console.log('Boost power, main btn')
  score.value += showLine.value ? 10:1
  showLine.value = false
  void showLine.value
  showLine.value = true

  setTimeout(() => {
    isActive.value = false
    showLine.value = false;


    isCooldown.value =true
    setTimeout(() => {
    isCooldown.value = false
  },10000)
  }, 5000)
}
function clickHaandler() {
  console.log('Boost cout, main btn')
  showLines.value=false
  void showLines.value
  showLines.value = true
  setTimeout(() => {
    showLines.value = false;
  }, 5000);
}



</script>

<template>
  <div v-if="showLine" class="first-line"></div>
  <div v-if="showLines" class="top-lines"></div>
  <div class="button-container">
    <div class="btn-with-line">
      <div class="status-text" v-if="isCooldown || isActive">
        {{ isActive ? 'Активно...' : 'Кулдаун...' }}
      </div>

      <button :disabled="isActive || isCooldown" class="power" @click="clickHandler">
        <img src="@/assets/boost.png" alt="Boost Power" class="icon" />
      </button>

      <div v-if="showLine" class="line"></div>
    </div>

    <button class="power-of-num" @click="clickHaandler">
      <img src="@/assets/boostspeed.png" alt="Boost Count" class="icon"/>
    </button>
  </div>
</template>


<style scoped>
.btn-with-line {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-text {
  font-size: 12px;
  color: #fff;
  margin-bottom: 4px;
  height: 16px;
}
.first-line {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: red;
  z-index: 9999;


  width: 100%;
  animation: shrinkWidth 5s linear forwards;
}

@keyframes shrinkWidth {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

.top-lines {
  position: fixed;
  top: 6px;
  left: 0;
  height: 5px;
  background-color: blue;
  z-index: 9998;
  width: 100%;
  animation: shrinkWidth 5s linear forwards;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 8px rgba(0, 0, 255, 0.4);

}

.button-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  align-items: flex-end;
  z-index: 1000;
}
.btn-with-line {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.power, .power-of-num {
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.power:hover, .power-of-num:hover {
  background-color: rgba(76, 175, 80, 0.1);
}

.icon {
  width: 40px;
  height: 40px;
}

.power:hover .icon,
.power-of-num:hover .icon {
  transform: scale(1.2);
}

.line {
  width: 60px;
  height: 4px;
  background-color: red;
  margin-top: 6px;
  border-radius: 2px;
}

</style>