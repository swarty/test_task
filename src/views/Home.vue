<template>
  <div class="home">
    <img alt="Batman logo" src="../assets/logo.png" />
    <HelloWorld :msg="helloMessage"/>
    <LoadMoreButton/>
    <MovieFilter />
    <MovieList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LoadMoreButton from '@/components/LoadMoreButton.vue';
import MovieFilter from '@/components/MovieFilter.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LoadMoreButton,
    MovieFilter,
    MovieList,
  },
  computed: {
    helloMessage() {
      return `Hello ${this.$store.state.user.name}, which batman movie do you want to see?`;
    },
  },
};
</script>
