<template>
  <nav class="green darken-3 bar">
    <div class="nav-wrapper">
      <div class="row">
        <div class="col s3 m3">
          <a id="dropdown" class='dropdown-trigger btn grey darken-4' data-target='dropdown1'>
             CATEGORY
         </a>
         <ul id='dropdown1' class='dropdown-content'>
           <li v-for="(category,index) in categories"
              :key="index"
              @click="selectCategory(category)">
             <a class="dropDownTxt" href="#!">{{ category }}</a>
           </li>
         </ul>
        </div>
        <div class="col s3 m3">
          <a  v-if="selectedCategory"
             @click="removeCategory()"
             class="waves-effect black darken-4 btn"
             id="selectedCat">{{ selectedCategory }}
          </a>
          <a v-else class="waves-effect grey darken-4 btn" id="selectedCat">CATEGORIES</a>
        </div>
        <div class="col s3 m3">
            <a @click="fetchJoke()"
              class="waves-effect grey darken-4 btn"
              id="crackJoke"> FETCH
            </a>
        </div>
        <div>
            <a @click="removeJokes()"
              class="waves-effect grey darken-4 btn"
              id="crackJoke"> CLEAR ALL
            </a>
         </div>
        </div>
      </div>
  </nav>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      categorySelected: false,
      categoryName: '',
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    selectedCategory() {
      return this.$store.getters.selectedCategory;
    },
  },
  methods: {
    selectCategory(category) {
      this.$store.dispatch('selectCategory', category);
    },
    fetchJoke() {
      this.$store.dispatch('saveJoke');
    },
    removeCategory() {
      this.$store.dispatch('selectCategory', null);
    },
    removeJokes() {
      this.$store.dispatch('removeJokes');
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width : 500px) {
  nav {
    position: absolute;
    height: 100px;
  }
  a {
    align-self: center;
    font-size: 6px;
    width: 70px;
    height: 25px;
  }
  .btn {
    font-size: 7px;
  }
}
.bar {
  position: fixed;
  z-index: 2;
}
.first {
  height: 64px;
}
ul {
  color: #212121;
  list-style-type: none;
  padding: 0;
  top: -45px;
  height: 500px;
  overflow: scroll !important;
  overflow-x: hidden !important;
}
li {
  display: inline-block;
  height: 5px;
  background-color: #212121;
}
.dropDownText {
  color: #bdbdbd !important;
}
.dropDownText:hover {
  color: #212121 !important;
}
i {
  float: right;
  width: 10px;
  height: 36px;
  align-self: center;
  margin-top: -14px;
}
</style>
