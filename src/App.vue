<template>
  <div>
    {{ testStore.test }}
  </div>
</template>

<script setup>
import { useTestStore } from './stores/Test.store'

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const testStore = useTestStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
