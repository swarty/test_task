import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Bob Razowski',
      apiToken: '273b9080',
    },
    movies: {
      movieActiveFilter: '',
      displayedMovies: 3,
    },
  },
  mutations: {
    setFilter(state, filter) {
      state.movies.movieActiveFilter = filter;
    },
    setDisplayedMovies(state) {
      state.movies.displayedMovies += state.movies.displayedMovies;
    },
  },
  actions: {
    changeFilter({ commit }, filter) {
      commit('setFilter', filter);
    },
    showMore({ commit }) {
      commit('setDisplayedMovies');
    },
  },
});
