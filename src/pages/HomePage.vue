<template>
  <div class="HomePage">
    <h1 class="mb-5">Focused {{ store.getters.getAccessToken }}</h1>
    <movie-banner></movie-banner>
    <section>
      <h1 class="mt-12 mb-2">Новинки</h1>
      <div class="subtitle">Самое новое на кинопабе</div>
      <horizontal-scroll class="mt-5">
        <film-item 
          v-for="movie in movies"
          :key="movie"
          class="ml-3 mr-3"
          :title="movie.title"
          :poster="movie.posters.medium"
        ></film-item>
      </horizontal-scroll>
    </section>
  </div>
</template>

<script setup>
import MovieBanner from '@/components/MovieBanner.vue';
import HorizontalScroll from '@/components/HorizontalScroll.vue';
import FilmItem from '@/components/FilmItem';

import { useStore } from 'vuex';

import { movieApi } from '@/api/movie';
import { onMounted, ref } from 'vue';

const movies = ref([]);

onMounted(async () => {
  const result = await movieApi().getMovies();
  movies.value = result?.items ?? [];

});

const store = useStore();

</script>