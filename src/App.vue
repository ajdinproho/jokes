<template>
  <div id="app">
    <app-header></app-header>
    <JokesApi></JokesApi>
   <!-- <content></content> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import appheader from './components/header.vue';
import JokesApi from './components/JokesApi.vue';
// import content from './components/content.vue';
import appfooter from './components/footer.vue';

export default {
  name: 'app',
  components: {
    'app-header': appheader,
    JokesApi,
    // content,
    'app-footer': appfooter,
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
