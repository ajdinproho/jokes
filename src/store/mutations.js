import { findIndex } from 'lodash';
import types from './mutation-types';

export default {
  [types.SPREMI_KATEGORIJE](state, categories) {
    // eslint-disable-next-line
    state.categories = categories;
  },
  [types.SPREMI_VIC](state, joke) {
    state.jokes.push(joke);
  },
  [types.IZBRISI_VIC](state, jokeID) {
    const index = findIndex(state.jokes, { id: jokeID });
    state.jokes.splice(index, 1);
  },
  [types.IZABERI_KATEGORIJU](state, categoryName) {
    // eslint-disable-next-line
    state.selectedCategory = categoryName;
  },
  [types.IZBRISI_SVE_VICEVE](state) {
    // eslint-disable-next-line
    state.jokes.length = 0;
    // eslint-disable-next-line
    state.jokes = [];
  },
};
