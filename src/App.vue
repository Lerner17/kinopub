<template>
  <DefaultLayout v-if="store.getters.getAccessToken">
    <router-view />
  </DefaultLayout>
  <CodeLayout v-else></CodeLayout>
</template>

<script setup>
import { useStore } from 'vuex';

import CodeLayout from './layouts/CodeLayout.vue';
import DefaultLayout from './layouts/DefaultLayout';

const store = useStore();


</script>

<style>
#app {
  height: 100%;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
