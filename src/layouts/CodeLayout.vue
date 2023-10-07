<template>
  <div class="CodeLayout">
    <header class="CodeLayout__header">
      <div class="CodeLayout__header__logo"></div>
      <div class="CodeLayout__header__text">
        Kinopub
      </div>
    </header>
    <main class="CodeLayout__main">
      <div class="CodeLayout__main__info">
        Откройте на компьютере <strong>kino.pub/device</strong><br/>
        и введите следующий код:
        <activation-code class="mt-10" @on-new-code="catchNewCode"></activation-code>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue';

import { useStore } from 'vuex';

import { authsApi } from '@/api/auth';
import ActivationCode from '@/components/ActivationCode.vue';

const store = useStore();

let interval = null;

onUnmounted(() => {
  if (interval !== null) {
    clearInterval(interval);
  }
})

function catchNewCode(code) {
  console.log(code);
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(async () => {
    try {
      const result = await authsApi().checkAuthState(code);
      console.log(result);
      const {
        access_token,
        refresh_token,
        expires_in
      } = result;
      if (!access_token || !refresh_token || !expires_in) {
        throw new Error('TODO ERROR!');
      }
      store.commit('setAccessToken', access_token);
      store.commit('setRefreshToken', refresh_token);
      store.commit('setExpireIn', expires_in);

    } catch(err) {
      console.log(err.response.data);
      switch (err.response.data.error) {
        case 'authorization_pending':
          console.log('continue waiting...');
          break;
        case 'bad_verification_code':
          console.log('Regenerate new code!') // TODO:
          break;
        default:
        console.error(err);
      }
    }
  }, 5000)
  console.log(interval);
}
</script>

<style lang="scss">
.CodeLayout {
  height: 100%;
  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 50px;
    &__logo {
      height: 50px;
      width: 50px;
      background-image: url('@/assets/logo.svg');
      background-size: cover;
    }
    &__text {
      font-weight: bold;
      color: white;
      margin-left: 10px;
      font-size: 25px;
    }
  }

  &__main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &__info {
      text-align: center;
      font-size: 35px;
      color: white;
      padding-bottom: 190px;
    }
  }
}
</style>@/store/store