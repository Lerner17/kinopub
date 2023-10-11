<template>
  <v-app>
    <v-app-bar class="pl-12 pt-4" elevation="0" color="background">
      <AppLoogo />
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppLoogo from '@/components/AppLogo.vue';
</script>
