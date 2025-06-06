<script setup lang="ts">
import { ref } from 'vue'
import { activateBoost } from '@/boostStore'

const score=ref(0)

const showLine = ref(false)
const showLines=ref(false)

const isActiveCount=ref(false)
const isCooldownCount=ref(false)

const isActivePower=ref(false)
const isCooldownPower=ref(false)

const bonusActiveCount=ref(false)
const bonusCooldownCount=ref(false)

function clickHandler() {
  if (isCooldownCount.value||isActiveCount.value) return;
  isActiveCount.value = false
  activateBoost()
  console.log('Boost power, main btn')
  score.value += showLine.value ? 10:1
  showLine.value = false
  void showLine.value
  showLine.value = true

  setTimeout(() => {
    isActiveCount.value = false
    showLine.value = false;


    isCooldownCount.value =true
    setTimeout(() => {
    isCooldownCount.value = false
  },10000)
  }, 5000)
}
function clickHaandler() {
  if(isCooldownPower.value||isActivePower.value) return;
  isActivePower.value = false
  console.log('Boost cout, main btn')
  showLines.value=false
  void showLines.value
  showLines.value = true

  setTimeout(() => {
    isActivePower.value = false
    showLines.value = false;

    isCooldownPower.value =true
    setTimeout(() => {
      isCooldownPower.value = false
    }, 10000)
  }, 5000);
}
function clickBonus(){
  if(bonusActiveCount.value||isActiveCount.value) return;
  bonusActiveCount.value = false
  score.value+=100
  localStorage.setItem('bonusScore', JSON.stringify(score.value))
  console.log('bonus score, activate', score.value)

  setTimeout(() => {
    bonusActiveCount.value = false;
    bonusCooldownCount.value =true;

    setTimeout(() => {
      bonusCooldownCount.value = false
    },1000)
  },1000)
}


</script>

<template>
  <div v-if="showLine" class="first-line"></div>
  <div v-if="showLines" class="top-lines"></div>
  <button
      :disabled="bonusActiveCount||bonusCooldownCount"
      class="bonus1"
      @click="clickBonus">BONUS</button>
  <div class="button-container">
    <div class="btn-with-line">
      <div class="status-text" v-if="isCooldownCount || isActiveCount">
        {{ isActiveCount ? 'Активно...' : 'Кулдаун...' }}
      </div>

      <button :disabled="isActiveCount || isCooldownCount" class="power" @click="clickHandler">
        <img src="@/assets/boost.png" alt="Boost Power" class="icon" />
      </button>

      <div v-if="showLine" class="line"></div>
    </div>
    <div class="btn-with-line2">
      <div class="status-text2" v-if="isCooldownPower||isActivePower">
          {{ isActivePower? 'Active...': 'Кулдаун...'}}
      </div>
      <button :disabled="isActivePower||isCooldownPower" class="power-of-num" @click="clickHaandler">
         <img src="@/assets/boostspeed.png" alt="Boost Count" class="icon"/>
      </button>
    </div>
  </div>
</template>


<style scoped>
.btn-with-line {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-with-line2 {
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
.status-text2 {
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
.bonus1 {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: gold;
  color: black;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
  transition: transform 0.3s, background-color 0.3s;
  z-index: 1001;
}

.bonus1:hover {
  background-color: orange;
  transform: translateY(-50%) scale(1.05); /* сохранить позицию + анимация */
}

</style>