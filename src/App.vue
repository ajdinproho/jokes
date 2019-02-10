<template>
  <AppHeader></AppHeader>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  created() {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        this.$store.dispatch('saveCategories', response.data);
      });
  },
};
</script>

<style lang="scss" scoped>

</style>
