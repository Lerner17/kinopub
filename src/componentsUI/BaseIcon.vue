<template>
  <div class="BaseIcon">
    <img class="BaseIcon__icon" v-svg-inline :src="icon" />
  </div>
</template>

<script setup>
import icon from '@/assets/icons/new-box.svg';

</script>

<style lang="scss">
.BaseIcon {
  width: 24px;
  height: 24px;
  &__icon {
    fill: $color-secondary;
  }
}
</style>