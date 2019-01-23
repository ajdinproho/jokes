<template>
  <div id="app">

  </div>
</template>

<script>
import JokesApi from './components/JokesApi.vue';

export default {
  name: 'app',
  components: {
    JokesApi,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
