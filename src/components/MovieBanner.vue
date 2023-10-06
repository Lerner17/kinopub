<template>
  <div class="MovieBanner">
    <div class="MovieBanner__mask"></div>
  </div>
</template>

<style lang="scss">
.MovieBanner {
  width: 100%;
  height: 450px;
  background-image: url('https://assets1.ignimgs.com/thumbs/userUploaded/2022/7/5/stranger-things-season-4-vol-2-1655823989966-1657000794223-1657020514337.jpeg');
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  &__mask {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 0.3;
    background: linear-gradient(#391c1c, #9198e5);
  }
}
</style>
