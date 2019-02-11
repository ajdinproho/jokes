<template>
  <nav class="navigacija">
    <div class="navigacija-wraper">
      <div class="red">
        <div class="col s12 m2 l2 first">
         <a id="dropdown" class='dropdown-trigger btn' data-target='dropdown1'> CATEGORY
            <i class="large material-icons">arrow_drop_down</i>
         </a>
         <ul id='dropdown1' class='dropdown-content'>
           <li v-for="(category,index) in categories"
              :key="index"
              @click="selectCategory(category)">
             <a class="dropDownTxt" href="#!">{{ category }}</a>
           </li>
         </ul>
        </div>
        <div class="col s3 m2 l2">
          <a  v-if="selectedCategory"
             @click="removeCategory()"
             class="waves-effect indigo darken-4 btn"
             id="selectedCat">{{ selectedCategory }}>
            <i class="large material-icons">clear</i>
          </a>
          <a v-else class="waves-effect indigo darken-4 btn" id="sselectedCat">KATEGORIJE</a>
        </div>
        <div class="col s3 m2 l2 space"></div>
        <div class="col s3 m2 l2">
            <a @click="dobaviVic()"
              class="waves-effect indigo darken-4 btn"
              id="crackJoke"> FETCH
              <i class="large material-icons">add</i>
            </a>
        </div>
        <div class="col s3 m2 l2">
            <a @click="removeJokes()"
              class="waves-effect indigo darken-4 btn"
              id="crackJoke"> CLEAR ALL
              <i class="large material-icons">delete</i>
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
    dobaviVic() {
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
@media only screen and (max-width : 480px) {
  nav {
    position: absolute;
    height: 160px;
  }
   a{
    align-self: center;
      font-size: 6px;
      width: 70px;
      height: 25px;
  }
  .space{
    display: none;
  }
}
.bar{
  position: fixed;
  z-index: 2;
}
.btn{
  color: #9e9e9e;
}
.first{
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
.dropDownText:hover{
  color: #212121 !important;
}
i{
  float: right;
  width: 10px;
  height: 36px;
  align-self: center;
  margin-top: -14px;
}
</style>
