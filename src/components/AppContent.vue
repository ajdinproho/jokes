<template>
 <div class="back">
    <div class="container" >
    <div class="row">
      <div v-for="(joke, index) in jokes" :key="index" class="col s12 m3 l3">
        <Joke :Joke="joke"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import { filter } from 'lodash';
import Joke from './Joke.vue';

export default {
  name: 'AppContent',
  components: {
    Joke,
  },
  computed: {
    jokes() {
      if (this.$store.getters.selectedCategory === null) {
        return this.$store.getters.jokes;
      }
      return _.filter(this.$store.getters.jokes, joke => joke.category === this.$store.getters.selectedCategory);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width : 480px) {
  .row{
    margin-top: 80px;
  }
}
.container{
  padding-top: 90px;
}
</style>
