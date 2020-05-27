<template>
  <ul v-cloak class="movie__list">
    <MovieListItem
      v-for="(movie, index) in movies"
      v-show="$store.state.movies.displayedMovies > index
              && ($store.state.movies.movieActiveFilter === movie.Type
              || $store.state.movies.movieActiveFilter === '')"
      :key="movie.imdbID"
      :movie="movie"
      />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import MovieListItem from './MovieListItem.vue';
import { Movie } from '../services/types';

export default Vue.extend({
  name: 'MovieList',
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  async created() {
    await this.loadMovies();
  },
  methods: {
    async loadMovies() {
      await MovieService.movieService.getMovieList(this.$store.state.user.apiToken)
        .then((resp) => { this.movies = [...this.movies, ...resp.result]; });
    },
  },
  components: {
    MovieListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
