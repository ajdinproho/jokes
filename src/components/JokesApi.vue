<template>
  <div class="input-wrap">
     <h1> Chuck Norris API categories </h1>
      <div>
        <div v-for="category in categories" class="post"
        :key="category.id">
            <p>Category: {{ category }}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JokesApi',
  data() {
    return {
      categories: [],
    };
  },
  created() {
    const self = this;
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(function (res) {
        self.categories = res.data;
        console.log('Data: ', res.data);
      }).catch(function (error) {
        console.log('Error: ', error);
      });
  },
};
</script>

<style lang="scss" scoped>
  .post {
    background: firebrick;
    margin-bottom: 20px;
    color: white;
    padding: 10px 20px;
    width: 400px;
    text-align: left;
    margin-left: 520px;
  }
</style>
