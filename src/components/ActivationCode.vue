<template>
  <div class="verification d-flex flex-column align-start">
    <div class="verification_text">
      Откройте на компьютере <strong>{{ data?.verification_uri }}</strong><br/>
      и введите следующий код:
    </div>
    <div class="verification_code">
      {{ isLoading ? 'Loading...' : data?.user_code }}
    </div>
    <v-progress-linear
      v-model="progress"
      class="mt-5"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  Ref,
  onBeforeMount,
  defineEmits
} from 'vue';

import { useAuthApi } from '@/api/Auth.api';
import { useQuery } from '@tanstack/vue-query';

const emit = defineEmits(['onNewCode'])

const timer: Ref<any> = ref(null);
const secondsTotal: Ref<number> = ref(0);
const secondsLeft: Ref<number> = ref(0);
const progress: Ref<number> = ref(100);

const { isLoading, data, refetch } = useQuery({
  queryKey: ['auth', 'getCode'],
  refetchOnWindowFocus: false,
  queryFn: () => {
    clearInterval(timer.value);
    timer.value = null;
    return useAuthApi().fetchAuthCode();
  },

  // refetchInterval: 1000,
  onSuccess: (_data) => {
    secondsTotal.value = _data.expires_in;
    secondsLeft.value = 0;
    emit('onNewCode', _data.code);
      clearInterval(timer.value);
      timer.value = null;
    timer.value = setInterval(() => {
      console.log('Iterval')
      if (secondsLeft.value != secondsTotal.value) {
        secondsLeft.value += 1;
        progress.value =  ((secondsTotal.value - secondsLeft.value) / secondsTotal.value) * 100;
      } else {
        console.log('stop');
        clearInterval(timer.value);
        timer.value = null;
        refetch();
      }
    }, 1000);
  },
});

onBeforeMount(() => {
    clearInterval(timer.value);
    timer.value = null;
});
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