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
        <activation-code class="mt-10"></activation-code>
      </div>
    </main>
  </div>
</template>

<script setup>
import ActivationCode from '@/components/ActivationCode.vue';
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
</style>