<template>
    <v-container class="d-flex justify-center">
        <v-progress-circular size="100" color="primary" width="8" indeterminate v-if="false" />
        <activation-code v-else @on-new-code="onNewCode"></activation-code>
    </v-container>
</template>

<script setup lang="ts">
import ActivationCode from '@/components/ActivationCode.vue';

import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router'

import { useAuthApi } from '@/api/Auth.api';
import { useQuery } from '@tanstack/vue-query';
import type{ CheckCodeStateResponse } from '@/types/auth';

import { useAuthStore } from '@/stores/Auth.store';

const router = useRouter();
const store = useAuthStore();

const code: Ref<string> = ref('')

const  { refetch } = useQuery({
    queryKey: ['auth', 'getCode', code.value],
    enabled: false,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
    queryFn: () => useAuthApi().checkAuthState(code.value),
    onSuccess: (data: CheckCodeStateResponse) => {
      store.access_token = data.access_token;
      store.refresh_token = data.refresh_token;
      store.expires_in = data.expires_in;
      router.push({
        name: 'Home',
      })
    },
    onError: () => {
      refetch();
    },
  });

async function onNewCode(_code: string) {
  code.value = _code
  console.log('onNewCode', code.value);
  await refetch();
}
</script>

<style lang="scss">
.verification {
  &_text {
    text-align: center;
      font-size: 35px;
      color: white;
  }
  &_code {
    font-size: 55px;
    width: 100%;
    color: white;
    text-align: center;
    font-weight: 900;
    letter-spacing: 8px;
  }
}
</style>