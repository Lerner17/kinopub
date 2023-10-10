<template>
  <div class="BaseLoader"></div>
</template>

<style lang="scss">
.BaseLoader {
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(82, 0, 255, 0) 0deg,
    $color-primary 360deg
  );
  animation: spin 2s infinite linear;
  &::before {
    content: '';
    border-radius: 50%;
    width: 80%;
    height: 80%;
    background-color: #000;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
