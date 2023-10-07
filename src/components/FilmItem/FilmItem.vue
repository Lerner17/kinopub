<template>
  <router-link class="FilmItem" to="1">
    <div class="FilmItem__cover" :style="`background-image: url('${props.poster}');`"></div>
    <div class="FilmItem__title">
      {{ props.title }}
    </div>
    <div class="FilmItem__gener">
      Ужасы
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  poster: {
    type: String,
    required: true,
    default: ''
  }
})

</script>

<style lang="scss">

.FilmItem {
  border: 4px solid transparent;
  &__cover {
    width: 200px;
    height: 300px;
    border-radius: 10px;
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
    max-width: 200px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis;
  }
  &__gener {
    margin-top: 5px;
    color: #595959;
  }
}
</style>