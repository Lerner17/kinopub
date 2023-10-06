<template>
  <div>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout';
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
