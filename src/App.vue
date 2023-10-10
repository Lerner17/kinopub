<template>
  <div id="app">
    <component v-if="store.getters.getAccessToken"  :is="layout">
      <router-view />
    </component>
    <CodeLayout v-else></CodeLayout> 
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import CodeLayout from './layouts/CodeLayout.vue';

const store = useStore();

const route = useRoute();
const layout = computed(() => route.meta.layout || 'default-layout');

</script>

<style>
#app {
  height: 100%;
}
</style>
