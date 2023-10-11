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
import { ref, Ref, watch } from 'vue';


import { useAuthApi } from '@/api/Auth.api'
import { useQuery } from '@tanstack/vue-query'


let timer: any = null;
const secondsTotal: Ref<number> = ref(0);
const secondsLeft: Ref<number> = ref(0);

// const data: Ref<DeviceCodeResponse | null> = ref(null)
const progress: Ref<number> = ref(100);

const { isLoading,  data, refetch } = useQuery({
  queryKey: ['auth', 'getCode'],
  queryFn: () => useAuthApi().fetchAuthCode(),
})

watch(data, (newData) => {
      console.log(newData);
      if (newData) {
        secondsTotal.value = newData.expires_in;
        secondsLeft.value = 0;
        startCountDown();
      }
  });

async function startCountDown(): Promise<void> {
  timer = setInterval(async () => {
    if (secondsLeft.value != secondsTotal.value) {
      secondsLeft.value++;
      progress.value =  ((secondsTotal.value - secondsLeft.value) / secondsTotal.value) * 100;
    } else {
      clearInterval(timer);
      timer = null;
      await refetch();
    }
  }, 1000);
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