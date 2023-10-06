<template>
  <router-link class="FilmItem" to="1">
    <div class="FilmItem__cover"></div>
    <div class="FilmItem__title">
      Title
    </div>
    <div class="FilmItem__gener">
      Ужасы
    </div>
  </router-link>
</template>

<style lang="scss">

.FilmItem {
  border: 4px solid transparent;
  &__cover {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background-image: url('https://cdn.srvkp.com/poster/item/big/63.jpg');
    background-position: center;
    background-size: cover;
  }

  &:focus {
    border: 4px solid rgba(255, 255, 255, 0.26);
    border-radius: 15x;
  }

  &:focus .FilmItem__cover {
    background-size: 105%;
  }


  &__title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
  }
  &__gener {
    margin-top: 5px;
    color: #595959;
  }
}
</style>