<template>
  <div id="app">
   <AppHeader></AppHeader>
   <AppContent></AppContent>
  </div>
</template>

<script>
// import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent,
  },
  mounted() {
    // eslint-disable-next-line
    M.AutoInit();
  },
  created() {
    this.$store.dispatch('loadCategories');
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
