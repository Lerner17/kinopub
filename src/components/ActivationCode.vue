<template>
  <div class="ActivationCode">{{ code }}</div>
</template>

<script setup>

import {
  ref,
  onMounted,
  onUnmounted,
  defineEmits,
} from 'vue';

import { authsApi } from '@/api/auth';

const code = ref('');

let timerId = null;

const emit = defineEmits(['onNewCode'])


function emitCode(code) {
  emit('onNewCode', code);
}

async function fetchAndSetAuthCode() {
  try {
    const response = await authsApi().fetchAuthCode();
    code.value = response.user_code;
    console.log(1);
    emitCode(response.code);
  } catch (error) {
    console.error('Error fetching auth code:', error);
  }
}

async function startAuthCodeRefreshTimer() {
  console.log('Timer start...');
  try {
    const response = await authsApi().fetchAuthCode();
    code.value = response.user_code;
    emitCode(response.code);
    const timerInterval = parseInt(response.expires_in) * 1000;
    timerId = setInterval(fetchAndSetAuthCode, timerInterval);
  } catch (error) {
    console.error('Error starting timer:', error);
  }
}

onMounted(startAuthCodeRefreshTimer);

onUnmounted(() => {
  if (timerId !== null)
    clearInterval(timerId)
});

</script>

<style>
.ActivationCode {
  width: 100%;
  color: white;
  text-align: center;
  font-weight: 900;
  letter-spacing: 8px;
}
</style>