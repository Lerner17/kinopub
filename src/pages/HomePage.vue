<template>
    <v-container class="d-flex justify-center">
        <v-progress-circular size="100" color="primary" width="8" indeterminate v-if="isLoading && data !== null" />
        <div class="verification d-flex flex-column align-start" v-else>
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
    </v-container>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount} from 'vue';


import { useAuthApi } from '@/api/Auth.api'
import { useQuery } from '@tanstack/vue-query'
// import { DeviceCodeResponse } from '@/api/dto/auth/auth.dto';


let timer: Ref<any> = ref(null);
const secondsTotal: Ref<number> = ref(0);
const secondsLeft: Ref<number> = ref(0);

const progress: Ref<number> = ref(100);

const { isLoading,  data } = useQuery({
  queryKey: ['auth', 'getCode'],
  refetchOnWindowFocus: false,
  queryFn: () => {
    console.log('1222');
    clearInterval(timer.value);
    timer.value = null;
    return useAuthApi().fetchAuthCode();
  },
  refetchInterval: 300000,
  onSuccess: (data) => {
    secondsTotal.value = data.expires_in
    timer.value = setInterval(() => {
      console.log('Iterval')
      if (secondsLeft.value != secondsTotal.value) {
        secondsLeft.value++;
        progress.value =  ((secondsTotal.value - secondsLeft.value) / secondsTotal.value) * 100;
      } else {
        console.log('stop');
        clearInterval(timer.value);
        timer.value = null;
      }
    }, 1000);
  },
})

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