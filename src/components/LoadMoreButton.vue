<template>
  <button @click="showMorePages">Load more pages</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    showMorePages() {
      this.$store.dispatch('showMore');
    },
  },
});
</script>
