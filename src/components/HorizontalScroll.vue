<template>
  <div class="HorizontalScroll">
    <div class="HorizontalScroll__content">
      <slot />
    </div>
  </div>
</template>


<style lang="scss">
.HorizontalScroll {
  height: 500px;
  width: 100%;
  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-x: scroll;
    margin: 20px 0;
  }
}
</style>