<template>
  <div class="movie-view">
    <h1>Title: {{ movie.Title }}</h1>
    <img :src="movie.Poster" :alt="movie.Title + ' poster'">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';

export default Vue.extend({
  name: 'MovieView',
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    MovieService.movieService
      .getSpecificMovie(this.$store.state.user.apiToken, this.movideId)
      .then((resp) => { this.movie = resp; });
  },
  computed: {
    movideId() {
      return this.$route.params.movieId;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
