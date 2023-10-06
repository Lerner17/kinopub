<template>
  <router-link :to="props.to" class="BaseListItem pl-5 pr-5 mt-9 pt-2 pb-2" active-class="BaseListItem--active">
    <slot></slot>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  to: {
    type: String,
    required: true,
    default: '/unImplenented'
  },
})

</script>

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
  &:focus {
    background-color: rgba(133, 133, 133, 0.2);
  }
  &--active {
    color: $color-primary;;
    border-right: 3px solid $color-primary;
    svg {
      fill: $color-primary;
    }
  }
  &__icon {
    padding-bottom: 4px;
    padding-right: 12px;
  }
}
</style>