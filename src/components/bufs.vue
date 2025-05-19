<script setup lang="ts">
function clickHandler() {
  console.log('Boost power')
}
function clickHaandler() {
  console.log('Boost cout')
}

</script>

<template>
  <div class="button-container">
    <button class="power" @click="clickHandler">
      <img src="@/assets/boost.png" alt="Boost Power" class="icon" />
    </button>
    <button class="power-of-num" @click="clickHaandler">
      <img src="@/assets/boostspeed.png" alt="Boost Count" class="icon"/>
    </button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  position: absolute;
  bottom: 20px;
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
</style>