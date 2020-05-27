<template>
  <ul class="filter__list">
    <button
      v-for='(filter, index) in filters'
      :key='index' @click='filtered(filter)'
      v-html='filter'></button>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        'movie',
        'series',
      ],
    };
  },
  methods: {
    filtered(value = '') {
      this.$store.dispatch('changeFilter', value);
    },
  },
};
</script>
