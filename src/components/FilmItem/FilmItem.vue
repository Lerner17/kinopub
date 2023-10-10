<template>
  <router-link class="FilmItem" :to="`movie/${props.id}`">
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
  id: {
    type: Number,
    required: true,
    default: 0
  },
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
  position: relative;
  &__cover {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
  }

  &:focus {
    outline: none; /* Убираем стандартное браузерное обводку при фокусировке */
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