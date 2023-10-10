<template>
  <div class="MoviePage">
    <div class=MoviePage_banner :style="`background-image: url('${movie?.posters?.wide ?? ''}')`">
      <div class="MoviePage__mask">
          <div class="MoviePage__info">
            <div class="MoviePage__title">
              <h1 class="mb-4">{{ movie.title }}</h1>
              <movie-info></movie-info>
            </div>
            <div class="MoviePage__plot">
              {{ movie.plot }}
            </div>
            <div class="MoviePage__actions">
              <base-button>Смотреть</base-button>
              <base-button class="ml-12">Трейлер</base-button>
            </div>
          </div>
        {{ movie }}
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

import { movieApi } from '@/api/movie';

import MovieInfo from '@/components/Movie/MovieInfo.vue';
import BaseButton from '@/componentsUI/BaseButton.vue';

const route = useRoute();
const movie = ref({})

onMounted(async () => {
  const result = await movieApi().getMoviesByID(route.params.id);
  movie.value = result.item;
});

</script>

<style lang="scss">
.MoviePage {
  overflow-y: scroll;
  &__banner {
    color: white;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__mask {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.491);
    backdrop-filter: blur(5px);
    position: relative;
  }

  &__info {
    width: 60%;
    height: 100%;
    
    padding: 100px;
    // background-color: rgba(0, 0, 0, 0.171);
    // background: radial-gradient(circle at center, rgba(0, 0, 0, 1), transparent);
  }
  
  &__title {
    border-radius: 10px;
    background-color: $color-primary;
    font-family: Montserrat;
    color: white;
    padding: 15px;
    h1 {
      font-size: 48px;
    }
  }

  &__actions {
    position: absolute;
    bottom: 100px;
  }

  &__plot {
    margin-top: 10px;
    background-color: black;
    padding: 15px;
    border-radius: 12px;
    color: white;
    font-size: 24px;
  }
}
</style>