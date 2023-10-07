<template>
  <DefaultLayout v-if="authStore.access_token">
    <router-view />
  </DefaultLayout>
  <CodeLayout v-else></CodeLayout>
</template>

<script setup>
import CodeLayout from './layouts/CodeLayout.vue';
import DefaultLayout from './layouts/DefaultLayout';

import { useAuthStore } from '@/store/Auth.store';

const authStore = useAuthStore();


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
