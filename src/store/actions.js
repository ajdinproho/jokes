import axios from 'axios';
import types from './mutation-types';
import state from './state';

export default {
  loadCategories({ commit }) {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((Response) => {
        commit(types.SPREMI_KATEGORIJE, Response.data);
      });
  },
  saveJoke({ commit }) {
    const cat = state.selectedCategory;
    const categoryParametar = `?category=${cat}`;
    axios.get(`https://api.chucknorris.io/jokes/random${cat ? categoryParametar : ''}`)
      .then((response) => {
        commit(types.SPREMI_VIC, response.data);
      });
  },
  removeJoke({ commit }, jokeID) {
    commit(types.IZBRISI_VIC, jokeID);
  },
  selectCategory({ commit }, categoryName) {
    commit(types.IZABERI_KATEGORIJU, categoryName);
  },
  removeJokes({ commit }) {
    commit(types.IZBRISI_SVE_VICEVE);
  },
};
