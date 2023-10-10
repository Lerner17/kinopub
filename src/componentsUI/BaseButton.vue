<template>
  <button class="BaseButton">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.BaseButton {
  padding: 10px 20px;
  background-color: $color-primary;
  color: white;
  width: auto;
  border: none;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
}
</style>