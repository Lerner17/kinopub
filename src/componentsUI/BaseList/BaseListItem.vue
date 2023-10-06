<template>
  <li class="BaseListItem pl-5 pr-5 mt-9">
    <slot></slot>
  </li>
</template>

<style lang="scss">
.BaseListItem {
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $color-secondary;
  text-align: start;
  font-weight: bold;
  font-size: 18px;
  &__icon {
    padding-bottom: 4px;
    padding-right: 12px;
  }

  &--focused {
    color: $color-primary;
    border-right: 3px solid $color-primary;
    svg {
      fill: $color-primary;
    }
  }
}
</style>