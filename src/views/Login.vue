<script setup>
import {useRouter} from "vue-router";
import { ref } from "vue";

const email=ref('')
const password=ref('')
const
</script>

<template>
<div class="log-container">
  <h2>Login</h2>
  <form @submit.prevent="Login">
      <input v-model="email" type="email" placeholder="Email"/>
      <input v-model="password" type="password" placeholder="Password"/>
      <button type="submit">Submit</button>
  </form>
</div>
</template>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: #2a2a2a;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.auth-container h2 {
  text-align: center;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}
button {
  padding: 12px;
  background-color: #2196F3;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #1976D2;
}
</style>