<template>
<nav class="navigacija">
    <div class="navigacija-wraper">

     <!-- Dropdown Trigger -->
      <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Izaberi kategoriju</a>
      <p> Kategorija : </p>
      <a v-if="izabranaKategorija"
        @click="removeCategory()"
        class="waves-effect indigo darken-4 btn">{{categoryName}}
      </a>
      <a v-else="" class="waves-effect indigo darken-4 btn">KATEGORIJE</a>
      <a
       @click="dobaviVic()"
       class="waves-effect indigo darken-4 btn">
      </a>
     <!-- Dropdown Structure -->
      <ul id='dropdown1' class='dropdown-content'>
        <li v-for="(category,index) in categories" :key="index" @click="selectCategory(index)">
          <a href="#!">{{ category }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'header',
  data() {
    return {
      izabranaKategorija: false,
      categoryName: '',
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  methods: {
    selectCategory(index) {
      this.categoryName = this.$store.getters.categories[index];
      this.izabranaKategorija = true;
    },
    removeCategory() {
      this.categoryName = '';
      this.izabranaKategorija = false;
    },
    dobaviVic() {
      if (this.izabranaKategorija) {
        axios.get('https://api.chucknorris.io/jokes/random')
          .then((response) => {
            this.$store.dispatch('saveJoke', response.data);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-txt {
  height: 60px;
  background: sienna;
  color: white;
}
p {
  color: black;
}
</style>
