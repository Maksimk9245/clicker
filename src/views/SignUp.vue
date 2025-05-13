<script setup>

</script>

<template>
  <div class="log-container">
    <h2>Sign up</h2>
    <form @submit.prevent="Sign up">
      <input v-model="email" type="email" placeholder="Email"/>
      <input v-model="password" type="password" placeholder="Password"/>
      <input v-model="password" type="password" placeholder="Password"/>
      <button type="Register">Register</button>
    </form>
  </div>
</template>

<style scoped>

</style>